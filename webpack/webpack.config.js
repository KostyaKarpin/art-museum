const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const envConfig = (env) => require(`./webpack.${env}.js`);

module.exports = (env) => {
  const { mode } = env;

  return merge(common, envConfig(mode));
};
