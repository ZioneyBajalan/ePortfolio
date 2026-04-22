# 🌲 ePortfolio - React + Tailwind CSS

A beautiful, nature-themed portfolio website with parallax depth effects, glassmorphism cards, and animated pixel-art vines.

## 🎨 Features

- **Animated Forest Background**: Multi-layered gradient forest with Komorebi sunbeam effects
- **Glassmorphism Cards**: Semi-transparent frosted glass design with backdrop blur
- **Parallax Effects**: Depth-based scrolling animations on all major sections
- **Pixel-Art Vines**: Custom SVG vine decorations adorning card corners
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Interactions**: Fluid animations and hover effects throughout
- **Professional Colors**: Nature-inspired green palette (#6ba876 accent)

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
cd portfolio-react
npm install
```

### Development

```bash
npm run dev
```

The development server will start at `http://localhost:5173/`

### Build

```bash
npm run build
```

Creates an optimized production build in the `dist/` folder.

## 📁 Project Structure

```
portfolio-react/
├── src/
│   ├── components/          # React components
│   │   ├── About.jsx       # About section
│   │   ├── Contact.jsx     # Contact form section
│   │   ├── Footer.jsx      # Footer
│   │   ├── Hero.jsx        # Hero/intro section
│   │   ├── Navigation.jsx  # Header navigation
│   │   ├── Projects.jsx    # Projects grid
│   │   └── VineCorner.jsx  # SVG vine decorations
│   ├── hooks/
│   │   └── useParallax.js  # Parallax scroll hook
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # React entry point
│   └── style.css           # Global Tailwind + custom styles
├── index.html              # HTML entry point
├── package.json
├── tailwind.config.js      # Tailwind configuration
└── postcss.config.js       # PostCSS configuration
```

## 🎯 Key Components

### `useParallax` Hook
Creates a parallax effect on scroll. Usage:

```jsx
const parallaxRef = useParallax(0.3);

return <div ref={parallaxRef}>Content</div>
```

The number (0.3) controls parallax strength (0-1).

### `VineCorner` Component
Renders decorative SVG vines. Usage:

```jsx
<VineCorner corner="tl" />  // top-left
<VineCorner corner="tr" />  // top-right
<VineCorner corner="bl" />  // bottom-left
<VineCorner corner="br" />  // bottom-right
```

### Glassmorphic Classes

- `.glass-card`: Base glassmorphic card style
- `.parallax-card`: Card with parallax hover effect
- `.depth-1`, `.depth-2`, `.depth-3`: Shadow depth levels

## 🎨 Customization

### Colors

Modify colors in `tailwind.config.js`:

```javascript
colors: {
  forest: {
    50: '#f5f1e8',
    500: '#6ba876',
    950: '#1a3a2a',
    // ...
  }
}
```

### Parallax Strength

Adjust the parallax effect strength in component hooks:

```jsx
const parallaxRef = useParallax(0.5); // 0.5 = stronger effect
```

### Animations

Edit keyframes in `style.css`:

```css
@keyframes foliageShift {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(5px); }
}
```

## 📱 Responsive Breakpoints

Uses Tailwind CSS breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🔧 Configuration Files

### `tailwind.config.js`
Defines theme colors, animations, and custom utilities. Extend with your own theme values.

### `postcss.config.js`
PostCSS configuration for Tailwind CSS compilation.

## 📦 Dependencies

- **React 18**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Lightning-fast build tool
- **Font Awesome 6**: Icon library

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the dist/ folder
```

### GitHub Pages

Update `vite.config.js`:

```javascript
export default {
  base: '/repo-name/',
  // ...
}
```

## 💡 Tips

1. **Parallax Performance**: Adjust parallax strength or throttle scroll events for older devices
2. **Image Optimization**: Replace placeholder images (AgroFair.png, etc.) with optimized versions
3. **Form Handling**: Contact form uses Formspree - update the form action URL with your own
4. **SEO**: Update meta tags in `index.html` for better search visibility

## 📄 License

Your portfolio website. Customize as needed!

---

**Happy coding! 🌿**
