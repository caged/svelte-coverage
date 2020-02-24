const fs = require('fs')
const svelte = require('svelte/compiler');
const { transform } = require('@babel/core');
const jestPreset = require('babel-preset-jest');

module.exports = {
  process(source, path) {
    fs.writeFileSync('foo.debug', path)

    const {
      js,
      css,
      ast,
      warnings,
      vars,
      stats
    } = svelte.compile(source, { filename: path });

    const result = transform(js.code, {
      presets: [jestPreset],
    });

    fs.writeFileSync('A_debug.js', js.code)
    fs.writeFileSync('B_debug.js', result.code)
    return js
  }
}