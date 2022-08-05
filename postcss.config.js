const colors = require("tailwindcss/colors");

module.exports = {
   plugins: {
      tailwindcss: { colors },
      autoprefixer: {},
   },
   theme: {
      extend: {},
      color: {
         gray: colors.warmGray,
      },
   },
};
