import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#333333',
        orange: {
          500: '#DE5126',
        },
        primary: {
          200: '#344765',
          400: '#344765',
          500: '#006379',
        },
        gray: {
          200: '#F7F8FA',
          600: '#494A4D',
        },
        success: {
          100: '#D0ECD6',
          200: '#67C57C',
          300: '#3D9B52',
          400: '#00831D',
        },
        warning: {
          100: '#FFF0CB',
          200: '#FFD462',
          300: '#F8BF29',
          400: '#E7A700',
        },
        danger: {
          100: '#F8E0DF',
          200: '#EA756D',
          300: '#E5483D',
          400: '#C60D00',
        },
        bg: {
          100: '#FEFEFE',
        },
      },
    },
  },
  plugins: [],
};
export default config;
