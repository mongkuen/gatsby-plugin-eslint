 exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'develop') {
    config.loader('js|jsx', {
      test: /\.js$|\.jsx$/,
      exclude: /(node_modules|cache|public)/,
      loader: 'eslint-loader',
    });
  }
  return config;
};
