/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // HUD design system - deep navy + cyan
        background: '#0A1330',
        surface: '#0E1B40',
        'hud-panel': '#16294D',
        'hud-panel-light': '#1D3560',
        'hud-line': '#5CD6F2',
        'hud-line-dim': '#2E5E8C',
        primary: '#5CD6F2',
        accent: '#8AE7FF',
        text: '#DCE8F8',
        muted: '#8FA3C8',
      },
      fontFamily: {
        'satoshi': ['"Satoshi"', '"Plus Jakarta Sans"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
        'geist-mono': ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'hero-title': 'clamp(3rem, 7vw, 6rem)',
        'section-title': '2.5rem',
        'card-title': '1.25rem',
      },
      fontWeight: {
        'satoshi-bold': '800',
        'satoshi-semibold': '700',
        'satoshi-medium': '600',
        'inter-medium': '600',
        'geist-mono-medium': '500',
      },
      letterSpacing: {
        'hero-title': '-0.02em',
        'hud': '0.25em',
        'hud-wide': '0.4em',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scan': 'scan 4s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'flicker': 'flicker 5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.6' },
          '94%': { opacity: '1' },
          '97%': { opacity: '0.8' },
          '98%': { opacity: '1' },
        },
      },
      backdropBlur: {
        'glass': '12px',
      },
      lineHeight: {
        'body': '1.8',
      },
    },
  },
  plugins: [],
}
