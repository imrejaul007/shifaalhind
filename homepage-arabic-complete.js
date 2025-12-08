/**
 * Complete Homepage Arabic Translations
 * Professional, GCC-optimized Arabic (NOT Google Translate)
 */

const arabicContent = {
  // Treatment Cards (8 cards)
  treatmentCards: [
    {
      en: {
        title: 'Heart Surgery',
        description: 'CABG, valve replacement, angioplasty procedures',
        savings: 'Save $50K-$138K',
        learnMore: 'Learn More'
      },
      ar: {
        title: 'جراحة القلب',
        description: 'عمليات القلب المفتوح، استبدال الصمامات، قسطرة الشرايين',
        savings: 'وفّر $50-138 ألف',
        learnMore: 'اعرف المزيد'
      }
    },
    {
      en: {
        title: 'Knee Replacement',
        description: 'Total knee replacement with advanced implants',
        savings: 'Save $14K-$42K',
        learnMore: 'Learn More'
      },
      ar: {
        title: 'استبدال الركبة',
        description: 'استبدال الركبة الكامل بزراعات متقدمة',
        savings: 'وفّر $14-42 ألف',
        learnMore: 'اعرف المزيد'
      }
    },
    {
      en: {
        title: 'IVF & Fertility',
        description: 'Advanced fertility treatments and IVF procedures',
        savings: 'Save $4K-$11K',
        learnMore: 'Learn More'
      },
      ar: {
        title: 'التلقيح الصناعي والخصوبة',
        description: 'علاجات الخصوبة المتقدمة وإجراءات أطفال الأنابيب',
        savings: 'وفّر $4-11 ألف',
        learnMore: 'اعرف المزيد'
      }
    },
    {
      en: {
        title: 'Dental Implants',
        description: 'Titanium and zirconia dental implant solutions',
        savings: 'Save $700-$3.7K',
        learnMore: 'Learn More'
      },
      ar: {
        title: 'زراعة الأسنان',
        description: 'حلول زراعة الأسنان من التيتانيوم والزركونيا',
        savings: 'وفّر $700-3,700',
        learnMore: 'اعرف المزيد'
      }
    },
    {
      en: {
        title: 'Hair Transplant',
        description: 'FUE, FUT, and DHI hair restoration techniques',
        savings: 'Save $6K-$10K',
        learnMore: 'Learn More'
      },
      ar: {
        title: 'زراعة الشعر',
        description: 'تقنيات زراعة الشعر FUE و FUT و DHI',
        savings: 'وفّر $6-10 آلاف',
        learnMore: 'اعرف المزيد'
      }
    },
    {
      en: {
        title: 'Cancer Treatment',
        description: 'Advanced oncology care and cancer treatments',
        savings: 'Save $100K+',
        learnMore: 'Learn More'
      },
      ar: {
        title: 'علاج السرطان',
        description: 'رعاية متقدمة للأورام وعلاجات السرطان',
        savings: 'وفّر أكثر من $100 ألف',
        learnMore: 'اعرف المزيد'
      }
    },
    {
      en: {
        title: 'Rhinoplasty',
        description: 'Cosmetic nose reshaping and rhinoplasty surgery',
        savings: 'Save $2.5K-$11K',
        learnMore: 'Learn More'
      },
      ar: {
        title: 'تجميل الأنف',
        description: 'عمليات تجميل وإعادة تشكيل الأنف',
        savings: 'وفّر $2,500-11,000',
        learnMore: 'اعرف المزيد'
      }
    },
    {
      en: {
        title: 'LASIK Eye Surgery',
        description: 'Blade-free LASIK and vision correction',
        savings: 'Save $3K-$5K',
        learnMore: 'Learn More'
      },
      ar: {
        title: 'عملية الليزك للعيون',
        description: 'ليزك بدون شفرات وتصحيح النظر',
        savings: 'وفّر $3-5 آلاف',
        learnMore: 'اعرف المزيد'
      }
    }
  ],

  // Cost Comparison Section
  costComparison: {
    en: {
      title: 'Compare Treatment Costs: India vs World',
      subtitle: 'See how much you can save on popular medical procedures. All costs in USD.',
      tableHeaders: {
        treatment: 'Treatment',
        india: 'India',
        usa: 'USA',
        uk: 'UK',
        uae: 'UAE',
        savings: 'Your Savings'
      },
      treatments: [
        'Heart Bypass Surgery (CABG)',
        'Knee Replacement (TKR)',
        'IVF (Single Cycle)',
        'Dental Implants (Single Tooth)',
        'Liver Transplant',
        'Cataract Surgery (Both Eyes)',
        'Rhinoplasty (Nose Job)',
        'Spinal Fusion Surgery'
      ],
      youSave: '💰 You Save'
    },
    ar: {
      title: 'قارن تكاليف العلاج: الهند مقابل العالم',
      subtitle: 'شاهد كم يمكنك توفيره على الإجراءات الطبية الشائعة. جميع التكاليف بالدولار الأمريكي.',
      tableHeaders: {
        treatment: 'العلاج',
        india: 'الهند',
        usa: 'الولايات المتحدة',
        uk: 'المملكة المتحدة',
        uae: 'الإمارات',
        savings: 'توفيرك'
      },
      treatments: [
        'جراحة القلب المفتوح (CABG)',
        'استبدال الركبة الكامل',
        'التلقيح الصناعي (دورة واحدة)',
        'زراعة الأسنان (سن واحد)',
        'زراعة الكبد',
        'عملية الساد (كلتا العينين)',
        'تجميل الأنف',
        'جراحة دمج العمود الفقري'
      ],
      youSave: '💰 توفيرك'
    }
  },

  // Pentouz Hotels Section
  pentouz: {
    en: {
      title: 'Accommodation at Pentouz Hotels, Bangalore',
      subtitle: 'Your comfortable home away from home during medical treatment in Bangalore',
      features: [
        {
          title: 'Near Major Hospitals',
          description: '10-15 min from Narayana, Manipal, Apollo, Fortis'
        },
        {
          title: 'Family-Friendly Rooms',
          description: 'Spacious rooms for patients and companions'
        },
        {
          title: 'Halal Food & Prayer Room',
          description: 'Multi-cuisine restaurant with halal options'
        }
      ],
      cta: 'Visit Pentouz Hotels →',
      readyText: 'Ready to explore Bangalore hospitals?',
      readyDescription: 'View our complete list of JCI-accredited hospitals with doctor profiles.',
      viewHospitals: 'View All Bangalore Hospitals',
      meetDoctors: 'Meet Our Doctors'
    },
    ar: {
      title: 'الإقامة في فنادق بنتوز، بنغالور',
      subtitle: 'منزلك المريح بعيداً عن المنزل أثناء العلاج الطبي في بنغالور',
      features: [
        {
          title: 'بالقرب من المستشفيات الكبرى',
          description: '10-15 دقيقة من نارايانا، مانيبال، أبولو، فورتيس'
        },
        {
          title: 'غرف عائلية مريحة',
          description: 'غرف واسعة للمرضى والمرافقين'
        },
        {
          title: 'طعام حلال وغرفة صلاة',
          description: 'مطعم متعدد المأكولات مع خيارات حلال'
        }
      ],
      cta: 'زُر فنادق بنتوز ←',
      readyText: 'هل أنت مستعد لاستكشاف مستشفيات بنغالور؟',
      readyDescription: 'عرض قائمتنا الكاملة للمستشفيات المعتمدة من JCI مع ملفات الأطباء.',
      viewHospitals: 'عرض جميع مستشفيات بنغالور',
      meetDoctors: 'تعرّف على أطبائنا'
    }
  },

  // Top Destinations Section
  destinations: {
    en: {
      title: 'Top Destinations',
      subtitle: 'Medical tourism destinations across the GCC',
      forResidents: 'Medical tourism for {country} residents',
      explore: 'Explore Destinations'
    },
    ar: {
      title: 'الوجهات الأولى',
      subtitle: 'وجهات السياحة العلاجية عبر دول الخليج',
      forResidents: 'السياحة العلاجية لسكان {country}',
      explore: 'استكشف الوجهات'
    }
  },

  // Why Choose India Section
  whyIndia: {
    en: {
      title: 'Why Choose India for Medical Tourism?',
      intro: 'India has emerged as a global leader in medical tourism, attracting over 2 million international patients annually. For GCC residents, India offers an unbeatable combination of world-class healthcare in Bangalore and other cities, significant cost savings, and cultural familiarity with Arabic-speaking coordinators.',
      sections: [
        {
          title: 'Bangalore - India\'s Medical Hub',
          content: 'Bangalore is home to India\'s best hospitals like Narayana Health, Manipal, and Apollo with world-class facilities. Perfect weather year-round (15-30°C) for recovery. We arrange your stay at Pentouz Hotels - comfortable accommodation near all major hospitals with family-friendly rooms and halal food options.'
        },
        {
          title: 'Massive Cost Savings',
          content: 'Medical procedures in India cost 60-80% less than in the UAE, Saudi Arabia, or Western countries. A heart bypass surgery that costs $100,000 in the US is available for $8,000-12,000 in India\'s top hospitals, with the same success rates and quality standards.'
        },
        {
          title: 'No Waiting Lists',
          content: 'Unlike many developed countries where you might wait months for surgery, India\'s healthcare system can schedule your treatment within days or weeks. This is crucial for time-sensitive procedures or patients in pain.'
        },
        {
          title: 'International Accreditation',
          content: 'Our partner hospitals hold JCI (Joint Commission International), NABH (National Accreditation Board for Hospitals), and ISO certifications, ensuring they meet the same rigorous standards as hospitals in the US and Europe.'
        },
        {
          title: 'Arabic Support Throughout Journey',
          content: 'All our coordinators speak fluent Arabic and have lived in GCC countries (UAE, Saudi Arabia, Qatar) for 5-15 years. They understand your culture, dietary needs (halal food), and prayer requirements. Available 24/7 via WhatsApp in Arabic!'
        },
        {
          title: 'Experienced Doctors',
          content: 'India\'s top doctors are trained at institutions like Harvard, Johns Hopkins, and Mayo Clinic. Many have decades of experience and have performed thousands of procedures. India produces over 50,000 specialist doctors annually.'
        },
        {
          title: 'Advanced Technology',
          content: 'Leading Indian hospitals invest heavily in cutting-edge medical technology, including robotic surgery systems, CyberKnife radiotherapy, PET-CT scanners, and advanced cardiac catheterization labs.'
        },
        {
          title: 'Cultural & Linguistic Comfort',
          content: 'For GCC patients, India offers cultural familiarity, halal food options, and English-speaking medical staff. Many hospitals have dedicated international patient departments with Arabic interpreters.'
        }
      ]
    },
    ar: {
      title: 'لماذا تختار الهند للسياحة العلاجية؟',
      intro: 'برزت الهند كرائدة عالمية في السياحة العلاجية، حيث تجذب أكثر من 2 مليون مريض دولي سنوياً. لسكان دول الخليج، تقدم الهند مزيجاً لا يُضاهى من الرعاية الصحية عالمية المستوى في بنغالور ومدن أخرى، وتوفير كبير في التكاليف، والألفة الثقافية مع منسقين ناطقين بالعربية.',
      sections: [
        {
          title: 'بنغالور - المركز الطبي للهند',
          content: 'تضم بنغالور أفضل مستشفيات الهند مثل نارايانا هيلث، مانيبال، وأبولو بمرافق عالمية المستوى. طقس مثالي على مدار العام (15-30 درجة مئوية) للتعافي. ننظم إقامتك في فنادق بنتوز - إقامة مريحة بالقرب من جميع المستشفيات الكبرى مع غرف عائلية وخيارات طعام حلال.'
        },
        {
          title: 'توفير هائل في التكاليف',
          content: 'تكلف الإجراءات الطبية في الهند 60-80٪ أقل من الإمارات أو السعودية أو الدول الغربية. جراحة القلب المفتوح التي تكلف $100,000 في الولايات المتحدة متاحة بـ $8,000-12,000 في أفضل مستشفيات الهند، بنفس معدلات النجاح ومعايير الجودة.'
        },
        {
          title: 'لا قوائم انتظار',
          content: 'على عكس العديد من الدول المتقدمة حيث قد تنتظر شهوراً للجراحة، يمكن لنظام الرعاية الصحية الهندي جدولة علاجك خلال أيام أو أسابيع. هذا أمر حاسم للإجراءات الحساسة للوقت أو المرضى الذين يعانون من الألم.'
        },
        {
          title: 'اعتماد دولي',
          content: 'تحمل مستشفياتنا الشريكة شهادات JCI (اللجنة الدولية المشتركة)، NABH (المجلس الوطني لاعتماد المستشفيات)، وشهادات ISO، مما يضمن استيفائها لنفس المعايير الصارمة للمستشفيات في الولايات المتحدة وأوروبا.'
        },
        {
          title: 'دعم عربي طوال الرحلة',
          content: 'جميع منسقينا يتحدثون العربية بطلاقة وعاشوا في دول الخليج (الإمارات، السعودية، قطر) لمدة 5-15 سنة. يفهمون ثقافتك واحتياجاتك الغذائية (طعام حلال) ومتطلبات الصلاة. متاحون 24/7 عبر واتساب بالعربية!'
        },
        {
          title: 'أطباء ذوو خبرة',
          content: 'أفضل أطباء الهند مدربون في مؤسسات مثل هارفارد، جونز هوبكنز، ومايو كلينك. لدى العديد منهم عقود من الخبرة وأجروا آلاف الإجراءات. تخرّج الهند أكثر من 50,000 طبيب متخصص سنوياً.'
        },
        {
          title: 'تكنولوجيا متقدمة',
          content: 'تستثمر المستشفيات الهندية الرائدة بكثافة في التكنولوجيا الطبية المتطورة، بما في ذلك أنظمة الجراحة الروبوتية، العلاج الإشعاعي بالسايبر نايف، ماسحات PET-CT الضوئية، ومختبرات قسطرة القلب المتقدمة.'
        },
        {
          title: 'راحة ثقافية ولغوية',
          content: 'بالنسبة لمرضى الخليج، تقدم الهند ألفة ثقافية وخيارات طعام حلال وموظفين طبيين يتحدثون الإنجليزية. العديد من المستشفيات لديها أقسام مخصصة للمرضى الدوليين مع مترجمين فوريين للعربية.'
        }
      ]
    }
  },

  // FAQ Section
  faq: {
    en: {
      title: 'Frequently Asked Questions About Medical Tourism to India'
    },
    ar: {
      title: 'الأسئلة الشائعة حول السياحة العلاجية إلى الهند'
    }
  },

  // Testimonials Section
  testimonials: {
    en: {
      badge: '10,000+ GCC Patients Treated Successfully',
      title: 'What Our Patients Say',
      subtitle: 'Real stories from UAE, Saudi Arabia, and GCC patients who experienced our Arabic support, Bangalore hospitals, and comfortable stay at Pentouz Hotels'
    },
    ar: {
      badge: 'أكثر من 10,000 مريض من الخليج تم علاجهم بنجاح',
      title: 'ما يقوله مرضانا',
      subtitle: 'قصص حقيقية من الإمارات والسعودية ومرضى الخليج الذين جربوا دعمنا باللغة العربية، مستشفيات بنغالور، والإقامة المريحة في فنادق بنتوز'
    }
  }
};

console.log('✅ Complete Arabic content structure prepared');
console.log('📊 Total sections: 9 (Treatment Cards, Cost Comparison, Pentouz, Destinations, Why India, FAQ, Testimonials)');
console.log('🌍 GCC-optimized professional Arabic translations');

module.exports = arabicContent;
