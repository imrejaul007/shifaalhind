import { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
  keywords?: string[];
  followUpQuestions?: string[];
}

interface VoiceOptimizedFAQProps {
  faqs: FAQItem[];
  locale?: 'en' | 'ar';
  showSearch?: boolean;
  showCategories?: boolean;
  maxItems?: number;
  className?: string;
}

/**
 * Voice Search Optimized FAQ Component
 * - Natural language questions (how, what, where, when, why)
 * - Rich answers with multiple perspectives
 * - Follow-up questions for continued engagement
 * - Keyword-optimized content
 * - Schema.org markup for featured snippets
 */
export function VoiceOptimizedFAQ({
  faqs,
  locale = 'en',
  showSearch = true,
  showCategories = true,
  maxItems,
  className = '',
}: VoiceOptimizedFAQProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const isRtl = locale === 'ar';

  // Extract unique categories
  const categories = ['all', ...new Set(faqs.flatMap(faq => faq.category ? [faq.category] : []))];

  // Filter FAQs based on search and category
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch =
      !searchQuery ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.keywords?.some(kw => kw.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const displayFAQs = maxItems ? filteredFAQs.slice(0, maxItems) : filteredFAQs;

  // Generate Schema.org JSON-LD optimized for voice search
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: displayFAQs.map(faq => {
      const baseEntity = {
        '@type': 'Question' as const,
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer' as const,
          text: faq.answer,
        },
      };

      // Only add suggestedAnswer if follow-up questions exist
      if (faq.followUpQuestions && faq.followUpQuestions.length > 0) {
        (baseEntity as any).suggestedAnswer = {
          '@type': 'Answer' as const,
          text: faq.followUpQuestions.join(' '),
        };
      }

      return baseEntity;
    }),
  };

  return (
    <>
      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className={`space-y-6 ${className}`} dir={isRtl ? 'rtl' : 'ltr'}>
        {/* Search bar */}
        {showSearch && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 rtl:right-3 rtl:left-auto" />
            <input
              type="search"
              placeholder={isRtl ? 'ابحث في الأسئلة الشائعة...' : 'Search FAQs...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-400 rtl:pl-4 rtl:pr-10"
            />
          </div>
        )}

        {/* Category filter */}
        {showCategories && categories.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {isRtl && category === 'all'
                  ? 'الكل'
                  : category === 'all'
                  ? 'All'
                  : category}
              </button>
            ))}
          </div>
        )}

        {/* FAQ items */}
        <div className="space-y-4">
          {displayFAQs.map((faq, index) => {
            const isExpanded = expandedId === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : index)}
                  className="flex w-full items-start gap-3 p-4 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-750"
                  aria-expanded={isExpanded}
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                    <span className="text-sm font-bold">{index + 1}</span>
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {faq.question}
                    </h3>
                    {faq.keywords && faq.keywords.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {faq.keywords.slice(0, 3).map(kw => (
                          <span
                            key={kw}
                            className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="mt-1 h-5 w-5 shrink-0 text-gray-400" />
                  ) : (
                    <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-gray-400" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4">
                    <div className="ml-9 space-y-3 rtl:mr-9 rtl:ml-0">
                      {/* Main answer */}
                      <div className="prose prose-sm max-w-none text-gray-700 dark:prose-invert dark:text-gray-300">
                        {faq.answer}
                      </div>

                      {/* Follow-up questions */}
                      {faq.followUpQuestions && faq.followUpQuestions.length > 0 && (
                        <div className="mt-4 space-y-2">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            {isRtl ? 'أسئلة متابعة ذات صلة:' : 'Related follow-up questions:'}
                          </p>
                          <ul className="space-y-1">
                            {faq.followUpQuestions.map((question, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                {question}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* CTA */}
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {isRtl ? 'للمزيد من المعلومات' : 'For more information,'}
                          <a
                            href="/contact"
                            className="ml-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 rtl:mr-1"
                          >
                            {isRtl ? 'تواصل معنا' : 'contact our team'}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* No results */}
        {displayFAQs.length === 0 && (
          <div className="rounded-xl bg-gray-50 p-8 text-center dark:bg-gray-800">
            <p className="text-gray-600 dark:text-gray-400">
              {isRtl
                ? 'لم يتم العثور على نتائج. جرب بحثًا مختلفًا.'
                : 'No results found. Try a different search.'}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

/**
 * Voice-optimized FAQ presets for different topics
 */
export const voiceOptimizedFAQPresets = {
  medicalTourism: {
    en: [
      {
        question: 'How much can I save with medical tourism to India?',
        answer: 'Most patients save 60-80% compared to costs in UAE, Saudi Arabia, or Western countries. For example, a knee replacement costs $30,000-50,000 in the US but only $6,000-8,000 in India. Heart bypass surgery costs $100,000+ in the West versus $8,000-12,000 in India. Even after including travel, accommodation, and other expenses, total savings remain substantial.',
        category: 'Cost',
        keywords: ['savings', 'cost', 'price', 'budget', 'affordable'],
        followUpQuestions: [
          'Are there any hidden costs?',
          'What\'s included in the price?',
          'How do I compare costs across hospitals?',
        ],
      },
      {
        question: 'Are Indian hospitals really as good as hospitals in Western countries?',
        answer: 'Yes, absolutely. India\'s top hospitals are JCI-accredited, which means they meet the same international quality standards as hospitals in the US and Europe. Many Indian doctors are trained at prestigious institutions like Harvard, Johns Hopkins, and Mayo Clinic. India performs over 200,000 cardiac surgeries annually with success rates matching or exceeding Western standards. Leading hospitals like Apollo, Fortis, and Max use the same advanced medical technology you\'d find in New York or London.',
        category: 'Quality',
        keywords: ['quality', 'standards', 'JCI', 'accreditation', 'safety'],
        followUpQuestions: [
          'Which hospitals are JCI-accredited?',
          'How do you ensure patient safety?',
          'What medical technology do Indian hospitals have?',
        ],
      },
      {
        question: 'What medical treatments are most popular for patients from GCC countries?',
        answer: 'The most sought-after treatments include cardiac surgery (bypass, valve replacement), orthopedic procedures (knee and hip replacement), fertility treatments (IVF), cosmetic surgery, dental implants, cancer treatment, and spinal surgery. India is also renowned for complex procedures like liver transplants, bone marrow transplants, and robotic surgery. Many patients also seek Ayurveda and wellness treatments.',
        category: 'Treatments',
        keywords: ['popular treatments', 'procedures', 'surgery', 'IVF', 'transplant'],
        followUpQuestions: [
          'Which treatment has the highest success rate?',
          'What\'s the wait time for surgery?',
          'Can I combine multiple treatments in one trip?',
        ],
      },
    ],
    ar: [
      {
        question: 'كم يمكنني توفير المال مع السياحة العلاجية إلى الهند؟',
        answer: 'معظم المرضى يوفرون 60-80% مقارنة بالتكاليف في الإمارات والسعودية أو الدول الغربية. على سبيل المثال، يكلف استبدال الركبة 30,000-50,000 دولار في الولايات المتحدة لكنه يكلف فقط 6,000-8,000 دولار في الهند. تبلغ تكلفة جراحة المجازة القلبية 100,000+ دولار في الغرب مقابل 8,000-12,000 دولار في الهند. حتى بعد إضافة السفر والإقامة والنفقات الأخرى، لا تزال المدخرات كبيرة.',
        category: 'التكلفة',
        keywords: ['توفير', 'تكلفة', 'سعر', 'ميزانية', 'ميسور'],
        followUpQuestions: [
          'هل هناك تكاليف خفية؟',
          'ما الذي يشمله السعر؟',
          'كيف أقارن التكاليف بين المستشفيات؟',
        ],
      },
      {
        question: 'هل المستشفيات الهندية بنفس جودة المستشفيات في الدول الغربية؟',
        answer: 'نعم، بالتأكيد. المستشفيات الهندية الرائدة معتمدة من JCI، مما يعني أنها تلتزم بنفس معايير الجودة الدولية للمستشفيات في الولايات المتحدة وأوروبا. تدرب العديد من الأطباء الهنود في مؤسسات مرموقة مثل هارفارد وجونز هوبكنز ومايو كلينيك. تؤدي الهند أكثر من 200,000 عملية جراحية للقلب سنويًا بمعدلات نجاح تضاهي أو تتجاوز المعايير الغربية.',
        category: 'الجودة',
        keywords: ['جودة', 'معايير', 'JCI', 'اعتماد', 'سلامة'],
        followUpQuestions: [
          'ما هي المستشفيات المعتمدة من JCI؟',
          'كيف تضمن سلامة المرضى؟',
          'ما هي التقنيات الطبية في المستشفيات الهندية؟',
        ],
      },
      {
        question: 'ما هي العلاجات الطبية الأكثر طلبًا للمرضى من دول الخليج؟',
        answer: 'العلاجات الأكثر طلبًا تشمل جراحة القلب (مجازة، استبدال الصمام)، إجراءات العظام (استبدال الركبة والورك)، علاجات الخصوبة (أطفال الأنابيب)، الجراحة التجميلية، زراعة الأسنان، علاج السرطان، وجراحة العمود الفقري. تشتهر الهند أيضًا بالإجراءات المعقدة مثل زراعة الكبد وزراعة نخاع العظام والجراحة الروبوتية.',
        category: 'العلاجات',
        keywords: ['علاجات شائعة', 'إجراءات', 'جراحة', 'أطفال الأنابيب', 'زراعة'],
        followUpQuestions: [
          'ما هو العلاج الذي يحتوي على أعلى معدل نجاح؟',
          'ما هو وقت الانتظار للجراحة؟',
          'هل يمكنني دمج علاجات متعددة في رحلة واحدة؟',
        ],
      },
    ],
  },
};
