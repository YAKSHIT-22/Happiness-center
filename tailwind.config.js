/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xxs: "300px",
			xs: "390px",
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},

		extend: {
			fontFamily: {
				monts: ["Montserrat", "sans-serif"],
				zilla:["Zilla Slab", "sans-serif"]
			},
			width: {
				'128': '32rem',
			  },
			height: {
				'128': '32rem',
			  }
			
		},
	},
	plugins: [
		require('tailwindcss-debug-screens'),
	  ]
};
