'use client';

import { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ALL_TREATMENTS, getTreatmentName } from '@/config/treatments-list';

/**
 * Interactive Cost Calculator Component
 * Captures leads while providing instant value
 * Users see estimated savings before submitting contact info
 */
export function CostCalculator() {
  const [treatment, setTreatment] = useState('');
  const [currentCountry, setCurrentCountry] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Comprehensive treatment cost data (in USD) - All 40+ treatments across all countries
  const treatmentCosts: Record<string, Record<string, number>> = {
    // Cardiac & Heart (2)
    'heart-surgery': { usa: 150000, uk: 100000, uae: 50000, saudi: 48000, qatar: 52000, oman: 35000, kuwait: 45000, bahrain: 38000, egypt: 25000, jordan: 28000, lebanon: 30000, india: 10000 },
    'angioplasty': { usa: 80000, uk: 55000, uae: 28000, saudi: 26000, qatar: 30000, oman: 20000, kuwait: 25000, bahrain: 22000, egypt: 15000, jordan: 16000, lebanon: 17000, india: 5000 },

    // Orthopedic (4)
    'knee-replacement': { usa: 50000, uk: 35000, uae: 20000, saudi: 18000, qatar: 22000, oman: 15000, kuwait: 18000, bahrain: 16000, egypt: 10000, jordan: 11000, lebanon: 12000, india: 7000 },
    'hip-replacement': { usa: 45000, uk: 30000, uae: 18000, saudi: 16000, qatar: 20000, oman: 13000, kuwait: 16000, bahrain: 14000, egypt: 9000, jordan: 10000, lebanon: 11000, india: 7000 },
    'shoulder-surgery': { usa: 40000, uk: 28000, uae: 16000, saudi: 14000, qatar: 18000, oman: 12000, kuwait: 14000, bahrain: 13000, egypt: 8000, jordan: 9000, lebanon: 10000, india: 6000 },
    'acl-reconstruction': { usa: 35000, uk: 25000, uae: 14000, saudi: 12000, qatar: 15000, oman: 10000, kuwait: 12000, bahrain: 11000, egypt: 7000, jordan: 8000, lebanon: 9000, india: 5000 },

    // Oncology / Cancer (7)
    'cancer-treatment': { usa: 200000, uk: 150000, uae: 80000, saudi: 75000, qatar: 85000, oman: 60000, kuwait: 70000, bahrain: 65000, egypt: 40000, jordan: 45000, lebanon: 50000, india: 15000 },
    'breast-cancer': { usa: 180000, uk: 130000, uae: 70000, saudi: 65000, qatar: 75000, oman: 50000, kuwait: 60000, bahrain: 55000, egypt: 35000, jordan: 40000, lebanon: 45000, india: 12000 },
    'lung-cancer': { usa: 220000, uk: 160000, uae: 90000, saudi: 85000, qatar: 95000, oman: 65000, kuwait: 80000, bahrain: 70000, egypt: 45000, jordan: 50000, lebanon: 55000, india: 18000 },
    'colon-cancer': { usa: 190000, uk: 140000, uae: 75000, saudi: 70000, qatar: 80000, oman: 55000, kuwait: 65000, bahrain: 60000, egypt: 38000, jordan: 42000, lebanon: 47000, india: 14000 },
    'cervical-cancer': { usa: 170000, uk: 120000, uae: 65000, saudi: 60000, qatar: 70000, oman: 48000, kuwait: 55000, bahrain: 52000, egypt: 33000, jordan: 37000, lebanon: 42000, india: 11000 },
    'prostate-cancer': { usa: 185000, uk: 135000, uae: 72000, saudi: 68000, qatar: 77000, oman: 52000, kuwait: 63000, bahrain: 58000, egypt: 36000, jordan: 40000, lebanon: 44000, india: 13000 },
    'blood-cancer': { usa: 250000, uk: 180000, uae: 100000, saudi: 95000, qatar: 105000, oman: 75000, kuwait: 90000, bahrain: 80000, egypt: 50000, jordan: 55000, lebanon: 60000, india: 20000 },

    // Transplants (3)
    'liver-transplant': { usa: 500000, uk: 350000, uae: 200000, saudi: 180000, qatar: 220000, oman: 150000, kuwait: 180000, bahrain: 160000, egypt: 100000, jordan: 110000, lebanon: 120000, india: 45000 },
    'kidney-transplant': { usa: 400000, uk: 280000, uae: 160000, saudi: 150000, qatar: 170000, oman: 120000, kuwait: 145000, bahrain: 135000, egypt: 80000, jordan: 90000, lebanon: 95000, india: 35000 },
    'bone-marrow-transplant': { usa: 450000, uk: 320000, uae: 180000, saudi: 170000, qatar: 190000, oman: 140000, kuwait: 165000, bahrain: 150000, egypt: 90000, jordan: 100000, lebanon: 110000, india: 40000 },

    // Fertility & Gynecology (4)
    'ivf': { usa: 15000, uk: 12000, uae: 8000, saudi: 7500, qatar: 8500, oman: 6000, kuwait: 7000, bahrain: 6500, egypt: 4000, jordan: 4500, lebanon: 5000, india: 3000 },
    'pcos-treatment': { usa: 12000, uk: 9000, uae: 6000, saudi: 5500, qatar: 6500, oman: 4500, kuwait: 5500, bahrain: 5000, egypt: 3000, jordan: 3500, lebanon: 4000, india: 2000 },
    'egg-freezing': { usa: 18000, uk: 14000, uae: 9000, saudi: 8500, qatar: 9500, oman: 7000, kuwait: 8000, bahrain: 7500, egypt: 5000, jordan: 5500, lebanon: 6000, india: 3500 },
    'hysterectomy': { usa: 30000, uk: 22000, uae: 12000, saudi: 11000, qatar: 13000, oman: 9000, kuwait: 10500, bahrain: 10000, egypt: 6000, jordan: 7000, lebanon: 8000, india: 4500 },

    // Cosmetic & Plastic Surgery (4)
    'cosmetic-surgery': { usa: 15000, uk: 10000, uae: 7000, saudi: 6500, qatar: 7500, oman: 5000, kuwait: 6000, bahrain: 5500, egypt: 3500, jordan: 4000, lebanon: 4500, india: 3000 },
    'rhinoplasty': { usa: 12000, uk: 8000, uae: 5500, saudi: 5000, qatar: 6000, oman: 4000, kuwait: 4800, bahrain: 4500, egypt: 2800, jordan: 3200, lebanon: 3500, india: 2500 },
    'liposuction': { usa: 10000, uk: 7000, uae: 4500, saudi: 4200, qatar: 5000, oman: 3500, kuwait: 4000, bahrain: 3800, egypt: 2500, jordan: 2800, lebanon: 3000, india: 2000 },
    'breast-augmentation': { usa: 14000, uk: 9500, uae: 6500, saudi: 6000, qatar: 7000, oman: 4800, kuwait: 5500, bahrain: 5200, egypt: 3200, jordan: 3600, lebanon: 4000, india: 2800 },

    // Dental (3)
    'dental-implants': { usa: 4000, uk: 3000, uae: 2000, saudi: 1800, qatar: 2200, oman: 1500, kuwait: 1800, bahrain: 1700, egypt: 1000, jordan: 1200, lebanon: 1300, india: 800 },
    'all-on-4-dental': { usa: 25000, uk: 18000, uae: 12000, saudi: 11000, qatar: 13000, oman: 9000, kuwait: 10500, bahrain: 10000, egypt: 6000, jordan: 7000, lebanon: 8000, india: 5000 },
    'veneers': { usa: 8000, uk: 6000, uae: 4000, saudi: 3700, qatar: 4300, oman: 3000, kuwait: 3500, bahrain: 3300, egypt: 2000, jordan: 2300, lebanon: 2500, india: 1500 },

    // Ophthalmology / Eye (2)
    'cataract-surgery': { usa: 8000, uk: 6000, uae: 3500, saudi: 3200, qatar: 3800, oman: 2500, kuwait: 3000, bahrain: 2800, egypt: 1800, jordan: 2000, lebanon: 2200, india: 1500 },
    'lasik': { usa: 6000, uk: 4500, uae: 2800, saudi: 2600, qatar: 3000, oman: 2000, kuwait: 2400, bahrain: 2300, egypt: 1500, jordan: 1700, lebanon: 1900, india: 1200 },

    // Neurosurgery & Spine (2)
    'neurosurgery': { usa: 180000, uk: 130000, uae: 75000, saudi: 70000, qatar: 80000, oman: 55000, kuwait: 65000, bahrain: 60000, egypt: 38000, jordan: 42000, lebanon: 47000, india: 18000 },
    'spine-surgery': { usa: 120000, uk: 85000, uae: 50000, saudi: 46000, qatar: 54000, oman: 38000, kuwait: 45000, bahrain: 42000, egypt: 28000, jordan: 32000, lebanon: 35000, india: 12000 },

    // General Surgery (4)
    'piles-surgery': { usa: 12000, uk: 8500, uae: 5000, saudi: 4600, qatar: 5400, oman: 3800, kuwait: 4500, bahrain: 4200, egypt: 2800, jordan: 3200, lebanon: 3500, india: 1500 },
    'hernia-surgery': { usa: 15000, uk: 11000, uae: 6500, saudi: 6000, qatar: 7000, oman: 5000, kuwait: 5800, bahrain: 5500, egypt: 3500, jordan: 4000, lebanon: 4500, india: 2500 },
    'gallbladder-surgery': { usa: 18000, uk: 13000, uae: 7500, saudi: 7000, qatar: 8000, oman: 5500, kuwait: 6500, bahrain: 6200, egypt: 4000, jordan: 4500, lebanon: 5000, india: 3000 },
    'appendix-surgery': { usa: 16000, uk: 11500, uae: 6800, saudi: 6300, qatar: 7300, oman: 5000, kuwait: 6000, bahrain: 5700, egypt: 3700, jordan: 4200, lebanon: 4600, india: 2800 },

    // Bariatric & Weight Loss (2)
    'bariatric-surgery': { usa: 35000, uk: 25000, uae: 15000, saudi: 14000, qatar: 16000, oman: 11000, kuwait: 13000, bahrain: 12000, egypt: 7500, jordan: 8500, lebanon: 9500, india: 6000 },
    'gastric-bypass': { usa: 38000, uk: 27000, uae: 16000, saudi: 15000, qatar: 17000, oman: 12000, kuwait: 14000, bahrain: 13000, egypt: 8000, jordan: 9000, lebanon: 10000, india: 6500 },

    // Urology (1)
    'kidney-stone': { usa: 20000, uk: 14000, uae: 8500, saudi: 8000, qatar: 9000, oman: 6500, kuwait: 7500, bahrain: 7000, egypt: 4500, jordan: 5000, lebanon: 5500, india: 3500 },

    // Vascular (1)
    'varicose-veins': { usa: 14000, uk: 10000, uae: 6000, saudi: 5600, qatar: 6400, oman: 4500, kuwait: 5300, bahrain: 5000, egypt: 3200, jordan: 3600, lebanon: 4000, india: 2500 },

    // Endocrine (1)
    'thyroid-surgery': { usa: 22000, uk: 16000, uae: 9500, saudi: 9000, qatar: 10000, oman: 7000, kuwait: 8500, bahrain: 8000, egypt: 5000, jordan: 5500, lebanon: 6000, india: 4000 },

    // Other
    'diabetes-treatment': { usa: 25000, uk: 18000, uae: 11000, saudi: 10000, qatar: 12000, oman: 8000, kuwait: 9500, bahrain: 9000, egypt: 5500, jordan: 6500, lebanon: 7000, india: 4500 },
    'other': { usa: 20000, uk: 15000, uae: 9000, saudi: 8500, qatar: 9500, oman: 7000, kuwait: 8000, bahrain: 7500, egypt: 5000, jordan: 5500, lebanon: 6000, india: 4000 },
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    if (treatment && currentCountry) {
      setShowResults(true);

      // Track calculator usage
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'cost_calculator_used', {
          event_category: 'Engagement',
          event_label: treatment,
        });
      }
    }
  };

  const handleGetQuote = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Send to your lead capture API
    console.log('Lead captured via calculator:', { treatment, currentCountry, email, phone });

    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'calculator_lead_conversion', {
        event_category: 'Lead',
        event_label: treatment,
        value: getSavings(),
      });
    }

    alert('Thank you! We\'ll send you a detailed quote within 24 hours.');
  };

  // Country names for display
  const countryNames: Record<string, string> = {
    uae: 'UAE',
    saudi: 'Saudi Arabia',
    qatar: 'Qatar',
    oman: 'Oman',
    kuwait: 'Kuwait',
    bahrain: 'Bahrain',
    egypt: 'Egypt',
    jordan: 'Jordan',
    lebanon: 'Lebanon',
    iraq: 'Iraq',
    yemen: 'Yemen',
    syria: 'Syria',
    palestine: 'Palestine',
    morocco: 'Morocco',
    algeria: 'Algeria',
    tunisia: 'Tunisia',
    libya: 'Libya',
    sudan: 'Sudan',
    usa: 'USA',
    uk: 'UK',
    canada: 'Canada',
    australia: 'Australia',
    singapore: 'Singapore',
    malaysia: 'Malaysia',
    thailand: 'Thailand',
    india: 'India',
  };

  // Country pricing multipliers relative to India (for countries not explicitly listed)
  const countryMultipliers: Record<string, number> = {
    // GCC (already have explicit pricing)
    uae: 5.5,
    saudi: 5.2,
    qatar: 5.8,
    oman: 4.0,
    kuwait: 4.8,
    bahrain: 4.5,
    // MENA (already have explicit pricing for Egypt, Jordan, Lebanon)
    egypt: 2.8,
    jordan: 3.0,
    lebanon: 3.2,
    // Additional MENA countries (using multipliers)
    iraq: 3.0,
    yemen: 2.5,
    syria: 2.7,
    palestine: 2.8,
    morocco: 3.5,
    algeria: 3.2,
    tunisia: 3.3,
    libya: 3.0,
    sudan: 2.4,
    // Western countries
    usa: 15.0,
    uk: 10.0,
    canada: 12.0,
    australia: 11.0,
    // Asian countries
    singapore: 7.0,
    malaysia: 4.0,
    thailand: 3.5,
    // Default multiplier
    india: 1.0,
  };

  const getCost = (country: string) => {
    if (!treatment) return 0;
    const costs = treatmentCosts[treatment as keyof typeof treatmentCosts];

    if (!costs) return 0;

    // If we have explicit pricing for this country, use it
    if (costs[country as keyof typeof costs]) {
      return costs[country as keyof typeof costs] as number;
    }

    // Otherwise, estimate using multiplier
    const indiaCost = costs.india || 5000; // default fallback
    const multiplier = countryMultipliers[country] || 5.0; // default 5x India pricing
    return Math.round(indiaCost * multiplier);
  };

  const getSavings = () => {
    if (!treatment || !currentCountry) return 0;
    const currentCost = getCost(currentCountry);
    const indiaCost = getCost('india');
    return currentCost - indiaCost;
  };

  const getSavingsPercentage = () => {
    if (!treatment || !currentCountry) return 0;
    const currentCost = getCost(currentCountry);
    const savings = getSavings();
    return Math.round((savings / currentCost) * 100);
  };

  return (
    <section className="bg-gradient-to-br from-primary-50 to-accent-50 px-4 py-16">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white">
              <Calculator className="h-8 w-8" />
            </div>
            <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              Calculate Your Savings
            </h2>
            <p className="text-lg text-gray-600">
              See how much you can save with medical treatment in India
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary-500 to-primary-600 text-white">
              <CardTitle className="text-2xl">Free Cost Estimate</CardTitle>
              <CardDescription className="text-primary-50">
                Get instant comparison - No credit card required
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              {!showResults ? (
                <form onSubmit={handleCalculate} className="space-y-6">
                  <div>
                    <label htmlFor="treatment" className="mb-2 block text-sm font-medium text-gray-700">
                      What treatment do you need? *
                    </label>
                    <select
                      id="treatment"
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-base focus:border-primary-500 focus:outline-none"
                      required
                    >
                      <option value="">Select treatment...</option>
                      {ALL_TREATMENTS.map((treatment) => (
                        <option key={treatment.slug} value={treatment.slug}>
                          {treatment.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="country" className="mb-2 block text-sm font-medium text-gray-700">
                      Where are you currently? *
                    </label>
                    <select
                      id="country"
                      value={currentCountry}
                      onChange={(e) => setCurrentCountry(e.target.value)}
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-base focus:border-primary-500 focus:outline-none"
                      required
                    >
                      <option value="">Select country...</option>

                      <optgroup label="🌟 GCC Countries (Primary Target)">
                        <option value="uae">🇦🇪 United Arab Emirates (UAE)</option>
                        <option value="saudi">🇸🇦 Saudi Arabia</option>
                        <option value="qatar">🇶🇦 Qatar</option>
                        <option value="oman">🇴🇲 Oman</option>
                        <option value="kuwait">🇰🇼 Kuwait</option>
                        <option value="bahrain">🇧🇭 Bahrain</option>
                      </optgroup>

                      <optgroup label="🌍 MENA Region">
                        <option value="egypt">🇪🇬 Egypt</option>
                        <option value="jordan">🇯🇴 Jordan</option>
                        <option value="lebanon">🇱🇧 Lebanon</option>
                        <option value="iraq">🇮🇶 Iraq</option>
                        <option value="yemen">🇾🇪 Yemen</option>
                        <option value="syria">🇸🇾 Syria</option>
                        <option value="palestine">🇵🇸 Palestine</option>
                        <option value="morocco">🇲🇦 Morocco</option>
                        <option value="algeria">🇩🇿 Algeria</option>
                        <option value="tunisia">🇹🇳 Tunisia</option>
                        <option value="libya">🇱🇾 Libya</option>
                        <option value="sudan">🇸🇩 Sudan</option>
                      </optgroup>

                      <optgroup label="🌎 Other Countries">
                        <option value="usa">🇺🇸 United States</option>
                        <option value="uk">🇬🇧 United Kingdom</option>
                        <option value="canada">🇨🇦 Canada</option>
                        <option value="australia">🇦🇺 Australia</option>
                        <option value="singapore">🇸🇬 Singapore</option>
                        <option value="malaysia">🇲🇾 Malaysia</option>
                        <option value="thailand">🇹🇭 Thailand</option>
                      </optgroup>
                    </select>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Calculate My Savings
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              ) : (
                <div className="space-y-6">
                  {/* Savings Highlight */}
                  <div className="rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 p-6 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-600">
                      {getTreatmentName(treatment)}
                    </p>
                    <div className="mb-4">
                      <div className="mb-2 text-5xl font-bold text-green-600">
                        ${getSavings().toLocaleString()}
                      </div>
                      <div className="text-2xl font-bold text-gray-800">
                        You Save {getSavingsPercentage()}%
                      </div>
                      <div className="mt-2 text-sm text-gray-600">
                        vs {countryNames[currentCountry]}
                      </div>
                    </div>

                    {/* Savings Meter */}
                    <div className="mx-auto max-w-md">
                      <div className="mb-2 flex justify-between text-xs font-medium text-gray-600">
                        <span>India Cost</span>
                        <span>{countryNames[currentCountry]} Cost</span>
                      </div>
                      <div className="relative h-8 overflow-hidden rounded-full bg-red-200">
                        <div
                          className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-1000"
                          style={{ width: `${100 - getSavingsPercentage()}%` }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                          Save {getSavingsPercentage()}%
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cost Comparison Table - 4 Countries */}
                  <div className="overflow-hidden rounded-lg border-2 border-gray-200 bg-white">
                    <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-3">
                      <h3 className="text-center text-lg font-bold text-white">
                        Cost Comparison Across Countries
                      </h3>
                    </div>
                    <div className="grid divide-y md:grid-cols-4 md:divide-x md:divide-y-0">
                      {/* India Column */}
                      <div className="bg-green-50 p-4">
                        <div className="mb-2 text-center text-sm font-semibold text-gray-600">
                          🇮🇳 India
                        </div>
                        <div className="mb-2 text-center text-2xl font-bold text-green-600">
                          ${getCost('india').toLocaleString()}
                        </div>
                        <div className="rounded bg-green-600 px-2 py-1 text-center text-xs font-bold text-white">
                          BEST VALUE
                        </div>
                      </div>

                      {/* UAE Column */}
                      <div className="p-4">
                        <div className="mb-2 text-center text-sm font-semibold text-gray-600">
                          🇦🇪 UAE
                        </div>
                        <div className="mb-2 text-center text-2xl font-bold text-gray-800">
                          ${getCost('uae').toLocaleString()}
                        </div>
                        <div className="rounded bg-orange-100 px-2 py-1 text-center text-xs font-semibold text-orange-700">
                          {Math.round(((getCost('uae') - getCost('india')) / getCost('uae')) * 100)}% more
                        </div>
                      </div>

                      {/* UK Column */}
                      <div className="p-4">
                        <div className="mb-2 text-center text-sm font-semibold text-gray-600">
                          🇬🇧 UK
                        </div>
                        <div className="mb-2 text-center text-2xl font-bold text-gray-800">
                          ${getCost('uk').toLocaleString()}
                        </div>
                        <div className="rounded bg-orange-100 px-2 py-1 text-center text-xs font-semibold text-orange-700">
                          {Math.round(((getCost('uk') - getCost('india')) / getCost('uk')) * 100)}% more
                        </div>
                      </div>

                      {/* USA Column */}
                      <div className="p-4">
                        <div className="mb-2 text-center text-sm font-semibold text-gray-600">
                          🇺🇸 USA
                        </div>
                        <div className="mb-2 text-center text-2xl font-bold text-gray-800">
                          ${getCost('usa').toLocaleString()}
                        </div>
                        <div className="rounded bg-red-100 px-2 py-1 text-center text-xs font-semibold text-red-700">
                          {Math.round(((getCost('usa') - getCost('india')) / getCost('usa')) * 100)}% more
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lead capture form */}
                  <div className="rounded-lg border-2 border-primary-200 bg-primary-50 p-6">
                    <h3 className="mb-4 text-lg font-semibold text-gray-900">
                      Get Your Personalized Quote
                    </h3>
                    <form onSubmit={handleGetQuote} className="space-y-4">
                      <div>
                        <label htmlFor="calc-phone" className="mb-1 block text-sm font-medium text-gray-700">
                          WhatsApp / Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="calc-phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+971 50 123 4567"
                          className="w-full rounded-lg border-2 border-gray-200 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="calc-email" className="mb-1 block text-sm font-medium text-gray-700">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="calc-email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your.email@example.com"
                          className="w-full rounded-lg border-2 border-gray-200 px-4 py-2.5 focus:border-primary-500 focus:outline-none"
                          required
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full">
                        Get Detailed Quote + Hospital List
                      </Button>
                    </form>
                    <p className="mt-3 text-center text-xs text-gray-500">
                      🔒 Your information is 100% confidential
                    </p>
                  </div>

                  <button
                    onClick={() => setShowResults(false)}
                    className="w-full text-center text-sm text-primary-600 hover:text-primary-700"
                  >
                    ← Calculate for different treatment
                  </button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
