/**
 * Transform Homepage Sections to Use currentContent
 * Systematic replacement of hardcoded English with bilingual content
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/[locale]/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

console.log('🔧 Starting homepage transformation...');

// Transformation 1: Remaining 7 treatment cards (cards 1-7, we already did 0)
const treatmentCardReplacements = [
  {
    // Knee Replacement (card 1)
    old: `<CardTitle className="text-lg">Knee Replacement</CardTitle>
                <CardDescription>
                  Total knee replacement with advanced implants
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">Save $14K-$42K</div>`,
    new: `<CardTitle className="text-lg">{currentContent.treatments.cards[1].title}</CardTitle>
                <CardDescription>
                  {currentContent.treatments.cards[1].description}
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">{currentContent.treatments.cards[1].savings}</div>`
  },
  {
    // IVF & Fertility (card 2)
    old: `<CardTitle className="text-lg">IVF & Fertility</CardTitle>
                <CardDescription>
                  Advanced fertility treatments and IVF procedures
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">Save $4K-$11K</div>`,
    new: `<CardTitle className="text-lg">{currentContent.treatments.cards[2].title}</CardTitle>
                <CardDescription>
                  {currentContent.treatments.cards[2].description}
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">{currentContent.treatments.cards[2].savings}</div>`
  },
  {
    // Dental Implants (card 3)
    old: `<CardTitle className="text-lg">Dental Implants</CardTitle>
                <CardDescription>
                  Titanium and zirconia dental implant solutions
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">Save $700-$3.7K</div>`,
    new: `<CardTitle className="text-lg">{currentContent.treatments.cards[3].title}</CardTitle>
                <CardDescription>
                  {currentContent.treatments.cards[3].description}
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">{currentContent.treatments.cards[3].savings}</div>`
  },
  {
    // Hair Transplant (card 4)
    old: `<CardTitle className="text-lg">Hair Transplant</CardTitle>
                <CardDescription>
                  FUE, FUT, and DHI hair restoration techniques
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">Save $6K-$10K</div>`,
    new: `<CardTitle className="text-lg">{currentContent.treatments.cards[4].title}</CardTitle>
                <CardDescription>
                  {currentContent.treatments.cards[4].description}
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">{currentContent.treatments.cards[4].savings}</div>`
  },
  {
    // Cancer Treatment (card 5)
    old: `<CardTitle className="text-lg">Cancer Treatment</CardTitle>
                <CardDescription>
                  Advanced oncology care and cancer treatments
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">Save $100K+</div>`,
    new: `<CardTitle className="text-lg">{currentContent.treatments.cards[5].title}</CardTitle>
                <CardDescription>
                  {currentContent.treatments.cards[5].description}
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">{currentContent.treatments.cards[5].savings}</div>`
  },
  {
    // Rhinoplasty (card 6)
    old: `<CardTitle className="text-lg">Rhinoplasty</CardTitle>
                <CardDescription>
                  Cosmetic nose reshaping and rhinoplasty surgery
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">Save $2.5K-$11K</div>`,
    new: `<CardTitle className="text-lg">{currentContent.treatments.cards[6].title}</CardTitle>
                <CardDescription>
                  {currentContent.treatments.cards[6].description}
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">{currentContent.treatments.cards[6].savings}</div>`
  },
  {
    // LASIK Eye Surgery (card 7)
    old: `<CardTitle className="text-lg">LASIK Eye Surgery</CardTitle>
                <CardDescription>
                  Blade-free LASIK and vision correction
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">Save $3K-$5K</div>`,
    new: `<CardTitle className="text-lg">{currentContent.treatments.cards[7].title}</CardTitle>
                <CardDescription>
                  {currentContent.treatments.cards[7].description}
                </CardDescription>
                <div className="mt-2 text-sm font-semibold text-green-600">{currentContent.treatments.cards[7].savings}</div>`
  }
];

// Apply treatment card transformations
let cardCount = 0;
treatmentCardReplacements.forEach((replacement, index) => {
  if (content.includes(replacement.old)) {
    content = content.replace(replacement.old, replacement.new);
    cardCount++;
    console.log(`✅ Transformed treatment card ${index + 1}`);
  }
});

// Transformation 2: "View All Treatments" button
const viewAllButton = {
  old: `<Link href="/treatments">View All 30+ Treatments</Link>`,
  new: `<Link href="/treatments">{currentContent.treatments.viewAll}</Link>`
};
if (content.includes(viewAllButton.old)) {
  content = content.replace(viewAllButton.old, viewAllButton.new);
  console.log('✅ Transformed "View All Treatments" button');
}

// Transformation 3: "Learn More" links in remaining cards (we already did card 0)
const learnMorePattern = /Learn More\n(\s+)<ArrowRight className="ml-1 h-4 w-4" \/>/g;
let learnMoreCount = 0;
content = content.replace(learnMorePattern, (match) => {
  learnMoreCount++;
  if (learnMoreCount === 1) return match; // Skip first one (already transformed)
  return `{currentContent.treatments.learnMore}\n$1<ArrowRight className="ml-1 h-4 w-4" />`;
});
console.log(`✅ Transformed ${learnMoreCount - 1} "Learn More" links`);

// Write the transformed content
fs.writeFileSync(filePath, content, 'utf8');

console.log('\n✨ Homepage transformation complete!');
console.log(`📊 Summary:`);
console.log(`   - Treatment cards: ${cardCount}/7 transformed`);
console.log(`   - View All button: ✅`);
console.log(`   - Learn More links: ${learnMoreCount - 1} transformed`);
console.log('\n🎯 Next: Transform cost comparison, Pentouz, and other sections manually');
