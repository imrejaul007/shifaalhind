# 🔍 SEO Testing Checklist

Run these tests after Render deployment completes:

## ✅ Basic SEO Files

### 1. Test Sitemap
```
https://shifaalhind.onrender.com/sitemap.xml
```
**Expected:** XML file with all your pages listed

### 2. Test PWA Manifest
```
https://shifaalhind.onrender.com/manifest.webmanifest
```
**Expected:** JSON with app configuration

### 3. Test robots.txt
```
https://shifaalhind.onrender.com/robots.txt
```
**Expected:** ✅ Already working! Shows sitemap URL

---

## 📱 Social Media Testing

### 4. Facebook/OpenGraph Preview
Go to: https://developers.facebook.com/tools/debug/

Test URL: `https://shifaalhind.onrender.com`

**Expected Results:**
- ✅ Title: "Shifa AlHind | Premium Medical Tourism to India"
- ✅ Description showing
- ✅ OG Image preview
- ✅ No errors

**How to test:**
1. Enter your URL
2. Click "Debug"
3. Check for warnings/errors
4. Click "Scrape Again" if needed

### 5. Twitter Card Preview
Go to: https://cards-dev.twitter.com/validator

Test URL: `https://shifaalhind.onrender.com`

**Expected Results:**
- ✅ Twitter Card type: summary_large_image
- ✅ Title and description showing
- ✅ Image preview

---

## 🎯 Google SEO Testing

### 6. Google Rich Results Test
Go to: https://search.google.com/test/rich-results

Test URL: `https://shifaalhind.onrender.com`

**Expected Results:**
- ✅ Organization schema detected
- ✅ Medical schema detected
- ✅ Breadcrumb schema detected
- ✅ No errors

### 7. Google PageSpeed Insights
Go to: https://pagespeed.web.dev/

Test URL: `https://shifaalhind.onrender.com`

**Expected Results:**
- ✅ Performance score > 80
- ✅ SEO score: 100
- ✅ Best Practices score > 90
- ✅ Accessibility score > 90

### 8. Google Mobile-Friendly Test
Go to: https://search.google.com/test/mobile-friendly

Test URL: `https://shifaalhind.onrender.com`

**Expected Results:**
- ✅ Page is mobile-friendly
- ✅ No mobile usability issues

---

## 🔧 Manual SEO Checks

### 9. Check Meta Tags
View page source: https://shifaalhind.onrender.com

Look for these in `<head>`:
```html
<!-- Title -->
<title>Shifa AlHind | Premium Medical Tourism to India</title>

<!-- Meta Description -->
<meta name="description" content="Connect with world-class hospitals..." />

<!-- OpenGraph -->
<meta property="og:title" content="Shifa AlHind | Premium Medical Tourism to India" />
<meta property="og:description" content="..." />
<meta property="og:image" content="/og-image.png" />
<meta property="og:url" content="https://shifaalhind.onrender.com" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />

<!-- Canonical URL -->
<link rel="canonical" href="https://shifaalhind.onrender.com/" />

<!-- Hreflang -->
<link rel="alternate" hreflang="en-US" href="https://shifaalhind.onrender.com/" />
<link rel="alternate" hreflang="ar-SA" href="https://shifaalhind.onrender.com/ar" />

<!-- Schema.org -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Shifa AlHind",
  ...
}
</script>
```

### 10. Test PWA Install
On mobile Chrome/Safari:
1. Visit https://shifaalhind.onrender.com
2. Look for "Add to Home Screen" prompt
3. Should show Shifa AlHind icon and name

---

## 🚀 Submit to Search Engines

### 11. Google Search Console
1. Go to: https://search.google.com/search-console
2. Click "Add Property"
3. Choose "URL prefix"
4. Enter: `https://shifaalhind.onrender.com`
5. Verify ownership (select "HTML tag" method)
6. Copy the verification code
7. Add to Render env vars:
   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-code-here
   ```
8. Wait for deployment, then click "Verify"
9. Once verified, go to "Sitemaps" (left sidebar)
10. Add sitemap: `https://shifaalhind.onrender.com/sitemap.xml`
11. Click "Submit"

### 12. Bing Webmaster Tools
1. Go to: https://www.bing.com/webmasters
2. Sign in with Microsoft account
3. Click "Add a site"
4. Enter: `https://shifaalhind.onrender.com`
5. Verify ownership
6. Submit sitemap: `https://shifaalhind.onrender.com/sitemap.xml`

### 13. Yandex Webmaster (Optional)
1. Go to: https://webmaster.yandex.com
2. Add site: `https://shifaalhind.onrender.com`
3. Verify and submit sitemap

---

## ✅ Success Criteria

Your SEO is properly set up when:

- ✅ All 3 basic files load correctly (sitemap, manifest, robots.txt)
- ✅ Facebook debugger shows proper preview
- ✅ Google Rich Results detects schemas
- ✅ PageSpeed SEO score is 100
- ✅ Site is mobile-friendly
- ✅ Meta tags visible in page source
- ✅ PWA install prompt appears on mobile
- ✅ Submitted to Google Search Console
- ✅ Sitemap submitted and indexed

---

## 📊 Monitoring (After Setup)

Check weekly:
1. **Google Search Console** - Track impressions, clicks, keywords
2. **PageSpeed Insights** - Monitor performance scores
3. **Coverage Report** - Check for indexing errors
4. **Sitemap Status** - Verify all pages discovered

---

## 🎯 Expected Timeline

- **Immediate:** Technical SEO (meta tags, schema) ✅
- **1-3 days:** Google starts crawling
- **1-2 weeks:** Pages begin appearing in search
- **1-3 months:** Full indexing and ranking

---

**Good luck with your SEO! 🚀**
