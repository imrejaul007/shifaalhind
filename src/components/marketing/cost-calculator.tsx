'use client';

import { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ALL_TREATMENTS } from '@/config/treatments-list';

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

  // Treatment cost data (in USD)
  const treatmentCosts = {
    'heart-bypass': { usa: 150000, uk: 100000, uae: 50000, india: 10000, name: 'Heart Bypass Surgery' },
    'knee-replacement': { usa: 50000, uk: 35000, uae: 20000, india: 7000, name: 'Knee Replacement' },
    'hip-replacement': { usa: 45000, uk: 30000, uae: 18000, india: 7000, name: 'Hip Replacement' },
    'ivf': { usa: 15000, uk: 12000, uae: 8000, india: 3000, name: 'IVF Treatment' },
    'cancer': { usa: 200000, uk: 150000, uae: 80000, india: 15000, name: 'Cancer Treatment' },
    'liver-transplant': { usa: 500000, uk: 350000, uae: 200000, india: 45000, name: 'Liver Transplant' },
    'dental-implants': { usa: 4000, uk: 3000, uae: 2000, india: 800, name: 'Dental Implants' },
    'cosmetic': { usa: 15000, uk: 10000, uae: 7000, india: 3000, name: 'Cosmetic Surgery' },
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

  const getCost = (country: string) => {
    if (!treatment) return 0;
    const costs = treatmentCosts[treatment as keyof typeof treatmentCosts];
    return costs[country as keyof typeof costs] as number;
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
                      <option value="usa">🇺🇸 United States</option>
                      <option value="uk">🇬🇧 United Kingdom</option>
                      <option value="uae">🇦🇪 UAE (United Arab Emirates)</option>
                    </select>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Calculate My Savings
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              ) : (
                <div className="space-y-6">
                  {/* Results */}
                  <div className="rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 p-6 text-center">
                    <p className="mb-2 text-sm font-medium text-gray-600">
                      {treatmentCosts[treatment as keyof typeof treatmentCosts]?.name}
                    </p>
                    <div className="mb-4">
                      <div className="mb-1 text-4xl font-bold text-green-600">
                        ${getSavings().toLocaleString()}
                      </div>
                      <div className="text-lg font-semibold text-gray-700">
                        You Save {getSavingsPercentage()}%
                      </div>
                    </div>
                    <div className="grid gap-4 text-left text-sm md:grid-cols-2">
                      <div className="rounded-lg bg-white p-3">
                        <div className="mb-1 text-xs text-gray-500">Cost in {currentCountry.toUpperCase()}</div>
                        <div className="text-xl font-bold text-red-600">
                          ${getCost(currentCountry).toLocaleString()}
                        </div>
                      </div>
                      <div className="rounded-lg bg-white p-3">
                        <div className="mb-1 text-xs text-gray-500">Cost in India</div>
                        <div className="text-xl font-bold text-green-600">
                          ${getCost('india').toLocaleString()}
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
