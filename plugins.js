// plugins.js
module.exports.getPlugins = () => {
  const stage = process.env.SERVERLESS_STAGE || process.env.STAGE || 'dev';

  const plugins = [];

  // Add serverless-offline only in dev/local stages
  if (stage === 'dev' || stage === 'local') {
    plugins.push('serverless-offline');
  }

  return plugins;
};
