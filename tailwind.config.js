/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    spacing: {
            "safe-bottom": "env(safe-area-inset-bottom)",
          },
      animation: {
        fade: 'fadeIn 2.5s ease-in-out',
        fadeSlow: 'fadeIn 3s ease-in-out',
        fadeSlower: 'fadeIn 4s ease-in-out',
        fadeSlowest: 'fadeIn 6s ease-in-out',
        fadeFast: 'fadeIn 1s ease-in-out',

      },
      keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1},
				}
			},
    },
  },
  plugins: [
       function ({ addUtilities }) {
         addUtilities({
           ".safe-bottom": {
             paddingBottom: "env(safe-area-inset-bottom)",
           },
         });
       },
     ],
}



