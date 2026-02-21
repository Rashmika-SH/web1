# Image Setup Instructions

## Adding the Hero Image

To display the Lord Shiva Pujas image on your website, follow these steps:

### Step 1: Save the Image
1. Save the provided image as `hero-image.jpg` in the same folder as your HTML file
2. Recommended image specifications:
   - Format: JPG or WebP (for better performance)
   - Dimensions: 1920x1080px or higher (Full HD recommended)
   - File size: Optimize to under 500KB for fast loading
   - Quality: 80-85% compression

### Step 2: Image Optimization (Recommended)
For best performance, optimize your image using:
- **Online Tools**: TinyJPG, Squoosh.app, or Compressor.io
- **Convert to WebP**: Use Squoosh.app for better compression
- **Responsive Images**: Create multiple sizes for different devices

### Step 3: File Structure
Your folder should look like this:
```
your-website/
├── index.html
├── styles.css
├── script.js
├── logo.svg
├── favicon.svg
├── hero-image.jpg  ← Place your image here
└── README.md
```

### Step 4: Using WebP Format (Optional but Recommended)
If you convert to WebP for better performance:

1. Save as `hero-image.webp`
2. Update the HTML in `index.html`:

```html
<picture>
    <source srcset="hero-image.webp" type="image/webp">
    <img src="hero-image.jpg" alt="Astrologer Sada Shiva - Lord Shiva Pujas in USA" class="hero-image">
</picture>
```

### Step 5: Creating Responsive Images (Advanced)
For optimal mobile performance, create multiple sizes:

```
hero-image-mobile.jpg   (800x600px)
hero-image-tablet.jpg   (1200x800px)
hero-image-desktop.jpg  (1920x1080px)
```

Then update HTML:
```html
<img 
    src="hero-image-desktop.jpg" 
    srcset="hero-image-mobile.jpg 800w,
            hero-image-tablet.jpg 1200w,
            hero-image-desktop.jpg 1920w"
    sizes="100vw"
    alt="Astrologer Sada Shiva - Lord Shiva Pujas in USA" 
    class="hero-image">
```

## Current Features

The hero section now includes:

✅ **Full-screen background image** with the Lord Shiva Pujas photo
✅ **Ken Burns effect** - Subtle zoom animation (20s cycle)
✅ **Parallax scrolling** - Image moves slower than content
✅ **Gradient overlay** - Ensures text readability
✅ **Twinkling stars** - Cosmic effect overlay
✅ **Responsive design** - Adapts to all screen sizes
✅ **Text shadows** - Enhanced readability over image
✅ **Glassmorphism badges** - Modern frosted glass effect
✅ **Smooth animations** - Fade-in effects for all elements

## Image Effects Explained

1. **Ken Burns Animation**: Slow zoom effect (1x to 1.1x scale over 20 seconds)
2. **Overlay Gradient**: Dark gradient from top to bottom for text contrast
3. **Parallax Effect**: Image moves at 30% scroll speed for depth
4. **Responsive Positioning**: 
   - Desktop: Center focus
   - Tablet: Top center focus
   - Mobile: Center center focus

## Troubleshooting

### Image Not Showing?
- Check file name is exactly `hero-image.jpg`
- Ensure image is in the same folder as `index.html`
- Check browser console for errors (F12)
- Verify image file isn't corrupted

### Image Too Large/Slow Loading?
- Compress image to under 500KB
- Convert to WebP format
- Use lazy loading (already implemented)
- Consider using a CDN

### Image Looks Stretched?
- Use minimum 1920x1080px resolution
- Maintain 16:9 aspect ratio
- Check `object-fit: cover` is applied in CSS

### Text Not Readable?
- Increase overlay opacity in CSS (`.hero-overlay`)
- Add stronger text shadows
- Adjust gradient darkness

## Performance Tips

1. **Lazy Loading**: Image loads only when needed
2. **Compression**: Keep file size under 500KB
3. **WebP Format**: 30% smaller than JPG
4. **CDN Hosting**: Use Cloudinary or ImageKit for automatic optimization
5. **Preload**: Add to HTML `<head>` for faster loading:
   ```html
   <link rel="preload" as="image" href="hero-image.jpg">
   ```

## Alternative: Using the Image from a URL

If you want to host the image elsewhere:

1. Upload to image hosting (Imgur, Cloudinary, etc.)
2. Get the direct image URL
3. Update in `index.html`:
   ```html
   <img src="https://your-image-url.com/hero-image.jpg" ...>
   ```

---

**Need Help?** Check the browser console (F12) for any error messages.
