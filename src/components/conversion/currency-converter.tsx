'use client';

import { useState, useEffect } from 'react';
import { DollarSign, RotateCw, Calculator, Info } from 'lucide-react';

interface CurrencyConverterProps {
  price?: number;
  locale?: 'en' | 'ar';
  variant?: 'widget' | 'inline' | 'minimal';
  defaultCurrency?: 'AED' | 'SAR' | 'QAR' | 'KWD' | 'BHD' | 'OMR' | 'USD' | 'INR';
  showRates?: boolean;
}

// Exchange rates (approximate, should be fetched from API in production)
const EXCHANGE_RATES = {
  USD: 1,
  INR: 83.12,
  AED: 3.6725,
  SAR: 3.75,
  QAR: 3.64,
  KWD: 0.3075,
  BHD: 0.376,
  OMR: 0.3845,
};

const CURRENCY_INFO = {
  USD: { name: 'US Dollar', nameAr: 'دولار أمريكي', symbol: '$', flag: '🇺🇸' },
  INR: { name: 'Indian Rupee', nameAr: 'روبية هندية', symbol: '₹', flag: '🇮🇳' },
  AED: { name: 'UAE Dirham', nameAr: 'درهم إماراتي', symbol: 'د.إ', flag: '🇦🇪' },
  SAR: { name: 'Saudi Riyal', nameAr: 'ريال سعودي', symbol: 'ر.س', flag: '🇸🇦' },
  QAR: { name: 'Qatari Riyal', nameAr: 'ريال قطري', symbol: 'ر.ق', flag: '🇶🇦' },
  KWD: { name: 'Kuwaiti Dinar', nameAr: 'دينار كويتي', symbol: 'د.ك', flag: '🇰🇼' },
  BHD: { name: 'Bahraini Dinar', nameAr: 'دينار بحريني', symbol: 'د.ب', flag: '🇧🇭' },
  OMR: { name: 'Omani Rial', nameAr: 'ريال عماني', symbol: 'ر.ع', flag: '🇴🇲' },
};

/**
 * Currency Converter Widget
 * Helps GCC patients understand treatment costs in their local currency
 *
 * Use Cases:
 * - Show treatment prices in patient's local currency
 * - Compare costs across GCC countries
 * - Display savings in home currency
 */
export function CurrencyConverter({
  price = 10000,
  locale = 'en',
  variant = 'widget',
  defaultCurrency = 'AED',
  showRates = false,
}: CurrencyConverterProps) {
  const [amount, setAmount] = useState(price.toString());
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState(defaultCurrency);
  const [convertedAmount, setConvertedAmount] = useState('0');
  const [isLoading, setIsLoading] = useState(false);

  const isRtl = locale === 'ar';

  const convert = (value: string, from: string, to: string) => {
    if (!value) {
      setConvertedAmount('0');
      return;
    }

    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setConvertedAmount('0');
      return;
    }

    const inUSD = numValue / EXCHANGE_RATES[from as keyof typeof EXCHANGE_RATES];
    const result = inUSD * EXCHANGE_RATES[to as keyof typeof EXCHANGE_RATES];
    setConvertedAmount(result.toFixed(2));
  };

  useEffect(() => {
    convert(amount, fromCurrency, toCurrency);
  }, [amount, fromCurrency, toCurrency]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    convert(amount, toCurrency, fromCurrency);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  // Minimal variant - just shows conversion
  if (variant === 'minimal') {
    const inUSD = price / EXCHANGE_RATES[fromCurrency as keyof typeof EXCHANGE_RATES];
    const result = inUSD * EXCHANGE_RATES[toCurrency as keyof typeof EXCHANGE_RATES];
    const toInfo = CURRENCY_INFO[toCurrency as keyof typeof CURRENCY_INFO];

    return (
      <div className={`inline-flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
        <span className="text-gray-600">${price.toLocaleString()}</span>
        <span className="text-gray-400">≈</span>
        <span className="font-semibold text-green-600">
          {toInfo.flag} {toInfo.symbol}{result.toFixed(2)}
        </span>
      </div>
    );
  }

  // Inline variant - compact converter
  if (variant === 'inline') {
    const fromInfo = CURRENCY_INFO[fromCurrency as keyof typeof CURRENCY_INFO];
    const toInfo = CURRENCY_INFO[toCurrency as keyof typeof CURRENCY_INFO];

    return (
      <div className={`flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
        <Calculator className="h-5 w-5 text-blue-600" />

        <div className="flex items-center gap-2">
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="w-24 rounded border border-gray-300 px-2 py-1 text-center text-sm focus:border-blue-500 focus:outline-none"
          />
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="rounded border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
          >
            {Object.entries(CURRENCY_INFO).map(([code, info]) => (
              <option key={code} value={code}>
                {info.flag} {info.symbol}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSwap}
          className="rounded-full p-1 hover:bg-gray-100"
          aria-label="Swap currencies"
        >
          <RotateCw className="h-4 w-4 text-gray-500" />
        </button>

        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-green-600">
            {toInfo.symbol}{convertedAmount}
          </span>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="rounded border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
          >
            {Object.entries(CURRENCY_INFO).map(([code, info]) => (
              <option key={code} value={code}>
                {info.flag} {info.symbol}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  // Full widget variant
  const fromInfo = CURRENCY_INFO[fromCurrency as keyof typeof CURRENCY_INFO];
  const toInfo = CURRENCY_INFO[toCurrency as keyof typeof CURRENCY_INFO];

  return (
    <div
      className={`w-full rounded-xl border border-gray-200 bg-white p-6 shadow-lg ${isRtl ? 'rtl' : 'ltr'}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
          <DollarSign className="h-6 w-6 text-green-600" />
          {isRtl ? 'محول العملات' : 'Currency Converter'}
        </h3>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Info className="h-4 w-4" />
          {isRtl ? 'معدلات تقريبية' : 'Approximate rates'}
        </div>
      </div>

      {/* Input Section */}
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          {isRtl ? 'المبلغ' : 'Amount'}
        </label>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-2xl font-semibold focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter amount"
        />
      </div>

      {/* Currency Selection */}
      <div className="mb-6 grid grid-cols-2 gap-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {isRtl ? 'من' : 'From'}
          </label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          >
            {Object.entries(CURRENCY_INFO).map(([code, info]) => (
              <option key={code} value={code}>
                {info.flag} {isRtl ? info.nameAr : info.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {isRtl ? 'إلى' : 'To'}
          </label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          >
            {Object.entries(CURRENCY_INFO).map(([code, info]) => (
              <option key={code} value={code}>
                {info.flag} {isRtl ? info.nameAr : info.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Swap Button */}
      <div className="mb-6 flex justify-center">
        <button
          onClick={handleSwap}
          className="flex items-center gap-2 rounded-full bg-blue-50 px-6 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100"
        >
          <RotateCw className="h-4 w-4" />
          {isRtl ? 'تبديل' : 'Swap'}
        </button>
      </div>

      {/* Result */}
      <div className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-6 dark:from-green-950 dark:to-emerald-950">
        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          {isRtl ? 'النتيجة المحولة' : 'Converted Amount'}
        </p>
        <p className="text-3xl font-bold text-green-700 dark:text-green-400">
          {toInfo.flag} {toInfo.symbol}{convertedAmount}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {isRtl ? info.nameAr : info.name}
        </p>
      </div>

      {/* Exchange Rates */}
      {showRates && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="mb-4 text-sm font-semibold text-gray-700">
            {isRtl ? 'معدلات الصرف (مقابل الدولار الأمريكي)' : 'Exchange Rates (per USD)'}
          </h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {Object.entries(EXCHANGE_RATES).map(([code, rate]) => {
              const info = CURRENCY_INFO[code as keyof typeof CURRENCY_INFO];
              return (
                <div key={code} className="flex justify-between">
                  <span>{info.flag} {info.symbol}</span>
                  <span className="font-mono">{rate.toFixed(4)}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Quick Currency Display Component
 * Shows price in multiple currencies at once
 */
export function MultiCurrencyDisplay({
  price,
  locale = 'en',
}: {
  price: number;
  locale?: 'en' | 'ar';
}) {
  const isRtl = locale === 'ar';

  return (
    <div className={`flex flex-wrap gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
      {['AED', 'SAR', 'QAR', 'KWD', 'BHD'].map((currency) => {
        const info = CURRENCY_INFO[currency as keyof typeof CURRENCY_INFO];
        const rate = EXCHANGE_RATES[currency as keyof typeof EXCHANGE_RATES];
        const converted = price * rate;

        return (
          <div
            key={currency}
            className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 dark:bg-gray-800"
          >
            <span>{info.flag}</span>
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              {info.symbol}{converted.toFixed(0)}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Savings Display Component
 * Shows cost savings in patient's local currency
 */
export function SavingsDisplay({
  originalPrice,
  discountedPrice,
  currency = 'AED',
  locale = 'en',
}: {
  originalPrice: number;
  discountedPrice: number;
  currency?: string;
  locale?: 'en' | 'ar';
}) {
  const savings = originalPrice - discountedPrice;
  const savingsPercentage = ((savings / originalPrice) * 100).toFixed(0);
  const info = CURRENCY_INFO[currency as keyof typeof CURRENCY_INFO];

  const isRtl = locale === 'ar';

  return (
    <div
      className={`rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-4 dark:from-green-950 dark:to-emerald-950`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {isRtl ? 'توفيرك' : 'Your Savings'}
          </p>
          <p className="mt-1 text-2xl font-bold text-green-700 dark:text-green-400">
            {info.flag} {info.symbol}{savings.toLocaleString()}
          </p>
        </div>
        <div className="text-center">
          <div className="rounded-full bg-green-600 px-4 py-2 text-sm font-bold text-white">
            {savingsPercentage}% {isRtl ? 'خصم' : 'OFF'}
          </div>
        </div>
      </div>
    </div>
  );
}
