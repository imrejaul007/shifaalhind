const fs = require('fs');
const path = require('path');

// Fix unused imports in all treatment pages
const fixes = [
  // Remove CheckCircle2, ArrowRight from various pages
  {
    files: [
      'src/app/[locale]/treatments/bariatric-surgery-india/page.tsx',
      'src/app/[locale]/treatments/bone-marrow-transplant-india/page.tsx',
      'src/app/[locale]/treatments/cancer-treatment-india/page.tsx',
      'src/app/[locale]/treatments/cosmetic-surgery-india/page.tsx',
    ],
    oldImport: "import { CheckCircle2, Clock, DollarSign, Heart, ArrowRight, Star } from 'lucide-react';",
    newImport: "import { Clock, DollarSign, Heart, Star } from 'lucide-react';"
  },
  // Remove CheckCircle2, Award from other pages
  {
    files: [
      'src/app/[locale]/treatments/acl-reconstruction-india/page.tsx',
      'src/app/[locale]/treatments/all-on-4-dental-implants-india/page.tsx',
      'src/app/[locale]/treatments/breast-augmentation-india/page.tsx',
      'src/app/[locale]/treatments/egg-freezing-india/page.tsx',
      'src/app/[locale]/treatments/gastric-bypass-india/page.tsx',
    ],
    oldImport: "import { CheckCircle2, Star, DollarSign, Clock, ArrowRight, Calendar, Users, Award } from 'lucide-react';",
    newImport: "import { Star, DollarSign, Clock, Calendar, Users } from 'lucide-react';"
  },
  // Fix about page
  {
    files: ['src/app/[locale]/about/page.tsx'],
    oldImport: "import { Award, Users, Heart, Globe, Shield, CheckCircle, Clock, DollarSign, Headset } from 'lucide-react';",
    newImport: "import { Award, Users, Heart, Globe, Shield, CheckCircle, Clock, DollarSign } from 'lucide-react';"
  },
  // Fix accommodation page
  {
    files: ['src/app/[locale]/accommodation/page.tsx'],
    oldImport: "import { Home, DollarSign, Utensils, Wifi, Car, Shield, MapPin, Phone, Clock } from 'lucide-react';",
    newImport: "import { Home, DollarSign, Utensils, Wifi, Car, Shield, MapPin, Phone } from 'lucide-react';"
  },
  // Fix doctors page
  {
    files: ['src/app/[locale]/doctors/page.tsx'],
    oldImport: "import { Award, GraduationCap, TrendingUp, TrendingDown, Star, MapPin, Users, CheckCircle, Calendar, Heart, Stethoscope } from 'lucide-react';",
    newImport: "import { Award, GraduationCap, TrendingUp, Star, MapPin, Users, CheckCircle, Calendar, Heart, Stethoscope } from 'lucide-react';"
  },
  // Fix hospitals page
  {
    files: ['src/app/[locale]/hospitals/page.tsx'],
    oldImport: "import { Building2, Award, Users, CheckCircle, Star, MapPin, Phone, Clock } from 'lucide-react';",
    newImport: "import { Building2, Award, Users, CheckCircle, Star, MapPin, Phone } from 'lucide-react';"
  },
  // Fix medical-tourism page
  {
    files: ['src/app/[locale]/medical-tourism/page.tsx'],
    oldImport: "import { CheckCircle2, Users, Building2, Clock, DollarSign, Shield, Star, TrendingDown } from 'lucide-react';",
    newImport: "import { CheckCircle2, Users, Clock, DollarSign, Star } from 'lucide-react';"
  },
  // Fix services page
  {
    files: ['src/app/[locale]/services/page.tsx'],
    oldImport: "import {\n  Plane,\n  Hotel,\n  Stethoscope,\n  FileText,\n  HeadphonesIcon,\n  Languages,\n  Award,\n  Globe,\n} from 'lucide-react';",
    newImport: "import {\n  Plane,\n  Hotel,\n  Stethoscope,\n  FileText,\n  HeadphonesIcon,\n  Languages,\n} from 'lucide-react';"
  },
];

fixes.forEach(fix => {
  fix.files.forEach(file => {
    const filePath = path.join(file);
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      if (content.includes(fix.oldImport)) {
        content = content.replace(fix.oldImport, fix.newImport);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed: ${file}`);
      } else {
        console.log(`⏭️  Skipped (pattern not found): ${file}`);
      }
    } else {
      console.log(`❌ File not found: ${file}`);
    }
  });
});

// Fix the hospitals page apostrophe issue
const hospitalsFile = 'src/app/[locale]/hospitals/page.tsx';
if (fs.existsSync(hospitalsFile)) {
  let content = fs.readFileSync(hospitalsFile, 'utf8');
  // Find and replace the unescaped apostrophe
  content = content.replace(/India's leading hospitals/g, "India&apos;s leading hospitals");
  fs.writeFileSync(hospitalsFile, content, 'utf8');
  console.log(`✅ Fixed apostrophe in: ${hospitalsFile}`);
}

console.log('\n✅ All fixes applied!');
