

export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          container: "#000000", 
          background: "#18181b", 
          text: "#d9d9d9", 
        },
        borderRadius: {
          DEFAULT: "42px",
          none: "0px",
        },
      },
    },
    plugins: [],
  };
  