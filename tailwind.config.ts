import postcss, { PluginCreator } from 'postcss';
import type { Config } from 'tailwindcss';

// @ts-ignore
const plugin: PluginCreator<any> = ({ addUtilities }) => {
  addUtilities({
    '.container-max': {
      maxWidth: 1920,
      margin: 'auto',
    },
  });
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'btn-dark-primary': 'var(--btn-dark-primary)',
        'btn-pink': 'var(--btn-pink)',
        'btn-dark-pink': 'var(--btn-dark-pink)',
        'bg-primary': 'var(--bg-primary)',
        'subtle-black': '#BBB8B8',
        bordercolor: 'rgba(255, 255, 255, 0.08)',
        backgroundcolor: 'rgba(255, 255, 255, 0.04)',
        // secondary: 'var(--color-secondary)',

        // 'primary-600': 'var(--color-primary-600)',
        // white: 'var(--color-white)',
      },

      borderColor: {
        'custom-gray': '#D9D9D9', // Add custom border color
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '0.25': '1px',
        '2.8': '10.89px',
        '15': '60px',
        '30': '123.5px',
        '45': '186.563px',
        '91': '384.972px',
        46: '183.4px',
        67: '873.414px',
        88: '22rem',
        94: '22.5rem',

        // in percentage
        '48.1': '48%',
        '52': '52%',
        // bilal
        '84.53px': '84.53px',
      },
      boxShadow: {
        all: '0.2px 0.2px 40px',
        custom: '0px 2.863px 67.914px 0px rgba(0, 0, 0, 0.15)',
        slider: '0px 2.897px 43.448px 0px rgba(0, 0, 0, 0.25)',
        newall: '0.2px 0.2px 40px',
      },

      borderWidth: {
        '3': '3px',
        '1': '1px',
      },
      fontFamily: {
        // primary: 'var(--font-product-sans)',
        secondary: 'var(--font-poppins)',
      },
      opacity: {
        '14pc': '14%',
      },
      flexBasis: {
        '11%': '11%',
      },
      fontSize: {
        '1.5xl': '21.985px',
        '1.7xl': '27.665px',
        '4.2xl': '39.875px',
        '4.5xl': '44.97px',
        '7.2xl': '75.417px',
        '7.5xl': '4.5rem',
      },
      screens: {
        xsm: '480px',
        sm: '640px',
        md: '796px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1580px',
        '4xl': '1850px',
      },
    },
    animation: {
      'fade-in': 'fade-in 0.5s ease-out',
      'fade-up': 'fade-up 0.5s ease-out',
      spin: 'spin 1s linear infinite',
    },
    keyframes: {
      'fade-in': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
      'fade-up': {
        '0%': {
          opacity: '0',
          transform: 'translateY(40px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },

      spin: {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '100%': {
          transform: 'rotate(360deg)',
        },
      },
    },
  },
  plugins: [plugin],
};
export default config;
