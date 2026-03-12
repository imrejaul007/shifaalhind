'use client';

import { useState, useEffect } from 'react';
import { Clock, Globe, Calendar, ArrowRightLeft, ChevronDown } from 'lucide-react';

interface TimeZoneDisplayProps {
  destinations?: {
    city: string;
    country: string;
    countryAr?: string;
    timeZone: string;
    offset: string;
  }[];
  locale?: 'en' | 'ar';
  variant?: 'simple' | 'detailed' | 'comparison';
  defaultDestination?: string;
  className?: string;
}

// Popular Indian medical tourism destinations
const DEFAULT_DESTINATIONS = [
  { city: 'Mumbai', country: 'India', countryAr: 'الهند', timeZone: 'Asia/Kolkata', offset: 'UTC+5:30' },
  { city: 'New Delhi', country: 'India', countryAr: 'الهند', timeZone: 'Asia/Kolkata', offset: 'UTC+5:30' },
  { city: 'Bangalore', country: 'India', countryAr: 'الهند', timeZone: 'Asia/Kolkata', offset: 'UTC+5:30' },
  { city: 'Chennai', country: 'India', countryAr: 'الهند', timeZone: 'Asia/Kolkata', offset: 'UTC+5:30' },
  { city: 'Hyderabad', country: 'India', countryAr: 'الهند', timeZone: 'Asia/Kolkata', offset: 'UTC+5:30' },
  { city: 'Kerala', country: 'India', countryAr: 'الهند', timeZone: 'Asia/Kolkata', offset: 'UTC+5:30' },
];

// GCC countries
const GCC_COUNTRIES = [
  { city: 'Dubai', country: 'UAE', countryAr: 'الإمارات', timeZone: 'Asia/Dubai', offset: 'UTC+4' },
  { city: 'Abu Dhabi', country: 'UAE', countryAr: 'الإمارات', timeZone: 'Asia/Dubai', offset: 'UTC+4' },
  { city: 'Riyadh', country: 'Saudi Arabia', countryAr: 'السعودية', timeZone: 'Asia/Riyadh', offset: 'UTC+3' },
  { city: 'Jeddah', country: 'Saudi Arabia', countryAr: 'السعودية', timeZone: 'Asia/Riyadh', offset: 'UTC+3' },
  { city: 'Doha', country: 'Qatar', countryAr: 'قطر', timeZone: 'Asia/Qatar', offset: 'UTC+3' },
  { city: 'Kuwait City', country: 'Kuwait', countryAr: 'الكويت', timeZone: 'Asia/Kuwait', offset: 'UTC+3' },
  { city: 'Manama', country: 'Bahrain', countryAr: 'البحرين', timeZone: 'Asia/Bahrain', offset: 'UTC+3' },
  { city: 'Muscat', country: 'Oman', countryAr: 'عمان', timeZone: 'Asia/Muscat', offset: 'UTC+4' },
];

/**
 * Time Zone Display Component
 * Shows current time in multiple time zones
 * Helps GCC patients understand timing differences with India
 */
export function TimeZoneDisplay({
  destinations = DEFAULT_DESTINATIONS,
  locale = 'en',
  variant = 'detailed',
  defaultDestination = 'Mumbai',
  className = '',
}: TimeZoneDisplayProps) {
  const isRtl = locale === 'ar';
  const [times, setTimes] = useState<Record<string, string>>({});
  const [dates, setDates] = useState<Record<string, string>>({});
  const [selectedDest, setSelectedDest] = useState(defaultDestination);

  useEffect(() => {
    const updateTime = () => {
      const newTimes: Record<string, string> = {};
      const newDates: Record<string, string> = {};

      const allDestinations = [...DEFAULT_DESTINATIONS, ...GCC_COUNTRIES];

      allDestinations.forEach(dest => {
        try {
          const timeStr = new Date().toLocaleTimeString('en-US', {
            timeZone: dest.timeZone,
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          });
          const dateStr = new Date().toLocaleDateString('en-US', {
            timeZone: dest.timeZone,
            weekday: 'short',
            month: 'short',
            day: 'numeric',
          });
          newTimes[dest.city] = timeStr;
          newDates[dest.city] = dateStr;
        } catch (error) {
          console.error(`Error getting time for ${dest.city}:`, error);
        }
      });

      setTimes(newTimes);
      setDates(newDates);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const allDestinations = [...DEFAULT_DESTINATIONS, ...GCC_COUNTRIES];
  const selectedDestData = allDestinations.find(d => d.city === selectedDest) || DEFAULT_DESTINATIONS[0];

  const getCountryName = (country: string, countryAr?: string) => {
    return isRtl && countryAr ? countryAr : country;
  };

  const getTimeDifference = (destTimeZone: string) => {
    try {
      const destTime = new Date().toLocaleString('en-US', { timeZone: destTimeZone });
      const localTime = new Date().toLocaleString('en-US');
      const diff = new Date(destTime).getTime() - new Date(localTime).getTime();
      const hours = Math.round(diff / (1000 * 60 * 60));
      const absHours = Math.abs(hours);
      return hours > 0 ? `+${hours}h` : `${hours}h`;
    } catch {
      return '';
    }
  };

  // Simple variant - just show times
  if (variant === 'simple') {
    return (
      <div className={`space-y-2 ${className}`} dir={isRtl ? 'rtl' : 'ltr'}>
        {allDestinations.slice(0, 4).map((dest) => (
          <div
            key={dest.city}
            className={`flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm dark:border-gray-700 dark:bg-gray-800 ${isRtl ? 'flex-row-reverse' : ''}`}
          >
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-900 dark:text-gray-100">{dest.city}</span>
              <span className="text-gray-500 dark:text-gray-400">{dest.offset}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-600" />
              <span className="font-mono font-semibold text-gray-900 dark:text-gray-100">
                {times[dest.city] || '--:--'}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Comparison variant - show India vs GCC
  if (variant === 'comparison') {
    const indiaDest = DEFAULT_DESTINATIONS[0];
    const localDest = GCC_COUNTRIES.find(d => d.timeZone === Intl.DateTimeFormat().resolvedOptions().timeZone) || GCC_COUNTRIES[0];

    return (
      <div className={`rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800 ${className}`} dir={isRtl ? 'rtl' : 'ltr'}>
        <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          <ArrowRightLeft className="h-5 w-5 text-blue-600" />
          {isRtl ? 'مقارنة التوقيت' : 'Time Zone Comparison'}
        </h3>

        <div className="grid gap-4 md:grid-cols-2">
          {/* India */}
          <div className="rounded-xl border border-orange-200 bg-orange-50 p-4 dark:border-orange-900 dark:bg-orange-950">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🇮🇳</span>
              <div>
                <p className="font-bold text-gray-900 dark:text-gray-100">{indiaDest.city}, India</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{indiaDest.offset}</p>
              </div>
            </div>
            <div className="mt-3 text-center">
              <p className="text-3xl font-bold text-orange-700 dark:text-orange-400">
                {times[indiaDest.city] || '--:--'}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {dates[indiaDest.city] || ''}
              </p>
            </div>
          </div>

          {/* Local Time */}
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{localDest.country === 'UAE' ? '🇦🇪' : localDest.country === 'Saudi Arabia' ? '🇸🇦' : '🌍'}</span>
              <div>
                <p className="font-bold text-gray-900 dark:text-gray-100">{localDest.city}, {getCountryName(localDest.country, localDest.countryAr)}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{localDest.offset}</p>
              </div>
            </div>
            <div className="mt-3 text-center">
              <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                {times[localDest.city] || '--:--'}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {dates[localDest.city] || ''}
              </p>
            </div>
          </div>
        </div>

        {/* Time Difference */}
        <div className="mt-4 rounded-lg bg-gray-100 p-3 text-center dark:bg-gray-700">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {isRtl ? 'الفرق الزمني:' : 'Time Difference:'}
            <span className="mx-2 font-bold text-blue-600 dark:text-blue-400">
              1.5 {isRtl ? 'ساعة متقدمة' : 'hours ahead'}
            </span>
          </p>
        </div>
      </div>
    );
  }

  // Detailed variant (default)
  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800 ${className}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          <Clock className="h-5 w-5 text-blue-600" />
          {isRtl ? 'الأوقات الحالية' : 'Current Times'}
        </h3>
        <div className="relative">
          <select
            value={selectedDest}
            onChange={(e) => setSelectedDest(e.target.value)}
            className="appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-10 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
          >
            {DEFAULT_DESTINATIONS.map((dest) => (
              <option key={dest.city} value={dest.city}>
                {dest.city}, {getCountryName(dest.country, dest.countryAr)}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
        </div>
      </div>

      {/* Selected Destination */}
      <div className="mb-6 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-4 dark:from-blue-950 dark:to-indigo-950">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
            <Clock className="h-8 w-8" />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {isRtl ? 'الوجهة المختارة' : 'Selected Destination'}
            </p>
            <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {selectedDestData.city}, {getCountryName(selectedDestData.country, selectedDestData.countryAr)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {selectedDestData.offset} • {times[selectedDestData.city] || '--:--'}
            </p>
          </div>
        </div>
      </div>

      {/* All Destinations */}
      <div>
        <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
          {isRtl ? 'جميع الوجهات' : 'All Destinations'}
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {allDestinations.map((dest) => (
            <div
              key={dest.city}
              className={`flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3 transition-all hover:border-blue-500 hover:bg-blue-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500 dark:hover:bg-blue-950 ${isRtl ? 'flex-row-reverse' : ''}`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                  <Globe className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{dest.city}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {getCountryName(dest.country, dest.countryAr)}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-mono text-lg font-bold text-blue-600 dark:text-blue-400">
                  {times[dest.city] || '--:--'}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {dest.offset}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-6 rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <Calendar className="inline h-4 w-4 mr-1" />
          {isRtl
            ? 'يتم تحديث الأوقات تلقائيًا كل ثانية'
            : 'Times update automatically every second'}
        </p>
      </div>
    </div>
  );
}

/**
 * Simple Time Badge Component
 * Shows a single time zone badge
 */
export function TimeBadge({
  city,
  country,
  timeZone,
  offset,
  locale = 'en',
}: {
  city: string;
  country: string;
  timeZone: string;
  offset: string;
  locale?: 'en' | 'ar';
}) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Date().toLocaleTimeString('en-US', {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        });
        setTime(timeStr);
      } catch (error) {
        console.error('Error getting time:', error);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  const isRtl = locale === 'ar';

  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm dark:border-gray-700 dark:bg-gray-800 ${isRtl ? 'flex-row-reverse' : ''}`}>
      <Clock className="h-4 w-4 text-blue-600" />
      <span className="text-gray-700 dark:text-gray-300">{city}</span>
      <span className="font-mono font-semibold text-gray-900 dark:text-gray-100">{time || '--:--'}</span>
      <span className="text-xs text-gray-500 dark:text-gray-400">{offset}</span>
    </div>
  );
}
