exports.onCreateWebpackConfig = ({ stage, actions }, pluginOptions) => {
  const test = pluginOptions.test || /\.js$|\.jsx$/;
  const exclude = pluginOptions.exclude || /(node_modules|.cache|public)/;
  const options = pluginOptions.options || {};
  const stages = pluginOptions.stages || ['develop'];

  if (stages.includes(stage)) {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: test,
            loader: "eslint-loader",
            exclude: exclude,
            options
          }
        ]
      }
    });
  }
};
