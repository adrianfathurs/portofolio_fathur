# Adrian Fathur Setyawan - Personal Portfolio Website

A futuristic, interactive portfolio website built with React and Tailwind CSS.

## Tech Stack

- **React JS** - Component-based UI development
- **Tailwind CSS** - Utility-first styling with custom theme
- **Vite** - Build tool and dev server
- **GitHub Pages** - Deployment platform

## Features

- Dark mode futuristic design with neon accents
- Smooth animations and transitions
- Fully responsive (mobile-first)
- Interactive components with hover effects
- Custom scrollbar styling
- Gradient text effects
- Animated background elements

## Project Structure

```
portofolio-fathur/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar with scroll effect
│   │   ├── Hero.jsx        # Landing section with animated background
│   │   ├── About.jsx       # About me section
│   │   ├── Skills.jsx      # Skills categorized by type
│   │   ├── Experience.jsx  # Work experience timeline
│   │   ├── Projects.jsx    # Featured projects showcase
│   │   ├── Education.jsx   # Education and achievements
│   │   ├── Contact.jsx     # Contact section
│   │   └── Footer.jsx      # Footer component
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles with Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## Customization

### Colors

The theme uses custom neon colors defined in `tailwind.config.js`:
- `neon-blue`: #00f3ff
- `neon-purple`: #bc13fe
- `neon-pink`: #ff0099
- `dark-bg`: #0a0a0f
- `dark-card`: #12121a

### Content

All content is derived from the specifications in `Claude.md`. To update personal information, edit the corresponding component files in `src/components/`.

## Deployment

The project is configured to deploy to GitHub Pages with the base path `/portofolio-fathur/`. To change the deployment path, update the `base` field in `vite.config.js`.

## License

This project is open source and available for personal use.
