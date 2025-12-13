import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Hotel,
  Car,
  Languages,
  Utensils,
  Wifi,
  Shield,
  MapPin,
  Phone,
  Clock,
  Star,
  Check,
  Home,
  Building2,
  Plane,
  HandHeart,
  Users,
  Calendar,
  Heart,
  Sparkles,
  Globe,
  MessageCircle,
  CheckCircle,
  Navigation,
  Church,
  UserCheck,
  Coffee,
  Bed,
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Patient Accommodation & Hospitality Services | Medical Tourism India',
  description:
    'Comfortable accommodation for medical tourists in India. Airport pickup, translator services, halal meals, near-hospital stays. Partner hotels in Bangalore, Mumbai, Delhi, Chennai.',
  keywords: [
    'medical tourism accommodation India',
    'patient hotels Bangalore',
    'hospital near hotels',
    'Pentouz Hotels medical patients',
    'medical tourism hospitality',
    'translator services India',
    'airport pickup medical tourists',
    'halal food accommodation India',
    'أماكن إقامة السياحة العلاجية',
    'فنادق المرضى بنجلور',
    'خدمات الترجمة الطبية',
  ],
  openGraph: {
    title: 'Comfortable Accommodation for Medical Tourists in India',
    description:
      'Premium stays near top hospitals. Airport transfers, translators, halal meals, 24/7 support. Partner with Pentouz Hotels.',
    type: 'website',
  },
};

export default function AccommodationPage() {
  // Partner Hotels - Pentouz Properties
  const pentozProperties = [
    {
      name: 'The Pentouz Indiranagar',
      location: '100 Feet Road, Indiranagar, Bangalore',
      type: 'Boutique Hotel',
      distance: '15 min from major hospitals',
      price: '$80-150/night',
      features: ['Rooftop Terrace', 'Restaurant', 'Premium Suites', 'Business Center'],
      ideal: 'Luxury & Comfort',
      image: '/images/pentouz-indiranagar.jpg',
    },
    {
      name: 'The Pentouz Lavelle Road',
      location: '46, 6th Cross, Lavelle Road, Bangalore',
      type: 'Boutique Hotel',
      distance: '10 min from Apollo, Fortis',
      price: '$90-180/night',
      features: ['Central Location', 'Fine Dining', 'Event Spaces', 'Lounge'],
      ideal: 'Prime Urban Location',
      image: '/images/pentouz-lavelle.jpg',
    },
    {
      name: 'The Pentouz Windsor Heights',
      location: 'Ooty, Tamil Nadu',
      type: 'Resort',
      distance: 'Recovery & Wellness Retreat',
      price: '$70-130/night',
      features: ['Scenic Views', 'Tea Gardens', 'Nature Walks', 'Peaceful'],
      ideal: 'Post-Treatment Recovery',
      image: '/images/pentouz-ooty.jpg',
    },
  ];

  // Other Accommodation Options
  const accommodationTypes = [
    {
      type: 'Budget Stays',
      icon: Home,
      price: '$25-50/night',
      description: 'Clean, comfortable rooms near hospitals',
      features: ['Basic Amenities', 'WiFi', 'Daily Housekeeping', 'Airport Transfer'],
    },
    {
      type: 'Comfort Hotels',
      icon: Hotel,
      price: '$50-100/night',
      description: 'Mid-range hotels with excellent facilities',
      features: ['AC Rooms', 'Restaurant', '24/7 Service', 'Laundry'],
    },
    {
      type: 'Luxury Properties',
      icon: Building2,
      price: '$100-250/night',
      description: 'Premium hotels like Pentouz, 5-star chains',
      features: ['Premium Suites', 'Fine Dining', 'Spa', 'Concierge'],
    },
    {
      type: 'Serviced Apartments',
      icon: Home,
      price: '$60-120/night',
      description: 'Home-like stays for families, long-term patients',
      features: ['Kitchen', 'Living Room', 'Washing Machine', 'Privacy'],
    },
  ];

  // Services Included
  const services = [
    {
      icon: Plane,
      title: 'Airport Pickup & Drop',
      description: 'Complimentary airport transfers with flight tracking',
    },
    {
      icon: Car,
      title: 'Hospital Transportation',
      description: 'Daily shuttle service to/from hospitals for appointments',
    },
    {
      icon: Languages,
      title: 'Translator Services',
      description: 'Arabic, English translators available 24/7',
    },
    {
      icon: Utensils,
      title: 'Halal Meals',
      description: 'Authentic halal food options for GCC patients',
    },
    {
      icon: Phone,
      title: '24/7 Assistance',
      description: 'Dedicated support team for any needs, anytime',
    },
    {
      icon: Shield,
      title: 'Security & Safety',
      description: 'Secure accommodations with 24/7 surveillance',
    },
  ];

  // Amenities
  const amenities = [
    { icon: Wifi, name: 'High-Speed WiFi' },
    { icon: Utensils, name: 'In-Room Dining' },
    { icon: Globe, name: 'International TV Channels' },
    { icon: Heart, name: 'Prayer Rooms' },
    { icon: Users, name: 'Family Suites' },
    { icon: Sparkles, name: 'Daily Housekeeping' },
    { icon: Car, name: 'Free Parking' },
    { icon: Shield, name: '24/7 Security' },
    { icon: MessageCircle, name: 'Concierge Service' },
    { icon: Calendar, name: 'Flexible Check-in/out' },
    { icon: Utensils, name: 'Kitchenette (Apartments)' },
    { icon: Navigation, name: 'Local Area Guides' },
  ];

  // Cities with Accommodation
  const cities = [
    {
      name: 'Bangalore',
      hospitals: 'Apollo, Fortis, Manipal, Narayana Health',
      properties: '50+ partner hotels',
      highlight: 'Pentouz Hotels HQ',
    },
    {
      name: 'Mumbai',
      hospitals: 'Kokilaben, Lilavati, Hinduja, Breach Candy',
      properties: '40+ partner hotels',
      highlight: 'Near International Airport',
    },
    {
      name: 'Delhi NCR',
      hospitals: 'AIIMS, Medanta, Fortis, Max, BLK-Max',
      properties: '60+ partner hotels',
      highlight: 'Central Location',
    },
    {
      name: 'Chennai',
      hospitals: 'Apollo, MIOT, Fortis Malar, Global Health City',
      properties: '35+ partner hotels',
      highlight: 'Beach City Recovery',
    },
  ];

  // Transportation Services
  const transportServices = [
    {
      service: 'Airport Pickup',
      description: 'Meet & greet at arrivals with name board',
      price: 'Included',
    },
    {
      service: 'Hospital Daily Shuttle',
      description: 'Morning drop-off, evening pickup from hospital',
      price: 'Included',
    },
    {
      service: 'Local Sightseeing',
      description: 'Weekend tours, shopping trips, cultural visits',
      price: '$20-50/day',
    },
    {
      service: 'Outstation Travel',
      description: 'Day trips to nearby cities (Ooty, Mysore, etc.)',
      price: '$50-100/day',
    },
  ];

  // Translator Services
  const translatorServices = [
    {
      language: 'Arabic',
      availability: '24/7',
      description: 'Native Arabic speakers for GCC patients',
    },
    {
      language: 'English',
      availability: '24/7',
      description: 'Fluent medical terminology translators',
    },
    {
      language: 'Urdu',
      availability: 'On Request',
      description: 'Available for Pakistani patients',
    },
    {
      language: 'Other Languages',
      availability: 'On Request',
      description: 'French, Russian, Swahili, Somali available',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Comfortable Accommodation & Hospitality
          </h1>
          <p className="mx-auto mb-2 max-w-3xl text-xl text-primary-100">
            Premium stays near India&apos;s top hospitals with complete support services
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-100">
            Airport transfers • Translator services • Halal meals • 24/7 assistance
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/booking">Book Accommodation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-700"
            >
              <Link href="tel:+918970298300">Call +91 89702 98300</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* GCC/Muslim-Friendly Features - PROMINENT */}
      <section className="border-b-4 border-green-100 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-6 py-2 text-sm font-bold text-green-700">
              <Sparkles className="h-5 w-5" />
              Muslim-Friendly & GCC Comfort
            </div>
            <h2 className="mb-6 font-serif text-4xl font-bold text-gray-900 md:text-5xl">
              Complete Comfort for GCC & Muslim Patients
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-700">
              We understand your needs. Halal food, nearby mosques, Arabic-speaking staff, prayer facilities - everything you need to feel at home during your medical journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Mosque/Prayer Facilities */}
            <Card className="group border-4 border-green-200 bg-white transition-all hover:scale-105 hover:border-green-400 hover:shadow-2xl">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-xl transition-all group-hover:scale-110">
                  <Church className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-center text-xl font-bold">Nearby Mosques & Prayer Rooms</CardTitle>
                <div className="mt-2 text-center">
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                    <CheckCircle className="h-3 w-3" />
                    5-10 min walk
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-center text-gray-700">
                  Masjid Juma (Indiranagar), Frazer Town Mosque, Shivaji Nagar Jama Masjid within 5-15 minutes from all our properties.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <span>Prayer mats & Qibla direction in all rooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <span>Wudu facilities at hotels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <span>Prayer time notifications available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 100% Halal Food */}
            <Card className="group border-4 border-orange-200 bg-white transition-all hover:scale-105 hover:border-orange-400 hover:shadow-2xl">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl transition-all group-hover:scale-110">
                  <Utensils className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-center text-xl font-bold">100% Certified Halal Food</CardTitle>
                <div className="mt-2 text-center">
                  <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                    <CheckCircle className="h-3 w-3" />
                    Halal Certified
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-center text-gray-700">
                  All meals prepared with halal-certified ingredients. Choose from Arabic, Indian, Continental cuisines.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                    <span>Emirati, Saudi, Kuwaiti dishes available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                    <span>Special dietary requests accommodated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                    <span>Family-style dining options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Arabic Speaking Staff 24/7 */}
            <Card className="group border-4 border-blue-200 bg-white transition-all hover:scale-105 hover:border-blue-400 hover:shadow-2xl">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl transition-all group-hover:scale-110">
                  <Languages className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-center text-xl font-bold">Native Arabic Staff 24/7</CardTitle>
                <div className="mt-2 text-center">
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                    <CheckCircle className="h-3 w-3" />
                    Round-the-clock
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-center text-gray-700">
                  Our Arabic coordinators have lived in UAE, Saudi Arabia, Qatar - they understand your dialect perfectly.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    <span>Emirati, Saudi, Qatari dialects fluent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    <span>WhatsApp support in Arabic anytime</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    <span>Cultural understanding & sensitivity</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Family & Women-Friendly */}
            <Card className="group border-4 border-purple-200 bg-white transition-all hover:scale-105 hover:border-purple-400 hover:shadow-2xl">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 shadow-xl transition-all group-hover:scale-110">
                  <UserCheck className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-center text-xl font-bold">Family & Women-Friendly</CardTitle>
                <div className="mt-2 text-center">
                  <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">
                    <CheckCircle className="h-3 w-3" />
                    Private & Safe
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-center text-gray-700">
                  Female staff available for women patients. Family suites. Conservative, respectful environment.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />
                    <span>Female doctors & nurses upon request</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />
                    <span>Adjoining rooms for families</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />
                    <span>Privacy & modesty respected</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Additional Comforts */}
          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            <Card className="border-2 border-green-100 bg-white text-center transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <Coffee className="mx-auto mb-2 h-8 w-8 text-green-600" />
                <p className="text-sm font-semibold text-gray-700">Arabic Coffee & Dates</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-100 bg-white text-center transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <Bed className="mx-auto mb-2 h-8 w-8 text-green-600" />
                <p className="text-sm font-semibold text-gray-700">Separate Beds for Families</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-100 bg-white text-center transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <Globe className="mx-auto mb-2 h-8 w-8 text-green-600" />
                <p className="text-sm font-semibold text-gray-700">Arabic TV Channels</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-100 bg-white text-center transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <Shield className="mx-auto mb-2 h-8 w-8 text-green-600" />
                <p className="text-sm font-semibold text-gray-700">Women-Only Floors</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-100 bg-white text-center transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <Heart className="mx-auto mb-2 h-8 w-8 text-green-600" />
                <p className="text-sm font-semibold text-gray-700">Modest Dress Code Respected</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-100 bg-white text-center transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <Phone className="mx-auto mb-2 h-8 w-8 text-green-600" />
                <p className="text-sm font-semibold text-gray-700">24/7 Halal Food Hotline</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Accommodation */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
          Why Choose Our Accommodation Services?
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          We understand medical tourism needs. Everything is arranged for your comfort and peace of
          mind.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="text-center transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Partner Hotels - Pentouz Properties */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Star className="h-6 w-6 text-accent-500" fill="currentColor" />
              <h2 className="font-serif text-3xl font-bold text-gray-900">
                Premium Partner: The Pentouz Hotels
              </h2>
              <Star className="h-6 w-6 text-accent-500" fill="currentColor" />
            </div>
            <p className="mx-auto max-w-2xl text-gray-600">
              Exclusive partnership with Pentouz - boutique luxury hotels in prime Bangalore
              locations
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Contact: +91 89702 98300 | sales@pentouz.com
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pentozProperties.map((property, index) => (
              <Card key={index} className="overflow-hidden transition-shadow hover:shadow-xl">
                <div className="h-48 bg-gradient-to-br from-primary-500 to-accent-500"></div>
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <CardTitle className="text-xl">{property.name}</CardTitle>
                    <span className="rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700">
                      {property.type}
                    </span>
                  </div>
                  <CardDescription className="flex items-start gap-2">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-gray-400" />
                    <span>{property.location}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Navigation className="h-4 w-4 text-primary-500" />
                      <span>{property.distance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary-600">
                      <span>{property.price}</span>
                    </div>
                    <div className="mt-2 rounded-lg bg-primary-50 p-3">
                      <p className="mb-2 text-xs font-semibold text-primary-700">
                        ✨ {property.ideal}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {property.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-1 text-xs text-gray-600">
                            <Check className="h-3 w-3 text-green-600" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/booking">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              🌟 Special rates for medical tourists | 🏆 Pentouz Privé Club membership benefits
              available
            </p>
          </div>
        </div>
      </section>

      {/* Accommodation Types */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
          Choose Your Comfort Level
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          From budget-friendly to luxury stays - we have options for every need and budget
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {accommodationTypes.map((type, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
                  <type.icon className="h-7 w-7 text-primary-600" />
                </div>
                <CardTitle className="text-xl">{type.type}</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary-600">
                  {type.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-gray-600">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
            All-Inclusive Amenities
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Every accommodation includes these essential facilities
          </p>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 rounded-lg bg-white p-4 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <amenity.icon className="h-8 w-8 text-primary-600" />
                <span className="text-sm font-medium text-gray-700">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Coverage */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
          Available in Major Medical Tourism Cities
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Strategic locations near India&apos;s best hospitals
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {cities.map((city, index) => (
            <Card key={index} className="text-center transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{city.name}</CardTitle>
                <div className="mt-2 inline-block rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700">
                  {city.highlight}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="mb-1 font-semibold text-gray-700">Top Hospitals:</p>
                    <p className="text-gray-600">{city.hospitals}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary-600">{city.properties}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Transportation Services */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
            Complete Transportation Services
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            From airport to hospital to sightseeing - we&apos;ve got you covered
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {transportServices.map((transport, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{transport.service}</CardTitle>
                      <CardDescription className="mt-2">{transport.description}</CardDescription>
                    </div>
                    <span className="ml-4 shrink-0 rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700">
                      {transport.price}
                    </span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              🚗 All vehicles are clean, air-conditioned, and GPS-tracked for your safety
            </p>
          </div>
        </div>
      </section>

      {/* Translator Services */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
          Professional Translator Services
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Break language barriers with our experienced medical translators
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {translatorServices.map((translator, index) => (
            <Card key={index} className="text-center transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <Languages className="h-8 w-8 text-primary-600" />
                </div>
                <CardTitle className="text-xl">{translator.language}</CardTitle>
                <div className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  {translator.availability}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{translator.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="border-primary-200 bg-primary-50">
            <CardHeader>
              <CardTitle className="text-center text-2xl">What Our Translators Do</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <HandHeart className="mx-auto mb-3 h-10 w-10 text-primary-600" />
                  <h4 className="mb-2 font-semibold text-gray-900">Medical Consultations</h4>
                  <p className="text-sm text-gray-600">
                    Accompany you to doctor appointments and translate medical discussions
                  </p>
                </div>
                <div className="text-center">
                  <MessageCircle className="mx-auto mb-3 h-10 w-10 text-primary-600" />
                  <h4 className="mb-2 font-semibold text-gray-900">Daily Assistance</h4>
                  <p className="text-sm text-gray-600">
                    Help with pharmacy, food ordering, local communication
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="mx-auto mb-3 h-10 w-10 text-primary-600" />
                  <h4 className="mb-2 font-semibold text-gray-900">Emergency Support</h4>
                  <p className="text-sm text-gray-600">
                    24/7 phone translation for urgent medical situations
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
            Accommodation Packages
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            All-inclusive packages with accommodation, meals, transport, and translator services
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Budget Package */}
            <Card className="border-2">
              <CardHeader className="bg-gray-100">
                <CardTitle className="text-center text-2xl">Budget Package</CardTitle>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold text-gray-900">$40</span>
                  <span className="text-gray-600">/day</span>
                </div>
                <p className="mt-2 text-center text-sm text-gray-600">
                  Perfect for cost-conscious travelers
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {[
                    'Budget hotel near hospital',
                    'Daily breakfast included',
                    'Airport pickup & drop',
                    'Hospital daily shuttle',
                    'Phone translator support',
                    'WiFi & basic amenities',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full">
                  <Link href="/booking">Select Package</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Comfort Package */}
            <Card className="border-2 border-primary-500 shadow-lg">
              <CardHeader className="bg-gradient-to-br from-primary-500 to-primary-600 text-white">
                <div className="mb-2 text-center">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-primary-600">
                    MOST POPULAR
                  </span>
                </div>
                <CardTitle className="text-center text-2xl">Comfort Package</CardTitle>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold">$75</span>
                  <span className="text-primary-100">/day</span>
                </div>
                <p className="mt-2 text-center text-sm text-primary-100">
                  Best value for families
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {[
                    'Mid-range hotel (3-4 star)',
                    'All meals (halal options)',
                    'Airport transfers with assistant',
                    'Hospital shuttle + local transport',
                    'In-person translator (8 hrs/day)',
                    'WiFi, housekeeping, laundry',
                    'SIM card with data',
                    'Medical appointment coordination',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full">
                  <Link href="/booking">Select Package</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Luxury Package */}
            <Card className="border-2 border-accent-500">
              <CardHeader className="bg-gradient-to-br from-accent-500 to-accent-600 text-white">
                <CardTitle className="text-center text-2xl">Luxury Package</CardTitle>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold">$150</span>
                  <span className="text-accent-100">/day</span>
                </div>
                <p className="mt-2 text-center text-sm text-accent-100">
                  Premium experience with Pentouz Hotels
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {[
                    'Pentouz Hotels or 5-star property',
                    'Premium suite accommodation',
                    'All meals + in-room dining',
                    'Private luxury car transfers',
                    'Dedicated personal translator',
                    'Concierge & personal assistant',
                    'Spa & wellness access',
                    'Priority medical appointments',
                    'VIP lounge access',
                    'Complimentary local sightseeing',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full" variant="default">
                  <Link href="/booking">Select Package</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="mb-2 text-sm text-gray-600">
              💡 <strong>Weekly & Monthly Discounts:</strong> Save 10-20% on extended stays
            </p>
            <p className="text-sm text-gray-600">
              🏥 <strong>Hospital Partner Rates:</strong> Special pricing near Apollo, Fortis,
              Manipal, Narayana Health
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
          How It Works
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Simple 4-step process from booking to checkout
        </p>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              step: '1',
              title: 'Book Your Package',
              description: 'Choose accommodation type and duration. Share arrival details.',
            },
            {
              step: '2',
              title: 'Airport Pickup',
              description: 'Our team meets you at arrivals with name board. Direct transfer to accommodation.',
            },
            {
              step: '3',
              title: 'Treatment Period',
              description: 'Daily hospital shuttles, translator support, meals, all arranged.',
            },
            {
              step: '4',
              title: 'Departure Assistance',
              description: 'Airport drop-off, travel documents help, follow-up support.',
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 font-serif text-2xl font-bold text-white">
                  {item.step}
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                question: 'Is halal food available?',
                answer:
                  'Yes! All our partner accommodations provide authentic halal meals. We work with certified halal restaurants and can arrange in-room dining with halal options. Special dietary requirements (vegetarian, diabetic-friendly) are also accommodated.',
              },
              {
                question: 'How far are accommodations from hospitals?',
                answer:
                  'We strategically select properties within 10-20 minutes of major hospitals. Pentouz Lavelle Road is just 10 minutes from Apollo and Fortis Bangalore. Daily hospital shuttles ensure you never worry about commute.',
              },
              {
                question: 'Can family members stay together?',
                answer:
                  'Absolutely! We offer family suites and serviced apartments that can accommodate 2-6 people. Connecting rooms and larger apartments are available for families traveling together for treatment.',
              },
              {
                question: 'What if I need emergency medical help at night?',
                answer:
                  'Our 24/7 support team is always available via phone (+91 89702 98300). We have Arabic and English translators on call. In emergencies, we coordinate immediate hospital transport and translator assistance.',
              },
              {
                question: 'Are translators medically trained?',
                answer:
                  'Yes, our translators have medical terminology training and experience with healthcare interpretation. They understand medical jargon and can accurately translate doctor consultations, prescriptions, and medical reports.',
              },
              {
                question: 'Can I extend my stay if treatment takes longer?',
                answer:
                  'Yes, we offer flexible check-out dates. If your treatment duration extends, simply inform us 24 hours in advance and we&apos;ll extend your accommodation. Weekly rates apply for extended stays (10-20% discount).',
              },
              {
                question: 'What about prayer facilities?',
                answer:
                  'Most of our partner hotels have dedicated prayer rooms. Serviced apartments provide private space for prayers. We can also provide prayer mats, Qibla direction, and information about nearby mosques.',
              },
              {
                question: 'Is airport pickup really free?',
                answer:
                  'Yes, complimentary airport pickup and drop-off are included in all packages (Budget, Comfort, Luxury). Our driver meets you at arrivals with a name board and helps with luggage. Flight delays are tracked automatically.',
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold">Ready to Book Your Stay?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Let us handle accommodation, transport, and translation - you focus on recovery
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/booking">Book Accommodation Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-700"
            >
              <Link href="tel:+918970298300">Call +91 89702 98300</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-700"
            >
              <Link href="https://wa.me/918970298300" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-100">
            🌟 Partner with Pentouz Hotels Bangalore | 🏥 Near all major hospitals | 🌍 Serving
            500,000+ international patients
          </p>
        </div>
      </section>
    </div>
  );
}
