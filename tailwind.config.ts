import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      // Primary

      'Marine-blue': '#02295a',
      'Purplish-blue': '#473dff',
      'Pastel-blue': '#adbeff',
      'Light-blue': '#bfe2fd',
      'Strawberry-red': '#ed3548',

      // Neutral

      'Cool-gray': '#9699ab',
      'Light-gray': '#d6d9e6',
      Magnolia: '#f0f6ff',
      Alabaster: '#fafbff',
      White: '#ffffff',
    },
  },
  plugins: [],
};
export default config;
