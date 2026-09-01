import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Height-based breakpoints. Every section is exactly one viewport tall, so
      // the binding constraint is window height, not width: `short:` tightens
      // the expandable sections enough to keep them from clipping.
      screens: {
        short: { raw: '(max-height: 720px)' },
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Space Grotesk', 'sans-serif'],
        code: ['monospace'],
        display: ['Clash Grotesk', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        serif: ['"Times New Roman"', 'Times', 'serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        /* Rest, rise slowly, spin fast at the apex, settle back down slowly.
           The spin is rotateY - about the vertical axis, so the portrait sweeps
           horizontally rather than tipping top-over-bottom. Rise and descent
           carry no rotation, so the fast part is clearly the airborne spin.
           Two full turns keep the end state (720deg) identical to the start, so
           the loop is seamless and it always rests face-on. */
        /* Percentages are against the 10s duration below:
             0-35%   rest at baseline      (3.5s)
             35-50%  rise slowly to apex   (1.5s)
             50-67%  two turns at the apex (1.7s - the spin, kept slow enough to
                                            actually follow)
             67-82%  settle back down      (1.5s)
             82-100% rest                  (1.8s)                              */
        'coin-toss': {
          '0%, 35%': { transform: 'translateY(0) rotateY(0deg) scale(1)' },
          '50%': { transform: 'translateY(-72px) rotateY(0deg) scale(1.04)' },
          '67%': { transform: 'translateY(-72px) rotateY(720deg) scale(1.04)' },
          '82%, 100%': { transform: 'translateY(0) rotateY(720deg) scale(1)' },
        },
        'ring-pulse': {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(0.5deg)' },
          '75%': { transform: 'rotate(-0.5deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'coin-toss': 'coin-toss 10s ease-in-out infinite',
        'ring-pulse': 'ring-pulse 3s ease-in-out infinite',
        tilt: 'tilt 10s linear infinite',
      },
      backgroundImage: {
        'grid-white/[0.02]': `linear-gradient(to right, theme(colors.white / 2%) 1px, transparent 1px), linear-gradient(to bottom, theme(colors.white / 2%) 1px, transparent 1px)`,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        '40px': '40px 40px',
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
