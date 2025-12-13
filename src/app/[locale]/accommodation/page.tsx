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
import { generateSEOMetadata } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return generateSEOMetadata({
    title_en: 'Patient Accommodation & Hospitality Services | Medical Tourism India',
    title_ar: 'خدمات الإقامة والضيافة للمرضى | السياحة العلاجية في الهند',
    description_en:
      'Comfortable accommodation for medical tourists in India. Airport pickup, translator services, halal meals, near-hospital stays. Partner hotels in Bangalore, Mumbai, Delhi, Chennai.',
    description_ar:
      'إقامة مريحة للسياح الطبيين في الهند. خدمة النقل من المطار، خدمات الترجمة، وجبات حلال، إقامة قريبة من المستشفيات. فنادق شريكة في بنغالور، مومباي، دلهي، تشيناي.',
    locale,
    path: '/accommodation',
  });
}

export default async function AccommodationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const content = {
    en: {
      hero: {
        title: 'Comfortable Accommodation & Hospitality',
        subtitle: "Premium stays near India's top hospitals with complete support services",
        features: 'Airport transfers • Translator services • Halal meals • 24/7 assistance',
        buttons: {
          book: 'Book Accommodation',
          call: 'Call +91 89702 98300',
        },
      },
      gccFriendly: {
        badge: 'Muslim-Friendly & GCC Comfort',
        title: 'Complete Comfort for GCC & Muslim Patients',
        subtitle:
          'We understand your needs. Halal food, nearby mosques, Arabic-speaking staff, prayer facilities - everything you need to feel at home during your medical journey.',
        cards: {
          mosque: {
            title: 'Nearby Mosques & Prayer Rooms',
            badge: '5-10 min walk',
            description:
              'Masjid Juma (Indiranagar), Frazer Town Mosque, Shivaji Nagar Jama Masjid within 5-15 minutes from all our properties.',
            features: [
              'Prayer mats & Qibla direction in all rooms',
              'Wudu facilities at hotels',
              'Prayer time notifications available',
            ],
          },
          halal: {
            title: '100% Certified Halal Food',
            badge: 'Halal Certified',
            description:
              'All meals prepared with halal-certified ingredients. Choose from Arabic, Indian, Continental cuisines.',
            features: [
              'Emirati, Saudi, Kuwaiti dishes available',
              'Special dietary requests accommodated',
              'Family-style dining options',
            ],
          },
          arabic: {
            title: 'Native Arabic Staff 24/7',
            badge: 'Round-the-clock',
            description:
              'Our Arabic coordinators have lived in UAE, Saudi Arabia, Qatar - they understand your dialect perfectly.',
            features: [
              'Emirati, Saudi, Qatari dialects fluent',
              'WhatsApp support in Arabic anytime',
              'Cultural understanding & sensitivity',
            ],
          },
          family: {
            title: 'Family & Women-Friendly',
            badge: 'Private & Safe',
            description:
              'Female staff available for women patients. Family suites. Conservative, respectful environment.',
            features: [
              'Female doctors & nurses upon request',
              'Adjoining rooms for families',
              'Privacy & modesty respected',
            ],
          },
        },
        additional: [
          'Arabic Coffee & Dates',
          'Separate Beds for Families',
          'Arabic TV Channels',
          'Women-Only Floors',
          'Modest Dress Code Respected',
          '24/7 Halal Food Hotline',
        ],
      },
      services: {
        title: 'Why Choose Our Accommodation Services?',
        subtitle:
          'We understand medical tourism needs. Everything is arranged for your comfort and peace of mind.',
        items: [
          {
            title: 'Airport Pickup & Drop',
            description: 'Complimentary airport transfers with flight tracking',
          },
          {
            title: 'Hospital Transportation',
            description: 'Daily shuttle service to/from hospitals for appointments',
          },
          {
            title: 'Translator Services',
            description: 'Arabic, English translators available 24/7',
          },
          {
            title: 'Halal Meals',
            description: 'Authentic halal food options for GCC patients',
          },
          {
            title: '24/7 Assistance',
            description: 'Dedicated support team for any needs, anytime',
          },
          {
            title: 'Security & Safety',
            description: 'Secure accommodations with 24/7 surveillance',
          },
        ],
      },
      pentouz: {
        badge: 'Premium Partner: The Pentouz Hotels',
        subtitle: 'Exclusive partnership with Pentouz - boutique luxury hotels in prime Bangalore locations',
        contact: 'Contact: +91 89702 98300 | sales@pentouz.com',
        properties: [
          {
            name: 'The Pentouz Indiranagar',
            location: '100 Feet Road, Indiranagar, Bangalore',
            type: 'Boutique Hotel',
            distance: '15 min from major hospitals',
            price: '$80-150/night',
            features: ['Rooftop Terrace', 'Restaurant', 'Premium Suites', 'Business Center'],
            ideal: 'Luxury & Comfort',
          },
          {
            name: 'The Pentouz Lavelle Road',
            location: '46, 6th Cross, Lavelle Road, Bangalore',
            type: 'Boutique Hotel',
            distance: '10 min from Apollo, Fortis',
            price: '$90-180/night',
            features: ['Central Location', 'Fine Dining', 'Event Spaces', 'Lounge'],
            ideal: 'Prime Urban Location',
          },
          {
            name: 'The Pentouz Windsor Heights',
            location: 'Ooty, Tamil Nadu',
            type: 'Resort',
            distance: 'Recovery & Wellness Retreat',
            price: '$70-130/night',
            features: ['Scenic Views', 'Tea Gardens', 'Nature Walks', 'Peaceful'],
            ideal: 'Post-Treatment Recovery',
          },
        ],
        footer: '🌟 Special rates for medical tourists | 🏆 Pentouz Privé Club membership benefits available',
        bookButton: 'Book Now',
      },
      accommodationTypes: {
        title: 'Choose Your Comfort Level',
        subtitle: 'From budget-friendly to luxury stays - we have options for every need and budget',
        types: [
          {
            type: 'Budget Stays',
            price: '$25-50/night',
            description: 'Clean, comfortable rooms near hospitals',
            features: ['Basic Amenities', 'WiFi', 'Daily Housekeeping', 'Airport Transfer'],
          },
          {
            type: 'Comfort Hotels',
            price: '$50-100/night',
            description: 'Mid-range hotels with excellent facilities',
            features: ['AC Rooms', 'Restaurant', '24/7 Service', 'Laundry'],
          },
          {
            type: 'Luxury Properties',
            price: '$100-250/night',
            description: 'Premium hotels like Pentouz, 5-star chains',
            features: ['Premium Suites', 'Fine Dining', 'Spa', 'Concierge'],
          },
          {
            type: 'Serviced Apartments',
            price: '$60-120/night',
            description: 'Home-like stays for families, long-term patients',
            features: ['Kitchen', 'Living Room', 'Washing Machine', 'Privacy'],
          },
        ],
      },
      amenities: {
        title: 'All-Inclusive Amenities',
        subtitle: 'Every accommodation includes these essential facilities',
        items: [
          'High-Speed WiFi',
          'In-Room Dining',
          'International TV Channels',
          'Prayer Rooms',
          'Family Suites',
          'Daily Housekeeping',
          'Free Parking',
          '24/7 Security',
          'Concierge Service',
          'Flexible Check-in/out',
          'Kitchenette (Apartments)',
          'Local Area Guides',
        ],
      },
      cities: {
        title: 'Available in Major Medical Tourism Cities',
        subtitle: "Strategic locations near India's best hospitals",
        list: [
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
        ],
        labels: {
          hospitals: 'Top Hospitals:',
        },
      },
      transport: {
        title: 'Complete Transportation Services',
        subtitle: "From airport to hospital to sightseeing - we've got you covered",
        services: [
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
        ],
        footer: '🚗 All vehicles are clean, air-conditioned, and GPS-tracked for your safety',
      },
      translator: {
        title: 'Professional Translator Services',
        subtitle: 'Break language barriers with our experienced medical translators',
        languages: [
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
        ],
        whatTheyDo: {
          title: 'What Our Translators Do',
          items: [
            {
              title: 'Medical Consultations',
              description: 'Accompany you to doctor appointments and translate medical discussions',
            },
            {
              title: 'Daily Assistance',
              description: 'Help with pharmacy, food ordering, local communication',
            },
            {
              title: 'Emergency Support',
              description: '24/7 phone translation for urgent medical situations',
            },
          ],
        },
      },
      packages: {
        title: 'Accommodation Packages',
        subtitle: 'All-inclusive packages with accommodation, meals, transport, and translator services',
        budget: {
          title: 'Budget Package',
          price: '$40',
          period: '/day',
          subtitle: 'Perfect for cost-conscious travelers',
          features: [
            'Budget hotel near hospital',
            'Daily breakfast included',
            'Airport pickup & drop',
            'Hospital daily shuttle',
            'Phone translator support',
            'WiFi & basic amenities',
          ],
          button: 'Select Package',
        },
        comfort: {
          badge: 'MOST POPULAR',
          title: 'Comfort Package',
          price: '$75',
          period: '/day',
          subtitle: 'Best value for families',
          features: [
            'Mid-range hotel (3-4 star)',
            'All meals (halal options)',
            'Airport transfers with assistant',
            'Hospital shuttle + local transport',
            'In-person translator (8 hrs/day)',
            'WiFi, housekeeping, laundry',
            'SIM card with data',
            'Medical appointment coordination',
          ],
          button: 'Select Package',
        },
        luxury: {
          title: 'Luxury Package',
          price: '$150',
          period: '/day',
          subtitle: 'Premium experience with Pentouz Hotels',
          features: [
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
          ],
          button: 'Select Package',
        },
        footer: {
          weekly: '💡 Weekly & Monthly Discounts: Save 10-20% on extended stays',
          hospital:
            '🏥 Hospital Partner Rates: Special pricing near Apollo, Fortis, Manipal, Narayana Health',
        },
      },
      howItWorks: {
        title: 'How It Works',
        subtitle: 'Simple 4-step process from booking to checkout',
        steps: [
          {
            step: '1',
            title: 'Book Your Package',
            description: 'Choose accommodation type and duration. Share arrival details.',
          },
          {
            step: '2',
            title: 'Airport Pickup',
            description:
              'Our team meets you at arrivals with name board. Direct transfer to accommodation.',
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
        ],
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
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
              "Yes, we offer flexible check-out dates. If your treatment duration extends, simply inform us 24 hours in advance and we'll extend your accommodation. Weekly rates apply for extended stays (10-20% discount).",
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
        ],
      },
      cta: {
        title: 'Ready to Book Your Stay?',
        subtitle: 'Let us handle accommodation, transport, and translation - you focus on recovery',
        buttons: {
          book: 'Book Accommodation Now',
          call: 'Call +91 89702 98300',
          whatsapp: 'WhatsApp Us',
        },
        footer:
          '🌟 Partner with Pentouz Hotels Bangalore | 🏥 Near all major hospitals | 🌍 Serving 500,000+ international patients',
      },
    },
    ar: {
      hero: {
        title: 'إقامة وضيافة مريحة',
        subtitle: 'إقامة فاخرة بالقرب من أفضل مستشفيات الهند مع خدمات دعم كاملة',
        features: 'النقل من المطار • خدمات الترجمة • وجبات حلال • مساعدة على مدار الساعة',
        buttons: {
          book: 'احجز الإقامة',
          call: 'اتصل +91 89702 98300',
        },
      },
      gccFriendly: {
        badge: 'صديقة للمسلمين وراحة دول الخليج',
        title: 'راحة كاملة لمرضى دول الخليج والمسلمين',
        subtitle:
          'نحن نفهم احتياجاتك. طعام حلال، مساجد قريبة، موظفون يتحدثون العربية، مرافق للصلاة - كل ما تحتاجه للشعور بالراحة خلال رحلتك العلاجية.',
        cards: {
          mosque: {
            title: 'مساجد قريبة وغرف صلاة',
            badge: '5-10 دقائق سيرًا',
            description:
              'مسجد جمعة (إنديرا ناغار)، مسجد فريزر تاون، مسجد شيفاجي ناغار الجامع على بعد 5-15 دقيقة من جميع ممتلكاتنا.',
            features: [
              'سجادات صلاة واتجاه القبلة في جميع الغرف',
              'مرافق الوضوء في الفنادق',
              'إشعارات أوقات الصلاة متاحة',
            ],
          },
          halal: {
            title: 'طعام حلال معتمد 100%',
            badge: 'معتمد حلال',
            description:
              'جميع الوجبات محضرة بمكونات حلال معتمدة. اختر من المأكولات العربية والهندية والعالمية.',
            features: [
              'أطباق إماراتية وسعودية وكويتية متاحة',
              'تلبية طلبات الحمية الخاصة',
              'خيارات تناول الطعام العائلي',
            ],
          },
          arabic: {
            title: 'موظفون عرب على مدار الساعة',
            badge: 'على مدار الساعة',
            description:
              'منسقونا العرب عاشوا في الإمارات والسعودية وقطر - يفهمون لهجتك تمامًا.',
            features: [
              'يتقنون اللهجات الإماراتية والسعودية والقطرية',
              'دعم واتساب بالعربية في أي وقت',
              'فهم واحترام ثقافي',
            ],
          },
          family: {
            title: 'صديقة للعائلات والنساء',
            badge: 'خاصة وآمنة',
            description:
              'موظفات متاحات للمريضات. أجنحة عائلية. بيئة محافظة ومحترمة.',
            features: [
              'طبيبات وممرضات عند الطلب',
              'غرف متجاورة للعائلات',
              'احترام الخصوصية والحشمة',
            ],
          },
        },
        additional: [
          'قهوة عربية وتمر',
          'أسرّة منفصلة للعائلات',
          'قنوات تلفزيون عربية',
          'طوابق للنساء فقط',
          'احترام اللباس المحتشم',
          'خط ساخن للطعام الحلال 24/7',
        ],
      },
      services: {
        title: 'لماذا تختار خدمات الإقامة لدينا؟',
        subtitle: 'نحن نفهم احتياجات السياحة العلاجية. كل شيء مرتب لراحتك وراحة بالك.',
        items: [
          {
            title: 'النقل من وإلى المطار',
            description: 'نقل مجاني من المطار مع تتبع الرحلات',
          },
          {
            title: 'النقل إلى المستشفى',
            description: 'خدمة نقل يومية من وإلى المستشفيات للمواعيد',
          },
          {
            title: 'خدمات الترجمة',
            description: 'مترجمون عرب وإنجليز متاحون على مدار الساعة',
          },
          {
            title: 'وجبات حلال',
            description: 'خيارات طعام حلال أصيلة لمرضى دول الخليج',
          },
          {
            title: 'مساعدة على مدار الساعة',
            description: 'فريق دعم مخصص لأي احتياجات، في أي وقت',
          },
          {
            title: 'الأمن والسلامة',
            description: 'إقامة آمنة مع مراقبة على مدار الساعة',
          },
        ],
      },
      pentouz: {
        badge: 'شريك متميز: فنادق بنتوز',
        subtitle: 'شراكة حصرية مع بنتوز - فنادق بوتيك فاخرة في مواقع رئيسية في بنغالور',
        contact: 'اتصل: +91 89702 98300 | sales@pentouz.com',
        properties: [
          {
            name: 'The Pentouz Indiranagar',
            location: '100 Feet Road، إنديرا ناغار، بنغالور',
            type: 'فندق بوتيك',
            distance: '15 دقيقة من المستشفيات الرئيسية',
            price: '$80-150/ليلة',
            features: ['تراس على السطح', 'مطعم', 'أجنحة فاخرة', 'مركز أعمال'],
            ideal: 'فخامة وراحة',
          },
          {
            name: 'The Pentouz Lavelle Road',
            location: '46، 6th Cross، Lavelle Road، بنغالور',
            type: 'فندق بوتيك',
            distance: '10 دقائق من أبولو، فورتيس',
            price: '$90-180/ليلة',
            features: ['موقع مركزي', 'مطعم راقي', 'قاعات فعاليات', 'صالة'],
            ideal: 'موقع حضري رئيسي',
          },
          {
            name: 'The Pentouz Windsor Heights',
            location: 'أوتي، تاميل نادو',
            type: 'منتجع',
            distance: 'ملاذ للاستشفاء والعافية',
            price: '$70-130/ليلة',
            features: ['مناظر خلابة', 'حدائق شاي', 'مشي في الطبيعة', 'هادئ'],
            ideal: 'التعافي بعد العلاج',
          },
        ],
        footer: '🌟 أسعار خاصة للسياح الطبيين | 🏆 مزايا عضوية Pentouz Privé Club متاحة',
        bookButton: 'احجز الآن',
      },
      accommodationTypes: {
        title: 'اختر مستوى راحتك',
        subtitle: 'من الإقامة الاقتصادية إلى الفاخرة - لدينا خيارات لكل احتياج وميزانية',
        types: [
          {
            type: 'إقامة اقتصادية',
            price: '$25-50/ليلة',
            description: 'غرف نظيفة ومريحة بالقرب من المستشفيات',
            features: ['وسائل راحة أساسية', 'واي فاي', 'تنظيف يومي', 'نقل من المطار'],
          },
          {
            type: 'فنادق مريحة',
            price: '$50-100/ليلة',
            description: 'فنادق متوسطة مع مرافق ممتازة',
            features: ['غرف مكيفة', 'مطعم', 'خدمة 24/7', 'غسيل ملابس'],
          },
          {
            type: 'ممتلكات فاخرة',
            price: '$100-250/ليلة',
            description: 'فنادق فاخرة مثل بنتوز، سلاسل 5 نجوم',
            features: ['أجنحة فاخرة', 'مطعم راقي', 'سبا', 'خدمة كونسيرج'],
          },
          {
            type: 'شقق مفروشة',
            price: '$60-120/ليلة',
            description: 'إقامة منزلية للعائلات، مرضى طويلة الأمد',
            features: ['مطبخ', 'غرفة معيشة', 'غسالة', 'خصوصية'],
          },
        ],
      },
      amenities: {
        title: 'وسائل الراحة الشاملة',
        subtitle: 'كل إقامة تشمل هذه المرافق الأساسية',
        items: [
          'واي فاي عالي السرعة',
          'خدمة الطعام في الغرفة',
          'قنوات تلفزيون دولية',
          'غرف صلاة',
          'أجنحة عائلية',
          'تنظيف يومي',
          'مواقف مجانية',
          'أمن على مدار الساعة',
          'خدمة كونسيرج',
          'تسجيل دخول/خروج مرن',
          'مطبخ صغير (شقق)',
          'أدلة المنطقة المحلية',
        ],
      },
      cities: {
        title: 'متوفر في المدن الرئيسية للسياحة العلاجية',
        subtitle: 'مواقع استراتيجية بالقرب من أفضل مستشفيات الهند',
        list: [
          {
            name: 'بنغالور',
            hospitals: 'أبولو، فورتيس، مانيبال، نارايانا هيلث',
            properties: '50+ فندق شريك',
            highlight: 'مقر فنادق بنتوز',
          },
          {
            name: 'مومباي',
            hospitals: 'كوكيلابين، ليلافاتي، هندوجا، بريتش كاندي',
            properties: '40+ فندق شريك',
            highlight: 'قرب المطار الدولي',
          },
          {
            name: 'دلهي NCR',
            hospitals: 'AIIMS، ميدانتا، فورتيس، ماكس، BLK-Max',
            properties: '60+ فندق شريك',
            highlight: 'موقع مركزي',
          },
          {
            name: 'تشيناي',
            hospitals: 'أبولو، MIOT، فورتيس مالار، مدينة الصحة العالمية',
            properties: '35+ فندق شريك',
            highlight: 'التعافي في مدينة الشاطئ',
          },
        ],
        labels: {
          hospitals: 'أفضل المستشفيات:',
        },
      },
      transport: {
        title: 'خدمات نقل كاملة',
        subtitle: 'من المطار إلى المستشفى إلى مشاهدة المعالم - نحن نغطي كل شيء',
        services: [
          {
            service: 'النقل من المطار',
            description: 'استقبال في قاعة الوصول مع لوحة اسم',
            price: 'مشمول',
          },
          {
            service: 'نقل يومي إلى المستشفى',
            description: 'توصيل صباحي، استلام مسائي من المستشفى',
            price: 'مشمول',
          },
          {
            service: 'مشاهدة معالم محلية',
            description: 'جولات نهاية الأسبوع، رحلات تسوق، زيارات ثقافية',
            price: '$20-50/يوم',
          },
          {
            service: 'سفر خارج المدينة',
            description: 'رحلات يومية إلى مدن قريبة (أوتي، ميسور، إلخ.)',
            price: '$50-100/يوم',
          },
        ],
        footer: '🚗 جميع المركبات نظيفة ومكيفة ومتتبعة بنظام GPS لسلامتك',
      },
      translator: {
        title: 'خدمات ترجمة احترافية',
        subtitle: 'كسر حواجز اللغة مع مترجمينا الطبيين ذوي الخبرة',
        languages: [
          {
            language: 'العربية',
            availability: 'على مدار الساعة',
            description: 'متحدثون عرب أصليون لمرضى دول الخليج',
          },
          {
            language: 'الإنجليزية',
            availability: 'على مدار الساعة',
            description: 'مترجمون متقنون للمصطلحات الطبية',
          },
          {
            language: 'الأوردو',
            availability: 'عند الطلب',
            description: 'متاح للمرضى الباكستانيين',
          },
          {
            language: 'لغات أخرى',
            availability: 'عند الطلب',
            description: 'الفرنسية، الروسية، السواحيلية، الصومالية متاحة',
          },
        ],
        whatTheyDo: {
          title: 'ما الذي يفعله مترجمونا',
          items: [
            {
              title: 'الاستشارات الطبية',
              description: 'مرافقتك لمواعيد الطبيب وترجمة المناقشات الطبية',
            },
            {
              title: 'المساعدة اليومية',
              description: 'المساعدة في الصيدلية، طلب الطعام، التواصل المحلي',
            },
            {
              title: 'الدعم الطارئ',
              description: 'ترجمة هاتفية على مدار الساعة للحالات الطبية العاجلة',
            },
          ],
        },
      },
      packages: {
        title: 'باقات الإقامة',
        subtitle: 'باقات شاملة مع الإقامة والوجبات والنقل وخدمات الترجمة',
        budget: {
          title: 'باقة اقتصادية',
          price: '$40',
          period: '/يوم',
          subtitle: 'مثالية للمسافرين المهتمين بالتكلفة',
          features: [
            'فندق اقتصادي قرب المستشفى',
            'إفطار يومي مشمول',
            'نقل من وإلى المطار',
            'نقل يومي إلى المستشفى',
            'دعم مترجم هاتفي',
            'واي فاي ووسائل راحة أساسية',
          ],
          button: 'اختر الباقة',
        },
        comfort: {
          badge: 'الأكثر شعبية',
          title: 'باقة مريحة',
          price: '$75',
          period: '/يوم',
          subtitle: 'أفضل قيمة للعائلات',
          features: [
            'فندق متوسط (3-4 نجوم)',
            'جميع الوجبات (خيارات حلال)',
            'نقل من المطار مع مساعد',
            'نقل المستشفى + نقل محلي',
            'مترجم شخصي (8 ساعات/يوم)',
            'واي فاي، تنظيف، غسيل',
            'بطاقة SIM مع بيانات',
            'تنسيق المواعيد الطبية',
          ],
          button: 'اختر الباقة',
        },
        luxury: {
          title: 'باقة فاخرة',
          price: '$150',
          period: '/يوم',
          subtitle: 'تجربة فاخرة مع فنادق بنتوز',
          features: [
            'فنادق بنتوز أو ممتلكات 5 نجوم',
            'إقامة في جناح فاخر',
            'جميع الوجبات + خدمة الغرفة',
            'نقل سيارة فاخرة خاصة',
            'مترجم شخصي مخصص',
            'خدمة كونسيرج ومساعد شخصي',
            'الوصول إلى السبا والعافية',
            'مواعيد طبية ذات أولوية',
            'الوصول إلى صالة VIP',
            'مشاهدة معالم محلية مجانية',
          ],
          button: 'اختر الباقة',
        },
        footer: {
          weekly: '💡 خصومات أسبوعية وشهرية: وفر 10-20٪ على الإقامات الممتدة',
          hospital:
            '🏥 أسعار شركاء المستشفيات: أسعار خاصة بالقرب من أبولو، فورتيس، مانيبال، نارايانا هيلث',
        },
      },
      howItWorks: {
        title: 'كيف يعمل',
        subtitle: 'عملية بسيطة من 4 خطوات من الحجز إلى المغادرة',
        steps: [
          {
            step: '1',
            title: 'احجز باقتك',
            description: 'اختر نوع الإقامة والمدة. شارك تفاصيل الوصول.',
          },
          {
            step: '2',
            title: 'الاستقبال في المطار',
            description: 'يقابلك فريقنا في قاعة الوصول مع لوحة اسم. نقل مباشر إلى الإقامة.',
          },
          {
            step: '3',
            title: 'فترة العلاج',
            description: 'نقل يومي إلى المستشفى، دعم مترجم، وجبات، كل شيء مرتب.',
          },
          {
            step: '4',
            title: 'مساعدة المغادرة',
            description: 'توصيل إلى المطار، مساعدة في مستندات السفر، دعم متابعة.',
          },
        ],
      },
      faq: {
        title: 'الأسئلة الشائعة',
        items: [
          {
            question: 'هل يتوفر طعام حلال؟',
            answer:
              'نعم! جميع أماكن الإقامة الشريكة توفر وجبات حلال أصيلة. نعمل مع مطاعم حلال معتمدة ويمكننا ترتيب خدمة الطعام في الغرفة مع خيارات حلال. يتم أيضًا تلبية المتطلبات الغذائية الخاصة (نباتي، مناسب لمرضى السكري).',
          },
          {
            question: 'ما مدى بعد أماكن الإقامة عن المستشفيات؟',
            answer:
              'نختار بشكل استراتيجي ممتلكات على بعد 10-20 دقيقة من المستشفيات الرئيسية. Pentouz Lavelle Road على بعد 10 دقائق فقط من أبولو وفورتيس بنغالور. النقل اليومي إلى المستشفى يضمن عدم قلقك بشأن التنقل.',
          },
          {
            question: 'هل يمكن لأفراد العائلة البقاء معًا؟',
            answer:
              'بالتأكيد! نقدم أجنحة عائلية وشقق مفروشة يمكن أن تستوعب 2-6 أشخاص. الغرف المتصلة والشقق الأكبر متاحة للعائلات التي تسافر معًا للعلاج.',
          },
          {
            question: 'ماذا لو احتجت مساعدة طبية طارئة في الليل؟',
            answer:
              'فريق الدعم لدينا متاح على مدار الساعة عبر الهاتف (+91 89702 98300). لدينا مترجمون عرب وإنجليز على الاتصال. في حالات الطوارئ، ننسق النقل الفوري إلى المستشفى ومساعدة المترجم.',
          },
          {
            question: 'هل المترجمون مدربون طبيًا؟',
            answer:
              'نعم، مترجمونا لديهم تدريب على المصطلحات الطبية وخبرة في الترجمة الصحية. يفهمون المصطلحات الطبية ويمكنهم ترجمة استشارات الأطباء والوصفات الطبية والتقارير الطبية بدقة.',
          },
          {
            question: 'هل يمكنني تمديد إقامتي إذا استغرق العلاج وقتًا أطول؟',
            answer:
              'نعم، نقدم تواريخ مغادرة مرنة. إذا امتدت مدة علاجك، ببساطة أخبرنا قبل 24 ساعة وسنمدد إقامتك. تنطبق الأسعار الأسبوعية على الإقامات الممتدة (خصم 10-20٪).',
          },
          {
            question: 'ماذا عن مرافق الصلاة؟',
            answer:
              'معظم فنادقنا الشريكة لديها غرف صلاة مخصصة. توفر الشقق المفروشة مساحة خاصة للصلاة. يمكننا أيضًا توفير سجادات الصلاة واتجاه القبلة ومعلومات عن المساجد القريبة.',
          },
          {
            question: 'هل النقل من المطار مجاني حقًا؟',
            answer:
              'نعم، النقل المجاني من وإلى المطار مشمول في جميع الباقات (اقتصادية، مريحة، فاخرة). يقابلك سائقنا في قاعة الوصول مع لوحة اسم ويساعد في الأمتعة. يتم تتبع تأخيرات الرحلات تلقائيًا.',
          },
        ],
      },
      cta: {
        title: 'هل أنت مستعد لحجز إقامتك؟',
        subtitle: 'دعنا نتعامل مع الإقامة والنقل والترجمة - أنت ركز على التعافي',
        buttons: {
          book: 'احجز الإقامة الآن',
          call: 'اتصل +91 89702 98300',
          whatsapp: 'واتساب',
        },
        footer:
          '🌟 شريك مع فنادق بنتوز بنغالور | 🏥 بالقرب من جميع المستشفيات الرئيسية | 🌍 خدمة 500,000+ مريض دولي',
      },
    },
  };

  const t = content[locale as 'en' | 'ar'];

  // Amenity icons mapping
  const amenityIcons = [
    Wifi,
    Utensils,
    Globe,
    Heart,
    Users,
    Sparkles,
    Car,
    Shield,
    MessageCircle,
    Calendar,
    Utensils,
    Navigation,
  ];

  // Service icons mapping
  const serviceIcons = [Plane, Car, Languages, Utensils, Phone, Shield];

  // Translator icons mapping
  const translatorIcons = [HandHeart, MessageCircle, Shield];

  // Accommodation type icons mapping
  const typeIcons = [Home, Hotel, Building2, Home];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">{t.hero.title}</h1>
          <p className="mx-auto mb-2 max-w-3xl text-xl text-primary-100">{t.hero.subtitle}</p>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-100">{t.hero.features}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/booking">{t.hero.buttons.book}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-700"
            >
              <Link href="tel:+918970298300">{t.hero.buttons.call}</Link>
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
              {t.gccFriendly.badge}
            </div>
            <h2 className="mb-6 font-serif text-4xl font-bold text-gray-900 md:text-5xl">
              {t.gccFriendly.title}
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-700">
              {t.gccFriendly.subtitle}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Mosque/Prayer Facilities */}
            <Card className="group border-4 border-green-200 bg-white transition-all hover:scale-105 hover:border-green-400 hover:shadow-2xl">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-xl transition-all group-hover:scale-110">
                  <Church className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-center text-xl font-bold">
                  {t.gccFriendly.cards.mosque.title}
                </CardTitle>
                <div className="mt-2 text-center">
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                    <CheckCircle className="h-3 w-3" />
                    {t.gccFriendly.cards.mosque.badge}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-center text-gray-700">
                  {t.gccFriendly.cards.mosque.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {t.gccFriendly.cards.mosque.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* 100% Halal Food */}
            <Card className="group border-4 border-orange-200 bg-white transition-all hover:scale-105 hover:border-orange-400 hover:shadow-2xl">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl transition-all group-hover:scale-110">
                  <Utensils className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-center text-xl font-bold">
                  {t.gccFriendly.cards.halal.title}
                </CardTitle>
                <div className="mt-2 text-center">
                  <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                    <CheckCircle className="h-3 w-3" />
                    {t.gccFriendly.cards.halal.badge}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-center text-gray-700">
                  {t.gccFriendly.cards.halal.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {t.gccFriendly.cards.halal.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Arabic Speaking Staff 24/7 */}
            <Card className="group border-4 border-blue-200 bg-white transition-all hover:scale-105 hover:border-blue-400 hover:shadow-2xl">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl transition-all group-hover:scale-110">
                  <Languages className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-center text-xl font-bold">
                  {t.gccFriendly.cards.arabic.title}
                </CardTitle>
                <div className="mt-2 text-center">
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                    <CheckCircle className="h-3 w-3" />
                    {t.gccFriendly.cards.arabic.badge}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-center text-gray-700">
                  {t.gccFriendly.cards.arabic.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {t.gccFriendly.cards.arabic.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Family & Women-Friendly */}
            <Card className="group border-4 border-purple-200 bg-white transition-all hover:scale-105 hover:border-purple-400 hover:shadow-2xl">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 shadow-xl transition-all group-hover:scale-110">
                  <UserCheck className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-center text-xl font-bold">
                  {t.gccFriendly.cards.family.title}
                </CardTitle>
                <div className="mt-2 text-center">
                  <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">
                    <CheckCircle className="h-3 w-3" />
                    {t.gccFriendly.cards.family.badge}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-center text-gray-700">
                  {t.gccFriendly.cards.family.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {t.gccFriendly.cards.family.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Additional Comforts */}
          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {t.gccFriendly.additional.map((item, index) => {
              const icons = [Coffee, Bed, Globe, Shield, Heart, Phone];
              const Icon = icons[index];
              return (
                <Card
                  key={index}
                  className="border-2 border-green-100 bg-white text-center transition-all hover:shadow-lg"
                >
                  <CardContent className="pt-6">
                    <Icon className="mx-auto mb-2 h-8 w-8 text-green-600" />
                    <p className="text-sm font-semibold text-gray-700">{item}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Accommodation */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
          {t.services.title}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">{t.services.subtitle}</p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <Card key={index} className="text-center transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Partner Hotels - Pentouz Properties */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Star className="h-6 w-6 text-accent-500" fill="currentColor" />
              <h2 className="font-serif text-3xl font-bold text-gray-900">{t.pentouz.badge}</h2>
              <Star className="h-6 w-6 text-accent-500" fill="currentColor" />
            </div>
            <p className="mx-auto max-w-2xl text-gray-600">{t.pentouz.subtitle}</p>
            <p className="mt-2 text-sm text-gray-500">{t.pentouz.contact}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {t.pentouz.properties.map((property, index) => (
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
                    <Link href="/booking">{t.pentouz.bookButton}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">{t.pentouz.footer}</p>
          </div>
        </div>
      </section>

      {/* Accommodation Types */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
          {t.accommodationTypes.title}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          {t.accommodationTypes.subtitle}
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {t.accommodationTypes.types.map((type, index) => {
            const Icon = typeIcons[index];
            return (
              <Card key={index} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
                    <Icon className="h-7 w-7 text-primary-600" />
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
            );
          })}
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
            {t.amenities.title}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            {t.amenities.subtitle}
          </p>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {t.amenities.items.map((amenity, index) => {
              const Icon = amenityIcons[index];
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 rounded-lg bg-white p-4 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <Icon className="h-8 w-8 text-primary-600" />
                  <span className="text-sm font-medium text-gray-700">{amenity}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cities Coverage */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
          {t.cities.title}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">{t.cities.subtitle}</p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {t.cities.list.map((city, index) => (
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
                    <p className="mb-1 font-semibold text-gray-700">{t.cities.labels.hospitals}</p>
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
            {t.transport.title}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            {t.transport.subtitle}
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {t.transport.services.map((transport, index) => (
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
            <p className="text-sm text-gray-600">{t.transport.footer}</p>
          </div>
        </div>
      </section>

      {/* Translator Services */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
          {t.translator.title}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          {t.translator.subtitle}
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.translator.languages.map((translator, index) => (
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
              <CardTitle className="text-center text-2xl">{t.translator.whatTheyDo.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {t.translator.whatTheyDo.items.map((item, index) => {
                  const Icon = translatorIcons[index];
                  return (
                    <div key={index} className="text-center">
                      <Icon className="mx-auto mb-3 h-10 w-10 text-primary-600" />
                      <h4 className="mb-2 font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
            {t.packages.title}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            {t.packages.subtitle}
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Budget Package */}
            <Card className="border-2">
              <CardHeader className="bg-gray-100">
                <CardTitle className="text-center text-2xl">{t.packages.budget.title}</CardTitle>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold text-gray-900">{t.packages.budget.price}</span>
                  <span className="text-gray-600">{t.packages.budget.period}</span>
                </div>
                <p className="mt-2 text-center text-sm text-gray-600">
                  {t.packages.budget.subtitle}
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {t.packages.budget.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full">
                  <Link href="/booking">{t.packages.budget.button}</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Comfort Package */}
            <Card className="border-2 border-primary-500 shadow-lg">
              <CardHeader className="bg-gradient-to-br from-primary-500 to-primary-600 text-white">
                <div className="mb-2 text-center">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-primary-600">
                    {t.packages.comfort.badge}
                  </span>
                </div>
                <CardTitle className="text-center text-2xl">{t.packages.comfort.title}</CardTitle>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold">{t.packages.comfort.price}</span>
                  <span className="text-primary-100">{t.packages.comfort.period}</span>
                </div>
                <p className="mt-2 text-center text-sm text-primary-100">
                  {t.packages.comfort.subtitle}
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {t.packages.comfort.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full">
                  <Link href="/booking">{t.packages.comfort.button}</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Luxury Package */}
            <Card className="border-2 border-accent-500">
              <CardHeader className="bg-gradient-to-br from-accent-500 to-accent-600 text-white">
                <CardTitle className="text-center text-2xl">{t.packages.luxury.title}</CardTitle>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold">{t.packages.luxury.price}</span>
                  <span className="text-accent-100">{t.packages.luxury.period}</span>
                </div>
                <p className="mt-2 text-center text-sm text-accent-100">
                  {t.packages.luxury.subtitle}
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {t.packages.luxury.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full" variant="default">
                  <Link href="/booking">{t.packages.luxury.button}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="mb-2 text-sm text-gray-600">{t.packages.footer.weekly}</p>
            <p className="text-sm text-gray-600">{t.packages.footer.hospital}</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
          {t.howItWorks.title}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          {t.howItWorks.subtitle}
        </p>

        <div className="grid gap-8 md:grid-cols-4">
          {t.howItWorks.steps.map((item, index) => (
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
            {t.faq.title}
          </h2>

          <div className="mx-auto max-w-3xl space-y-6">
            {t.faq.items.map((faq, index) => (
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
          <h2 className="mb-4 font-serif text-3xl font-bold">{t.cta.title}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">{t.cta.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/booking">{t.cta.buttons.book}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-700"
            >
              <Link href="tel:+918970298300">{t.cta.buttons.call}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-700"
            >
              <Link href="https://wa.me/918970298300" target="_blank" rel="noopener noreferrer">
                {t.cta.buttons.whatsapp}
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-100">{t.cta.footer}</p>
        </div>
      </section>
    </div>
  );
}
