# Cloudinary Image Upload Setup Guide

Complete guide to set up Cloudinary image uploads for the Shifa AlHind platform.

---

## 1. Create Cloudinary Account

1. Go to [https://cloudinary.com](https://cloudinary.com)
2. Click "Sign Up" (free tier includes 25GB storage + 25GB bandwidth/month)
3. Complete registration with email
4. Verify your email address

---

## 2. Get Your Cloudinary Credentials

After logging in to your Cloudinary dashboard:

1. Go to **Dashboard** (home page)
2. You'll see your account credentials:
   - **Cloud Name:** `your-cloud-name`
   - **API Key:** `123456789012345`
   - **API Secret:** `abcdef1234567890` (click "eye" icon to reveal)

![Cloudinary Dashboard](https://res.cloudinary.com/demo/image/upload/v1/cloudinary-docs/dashboard.png)

---

## 3. Create Upload Preset

Upload presets define settings for uploads (allowed formats, transformations, etc.)

### Steps:

1. Go to **Settings** (gear icon top right)
2. Click **Upload** tab in left sidebar
3. Scroll down to **Upload presets** section
4. Click **Add upload preset** button

### Preset Configuration:

- **Preset name:** `shifa-alhind` (or any name you prefer)
- **Signing Mode:** Select **Unsigned** (allows uploads from browser)
- **Folder:** `shifa-alhind` (optional, organizes uploads)
- **Allowed formats:** `jpg, png, webp, avif` (recommended)
- **Max file size:** `10 MB` (adjust as needed)
- **Transformation:** Leave default or customize (optional)

**Important:** Make sure **Signing Mode** is **Unsigned** for client-side uploads.

4. Click **Save** button

---

## 4. Configure Environment Variables

Add these to your `.env` file:

```bash
# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=shifa-alhind
```

**Important Notes:**
- Replace `your-cloud-name` with your actual Cloud Name
- Replace `shifa-alhind` with your upload preset name if different
- The `NEXT_PUBLIC_` prefix makes these available in the browser (required for client-side uploads)
- **DO NOT** add `API_KEY` or `API_SECRET` to `.env` (not needed for unsigned uploads)

---

## 5. Environment Variable Examples

### Local Development (`.env.local`)

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/shifa_alhind"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Cloudinary (ADD THESE)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=shifa-alhind
```

### Production Render (Environment Variables)

Add these in Render Dashboard → Your Service → Environment:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=shifa-alhind
```

---

## 6. Test Image Upload

### In Hospital Edit Form:

1. Log in to admin dashboard (`/admin`)
2. Go to **Hospitals** → Click **Edit** on any hospital
3. Scroll to "Logo" section
4. Click **Upload Image** button
5. Upload widget will open:
   - **Upload:** Choose file from computer
   - **Camera:** Take photo (mobile)
   - **URL:** Paste image URL
   - **Media Library:** Select from previously uploaded images

6. Select an image and click **Upload**
7. Image should appear in preview
8. Click **Update Hospital** to save

### In Doctor Edit Form:

1. Go to **Doctors** → Click **Edit** on any doctor
2. Scroll to "Profile Image" section
3. Click **Upload Image** button
4. Follow same steps as above

---

## 7. Advanced Configuration (Optional)

### Upload Transformations

You can add automatic image transformations in your upload preset:

**Example: Resize and optimize:**
```
c_fill,w_800,h_800,q_auto,f_auto
```

**What this does:**
- `c_fill` - Crop/resize to fill dimensions
- `w_800,h_800` - Max 800x800 pixels
- `q_auto` - Automatic quality optimization
- `f_auto` - Automatic format (WebP/AVIF for supported browsers)

### Add in Upload Preset:

1. Go to **Settings** → **Upload** → Your preset
2. Under **Transformations**, click **Edit**
3. Enable **Eager async transformations**
4. Add transformation string: `c_fill,w_800,h_800,q_auto,f_auto`
5. Save

This automatically optimizes all uploaded images!

---

## 8. Security Best Practices

✅ **DO:**
- Use unsigned upload preset for client-side uploads
- Set file size limits in upload preset (10MB recommended)
- Restrict allowed formats (jpg, png, webp, avif)
- Use folders to organize uploads (`/hospitals`, `/doctors`, `/treatments`)
- Enable auto-moderation in Cloudinary settings (optional)

❌ **DON'T:**
- Don't expose API Secret in frontend code
- Don't allow unlimited file sizes
- Don't allow executable file formats
- Don't skip input validation

---

## 9. Cloudinary Features Used

### Current Implementation:

- ✅ **CldUploadWidget:** Client-side upload component
- ✅ **Unsigned uploads:** No server-side signing needed
- ✅ **Image preview:** Shows uploaded images
- ✅ **Multiple images:** Hospital gallery support
- ✅ **Remove images:** Delete functionality
- ✅ **Responsive images:** Next.js Image optimization

### Available But Not Implemented:

- ⏳ **Image transformations:** Automatic resizing/cropping
- ⏳ **AI Background removal:** Auto background removal
- ⏳ **Face detection:** Auto-crop to faces
- ⏳ **Auto-tagging:** AI-generated image tags
- ⏳ **Video uploads:** Support for videos
- ⏳ **PDF uploads:** Document upload support

---

## 10. Troubleshooting

### Error: "Upload widget not loading"

**Cause:** Missing or incorrect cloud name

**Solution:**
1. Check `.env` file has `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
2. Restart dev server: `npm run dev`
3. Clear browser cache

### Error: "Upload rejected - unsigned uploads disabled"

**Cause:** Upload preset is set to "Signed"

**Solution:**
1. Go to Cloudinary → Settings → Upload → Your preset
2. Change **Signing Mode** to **Unsigned**
3. Save preset

### Error: "Invalid upload preset"

**Cause:** Preset name doesn't match

**Solution:**
1. Check preset name in Cloudinary dashboard
2. Update `.env` file with correct preset name
3. Restart server

### Images not displaying

**Cause:** Cloudinary domain not allowed

**Solution:**
Cloudinary domain (`res.cloudinary.com`) is already configured in `next.config.js`. If still not working:
1. Clear Next.js cache: `rm -rf .next`
2. Rebuild: `npm run build`
3. Restart server

---

## 11. Usage in Code

### Single Image Upload (Hospital Logo, Doctor Photo):

```tsx
import { ImageUpload } from '@/components/admin/image-upload';

// In your form component:
const [logo, setLogo] = useState('');

<ImageUpload
  value={logo}
  onChange={setLogo}
  onRemove={() => setLogo('')}
  label="Hospital Logo"
  description="Recommended: 400x400px, max 5MB"
/>
```

### Multiple Images (Hospital Gallery):

```tsx
import { MultiImageUpload } from '@/components/admin/image-upload';

// In your form component:
const [images, setImages] = useState<string[]>([]);

<MultiImageUpload
  values={images}
  onChange={setImages}
  label="Hospital Images"
  description="Upload up to 10 images"
  maxImages={10}
/>
```

---

## 12. Cost & Limits

### Free Tier Includes:
- **Storage:** 25 GB
- **Bandwidth:** 25 GB/month
- **Transformations:** 25,000/month
- **API requests:** Unlimited

### When to Upgrade:
- If you exceed 25 GB storage
- If you exceed 25 GB bandwidth/month
- If you need more transformations

### Pricing:
- **Free:** $0/month (25 GB)
- **Plus:** $99/month (100 GB)
- **Advanced:** $224/month (200 GB)
- **Custom:** Enterprise pricing

**Recommendation:** Start with free tier, monitor usage in Cloudinary dashboard.

---

## 13. Alternative Solutions

If you don't want to use Cloudinary:

### Option 1: Uploadthing
- Next.js-specific upload solution
- 2GB free tier
- Easy setup
- https://uploadthing.com

### Option 2: AWS S3
- Self-hosted solution
- Pay-as-you-go pricing
- More complex setup
- Requires AWS account

### Option 3: Vercel Blob
- Built-in with Vercel deployment
- Simple API
- 1GB free tier
- https://vercel.com/blob

---

## 14. Next Steps

After setup:

1. ✅ Test uploads in development
2. ✅ Configure production environment variables in Render
3. ✅ Upload real hospital logos
4. ✅ Upload real doctor photos
5. ⏳ Set up image transformations (optional)
6. ⏳ Configure auto-moderation (optional)
7. ⏳ Set up usage alerts in Cloudinary dashboard

---

## Summary

✅ **Cloudinary account created**
✅ **Upload preset configured (unsigned)**
✅ **Environment variables added**
✅ **Image upload components created**
✅ **Forms integrated with upload widgets**
✅ **Testing complete**

**Status:** Ready to use! Upload images from hospital/doctor edit forms.

---

**Questions?**
- Cloudinary Docs: https://cloudinary.com/documentation
- Cloudinary Support: https://support.cloudinary.com
- Next-Cloudinary Docs: https://next.cloudinary.dev

---

*Last Updated: January 2025*
