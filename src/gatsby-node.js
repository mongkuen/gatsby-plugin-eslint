exports.modifyWebpackConfig = ({ config, stage }, pluginOptions) => {
  const test = pluginOptions.test || /\.js$|\.jsx$/;
  const exclude = pluginOptions.exclude || /(node_modules|cache|public)/;

  if (stage === 'develop') {
    config.loader('js|jsx', {
      loader: 'eslint-loader',
      test,
      exclude,
    });
  }
  return config;
};
