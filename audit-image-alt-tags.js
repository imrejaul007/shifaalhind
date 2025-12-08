/**
 * Image Alt Tag Audit Script
 * Scans all TSX files for img tags and identifies issues with alt attributes
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Results storage
const results = {
  missingAlt: [],
  emptyAlt: [],
  genericAlt: [],
  goodAlt: [],
  nextImageWithoutAlt: [],
  totalImages: 0,
  filesScanned: 0,
};

// Generic/poor alt text patterns to flag
const genericPatterns = [
  /^image$/i,
  /^img$/i,
  /^picture$/i,
  /^photo$/i,
  /^icon$/i,
  /^logo$/i,
  /^banner$/i,
  /^thumbnail$/i,
  /^\d+$/,  // Just numbers
  /^(un)?titled$/i,
  /^temp$/i,
];

function isGenericAlt(altText) {
  return genericPatterns.some(pattern => pattern.test(altText.trim()));
}

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = filePath.replace(process.cwd(), '.');

  // Find all <img> tags (traditional img elements)
  const imgRegex = /<img([^>]*)>/gi;
  let match;

  while ((match = imgRegex.exec(content)) !== null) {
    results.totalImages++;
    const imgTag = match[1];

    // Check for alt attribute
    const altMatch = imgTag.match(/alt=["']([^"']*)["']/);

    if (!altMatch) {
      // Missing alt attribute
      const lineNumber = content.substring(0, match.index).split('\n').length;
      results.missingAlt.push({
        file: relativePath,
        line: lineNumber,
        tag: match[0].substring(0, 100) + (match[0].length > 100 ? '...' : ''),
      });
    } else if (altMatch[1].trim() === '') {
      // Empty alt attribute
      const lineNumber = content.substring(0, match.index).split('\n').length;
      results.emptyAlt.push({
        file: relativePath,
        line: lineNumber,
        tag: match[0].substring(0, 100) + (match[0].length > 100 ? '...' : ''),
      });
    } else if (isGenericAlt(altMatch[1])) {
      // Generic/poor alt text
      const lineNumber = content.substring(0, match.index).split('\n').length;
      results.genericAlt.push({
        file: relativePath,
        line: lineNumber,
        alt: altMatch[1],
        tag: match[0].substring(0, 100) + (match[0].length > 100 ? '...' : ''),
      });
    } else {
      // Good alt text
      results.goodAlt.push({
        file: relativePath,
        alt: altMatch[1],
      });
    }
  }

  // Find Next.js <Image> components without alt
  const nextImageRegex = /<Image([^>]*?)(?:>|\/?>)/gi;

  while ((match = nextImageRegex.exec(content)) !== null) {
    results.totalImages++;
    const imageProps = match[1];

    // Check for alt prop
    const altMatch = imageProps.match(/alt=["']([^"']*)["']/);

    if (!altMatch) {
      const lineNumber = content.substring(0, match.index).split('\n').length;
      results.nextImageWithoutAlt.push({
        file: relativePath,
        line: lineNumber,
        tag: match[0].substring(0, 100) + (match[0].length > 100 ? '...' : ''),
      });
    } else if (altMatch[1].trim() === '') {
      const lineNumber = content.substring(0, match.index).split('\n').length;
      results.emptyAlt.push({
        file: relativePath,
        line: lineNumber,
        tag: match[0].substring(0, 100) + (match[0].length > 100 ? '...' : ''),
      });
    } else if (isGenericAlt(altMatch[1])) {
      const lineNumber = content.substring(0, match.index).split('\n').length;
      results.genericAlt.push({
        file: relativePath,
        line: lineNumber,
        alt: altMatch[1],
        tag: match[0].substring(0, 100) + (match[0].length > 100 ? '...' : ''),
      });
    } else {
      results.goodAlt.push({
        file: relativePath,
        alt: altMatch[1],
      });
    }
  }
}

console.log('🔍 Starting image alt tag audit...\n');

// Find all TSX and JSX files in src directory
const files = glob.sync('src/**/*.{tsx,jsx}', {
  ignore: ['**/node_modules/**', '**/.next/**', '**/dist/**'],
});

console.log(`📁 Found ${files.length} files to scan\n`);

files.forEach(file => {
  results.filesScanned++;
  analyzeFile(file);
});

// Generate report
console.log('📊 IMAGE ALT TAG AUDIT REPORT\n');
console.log('=' .repeat(80));
console.log('\n📈 SUMMARY:\n');
console.log(`Total images found: ${results.totalImages}`);
console.log(`Files scanned: ${results.filesScanned}`);
console.log(`\n🚨 ISSUES FOUND:\n`);
console.log(`❌ Missing alt attribute: ${results.missingAlt.length}`);
console.log(`⚠️  Empty alt attribute: ${results.emptyAlt.length}`);
console.log(`⚠️  Generic/poor alt text: ${results.genericAlt.length}`);
console.log(`❌ Next.js Image without alt: ${results.nextImageWithoutAlt.length}`);
console.log(`\n✅ GOOD:\n`);
console.log(`Good alt text: ${results.goodAlt.length}`);

const totalIssues = results.missingAlt.length + results.emptyAlt.length +
                    results.genericAlt.length + results.nextImageWithoutAlt.length;
const score = results.totalImages > 0
  ? Math.round(((results.totalImages - totalIssues) / results.totalImages) * 100)
  : 100;

console.log(`\n📊 ALT TAG SCORE: ${score}%`);
console.log('=' .repeat(80));

// Detailed issues
if (results.missingAlt.length > 0) {
  console.log('\n\n❌ MISSING ALT ATTRIBUTE:\n');
  results.missingAlt.forEach((item, index) => {
    console.log(`${index + 1}. ${item.file}:${item.line}`);
    console.log(`   ${item.tag}\n`);
  });
}

if (results.nextImageWithoutAlt.length > 0) {
  console.log('\n\n❌ NEXT.JS IMAGE WITHOUT ALT:\n');
  results.nextImageWithoutAlt.forEach((item, index) => {
    console.log(`${index + 1}. ${item.file}:${item.line}`);
    console.log(`   ${item.tag}\n`);
  });
}

if (results.emptyAlt.length > 0) {
  console.log('\n\n⚠️  EMPTY ALT ATTRIBUTE:\n');
  results.emptyAlt.forEach((item, index) => {
    console.log(`${index + 1}. ${item.file}:${item.line}`);
    console.log(`   ${item.tag}\n`);
  });
}

if (results.genericAlt.length > 0) {
  console.log('\n\n⚠️  GENERIC/POOR ALT TEXT:\n');
  results.genericAlt.forEach((item, index) => {
    console.log(`${index + 1}. ${item.file}:${item.line}`);
    console.log(`   Alt: "${item.alt}"`);
    console.log(`   ${item.tag}\n`);
  });
}

// Save detailed report to file
const reportPath = 'IMAGE_ALT_TAG_AUDIT_REPORT.txt';
let report = `IMAGE ALT TAG AUDIT REPORT\n`;
report += `Generated: ${new Date().toISOString()}\n\n`;
report += `${'='.repeat(80)}\n\n`;
report += `SUMMARY:\n`;
report += `Total images found: ${results.totalImages}\n`;
report += `Files scanned: ${results.filesScanned}\n`;
report += `\nISSUES:\n`;
report += `Missing alt attribute: ${results.missingAlt.length}\n`;
report += `Empty alt attribute: ${results.emptyAlt.length}\n`;
report += `Generic/poor alt text: ${results.genericAlt.length}\n`;
report += `Next.js Image without alt: ${results.nextImageWithoutAlt.length}\n`;
report += `\nGOOD:\n`;
report += `Good alt text: ${results.goodAlt.length}\n`;
report += `\nALT TAG SCORE: ${score}%\n`;
report += `${'='.repeat(80)}\n\n`;

if (results.missingAlt.length > 0) {
  report += `\nMISSING ALT ATTRIBUTE:\n\n`;
  results.missingAlt.forEach((item, index) => {
    report += `${index + 1}. ${item.file}:${item.line}\n`;
    report += `   ${item.tag}\n\n`;
  });
}

if (results.nextImageWithoutAlt.length > 0) {
  report += `\nNEXT.JS IMAGE WITHOUT ALT:\n\n`;
  results.nextImageWithoutAlt.forEach((item, index) => {
    report += `${index + 1}. ${item.file}:${item.line}\n`;
    report += `   ${item.tag}\n\n`;
  });
}

if (results.emptyAlt.length > 0) {
  report += `\nEMPTY ALT ATTRIBUTE:\n\n`;
  results.emptyAlt.forEach((item, index) => {
    report += `${index + 1}. ${item.file}:${item.line}\n`;
    report += `   ${item.tag}\n\n`;
  });
}

if (results.genericAlt.length > 0) {
  report += `\nGENERIC/POOR ALT TEXT:\n\n`;
  results.genericAlt.forEach((item, index) => {
    report += `${index + 1}. ${item.file}:${item.line}\n`;
    report += `   Alt: "${item.alt}"\n`;
    report += `   ${item.tag}\n\n`;
  });
}

fs.writeFileSync(reportPath, report);
console.log(`\n\n📄 Detailed report saved to: ${reportPath}`);

// Exit with error code if issues found
process.exit(totalIssues > 0 ? 1 : 0);
