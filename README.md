# eosjs v15.0.2

Compatible with **eosio v1.0.5 - v1.0.7**

The main goal of this fork is to make `eosjs` work in browsers with minimal bloat.

### Changelog

- avoid using `for..of` loops
- avoid using `async/await`
- inject the package version (instead of including the entire `package.json`)
- use [buffer][1] package for `Buffer` support
- use [rollup][2] to generate the bundle

[1]: http://npmjs.com/package/buffer
[2]: http://npmjs.com/package/rollup
