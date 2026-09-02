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
        eagle: ['var(--font-eagle-horizon)', 'cursive'],
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
        /* Percentages are against the 9s duration below:
             0-71%   rest at baseline      (6.39s)
             71-77%  climb to apex         (0.54s)
             77-88%  two turns at the apex (0.99s - the spin)
             88-94%  fall back down        (0.54s)
             94-100% rest                  (0.54s)
           The whole action is 2.07s with a 6.93s pause between tosses, so it is
           a quick flourish rather than a constant animation.
           Apex height comes from --toss-lift so it can be dialled down on short
           viewports, where a tall flight would clip out of the section or slide
           up behind the header. */
        'coin-toss': {
          '0%, 71%': { transform: 'translateY(0) rotateY(0deg) scale(1)' },
          '77%': { transform: 'translateY(calc(var(--toss-lift, 120px) * -1)) rotateY(0deg) scale(1.08)' },
          '88%': { transform: 'translateY(calc(var(--toss-lift, 120px) * -1)) rotateY(720deg) scale(1.08)' },
          '94%, 100%': { transform: 'translateY(0) rotateY(720deg) scale(1)' },
        },
        /* The two halo layers run these on deliberately mismatched periods
           (4.3s and 6.7s, which do not divide evenly), so their peaks drift in
           and out of phase and the resting glow varies instead of pulsing on a
           obvious loop. Asymmetric stops keep either one from looking like a
           plain sine. */
        'ring-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.97)' },
          '35%': { opacity: '0.85', transform: 'scale(1.05)' },
          '60%': { opacity: '1', transform: 'scale(1.09)' },
        },
        'ring-pulse-alt': {
          '0%, 100%': { opacity: '0.95', transform: 'scale(1.06)' },
          '45%': { opacity: '0.45', transform: 'scale(0.98)' },
          '70%': { opacity: '0.7', transform: 'scale(1.02)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'coin-toss': 'coin-toss 9s ease-in-out infinite',
        'ring-pulse': 'ring-pulse 4.3s ease-in-out infinite',
        'ring-pulse-alt': 'ring-pulse-alt 6.7s ease-in-out infinite',
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
