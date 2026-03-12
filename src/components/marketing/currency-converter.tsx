'use client';

import { useState } from 'react';
import { DollarSign, Globe, RefreshCw, ArrowUpDown } from 'lucide-react';

interface CurrencyConverterProps {
  prices?: { [currency: string]: number };
  locale?: 'en' | 'ar';
  variant?: 'floating' | 'inline' | 'dropdown';
  className?: string;
}

const GCC_CURRENCIES = {
  AED: {
    name: 'UAE Dirham',
    nameAr: 'درهم إماراتي',
    symbol: 'AED',
    flag: '🇦🇪',
    rate: 0.272, // 1 USD = 3.67 AED
  },
  SAR: {
    name: 'Saudi Riyal',
    nameAr: 'ريال سعودي',
    symbol: 'SAR',
    flag: '🇸🇦',
    rate: 0.27, // 1 USD = 3.75 SAR
  },
  QAR: {
    name: 'Qatari Riyal',
    nameAr: 'ريال قطري',
    symbol: 'QAR',
    flag: '🇶🇦',
    rate: 0.27, // 1 USD = 3.67 QAR
  },
  KWD: {
    name: 'Kuwaiti Dinar',
    nameAr: 'دينار كويتي',
    symbol: 'KWD',
    flag: '🇰🇼',
    rate: 0.31, // 1 USD = 3.23 KWD
  },
  BHD: {
    name: 'Bahraini Dinar',
    nameAr: 'دينار بحريني',
    symbol: 'BHD',
    flag: '🇧🇭',
    rate: 0.38, // 1 USD = 2.65 BHD
  },
  OMR: {
    name: 'Omani Rial',
    nameAr: 'ريال عماني',
    symbol: 'OMR',
    flag: '🇴🇲',
    rate: 0.39, // 1 USD = 2.58 OMR
  },
};

const CURRENCY_KEYS = Object.keys(GCC_CURRENCIES) as Array<keyof typeof GCC_CURRENCIES>;

/**
 * Currency Converter Widget for GCC Patients
 * Displays prices in local currencies alongside USD
 * Critical for GCC market to understand true costs
 */
export function CurrencyConverter({
  prices = { USD: 0 },
  locale = 'en',
  variant = 'floating',
  className = '',
}: CurrencyConverterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('AED');

  const isRtl = locale === 'ar';
  const hasPrices = Object.keys(prices).length > 0;

  const convertPrice = (priceInUSD: number, toCurrency: Currency): number => {
    const rate = GCC_CURRENCIES[toCurrency].rate;
    return Math.round(priceInUSD * rate * 100) / 100;
  };

  const formatPrice = (price: number, currency: Currency): string => {
    const info = GCC_CURRENCIES[currency];
    return new Intl.NumberFormat(isRtl ? 'ar-SA' : 'en-US', {
      style: 'currency',
      currency: info.symbol,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Determine display currency (use first available price currency or default to AED)
  const displayCurrency: Currency = Object.keys(prices).length > 0
    ? Object.keys(prices)[0] as Currency
    : selectedCurrency;

  return (
    <div className={`font-medium ${className}`}>
      {variant === 'floating' && (
        <>
          {/* Floating Widget */}
          <div className="fixed bottom-6 left-6 z-50 animate-in fade-in">
            {!isOpen ? (
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-3 shadow-lg transition-transform hover:scale-105"
              >
                <DollarSign className="h-5 w-5" />
                <span className="font-semibold">
                  {isRtl ? 'العملات' : 'Currencies'}
                </span>
              </button>
            ) : (
              <div className="rounded-2xl bg-white shadow-2xl p-4 animate-in slide-in-from-bottom-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-6 w-6 text-green-600" />
                    <h3 className="font-semibold text-gray-900">
                      {isRtl ? 'محول العملة' : 'Currency Converter'}
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-full p-2 hover:bg-gray-100"
                    aria-label={isRtl ? 'إغلاق' : 'Close'}
                  >
                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
                </div>

                {/* Currency Options */}
                <div className="grid grid-cols-3 gap-2">
                  {CURRENCY_KEYS.map((currency) => {
                    const info = GCC_CURRENCIES[currency];
                    const isSelected = currency === selectedCurrency;
                    return (
                      <button
                        key={currency}
                        onClick={() => setSelectedCurrency(currency)}
                        className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all ${
                          isSelected
                            ? 'border-green-500 bg-green-50 shadow-md'
                            : 'border-gray-200 hover:border-green-500 hover:bg-green-50'
                        }`}
                      >
                        <span className="text-2xl">{info.flag}</span>
                        <div className="text-center">
                          <span className="text-lg font-semibold text-gray-900">{info.symbol}</span>
                          <div className="text-xs text-gray-600 mt-1">
                            {isRtl ? info.nameAr : info.name}
                          </div>
                          {isSelected && (
                            <span className="mt-1 flex h-2 w-2 items-center justify-center rounded-full bg-green-600 text-xs text-white">
                              ✓
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Price Table if prices provided */}
                {hasPrices && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-300">
                          <th className="py-2 px-4 text-left text-gray-700 font-semibold">
                            {isRtl ? 'العملة' : 'Currency'}
                          </th>
                          <th className="py-2 px-4 text-right text-gray-700 font-semibold">
                            {isRtl ? 'السعر' : 'Price'}
                          </th>
                          <th className="py-2 px-4 text-left text-gray-700 font-semibold">
                            {isRtl ? 'محول' : 'Rate'}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {CURRENCY_KEYS.map((currency) => {
                          const info = GCC_CURRENCIES[currency];
                          const priceInUSD = prices[currency] || prices.USD;
                          const convertedPrice = convertPrice(priceInUSD, currency);
                          return (
                            <tr key={currency} className="border-b border-gray-100 hover:bg-gray-50">
                              <td className="py-3 px-4">
                                <div className="flex items-center gap-2">
                                  <span className="text-xl">{info.flag}</span>
                                  <span className="font-medium text-gray-900">
                                    {isRtl ? info.nameAr : info.name}
                                  </span>
                                </div>
                              </td>
                              <td className="py-3 px-4 text-right">
                                <span className={`font-semibold ${
                                  currency === displayCurrency
                                    ? 'text-green-600'
                                    : 'text-gray-900'
                                }`}>
                                  ${formatPrice(convertedPrice, currency)}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-center text-gray-600">
                                {info.rate.toFixed(2)} {isRtl ? 'ريال لكل دولار' : 'per USD'}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Footer */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-center text-gray-500">
                    {isRtl
                      ? '* الأسعار التقديرية بالريال السعودي. يرجى التواصل للحصول على أسعار محدثة.'
                      : '* Estimated prices in SAR. Contact us for exact quotes.'}
                  </p>
                  <a
                    href="/contact"
                    className="block mt-3 text-center text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    {isRtl ? 'تواصل معنا للحصول على عرض دقيق' : 'Contact us for a precise quote'}
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Custom animations */}
          <style jsx>{`
            @keyframes slide-in-from-bottom-4 {
              0% { transform: translateY(1rem); opacity: 0; }
              100% { transform: translateY(0); opacity: 1; }
            }
            @keyframes fade-in {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
            .animate-in {
              animation-duration: 0.3s;
              animation-fill-mode: both;
            }
            .slide-in-from-bottom-4 {
              animation-name: slide-in-from-bottom-4;
            }
            .fade-in {
              animation-name: fade-in;
            }
          `}</style>
        </>
      )}

      {/* Inline Variant */}
      {variant === 'inline' && (
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-green-600" />
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-500">
              {isRtl ? 'السعر:' : 'Price:'}
            </span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 rounded-lg border border-gray-300 px-3 py-2 hover:border-green-500 transition-all"
            >
              <span className={`font-semibold ${displayCurrency !== 'USD' ? 'text-green-600' : 'text-gray-900'}`}>
                {displayCurrency !== 'USD' && hasPrices && formatPrice(convertPrice(prices.USD, displayCurrency), displayCurrency)}
                {displayCurrency === 'USD' && (hasPrices ? `$${prices.USD.toLocaleString()}` : 'USD')}
              </span>
              <ArrowUpDown className="h-4 w-4 text-gray-400" />
            </button>
          </div>

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute bottom-full left-0 mb-2 z-50 w-64 rounded-xl bg-white shadow-2xl border border-gray-200 animate-in fade-in">
              <div className="p-2">
                <div className="mb-3 text-xs text-gray-500 font-semibold">
                  {isRtl ? 'اختر عملة' : 'Select Currency'}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {CURRENCY_KEYS.map((currency) => {
                    const info = GCC_CURRENCIES[currency];
                    const isSelected = currency === selectedCurrency;
                    return (
                      <button
                        key={currency}
                        onClick={() => {
                          setSelectedCurrency(currency);
                          setIsOpen(false);
                        }}
                        className={`flex items-center gap-2 rounded-lg p-2 text-left transition-all ${
                          isSelected
                            ? 'bg-green-600 text-white'
                            : 'hover:bg-green-50'
                        }`}
                      >
                        <span className="text-xl">{info.flag}</span>
                        <div>
                          <div className="text-sm font-semibold">{info.symbol}</div>
                          <div className="text-xs opacity-75">{isRtl ? info.nameAr : info.name}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Dropdown Variant */}
      {variant === 'dropdown' && (
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 hover:border-green-500 transition-all"
          >
            <Globe className="h-4 w-4 text-green-600" />
            <span className="font-semibold">
              {GCC_CURRENCIES[selectedCurrency].flag} {GCC_CURRENCIES[selectedCurrency].symbol}
            </span>
            <RefreshCw className="h-4 w-4 text-gray-400 ml-2" />
          </button>

          {isOpen && (
            <div className="absolute bottom-full left-0 mt-2 z-50 w-56 rounded-xl bg-white shadow-2xl border border-gray-200 animate-in fade-in">
              <div className="p-3">
                <div className="mb-3 text-xs text-gray-500 font-semibold">
                  {isRtl ? 'العملات المدعومة' : 'Supported Currencies'}
                </div>
                <div className="space-y-1">
                  {CURRENCY_KEYS.map((currency) => {
                    const info = GCC_CURRENCIES[currency];
                    const isSelected = currency === selectedCurrency;
                    return (
                      <button
                        key={currency}
                        onClick={() => {
                          setSelectedCurrency(currency);
                          setIsOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 rounded-lg p-3 text-left transition-all ${
                          isSelected
                            ? 'bg-green-600 text-white'
                            : 'hover:bg-green-50'
                        }`}
                      >
                        <span className="text-xl">{info.flag}</span>
                        <div>
                          <div className="text-sm font-semibold">{info.symbol}</div>
                          <div className="text-xs opacity-75">{isRtl ? info.nameAr : info.name}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

type Currency = 'AED' | 'SAR' | 'QAR' | 'KWD' | 'BHD' | 'OMR';
