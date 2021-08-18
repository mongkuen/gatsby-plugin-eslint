const ESLintPlugin = require("eslint-webpack-plugin");
const webpackMerge = require("webpack-merge");
const { mergeWithCustomize, unique } = webpackMerge;

exports.onCreateWebpackConfig = (
  { stage, actions, getConfig },
  { stages, extensions, exclude, plugins, ...remainingOptions }
) => {
  const pluginStages = stages || ["develop"];

  const options = {};
  options.extensions = extensions ? extensions : ["js", "jsx", "ts", "tsx"];
  options.exclude = exclude
    ? exclude
    : ["node_modules", "bower_components", ".cache", "public"];

  if (pluginStages.includes(stage)) {
    const esLintPluginOptions = {
      ...options,
      ...remainingOptions
    };
    const lintConfig = {
      plugins: [new ESLintPlugin(esLintPluginOptions)]
    };

    const currentConfig = getConfig();
    const newConfig = mergeWithCustomize({
      customizeArray: unique(
        "plugins",
        ["ESLintWebpackPlugin"],
        plugin => plugin.constructor && plugin.constructor.name
      )
    })(currentConfig, lintConfig);
    actions.replaceWebpackConfig(newConfig);
  }
};
