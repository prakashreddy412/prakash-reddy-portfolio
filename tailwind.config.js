/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonGreen: '#00ff9c',
        neonCyan: '#00ffff',
        neonPurple: '#800080',
        darkBg: '#0a0a0a',
        darkGray: '#1a1a1a',
        lightGray: '#2a2a2a',
      },
      fontFamily: {
        'hacker': ['Fira Code', 'Share Tech Mono', 'monospace'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'flicker': 'flicker 0.15s infinite linear',
        'matrix': 'matrix 20s linear infinite',
        'typewriter': 'typewriter 3.5s steps(40, end)',
        'blink': 'blink 1s infinite',
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 5px #00ff9c, 0 0 10px #00ff9c, 0 0 15px #00ff9c',
            textShadow: '0 0 5px #00ff9c, 0 0 10px #00ff9c'
          },
          '100%': { 
            boxShadow: '0 0 10px #00ff9c, 0 0 20px #00ff9c, 0 0 30px #00ff9c',
            textShadow: '0 0 10px #00ff9c, 0 0 20px #00ff9c'
          }
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        blink: {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: '#00ff9c' }
        },
        'pulse-neon': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 5px #00ff9c, 0 0 10px #00ff9c, 0 0 15px #00ff9c'
          },
          '50%': {
            opacity: '0.8',
            boxShadow: '0 0 10px #00ff9c, 0 0 20px #00ff9c, 0 0 30px #00ff9c'
          }
        }
      },
      backgroundImage: {
        'matrix-pattern': 'linear-gradient(45deg, transparent 25%, rgba(0, 255, 156, 0.1) 25%, rgba(0, 255, 156, 0.1) 50%, transparent 50%, transparent 75%, rgba(0, 255, 156, 0.1) 75%)',
      }
    },
  },
  plugins: [],
}
