import { Award, Shield, CheckCircle, Star, Users, Clock, Globe, Trophy, FileCheck } from 'lucide-react';

interface CertificationBadgeProps {
  locale?: 'en' | 'ar';
  variant?: 'minimal' | 'detailed' | 'showcase';
  className?: string;
}

/**
 * Comprehensive Trust & Certification Badges Component
 * Displays JCI, NABH, ISO, and other critical medical certifications
 * Builds trust with GCC patients through transparent credibility
 */
export function CertificationBadges({ locale = 'en', variant = 'detailed', className = '' }: CertificationBadgeProps) {
  const isRtl = locale === 'ar';

  const certifications = [
    {
      icon: Award,
      name: 'JCI Accredited',
      nameAr: 'معتمد من JCI',
      description: 'Joint Commission International - Gold standard in healthcare quality',
      descriptionAr: 'المفوضية المشتركة الدولية - المعيار الذهبي لجودة الرعاية الصحية',
      color: 'blue',
      badge: '🏆'
    },
    {
      icon: Shield,
      name: 'NABH Certified',
      nameAr: 'حاصل على شهادة NABH',
      description: 'National Accreditation Board for Hospitals & Healthcare Providers',
      descriptionAr: 'المجلس الوطني لاعتماد المستشفيات ومقدمي الرعاية الصحية',
      color: 'green',
      badge: '✅'
    },
    {
      icon: FileCheck,
      name: 'ISO 9001:2015',
      nameAr: 'ISO 9001:2015',
      description: 'Quality Management System Certified',
      descriptionAr: 'معتمد بنظام إدارة الجودة',
      color: 'purple',
      badge: '📋'
    },
  ];

  const trustMetrics = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Patients Served',
      labelAr: 'مريض تمت خدمتهم',
      color: 'blue'
    },
    {
      icon: Star,
      value: '98%',
      label: 'Success Rate',
      labelAr: 'معدل النجاح',
      color: 'green'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Arabic Support',
      labelAr: 'دعم باللغة العربية',
      color: 'purple'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Countries Served',
      labelAr: 'دولة تمت خدمتها',
      color: 'blue'
    },
  ];

  const partnerships = [
    {
      name: 'Apollo Hospitals',
      nameAr: 'مستشفيات أبولو',
      accredited: true
    },
    {
      name: 'Fortis Healthcare',
      nameAr: 'فورتيس للرعاية الصحية',
      accredited: true
    },
    {
      name: 'Manipal Hospitals',
      nameAr: 'مستشفيات مانيبال',
      accredited: true
    },
    {
      name: 'Max Healthcare',
      nameAr: 'ماكس للرعاية الصحية',
      accredited: true
    },
    {
      name: 'Medanta Medicity',
      nameAr: 'ميدانتا ميديسيتي',
      accredited: true
    },
    {
      name: 'Artemis Hospital',
      nameAr: 'مستشفى أرتميس',
      accredited: true
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-950',
        border: 'border-blue-200 dark:border-blue-800',
        text: 'text-blue-700 dark:text-blue-300',
        icon: 'text-blue-600 dark:text-blue-400'
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-950',
        border: 'border-green-200 dark:border-green-800',
        text: 'text-green-700 dark:text-green-300',
        icon: 'text-green-600 dark:text-green-400'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-950',
        border: 'border-purple-200 dark:border-purple-800',
        text: 'text-purple-700 dark:text-purple-300',
        icon: 'text-purple-600 dark:text-purple-400'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  // Minimal variant - compact badge strip
  if (variant === 'minimal') {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`} dir={isRtl ? 'rtl' : 'ltr'}>
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className={`flex items-center gap-2 rounded-lg ${getColorClasses(cert.color).bg} ${getColorClasses(cert.color).border} border px-3 py-2`}
          >
            <span className="text-lg">{cert.badge}</span>
            <span className={`text-xs font-semibold ${getColorClasses(cert.color).text}`}>
              {isRtl ? cert.nameAr : cert.name}
            </span>
          </div>
        ))}
      </div>
    );
  }

  // Showcase variant - full featured trust section
  if (variant === 'showcase') {
    return (
      <div className={`space-y-8 ${className}`} dir={isRtl ? 'rtl' : 'ltr'}>
        {/* Main Certifications */}
        <div className="rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg dark:from-gray-900 dark:to-gray-950">
          <h3 className={`mb-6 text-center text-lg font-bold ${isRtl ? '' : ''} text-gray-900 dark:text-white`}>
            {isRtl ? '🏅 اعتمادات طبية موثوقة' : '🏅 Trusted Medical Certifications'}
          </h3>

          <div className="mb-6 grid gap-4 md:grid-cols-3">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              const colors = getColorClasses(cert.color);
              return (
                <div
                  key={cert.name}
                  className={`flex flex-col items-center rounded-xl ${colors.bg} ${colors.border} border p-4 text-center transition-transform hover:scale-105`}
                >
                  <div className={`mb-2 flex h-12 w-12 items-center justify-center rounded-full ${colors.bg}`}>
                    <Icon className={`h-6 w-6 ${colors.icon}`} />
                  </div>
                  <h4 className={`mb-1 font-semibold ${colors.text}`}>{isRtl ? cert.nameAr : cert.name}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {isRtl ? cert.descriptionAr : cert.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Trust Statement */}
          <div className={`rounded-xl bg-gradient-to-r from-green-50 to-blue-50 p-4 text-center dark:from-green-950 dark:to-blue-950`}>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {isRtl
                ? '✨ جميع المستشفيات الشريكة معتمدة من هيئات دولية ومحلية'
                : '✨ All partner hospitals are accredited by international and national bodies'}
            </p>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {trustMetrics.map((metric) => {
            const Icon = metric.icon;
            const colors = getColorClasses(metric.color);
            return (
              <div
                key={metric.label}
                className={`rounded-xl ${colors.bg} ${colors.border} border p-4 text-center`}
              >
                <Icon className={`mx-auto mb-2 h-6 w-6 ${colors.icon}`} />
                <div className={`text-2xl font-bold ${colors.text}`}>{metric.value}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {isRtl ? metric.labelAr : metric.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Partner Hospitals */}
        <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-900">
          <h3 className={`mb-4 text-center text-lg font-bold text-gray-900 dark:text-white`}>
            {isRtl ? '🏥 مستشفيات شريكة معتمدة' : '🏥 Accredited Partner Hospitals'}
          </h3>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {partnerships.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-800"
              >
                {partner.accredited && (
                  <CheckCircle className="h-4 w-4 shrink-0 text-green-600" />
                )}
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  {isRtl ? partner.nameAr : partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Default detailed variant
  return (
    <div className={`space-y-6 ${className}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Certification Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => {
          const Icon = cert.icon;
          const colors = getColorClasses(cert.color);
          return (
            <div
              key={cert.name}
              className={`group flex items-start gap-3 rounded-xl ${colors.bg} ${colors.border} border p-4 transition-all hover:shadow-md`}
            >
              <div className={`flex shrink-0 items-center justify-center rounded-lg ${colors.bg} p-2`}>
                <Icon className={`h-5 w-5 ${colors.icon}`} />
              </div>
              <div className="flex-1">
                <h4 className={`font-semibold ${colors.text}`}>{isRtl ? cert.nameAr : cert.name}</h4>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                  {isRtl ? cert.descriptionAr : cert.description}
                </p>
              </div>
              <span className="text-xl opacity-50 group-hover:opacity-100">{cert.badge}</span>
            </div>
          );
        })}
      </div>

      {/* Quick Trust Indicators */}
      <div className="flex flex-wrap gap-3">
        {trustMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.label}
              className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 dark:bg-gray-800"
            >
              <Icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{metric.value}</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {isRtl ? metric.labelAr : metric.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Compact Trust Banner for Header/Footer
 */
export function TrustBanner({ locale = 'en', className = '' }: { locale?: 'en' | 'ar'; className?: string }) {
  const isRtl = locale === 'ar';

  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
        <Award className="h-4 w-4 text-blue-600" />
        <span>JCI Accredited</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
        <Shield className="h-4 w-4 text-green-600" />
        <span>NABH Certified</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
        <Users className="h-4 w-4 text-purple-600" />
        <span>10,000+ Patients</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
        <Star className="h-4 w-4 text-yellow-600" />
        <span>98% Success Rate</span>
      </div>
    </div>
  );
}

/**
 * Medical Quality Statement Component
 */
export function MedicalQualityStatement({ locale = 'en' }: { locale?: 'en' | 'ar' }) {
  const isRtl = locale === 'ar';

  const statements = isRtl ? [
    '🏥 جميع المستشفيات الشريكة حاصلة على اعتماد JCI أو NABH',
    '✅ أطباء دوليون بخبرة 15+ سنة',
    '🌍 منسقون باللغة العربية متاحون 24/7',
    '💰 توفير 60-80% مقارنة بدول أخرى',
    '📋 شفافية كاملة في الأسعار دون تكاليف خفية',
  ] : [
    '🏥 All partner hospitals are JCI or NABH accredited',
    '✅ International doctors with 15+ years experience',
    '🌍 Arabic-speaking coordinators available 24/7',
    '💰 Save 60-80% compared to other countries',
    '📋 Complete price transparency with no hidden costs',
  ];

  return (
    <div className="rounded-xl bg-gradient-to-r from-blue-50 to-green-50 p-6 dark:from-blue-950 dark:to-green-950" dir={isRtl ? 'rtl' : 'ltr'}>
      <h3 className="mb-4 flex items-center gap-2 font-bold text-gray-900 dark:text-white">
        <Trophy className="h-5 w-5 text-yellow-600" />
        {isRtl ? 'الجودة الطبية والشفافية المضمونة' : 'Medical Quality & Transparency Guaranteed'}
      </h3>
      <ul className="space-y-2">
        {statements.map((statement, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
            <span className="mt-1 text-green-600">✓</span>
            <span>{statement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
