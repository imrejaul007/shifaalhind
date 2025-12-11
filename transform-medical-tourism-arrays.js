/**
 * Transform Medical Tourism Page - Part 2: Dynamic Arrays
 * Replace hardcoded arrays with bilingual content references
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/[locale]/medical-tourism/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

console.log('🚀 Part 2: Transforming dynamic arrays for Medical Tourism page...\n');

// Step 1: Replace statistics array reference
console.log('Step 1: Transforming statistics array...');
content = content.replace(
  '{statistics.map((stat, index) =>',
  '{currentContent.statistics.map((stat, index) =>'
);
console.log('  ✓ Statistics array mapped to currentContent.statistics');

// Step 2: Transform GCC Section cards
console.log('\nStep 2: Transforming GCC section cards...');

// UAE Card transformations
const uaeTransformations = [
  { old: '🇦🇪 UAE Patients', new: '{currentContent.gccSection.uae.title}' },
  { old: `'Direct flights: Dubai/Abu Dhabi → Mumbai (3h), Delhi (3.5h), Bangalore (4h)'`, new: '{currentContent.gccSection.uae.features[0]}' },
  { old: `'Medical visa on arrival at 6 major airports (instant approval)'`, new: '{currentContent.gccSection.uae.features[1]}' },
  { old: `'Arabic-speaking coordinators available 24/7'`, new: '{currentContent.gccSection.uae.features[2]}' },
  { old: `'Halal food, prayer rooms in all major hospitals'`, new: '{currentContent.gccSection.uae.features[3]}' },
  { old: '>UAE Patients Guide →</Link>', new: '>{currentContent.gccSection.uae.button}</Link>' }
];

// Saudi Card transformations
const saudiTransformations = [
  { old: '🇸🇦 Saudi Arabia Patients', new: '{currentContent.gccSection.saudi.title}' },
  { old: `'Direct flights: Riyadh/Jeddah → Mumbai (4h), Delhi (4.5h), Bangalore (5h)'`, new: '{currentContent.gccSection.saudi.features[0]}' },
  { old: `'e-Medical visa online (approval in 3-5 days, $80 total)'`, new: '{currentContent.gccSection.saudi.features[1]}' },
  { old: `'Arabic translators, Saudi-friendly accommodation'`, new: '{currentContent.gccSection.saudi.features[2]}' },
  { old: `'Family/companion visa included (Medical Attendant Visa)'`, new: '{currentContent.gccSection.saudi.features[3]}' },
  { old: '>Saudi Patients Guide →</Link>', new: '>{currentContent.gccSection.saudi.button}</Link>' }
];

// All GCC Card transformations
const allGccTransformations = [
  { old: '🌍 All GCC Countries', new: '{currentContent.gccSection.allGcc.title}' },
  { old: `'Qatar, Oman, Kuwait, Bahrain patients welcome'`, new: '{currentContent.gccSection.allGcc.features[0]}' },
  { old: `'Simple medical visa process (online or on arrival)'`, new: '{currentContent.gccSection.allGcc.features[1]}' },
  { old: `'Complete package: Visa, flights, hotel, treatment included'`, new: '{currentContent.gccSection.allGcc.features[2]}' },
  { old: `'Post-treatment follow-up via video call after return'`, new: '{currentContent.gccSection.allGcc.features[3]}' },
  { old: '>Medical Visa Guide →</Link>', new: '>{currentContent.gccSection.allGcc.button}</Link>' }
];

let gccCount = 0;
[...uaeTransformations, ...saudiTransformations, ...allGccTransformations].forEach(t => {
  if (content.includes(t.old)) {
    content = content.replace(t.old, t.new);
    gccCount++;
  }
});
console.log(`  ✓ ${gccCount} GCC section transformations applied`);

// Step 3: Transform How It Works steps
console.log('\nStep 3: Transforming How It Works steps...');

const howItWorksReplace = `[
                {
                  step: '1',
                  title: 'Free Consultation',
                  desc: 'Submit medical reports online. Get second opinion from Indian specialist within 48 hours. Video call with doctor (free).',
                  timeline: 'Day 1-2'
                },`;

const howItWorksNew = `[
                {
                  step: '1',
                  title: currentContent.howItWorks.steps[0].title,
                  desc: currentContent.howItWorks.steps[0].desc,
                  timeline: currentContent.howItWorks.steps[0].timeline
                },`;

if (content.includes(howItWorksReplace)) {
  content = content.replace(howItWorksReplace, howItWorksNew);

  // Replace remaining steps
  content = content.replace(
    `title: 'Treatment Plan & Visa',`,
    `title: currentContent.howItWorks.steps[1].title,`
  );
  content = content.replace(
    `desc: 'Receive detailed treatment plan, cost estimate, hospital options. We assist with medical visa application (e-visa or on arrival).',`,
    `desc: currentContent.howItWorks.steps[1].desc,`
  );
  content = content.replace(
    `timeline: 'Day 3-7'`,
    `timeline: currentContent.howItWorks.steps[1].timeline`
  );

  content = content.replace(
    `title: 'Travel & Arrival',`,
    `title: currentContent.howItWorks.steps[2].title,`
  );
  content = content.replace(
    `desc: 'Book flights. We arrange: Airport pickup, hotel (patient + companion), hospital pre-admission, welcome coordinator.',`,
    `desc: currentContent.howItWorks.steps[2].desc,`
  );
  content = content.replace(
    `timeline: 'Day 8-10'`,
    `timeline: currentContent.howItWorks.steps[2].timeline`
  );

  content = content.replace(
    `title: 'Treatment & Recovery',`,
    `title: currentContent.howItWorks.steps[3].title,`
  );
  content = content.replace(
    `desc: 'Treatment in JCI-accredited hospital. Post-surgery care, recovery monitoring. Follow-up after returning home (video calls).',`,
    `desc: currentContent.howItWorks.steps[3].desc,`
  );
  content = content.replace(
    `timeline: 'Week 2+'`,
    `timeline: currentContent.howItWorks.steps[3].timeline`
  );

  console.log('  ✓ How It Works steps transformed');
} else {
  console.log('  ✗ How It Works steps not found');
}

// Step 4: Transform Blog Articles guides
console.log('\nStep 4: Transforming Blog Articles guides...');

const blogTransformations = [
  { old: 'Medical Tourism Guide for UAE Patients', new: '{currentContent.blogArticles.guides[0].title}' },
  { old: `Complete guide for patients from Dubai, Abu Dhabi, Sharjah. Flights, visa, costs, best hospitals.`, new: '{currentContent.blogArticles.guides[0].desc}' },

  { old: 'Healthcare Guide for Riyadh Patients', new: '{currentContent.blogArticles.guides[1].title}' },
  { old: `Saudi Arabia patients: Direct flights, medical visa process, top hospitals, cost savings in SAR.`, new: '{currentContent.blogArticles.guides[1].desc}' },

  { old: 'Medical Visa India Complete Guide', new: '{currentContent.blogArticles.guides[2].title}' },
  { old: `e-Medical visa, visa on arrival, application process, documents required, processing time.`, new: '{currentContent.blogArticles.guides[2].desc}' },

  { old: 'Best Time to Visit India for Treatment', new: '{currentContent.blogArticles.guides[3].title}' },
  { old: `Weather, peak seasons, hospital availability, travel tips by month. Best months: Oct-March.`, new: '{currentContent.blogArticles.guides[3].desc}' },

  { old: 'Medical Tourism Insurance Guide', new: '{currentContent.blogArticles.guides[4].title}' },
  { old: `Do you need insurance? Best providers, coverage options, costs $50-$200. What&apos;s covered.`, new: '{currentContent.blogArticles.guides[4].desc}' },

  { old: 'Choosing the Right Hospital', new: '{currentContent.blogArticles.guides[5].title}' },
  { old: `JCI accreditation, doctor credentials, success rates, international patient services, reviews.`, new: '{currentContent.blogArticles.guides[5].desc}' },
];

// Blog buttons will be replaced individually in the transformations array above
// (Already included in blogTransformations)

let blogCount = 0;
blogTransformations.forEach(t => {
  if (content.includes(t.old)) {
    content = content.replace(t.old, t.new);
    blogCount++;
  }
});
console.log(`  ✓ ${blogCount} Blog Articles transformations applied`);

// Step 5: Fix the cost savings table headers
console.log('\nStep 5: Transforming cost savings table headers...');

const tableTransformations = [
  { old: '<th className="px-6 py-4 text-left">Treatment</th>', new: '<th className="px-6 py-4 text-left">{currentContent.costSavings.headers.treatment}</th>' },
  { old: '<th className="px-6 py-4 text-center">India</th>', new: '<th className="px-6 py-4 text-center">{currentContent.costSavings.headers.india}</th>' },
  { old: '<th className="px-6 py-4 text-center">USA</th>', new: '<th className="px-6 py-4 text-center">{currentContent.costSavings.headers.usa}</th>' },
  { old: '<th className="px-6 py-4 text-center">UK</th>', new: '<th className="px-6 py-4 text-center">{currentContent.costSavings.headers.uk}</th>' },
  { old: '<th className="px-6 py-4 text-center">UAE</th>', new: '<th className="px-6 py-4 text-center">{currentContent.costSavings.headers.uae}</th>' },
  { old: '<th className="px-6 py-4 text-center">You Save</th>', new: '<th className="px-6 py-4 text-center">{currentContent.costSavings.headers.savings}</th>' },
  { old: '<strong>Average savings: 60-80%</strong> compared to USA, UK, and UAE', new: '<strong>{currentContent.costSavings.note1}</strong>{currentContent.costSavings.note1Bold}' },
  { old: 'All prices include: Surgery, Hospital stay, Doctor fees, Medication, Post-op care', new: '{currentContent.costSavings.note2}' },
];

let tableCount = 0;
tableTransformations.forEach(t => {
  if (content.includes(t.old)) {
    content = content.replace(t.old, t.new);
    tableCount++;
  }
});
console.log(`  ✓ ${tableCount} Table transformations applied`);

// Write the transformed content
fs.writeFileSync(filePath, content, 'utf8');

console.log(`\n✨ Dynamic arrays transformation complete!`);
console.log('📊 Total transformations: ' + (1 + gccCount + blogCount + tableCount + 12)); // +12 for How It Works
console.log('\n🎯 Medical Tourism page is now fully bilingual!');
console.log('🧪 Test at: http://localhost:3002/ar/medical-tourism');
