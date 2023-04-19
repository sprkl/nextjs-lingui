module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.po/,
        use: ["@lingui/loader"],
      });

      return config;
    },
  };
  return nextConfig;
};
