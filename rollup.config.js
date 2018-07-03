const pkg = require('./package.json');

module.exports = {
  input: 'src/index.js',
  external: Object.keys(pkg.dependencies),
  output: {
    file: pkg.main,
    format: 'iife',
  },
  plugins: [
    require('rollup-plugin-ignore')([
      'assert',
      'isomorphic-fetch',
    ]),
    require('rollup-plugin-node-resolve')({
      preferBuiltins: false,
    }),
    require('rollup-plugin-commonjs')(),
    require('rollup-plugin-strip')({
      functions: ['console.*', 'assert', 'assert.*']
    }),
    require('rollup-plugin-replace')({
      EOSJS_VERSION: JSON.stringify(pkg.version)
    }),
    require('rollup-plugin-json')(),
    require('rollup-plugin-buble')(),
  ]
};
