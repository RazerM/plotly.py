module.exports = {
  optimization: {
  moduleIds: 'deterministic',
  chunkIds: 'deterministic',
  runtimeChunk: 'single',
  realContentHash: true
 },
};
