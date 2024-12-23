/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files where Tailwind is used
    "./public/index.html",        // Include public HTML
  ],
  theme: {
    extend: {
      // Extend Tailwind's default styles or add custom values here
      colors: {
        primary: "#1E40AF", // Example: Add a primary color
        secondary: "#9333EA",
      },
      spacing: {
        128: "32rem", // Example: Custom spacing value
        144: "36rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Custom font family
        spaceGrotesk: ["Space Grotesk", "sans-serif"], // Custom font family
        inter: ["Inter", "Roboto", "sans-serif"], // Custom font family        
      },
      boxShadow: {
        'custom': '0px 4px 0px 0px #343445, 0px 4px 10px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [
  ],
};
