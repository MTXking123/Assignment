const config = {
  plugins: ["@tailwindcss/postcss"],
  extend: {
  animation: {
    gradient: 'gradientBG 15s ease infinite',
  },
  keyframes: {
    gradientBG: {
      '0%, 100%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
    },
  },
  backgroundSize: {
    'size-200': '200% 200%',
  }
}

};

export default config;
