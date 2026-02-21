# Quick Start Guide

## 🚀 Get Your Website Running in 3 Steps

### Step 1: Save the Hero Image
1. Save the Lord Shiva Pujas image you provided as **`hero-image.jpg`**
2. Place it in the same folder as `index.html`

### Step 2: Open the Website
1. Double-click `index.html` to open in your browser
2. You should see the beautiful Lord Shiva Pujas image as the hero background!

### Step 3: Customize Contact Info
1. Open `index.html` in a text editor
2. Find and replace:
   - `+91XXXXXXXXXX` → Your actual WhatsApp number
   - `contact@astrodurgaprasad.com` → Your actual email

## ✨ What You'll See

### Hero Section Features:
- ✅ Full-screen Lord Shiva Pujas background image
- ✅ Smooth Ken Burns zoom animation (subtle 20-second cycle)
- ✅ Parallax scrolling effect (image moves slower than content)
- ✅ Twinkling stars overlay for cosmic feel
- ✅ Gradient overlay ensuring text is always readable
- ✅ Glassmorphism badges with shine effect
- ✅ Glowing CTA buttons
- ✅ Fully responsive on all devices

### Interactive Elements:
- 🌟 Animated counters in "Why Choose Us" section
- 🎠 Testimonial carousel slider
- 📱 Floating WhatsApp button with pulse animation
- 📋 FAQ accordion
- 📝 Lead generation form
- 🎯 Sticky mobile booking button

## 📱 Test Responsiveness

1. **Desktop**: Full hero image with all effects
2. **Tablet**: Optimized image positioning
3. **Mobile**: Vertical layout with touch-friendly buttons

To test: Press `F12` in browser → Click device toolbar icon → Select different devices

## 🎨 Customization Tips

### Change Colors:
Edit `styles.css` and modify these variables:
```css
--primary-color: #1e3a8a;     /* Deep blue */
--accent-gold: #fbbf24;        /* Gold */
```

### Adjust Image Overlay Darkness:
In `styles.css`, find `.hero-overlay` and change opacity values:
```css
rgba(15, 23, 42, 0.7)  /* Last number = darkness (0.0 to 1.0) */
```

### Change Animation Speed:
In `styles.css`, find `@keyframes kenBurns`:
```css
animation: kenBurns 20s  /* Change 20s to your preferred duration */
```

## 🔧 Common Issues

### Image Not Showing?
- ✓ Check filename is exactly `hero-image.jpg` (case-sensitive)
- ✓ Image is in the same folder as `index.html`
- ✓ Try refreshing browser (Ctrl+F5 or Cmd+Shift+R)

### Image Too Slow to Load?
- Compress image to under 500KB using [TinyJPG](https://tinyjpg.com)
- Convert to WebP format using [Squoosh](https://squoosh.app)

### Text Hard to Read?
- Increase overlay darkness in `.hero-overlay` CSS
- Add stronger text shadows in `.hero-title` CSS

## 📊 Performance Checklist

- [ ] Image optimized to under 500KB
- [ ] Tested on mobile devices
- [ ] All placeholder text replaced
- [ ] Contact information updated
- [ ] Social media links added
- [ ] Google Maps embedded

## 🌐 Ready to Go Live?

1. **Choose a hosting provider**: Netlify, Vercel, or traditional hosting
2. **Upload all files** including `hero-image.jpg`
3. **Configure domain** and SSL certificate
4. **Test on real devices** before announcing

## 💡 Pro Tips

1. **Add more images**: Replace placeholder sections with real photos
2. **SEO**: Update meta descriptions in `<head>` section
3. **Analytics**: Add Google Analytics code before `</body>`
4. **Speed**: Use WebP format for 30% smaller file size
5. **Backup**: Keep original high-res image for future use

## 📞 Need Help?

- Check `SETUP-IMAGE.md` for detailed image instructions
- Check `README.md` for complete documentation
- Open browser console (F12) to see any error messages

---

**Enjoy your premium astrology website! 🌟**
