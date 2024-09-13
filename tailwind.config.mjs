import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import("tailwindcss").Config} */
export default {
	darkMode: "media",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			white: "white",
			black: "black",
			transparent: "transparent",
			main: {
				50: "#fdf6ef",
				100: "#fae9da",
				200: "#f5d0b3",
				300: "#eeb083",
				400: "#e58652",
				500: "#df6730",
				600: "#d14f25",
				700: "#ad3c21",
				800: "#812e1f",
				900: "#702b1e",
				950: "#3c140e"
			}
		},
		fontFamily: {
			serif:["Times New Roman", "serif"],
			sans: ["Poppins", ...defaultTheme.fontFamily.sans]
		},
		extend: {
		  boxShadow: {
			custom: "-4px 4px 0"
		  }
		}
	  },
	plugins: [],
}
