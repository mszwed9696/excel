# Image Requirements for Excel Realty & Property Management

## Required Images for Homepage

### 1. Hero Background Image
**Filename:** `hero-southjersey.jpg`
**Location:** `/public/images/`
**Specs:**
- Size: 1920x1080px minimum (Full HD)
- Format: JPG (optimized for web, ~200-400KB)
- Content: Aerial or landscape photo of Southern New Jersey
  - Could be: Fields, farmland, suburban neighborhoods, or aerial town view
  - Should evoke: Open space, community, regional beauty
  - Reference: Pat McKenna site uses aerial photo of sports fields/community
- Color tone: Natural, warm tones work well
- Important: Image will have dark overlay (40% black), so choose bright/vibrant image

**Where to find:**
- Unsplash: Search "new jersey landscape aerial" or "south jersey farms"
- Pexels: Search "suburban aerial view" or "new jersey countryside"
- Local photographers: Consider hiring local photographer for authentic South Jersey shots

---

### 2. Buy a Home Section
**Filename:** `buy-home.jpg`
**Location:** `/public/images/`
**Specs:**
- Size: 1920x1080px minimum
- Format: JPG
- Content: Beautiful residential home exterior
  - Could be: Nice suburban home with lawn, colonial style house, or modern home
  - Should convey: Aspiration, family living, homeownership dream
  - Avoid: "For Sale" signs (looks stock)
- Lighting: Natural daylight, bright and inviting
- Will have dark overlay and white text, so choose colorful/bright image

---

### 3. Sell a Home Section
**Filename:** `sell-home.jpg`
**Location:** `/public/images/`
**Specs:**
- Size: 1920x1080px minimum
- Format: JPG
- Content: Attractive home exterior or real estate related
  - Could be: Well-maintained home, keys on table, or handshake/closing scene
  - Should convey: Success, professionalism, achieving goals
  - Different style from buy-home.jpg for visual variety
- Consider: Modern or upscale home to suggest "top dollar"

---

### 4. Property Management Section
**Filename:** `property-management.jpg`
**Location:** `/public/images/`
**Specs:**
- Size: 1920x1080px minimum
- Format: JPG
- Content: Rental property or multi-unit building
  - Could be: Apartment building, duplex, townhomes, or rental interior
  - Should convey: Investment, professional management, quality rentals
  - Can show: Keys, rental agreement, or professional managing property
- Differentiate from single-family home images above

---

## Free Stock Photo Resources

### Recommended Sites (Free, No Attribution Required):
1. **Unsplash** (https://unsplash.com/)
   - Search terms: "modern house exterior", "suburban home", "new jersey", "aerial neighborhood"
   - High quality, free commercial use

2. **Pexels** (https://www.pexels.com/)
   - Search: "real estate", "home exterior", "property management"
   - Excellent quality, all free

3. **Pixabay** (https://pixabay.com/)
   - Search: "house for sale", "residential home", "apartment building"
   - Good variety

### Example Search Queries:
- For hero: "new jersey aerial", "suburban landscape", "south jersey countryside"
- For buy-home: "beautiful house exterior", "dream home", "colonial house"
- For sell-home: "luxury home exterior", "modern house", "well-maintained home"
- For property-mgmt: "apartment building", "townhomes", "rental property"

---

## Quick Implementation Guide

### Option 1: Use Placeholder Images (Fastest)
Use high-quality stock photos from Unsplash:

```bash
# Download these examples (or similar):
# Hero: https://unsplash.com/photos/aerial-photography-of-rural
# Buy: https://unsplash.com/photos/contemporary-house
# Sell: https://unsplash.com/photos/luxury-home-exterior
# Property Mgmt: https://unsplash.com/photos/apartment-complex
```

### Option 2: Professional Photography (Best Long-term)
- Hire local photographer to capture actual South Jersey locations
- Cost: $500-1500 for 4-6 professional shots
- Benefits: Authentic, unique, geo-specific imagery
- Can show actual properties you've sold (with client permission)

### Option 3: AI-Generated Images
- Use Midjourney, DALL-E, or Stable Diffusion
- Prompts:
  - "Aerial photograph of southern New Jersey suburban community, warm afternoon light, professional real estate photography"
  - "Beautiful colonial house exterior in New Jersey, blue sky, well-maintained lawn, professional photography"

---

## Image Optimization Before Upload

Once you have images, optimize them:

1. **Resize to 1920x1080px** (Full HD is perfect)
2. **Compress to 200-400KB** using:
   - TinyPNG.com (easiest, web-based)
   - ImageOptim (Mac app)
   - Squoosh.app (Google's tool)

3. **Save as JPG** with 80-85% quality

---

## Current Status

- [ ] hero-southjersey.jpg - **NEEDED**
- [ ] buy-home.jpg - **NEEDED**
- [ ] sell-home.jpg - **NEEDED**
- [ ] property-management.jpg - **NEEDED**
- [x] logo.png - Already set up (waiting for file)

---

## Temporary Fallback

If you want to test the site before getting images, you can:

1. Create solid color placeholders:
   - Hero: Dark blue/gray
   - Buy: Light blue
   - Sell: Warm gray
   - Property Mgmt: Charcoal

2. Use CSS gradients (I can update the code to use gradients instead of images)

3. Use a single generic real estate image for all sections temporarily

---

## Notes

- All images will have a dark overlay (30-40% black) with white text on top
- Images should be bright/colorful since overlay darkens them
- Avoid images with text already on them
- Horizontal/landscape orientation required (not vertical)
- People in photos are fine but not required
- Consistency in photography style across all images looks more professional

---

**Ready to implement?** Just download 4 images and place them in `/public/images/` with the exact filenames above, and your site will look amazing!
