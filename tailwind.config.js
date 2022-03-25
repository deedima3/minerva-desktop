module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: ['even'],
      fontFamily : {
        Inter : ['Inter', 'sans-serif']
      },
      colors : {
        'brand' : {
          'primary' : '#58F9C8',
          'secondary' : '#5DFAFA',
          'black-primary' : '#1A1D27',
          'black-secondary' : '#111319',
          'black-alt' : '#151821',
          'neutral' : '#FBFBFB',
        }
      },
      shadow : {
        'sidebar' : '4px 0px 4px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}
