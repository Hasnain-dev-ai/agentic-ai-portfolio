# Portfolio Configuration References

## Tailwind Configuration

```typescript
// tailwind.config.ts

import type { Config } from 'tailwindcss';

const config: Config = {
  // 1. Content: Essential for Tailwind's JIT mode to scan your files
  // and only generate CSS for classes actually used.
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Include 'src' if you use it (common in Next.js 13+)
  ],

  // 2. Dark Mode: Specifies how Tailwind should handle dark mode.
  // 'class' is recommended for manual toggling (e.g., a theme switch).
  // 'media' uses the user's OS preference.
  darkMode: 'class',

  // 3. Theme: This is where you extend Tailwind's default theme
  // with your custom design tokens defined in globals.css.
  theme: {
    extend: {
      // Colors: Map your CSS variables to Tailwind color names.
      // Using `hsl(var(--color-name) / <alpha-value>)` is future-proof
      // for opacity modifiers (e.g., `bg-primary/50`).
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card: 'hsl(var(--card) / <alpha-value>)',
        'card-foreground': 'hsl(var(--card-foreground) / <alpha-value>)',
        popover: 'hsl(var(--popover) / <alpha-value>)',
        'popover-foreground': 'hsl(var(--popover-foreground) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        'primary-foreground': 'hsl(var(--primary-foreground) / <alpha-value>)',
        secondary: 'hsl(var(--secondary) / <alpha-value>)',
        'secondary-foreground': 'hsl(var(--secondary-foreground) / <alpha-value>)',
        muted: 'hsl(var(--muted) / <alpha-value>)',
        'muted-foreground': 'hsl(var(--muted-foreground) / <alpha-value>)',
        accent: 'hsl(var(--accent) / <alpha-value>)',
        'accent-foreground': 'hsl(var(--accent-foreground) / <alpha-value>)',
        destructive: 'hsl(var(--destructive) / <alpha-value>)',
        'destructive-foreground': 'hsl(var(--destructive-foreground) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
      },

      // Border Radius: Map your CSS variables to Tailwind border-radius names.
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)', // Matches your globals.css
        sm: 'calc(var(--radius) - 4px)', // Matches your globals.css
      },

      // Keyframes: Define your custom animations' keyframes.
      keyframes: {
        'portal-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        // These are standard for Radix UI or similar accordions,
        // good to have them explicitly defined.
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },

      // Animations: Apply your defined keyframes with duration, easing, etc.
      animation: {
        'portal-spin': 'portal-spin 8s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },

  // 4. Plugins: Add any official or third-party Tailwind plugins here.
  // Common ones include @tailwindcss/forms, @tailwindcss/typography.
  plugins: [],
};

export default config;

## Global CSS
```css
/* globals.css */

@import "tailwindcss";

html {
  /* Forces a vertical scrollbar to always be present, reserving its space */
  overflow-y: scroll;
}
/* Root Design Tokens */
:root {
  /* Colors */
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
  --accent: 240 4.8% 95.9%;
  --accent-foreground: 240 5.9% 10%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 5.9% 90%;
  --input: 240 5.9% 90%;
  --ring: 240 5.9% 10%;
  --radius: 0.75rem;
}

/* Dark Mode Overrides */
.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --card: 240 10% 3.9%;
  --card-foreground: 0 0% 98%;
  --popover: 240 10% 3.9%;
  --popover-foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 240 5.9% 10%;
  --secondary: 240 3.7% 15.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 240 3.7% 15.9%;
  --muted-foreground: 240 5% 64.9%;
  --accent: 240 3.7% 15.9%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 3.7% 15.9%;
  --input: 240 3.7% 15.9%;
  --ring: 240 4.9% 83.9%;
}

/* Tailwind Safelisted CSS Custom Props (Optional but organized) */
@theme {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-popover: hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
}

/* Reset + Base Layer (Only minimal global touch) */
* {
  @apply border-border;
}

body {
    @apply bg-background text-foreground min-h-screen antialiased;
    }

/* Optional Utility Classes (Add/remove as needed) */
.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.bento-box {
  @apply rounded-xl p-6 transition-all duration-300 hover:shadow-lg;
}

.portal-animation {
  animation: portal-spin 8s linear infinite;
}

/* Animations */
@keyframes portal-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes accordion-down {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes accordion-up {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}

/* Responsive tweaks */
@media (max-width: 767px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }
}
```
