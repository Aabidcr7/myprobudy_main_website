module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          purple1: "var(--primary-purple-1)",
          purple2: "var(--primary-purple-2)",
          purple3: "var(--primary-purple-3)",
          orange1: "var(--primary-orange-1)",
          orange2: "var(--primary-orange-2)",
          orange3: "var(--primary-orange-3)",
          orange4: "var(--primary-orange-4)",
          orange5: "var(--primary-orange-5)"
        },
        background: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
          quaternary: "var(--bg-quaternary)",
          light: "var(--bg-light)",
          dark: "var(--bg-dark)",
          gray: "var(--bg-gray)"
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
          quaternary: "var(--text-quaternary)",
          muted: "var(--text-muted)",
          white: "var(--text-white)",
          placeholder: "var(--text-placeholder)"
        },
        button: {
          primary: "var(--btn-primary)",
          orange1: "var(--btn-orange-1)",
          orange2: "var(--btn-orange-2)",
          orange3: "var(--btn-orange-3)",
          orange4: "var(--btn-orange-4)"
        },
        input: {
          background: "var(--input-bg)",
          border: "var(--input-border)"
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};