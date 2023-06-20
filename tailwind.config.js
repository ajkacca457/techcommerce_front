module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        work: ['Work Sans', "sans-serif"],
       },
       maxWidth: {
				'content': '1280px',
			},
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
