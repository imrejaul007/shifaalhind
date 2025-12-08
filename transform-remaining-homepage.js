/**
 * Transform ALL Remaining Homepage Sections to Arabic
 * Comprehensive bulk transformation for efficiency
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/[locale]/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

console.log('🚀 Starting comprehensive homepage transformation...\n');

const transformations = [
  // Cost Comparison Section
  {
    name: 'Cost Comparison: Title',
    old: `<h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Compare Treatment Costs: India vs World
          </h2>`,
    new: `<h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            {currentContent.costComparison.title}
          </h2>`
  },
  {
    name: 'Cost Comparison: Subtitle',
    old: `<p className="mx-auto max-w-2xl text-lg text-gray-600">
            See how much you can save on popular medical procedures. All costs in USD.
          </p>`,
    new: `<p className="mx-auto max-w-2xl text-lg text-gray-600">
            {currentContent.costComparison.subtitle}
          </p>`
  },
  {
    name: 'Cost Comparison: Table Header - Treatment',
    old: `<th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                  Treatment
                </th>`,
    new: `<th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                  {currentContent.costComparison.treatment}
                </th>`
  },
  {
    name: 'Cost Comparison: Table Header - India',
    old: `<th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  India
                </th>`,
    new: `<th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  {currentContent.costComparison.india}
                </th>`
  },
  {
    name: 'Cost Comparison: Table Header - USA',
    old: `<th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  USA
                </th>`,
    new: `<th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  {currentContent.costComparison.usa}
                </th>`
  },
  {
    name: 'Cost Comparison: Table Header - UK',
    old: `<th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  UK
                </th>`,
    new: `<th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  {currentContent.costComparison.uk}
                </th>`
  },
  {
    name: 'Cost Comparison: Table Header - UAE',
    old: `<th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  UAE
                </th>`,
    new: `<th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  {currentContent.costComparison.uae}
                </th>`
  },
  {
    name: 'Cost Comparison: Table Header - Your Savings',
    old: `<th className="border border-gray-200 px-4 py-3 text-center font-semibold text-primary-600">
                  Your Savings
                </th>`,
    new: `<th className="border border-gray-200 px-4 py-3 text-center font-semibold text-primary-600">
                  {currentContent.costComparison.savings}
                </th>`
  },

  // Pentouz Hotels Section
  {
    name: 'Pentouz: Title',
    old: `<CardTitle className="text-2xl">Accommodation at Pentouz Hotels, Bangalore</CardTitle>`,
    new: `<CardTitle className="text-2xl">{currentContent.pentouz.title}</CardTitle>`
  },
  {
    name: 'Pentouz: Subtitle',
    old: `<CardDescription className="text-base">
                    Your comfortable home away from home during medical treatment in Bangalore
                  </CardDescription>`,
    new: `<CardDescription className="text-base">
                    {currentContent.pentouz.subtitle}
                  </CardDescription>`
  },
  {
    name: 'Pentouz: Near Hospitals Title',
    old: `<p className="font-semibold text-gray-900">Near Major Hospitals</p>`,
    new: `<p className="font-semibold text-gray-900">{currentContent.pentouz.nearHospitals}</p>`
  },
  {
    name: 'Pentouz: Near Hospitals Desc',
    old: `<p className="text-sm text-gray-600">10-15 min from Narayana, Manipal, Apollo, Fortis</p>`,
    new: `<p className="text-sm text-gray-600">{currentContent.pentouz.nearHospitalsDesc}</p>`
  },
  {
    name: 'Pentouz: Family Rooms Title',
    old: `<p className="font-semibold text-gray-900">Family-Friendly Rooms</p>`,
    new: `<p className="font-semibold text-gray-900">{currentContent.pentouz.familyRooms}</p>`
  },
  {
    name: 'Pentouz: Family Rooms Desc',
    old: `<p className="text-sm text-gray-600">Spacious rooms for patients and companions</p>`,
    new: `<p className="text-sm text-gray-600">{currentContent.pentouz.familyRoomsDesc}</p>`
  },
  {
    name: 'Pentouz: Halal Title',
    old: `<p className="font-semibold text-gray-900">Halal Food & Prayer Room</p>`,
    new: `<p className="font-semibold text-gray-900">{currentContent.pentouz.halalPrayer}</p>`
  },
  {
    name: 'Pentouz: Halal Desc',
    old: `<p className="text-sm text-gray-600">Multi-cuisine restaurant with halal options</p>`,
    new: `<p className="text-sm text-gray-600">{currentContent.pentouz.halalPrayerDesc}</p>`
  },
  {
    name: 'Pentouz: CTA Button',
    old: `Visit Pentouz Hotels →`,
    new: `{currentContent.pentouz.cta}`
  },
  {
    name: 'Pentouz: Ready Title',
    old: `<strong>Ready to explore Bangalore hospitals?</strong> View our complete list of JCI-accredited hospitals with doctor profiles.`,
    new: `<strong>{currentContent.pentouz.readyTitle}</strong> {currentContent.pentouz.readyDesc}`
  },
  {
    name: 'Pentouz: View Hospitals Button',
    old: `View All Bangalore Hospitals`,
    new: `{currentContent.pentouz.viewHospitals}`
  },
  {
    name: 'Pentouz: Meet Doctors Button',
    old: `Meet Our Doctors`,
    new: `{currentContent.pentouz.meetDoctors}`
  },

  // Top Destinations Section
  {
    name: 'Destinations: Title',
    old: `<h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Top Destinations
          </h2>`,
    new: `<h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            {currentContent.destinations.title}
          </h2>`
  },
  {
    name: 'Destinations: Subtitle',
    old: `<p className="text-lg text-gray-600">
            Medical tourism destinations across the GCC
          </p>`,
    new: `<p className="text-lg text-gray-600">
            {currentContent.destinations.subtitle}
          </p>`
  },

  // Why Choose India Section
  {
    name: 'Why India: Title',
    old: `<h2 className="mb-6 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Why Choose India for Medical Tourism?
          </h2>`,
    new: `<h2 className="mb-6 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            {currentContent.whyIndia.title}
          </h2>`
  },
  {
    name: 'Why India: Intro',
    old: `India has emerged as a global leader in medical tourism, attracting over 2 million international patients annually. For GCC residents, India offers an unbeatable combination of world-class healthcare in <strong className="text-green-600">Bangalore</strong> and other cities, significant cost savings, and cultural familiarity with <strong className="text-orange-600">Arabic-speaking coordinators</strong>.`,
    new: `{safeLocale === 'ar' ? currentContent.whyIndia.intro : (<>India has emerged as a global leader in medical tourism, attracting over 2 million international patients annually. For GCC residents, India offers an unbeatable combination of world-class healthcare in <strong className="text-green-600">Bangalore</strong> and other cities, significant cost savings, and cultural familiarity with <strong className="text-orange-600">Arabic-speaking coordinators</strong>.</>)}`
  },
  {
    name: 'Why India: Bangalore Title',
    old: `<h3 className="text-xl font-semibold text-gray-900">Bangalore - India&apos;s Medical Hub</h3>`,
    new: `<h3 className="text-xl font-semibold text-gray-900">{currentContent.whyIndia.bangalore}</h3>`
  },
  {
    name: 'Why India: Cost Savings Title',
    old: `<h3 className="mb-2 text-xl font-semibold text-gray-900">Massive Cost Savings</h3>`,
    new: `<h3 className="mb-2 text-xl font-semibold text-gray-900">{currentContent.whyIndia.costSavings}</h3>`
  },
  {
    name: 'Why India: No Waiting Title',
    old: `<h3 className="mb-2 text-xl font-semibold text-gray-900">No Waiting Lists</h3>`,
    new: `<h3 className="mb-2 text-xl font-semibold text-gray-900">{currentContent.whyIndia.noWaiting}</h3>`
  },
  {
    name: 'Why India: Accreditation Title',
    old: `<h3 className="mb-2 text-xl font-semibold text-gray-900">International Accreditation</h3>`,
    new: `<h3 className="mb-2 text-xl font-semibold text-gray-900">{currentContent.whyIndia.accreditation}</h3>`
  },
  {
    name: 'Why India: Arabic Support Title',
    old: `<h3 className="text-xl font-semibold text-gray-900">Arabic Support Throughout Journey</h3>`,
    new: `<h3 className="text-xl font-semibold text-gray-900">{currentContent.whyIndia.arabicSupport}</h3>`
  },
  {
    name: 'Why India: Doctors Title',
    old: `<h3 className="mb-2 text-xl font-semibold text-gray-900">Experienced Doctors</h3>`,
    new: `<h3 className="mb-2 text-xl font-semibold text-gray-900">{currentContent.whyIndia.doctors}</h3>`
  },
  {
    name: 'Why India: Technology Title',
    old: `<h3 className="mb-2 text-xl font-semibold text-gray-900">Advanced Technology</h3>`,
    new: `<h3 className="mb-2 text-xl font-semibold text-gray-900">{currentContent.whyIndia.technology}</h3>`
  },
  {
    name: 'Why India: Cultural Title',
    old: `<h3 className="mb-2 text-xl font-semibold text-gray-900">Cultural & Linguistic Comfort</h3>`,
    new: `<h3 className="mb-2 text-xl font-semibold text-gray-900">{currentContent.whyIndia.cultural}</h3>`
  },

  // FAQ Section
  {
    name: 'FAQ: Title',
    old: `<h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Frequently Asked Questions About Medical Tourism to India
          </h2>`,
    new: `<h2 className="mb-12 text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            {currentContent.faq.title}
          </h2>`
  },

  // Testimonials Section
  {
    name: 'Testimonials: Badge',
    old: `10,000+ GCC Patients Treated Successfully`,
    new: `{currentContent.testimonials.badge}`
  },
  {
    name: 'Testimonials: Title',
    old: `<h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              What Our Patients Say
            </h2>`,
    new: `<h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              {currentContent.testimonials.title}
            </h2>`
  },
  {
    name: 'Testimonials: Subtitle',
    old: `<p className="mb-12 text-lg text-gray-600">
              Real stories from UAE, Saudi Arabia, and GCC patients who experienced our Arabic support, Bangalore hospitals, and comfortable stay at Pentouz Hotels
            </p>`,
    new: `<p className="mb-12 text-lg text-gray-600">
              {currentContent.testimonials.subtitle}
            </p>`
  }
];

// Apply all transformations
let successCount = 0;
transformations.forEach((transform, index) => {
  if (content.includes(transform.old)) {
    content = content.replace(transform.old, transform.new);
    successCount++;
    console.log(`✅ ${transform.name}`);
  } else {
    console.log(`⚠️  ${transform.name} - NOT FOUND (may already be transformed)`);
  }
});

// Write the transformed content
fs.writeFileSync(filePath, content, 'utf8');

console.log(`\n✨ Transformation complete!`);
console.log(`📊 Summary: ${successCount}/${transformations.length} transformations applied`);
console.log('\n🎯 Next: Test http://localhost:3000/ar to see Arabic content!');
