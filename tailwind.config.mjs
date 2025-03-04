/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {

			container: {
				center: true,
				padding: {
					DEFAULT: "14px",
					lg: "20px",
				},
				screens: {
					sm: "98%",
					md: "95%",
					lg: "1170px",
				},
			},
			colors: {
				primary: {
					DEFAULT: "#2BAFFC",
				},
				secondary: {
					DEFAULT: "#01080E",
				},
				textPrimary: {
					DEFAULT: "#FFFFFF",
					hover: "#53AC9F"
				},

				textSecondary: {
					DEFAULT: "#000000",
				}
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
