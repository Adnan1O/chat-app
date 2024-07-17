/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		colors:{
			blue:"#0a66c2",
			gray:"#717171",
			lightGray:"#F2F2F2",
			white:"#ffff"
		  },
	},
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui")],
};
