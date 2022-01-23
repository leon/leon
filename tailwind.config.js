module.exports = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './articles/**/*.{ts,tsx,mdx}',
    './projects/**/*.{ts,tsx,mdx}',
    './labs/**/*.{ts,tsx,mdx}',
  ],
  // darkMode: false, // or 'media' or 'class'
  // corePlugins: {
  //   preflight: false,
  // },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    extend: {
      fontSize: {
        badge: '.6rem',
      },
      colors: {
        primary: {
          light: '#323232',
          DEFAULT: '#242424',
          dark: '#222222',
        },
        accent: {
          light: '#75e8c2',
          DEFAULT: '#0ca98c',
          dark: '#00543c',
        },
        // gray: {
        //   darkest: '#1f2d3d',
        //   dark: '#3c4858',
        //   DEFAULT: '#c0ccda',
        //   light: '#e0e6ed',
        //   lightest: '#f9fafc',
        // },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Helvetica Neue"', 'sans-serif'],
        heading: ['Outfit', '"Helvetica Neue"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
