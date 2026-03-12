'use client';

import { useState, useEffect } from 'react';
import { CloudSun, Sun, Cloud, CloudRain, Snow, Wind, Droplets, Thermometer, MapPin, ChevronDown, AlertCircle } from 'lucide-react';

interface WeatherWidgetProps {
  cities?: Array<{
    name: string;
    nameAr?: string;
    country: string;
    countryAr?: string;
    lat: number;
    lon: number;
  }>;
  locale?: 'en' | 'ar';
  variant?: 'single' | 'grid' | 'minimal';
  showForecast?: boolean;
  className?: string;
}

// Popular medical tourism destinations with coordinates
const DEFAULT_CITIES = [
  { name: 'Mumbai', nameAr: 'مومباي', country: 'India', countryAr: 'الهند', lat: 19.076, lon: 72.8777 },
  { name: 'New Delhi', nameAr: 'نيودلهي', country: 'India', countryAr: 'الهند', lat: 28.6139, lon: 77.209 },
  { name: 'Bangalore', nameAr: 'بنغالور', country: 'India', countryAr: 'الهند', lat: 12.9716, lon: 77.5946 },
  { name: 'Chennai', nameAr: 'تشيناي', country: 'India', countryAr: 'الهند', lat: 13.0827, lon: 80.2707 },
  { name: 'Hyderabad', nameAr: 'حيدرآباد', country: 'India', countryAr: 'الهند', lat: 17.385, lon: 78.4867 },
  { name: 'Kerala', nameAr: 'كيرلا', country: 'India', countryAr: 'الهند', lat: 9.9312, lon: 76.2673 },
];

interface WeatherData {
  temp: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'snowy';
  description: string;
  descriptionAr?: string;
  icon: string;
}

/**
 * Weather Widget Component
 * Displays weather information for medical tourism destinations
 *
 * Note: This uses mock data for demonstration. For production, integrate with:
 * - OpenWeatherMap API
 * - WeatherAPI
 * - AccuWeather
 *
 * To add real weather:
 * 1. Sign up at https://openweathermap.org/api
 * 2. Get your API key
 * 3. Replace the getMockWeather function with actual API calls
 */
export function WeatherWidget({
  cities = DEFAULT_CITIES,
  locale = 'en',
  variant = 'grid',
  showForecast = false,
  className = '',
}: WeatherWidgetProps) {
  const isRtl = locale === 'ar';
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [weatherData, setWeatherData] = useState<Record<string, WeatherData>>({});
  const [loading, setLoading] = useState(true);

  // Mock weather data (replace with real API in production)
  const getMockWeather = (city: typeof cities[0], month: number): WeatherData => {
    // Simulate seasonal weather based on month
    const isSummer = month >= 3 && month <= 5; // Apr-Jun
    const isMonsoon = month >= 6 && month <= 9; // Jul-Oct
    const isWinter = month >= 11 || month <= 1; // Dec-Feb

    let baseTemp, condition, description, descriptionAr, icon;

    if (isMonsoon) {
      baseTemp = 28;
      condition = 'rainy';
      description = 'Rainy season';
      descriptionAr = 'موسم الأمطار';
      icon = '🌧️';
    } else if (isSummer) {
      baseTemp = 35;
      condition = 'sunny';
      description = 'Hot and sunny';
      descriptionAr = 'حار ومشمس';
      icon = '☀️';
    } else {
      baseTemp = 25;
      condition = 'sunny';
      description = 'Pleasant weather';
      descriptionAr = 'طقس لطيف';
      icon = '🌤️';
    }

    // Adjust for city-specific variations
    if (city.name === 'Mumbai' && isMonsoon) {
      condition = 'rainy';
      description = 'Heavy rainfall';
      descriptionAr = 'أمطار غزيرة';
      icon = '⛈️';
    }

    const tempVariation = Math.floor(Math.random() * 5) - 2;

    return {
      temp: baseTemp + tempVariation,
      feelsLike: baseTemp + tempVariation + 2,
      humidity: isMonsoon ? 85 : 65,
      windSpeed: 15 + Math.floor(Math.random() * 10),
      condition,
      description,
      descriptionAr,
      icon,
    };
  };

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      const currentMonth = new Date().getMonth();

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      const newWeatherData: Record<string, WeatherData> = {};
      cities.forEach(city => {
        newWeatherData[city.name] = getMockWeather(city, currentMonth);
      });

      setWeatherData(newWeatherData);
      setLoading(false);
    };

    fetchWeather();
  }, [cities]);

  const getConditionIcon = (condition: WeatherData['condition']) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="h-8 w-8 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="h-8 w-8 text-gray-400" />;
      case 'rainy':
        return <CloudRain className="h-8 w-8 text-blue-500" />;
      case 'snowy':
        return <Snow className="h-8 w-8 text-blue-300" />;
      default:
        return <CloudSun className="h-8 w-8 text-yellow-400" />;
    }
  };

  const getCityName = (city: typeof cities[0]) => {
    return isRtl && city.nameAr ? city.nameAr : city.name;
  };

  const getCountryName = (city: typeof cities[0]) => {
    return isRtl && city.countryAr ? city.countryAr : city.country;
  };

  const getWeatherText = (data: WeatherData) => {
    return isRtl && data.descriptionAr ? data.descriptionAr : data.description;
  };

  const getCurrentWeather = () => {
    return weatherData[selectedCity.name] || {
      temp: 0,
      feelsLike: 0,
      humidity: 0,
      windSpeed: 0,
      condition: 'sunny' as const,
      description: 'Loading...',
      icon: '🌡️',
    };
  };

  // Single city variant
  if (variant === 'single') {
    const weather = getCurrentWeather();

    return (
      <div
        className={`rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800 ${className}`}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <h3 className="font-bold text-gray-900 dark:text-gray-100">
              {getCityName(selectedCity)}, {getCountryName(selectedCity)}
            </h3>
          </div>
          {weather.icon && <span className="text-4xl">{weather.icon}</span>}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-4xl font-bold text-gray-900 dark:text-gray-100">{weather.temp}°C</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {isRtl ? 'محسوس' : 'Feels like'} {weather.feelsLike}°C
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{getWeatherText(weather)}</p>
          </div>
        </div>

        <div className="mt-4 flex gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Droplets className="h-4 w-4" />
            <span>{weather.humidity}% {isRtl ? 'رطوبة' : 'humidity'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Wind className="h-4 w-4" />
            <span>{weather.windSpeed} {isRtl ? 'كم/س' : 'km/h'}</span>
          </div>
        </div>
      </div>
    );
  }

  // Minimal variant
  if (variant === 'minimal') {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`} dir={isRtl ? 'rtl' : 'ltr'}>
        {cities.map((city) => {
          const weather = weatherData[city.name];
          if (!weather) return null;

          return (
            <div
              key={city.name}
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <span>{weather.icon}</span>
              <span className="text-gray-900 dark:text-gray-100">{getCityName(city)}</span>
              <span className="font-semibold text-gray-900 dark:text-gray-100">{weather.temp}°C</span>
            </div>
          );
        })}
      </div>
    );
  }

  // Grid variant (default)
  return (
    <div className={`space-y-6 ${className}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          <Thermometer className="h-5 w-5 text-blue-600" />
          {isRtl ? 'حالة الطقس' : 'Weather Conditions'}
        </h3>
        <div className="relative">
          <select
            value={selectedCity.name}
            onChange={(e) => setSelectedCity(cities.find(c => c.name === e.target.value) || cities[0])}
            className="appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-10 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
          >
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {getCityName(city)}, {getCountryName(city)}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="rounded-xl border border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800">
          <div className="flex justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            {isRtl ? 'جاري تحميل الطقس...' : 'Loading weather...'}
          </p>
        </div>
      )}

      {/* Weather Cards Grid */}
      {!loading && (
        <>
          {/* Selected City Detail */}
          <div className="rounded-xl border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:from-blue-950 dark:to-indigo-950">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {getCityName(selectedCity)}, {getCountryName(selectedCity)}
                  </h4>
                </div>
                {weatherData[selectedCity.name] && (
                  <>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                      {getWeatherText(weatherData[selectedCity.name])}
                    </p>
                    <p className="text-5xl font-bold text-blue-700 dark:text-blue-400">
                      {weatherData[selectedCity.name].temp}°C
                    </p>
                  </>
                )}
              </div>
              <div className="text-center">
                {weatherData[selectedCity.name] && (
                  <>
                    <div className="mb-2 flex justify-center">
                      {getConditionIcon(weatherData[selectedCity.name].condition)}
                    </div>
                    <span className="text-5xl">{weatherData[selectedCity.name].icon}</span>
                  </>
                )}
              </div>
            </div>

            {/* Weather Details */}
            {weatherData[selectedCity.name] && (
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-lg bg-white/50 p-3 text-center dark:bg-black/20">
                  <Thermometer className="mx-auto h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <p className="mt-1 font-bold text-gray-900 dark:text-gray-100">
                    {weatherData[selectedCity.name].feelsLike}°C
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {isRtl ? 'محسوس' : 'Feels Like'}
                  </p>
                </div>
                <div className="rounded-lg bg-white/50 p-3 text-center dark:bg-black/20">
                  <Droplets className="mx-auto h-5 w-5 text-blue-600" />
                  <p className="mt-1 font-bold text-gray-900 dark:text-gray-100">
                    {weatherData[selectedCity.name].humidity}%
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {isRtl ? 'رطوبة' : 'Humidity'}
                  </p>
                </div>
                <div className="rounded-lg bg-white/50 p-3 text-center dark:bg-black/20">
                  <Wind className="mx-auto h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <p className="mt-1 font-bold text-gray-900 dark:text-gray-100">
                    {weatherData[selectedCity.name].windSpeed}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {isRtl ? 'كم/س' : 'km/h'}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* All Cities Grid */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => {
              const weather = weatherData[city.name];
              if (!weather) return null;

              return (
                <div
                  key={city.name}
                  className={`rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-500 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500 ${
                    selectedCity.name === city.name ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedCity(city)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={`flex items-start justify-between gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-gray-100">{getCityName(city)}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {getCountryName(city)}
                      </p>
                    </div>
                    <div className="text-center">
                      <span className="text-3xl">{weather.icon}</span>
                      <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{weather.temp}°C</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    {getWeatherText(weather)}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Note */}
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 text-yellow-600 shrink-0" />
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {isRtl
                  ? 'ملاحظة: بيانات الطقس هي بيانات تجريبية. للحصول على بيانات طقس دقيقة، قم بتكامل مع واجهة برمجة تطبيقات الطقس مثل OpenWeatherMap.'
                  : 'Note: Weather data shown is simulated for demonstration. For accurate weather data, integrate with a weather API like OpenWeatherMap.'}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
