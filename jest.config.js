
module.exports = {
  collectCoverage: true,
  coverageProvider: 'babel',
  coveragePathIgnorePatterns: [
    "./*.config.js"
  ],
  collectCoverageFrom: [
    "*.svelte"
  ],
  moduleFileExtensions: ['js', 'svelte'],
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": ["svelte-jester", { debug: false }],
  },
  verbose: true,
  bail: false
}