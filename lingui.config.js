module.exports = {
  locales: ["en", "cs"],
  sourceLocale: "en",
  catalogs: [
    {
      path: "<rootDir>/src/locale/{locale}/messages",
      include: ["<rootDir>/"],
      exclude: ["**/node_modules/**"],
    },
  ],
};
