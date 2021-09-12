module.exports = {
  purge: {
    enabled: false,
    content: ['./*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        openSans: "'Open Sans', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        'text-color': '#686C75',
        'secondary': '#FD5B2F',
        'ellipse-blue': '#47CAF3',
        'ellipse-yellow': '#FFDB80',
        'ellipse-yellow-second': '#FFF3C8',
        'form-color': '#F3F3F3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
