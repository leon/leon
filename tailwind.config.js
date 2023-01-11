/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './blocks/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    extend: {
      fontFamily: {
        heading: ['"Mona Sans"', '"Helvetica Neue"', 'sans-serif'],
      },
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
          light: '#66aacc',
          DEFAULT: '#2e7599',
          dark: '#406a7f',
        },
        // gray: {
        //   darkest: '#1f2d3d',
        //   dark: '#3c4858',
        //   DEFAULT: '#c0ccda',
        //   light: '#e0e6ed',
        //   lightest: '#f9fafc',
        // },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
