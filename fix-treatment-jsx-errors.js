/**
 * Fix JSX syntax errors in treatment pages
 * The div className tag is broken with schemas in the middle
 */

const fs = require('fs');
const path = require('path');

const treatmentsDir = path.join(__dirname, 'src/app/[locale]/treatments');
let successCount = 0;
let errorCount = 0;

// Get all treatment directories
const treatments = fs.readdirSync(treatmentsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

treatments.forEach(slug => {
  const filePath = path.join(treatmentsDir, slug, 'page.tsx');

  if (!fs.existsSync(filePath)) {
    return;
  }

  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Find broken patterns:
    // Pattern 1: <div className="min-h-screen bg-gradient-to-b from-gray-50 to-wh
    // Pattern 2: <div className="container mx-auto px-4 p

    const brokenPattern1 = /<div className="min-h-screen bg-gradient-to-b from-gray-50 to-wh[\s\S]*?\{\/\* Breadcrumb Schema[\s\S]*?<BreadcrumbSchema[\s\S]*?\/\>[\s\S]*?\{\/\* Medical Procedure Schema[\s\S]*?<MedicalProcedureSchema[\s\S]*?\/\>[\s\S]*?ite">/;
    const brokenPattern2_py8 = /<div className="container mx-auto px-4 p[\s\S]*?\{\/\* Breadcrumb Schema[\s\S]*?<BreadcrumbSchema[\s\S]*?\/\>[\s\S]*?\{\/\* Medical Procedure Schema[\s\S]*?<MedicalProcedureSchema[\s\S]*?\/\>[\s\S]*?y-8">/;
    const brokenPattern2_py16 = /<div className="container mx-auto px-4 p[\s\S]*?\{\/\* Breadcrumb Schema[\s\S]*?<BreadcrumbSchema[\s\S]*?\/\>[\s\S]*?\{\/\* Medical Procedure Schema[\s\S]*?<MedicalProcedureSchema[\s\S]*?\/\>[\s\S]*?y-16">/;

    if (brokenPattern1.test(content)) {
      // Extract the schemas
      const schemasMatch = content.match(/(\{\/\* Breadcrumb Schema[\s\S]*?<BreadcrumbSchema[\s\S]*?\/\>[\s\S]*?\{\/\* Medical Procedure Schema[\s\S]*?<MedicalProcedureSchema[\s\S]*?\/\>)/);

      if (schemasMatch) {
        const schemas = schemasMatch[1];

        // Replace the broken div with correct structure
        content = content.replace(brokenPattern1, (match) => {
          return `<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">\n      ${schemas}\n`;
        });

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed ${slug} (pattern 1)`);
        successCount++;
      } else {
        console.log(`⚠️  Could not extract schemas in ${slug}`);
        errorCount++;
      }
    } else if (brokenPattern2_py8.test(content)) {
      // Extract the schemas
      const schemasMatch = content.match(/(\{\/\* Breadcrumb Schema[\s\S]*?<BreadcrumbSchema[\s\S]*?\/\>[\s\S]*?\{\/\* Medical Procedure Schema[\s\S]*?<MedicalProcedureSchema[\s\S]*?\/\>)/);

      if (schemasMatch) {
        const schemas = schemasMatch[1];

        // Replace the broken div with correct structure
        content = content.replace(brokenPattern2_py8, (match) => {
          return `<div className="container mx-auto px-4 py-8">\n      ${schemas}\n`;
        });

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed ${slug} (pattern 2: py-8)`);
        successCount++;
      } else {
        console.log(`⚠️  Could not extract schemas in ${slug}`);
        errorCount++;
      }
    } else if (brokenPattern2_py16.test(content)) {
      // Extract the schemas
      const schemasMatch = content.match(/(\{\/\* Breadcrumb Schema[\s\S]*?<BreadcrumbSchema[\s\S]*?\/\>[\s\S]*?\{\/\* Medical Procedure Schema[\s\S]*?<MedicalProcedureSchema[\s\S]*?\/\>)/);

      if (schemasMatch) {
        const schemas = schemasMatch[1];

        // Replace the broken div with correct structure
        content = content.replace(brokenPattern2_py16, (match) => {
          return `<div className="container mx-auto px-4 py-16">\n      ${schemas}\n`;
        });

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed ${slug} (pattern 2: py-16)`);
        successCount++;
      } else {
        console.log(`⚠️  Could not extract schemas in ${slug}`);
        errorCount++;
      }
    } else {
      // No error in this file
    }
  } catch (error) {
    console.error(`❌ Error processing ${slug}:`, error.message);
    errorCount++;
  }
});

console.log(`\n✅ Fixed: ${successCount}`);
console.log(`❌ Errors: ${errorCount}`);
