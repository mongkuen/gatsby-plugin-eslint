const ESLintPlugin = require("eslint-webpack-plugin");

exports.onCreateWebpackConfig = ({ stage, actions }, pluginOptions) => {
  const options = pluginOptions.options || {};
  if (!options.extensions) options.extensions = ["js", "jsx", "ts", "tsx"];
  if (!options.exclude) options.exclude = ["node_modules", ".cache", "public"];

  const stages = pluginOptions.stages || ["develop"];

  if (stages.includes(stage)) {
    actions.setWebpackConfig({
      plugins: [new ESLintPlugin(Object.assign(options))]
    });
  }
};
