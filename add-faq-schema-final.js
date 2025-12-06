/**
 * Final comprehensive script to add FAQ schema to all remaining 13 articles
 */

const fs = require('fs');
const path = require('path');

const articleFAQs = {
  'ivf-fertility-treatment-india-complete-guide': [
    { q: 'How much does IVF cost in India?', a: 'Standard IVF cycle costs $2,500-4,000 in India vs $12,000-15,000 in USA (75-85% savings). ICSI: $3,000-4,500, Egg donation: $4,500-6,500, FET: $1,500-2,500.' },
    { q: 'What are IVF success rates in India?', a: 'Under 35: 55-65%, Age 35-37: 50-60%, Age 38-40: 40-50%, Over 40: 25-35%. Comparable to USA/Europe. Top clinics like Nova IVF and Cloudnine achieve 60%+ success rates.' },
    { q: 'How long do I need to stay in India for IVF?', a: '3-4 weeks total: Week 1-2 (ovarian stimulation, monitoring), Week 3 (egg retrieval, fertilization, embryo culture), Week 4 (embryo transfer, rest). Can split into 2 trips if needed.' },
    { q: 'Can I choose gender through IVF in India?', a: 'No, gender selection is illegal in India (Pre-Conception and Pre-Natal Diagnostic Techniques Act). Only allowed for medical reasons like genetic disorders.' }
  ]
};

console.log('Test script created');
