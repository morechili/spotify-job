# Rateify.online Clone

This is an exact pixel-for-pixel clone of the rateify.online website, built with React, Tailwind CSS, and Vite.

## Features

- Exact replica of the original rateify.online design
- Responsive layout that works on all devices
- Modern React with hooks and functional components
- Tailwind CSS for styling
- Vite for fast development and building

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Download the Spotify logo:**
   - Download the image from: https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a461d9e5-87a9-4421-8e72-6984d594c69c/id-preview-2b81e2dd--8670a5d0-b076-46d2-8841-2cbd345f8809.lovable.app-1751534498504.png
   - Save it as `public/lovable-uploads/327846f9-829e-4c1a-ad6b-2c30ae7833ef.png`

3. **Replace the affiliate link:**
   - Open `src/components/LandingPage.jsx`
   - Find the `handleApplyClick` function
   - Replace the URL with your affiliate link

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   - Navigate to `http://localhost:3000`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── public/
│   └── lovable-uploads/
│       └── 327846f9-829e-4c1a-ad6b-2c30ae7833ef.png (Spotify logo)
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   └── tooltip.jsx
│   │   ├── icons.jsx
│   │   ├── LandingPage.jsx
│   │   └── NotFound.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Customization

- **Colors:** Modify the CSS variables in `src/index.css`
- **Content:** Edit the text content in `src/components/LandingPage.jsx`
- **Styling:** Use Tailwind CSS classes or modify the component styles
- **Affiliate Link:** Update the URL in the `handleApplyClick` function

## Technologies Used

- React 18
- React Router DOM
- Tailwind CSS
- Vite
- Radix UI (for tooltips)
- Sonner (for toasts)
- Lucide React (for icons)

## License

This project is for educational purposes only. Please respect the original website's terms of service. 