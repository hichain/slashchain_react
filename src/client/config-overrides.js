const path = require("path");

module.exports = (config, env) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "src"),
        "@strings": path.resolve(__dirname, "src/assets/strings"),
        "@images": path.resolve(__dirname, "src/assets/images"),
        "@games": path.resolve(
          __dirname,
          "../../node_modules",
          "hichain_web_app_games/dist"
        ),
      },
    },
  };
};
