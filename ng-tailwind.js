module.exports = {
  // Tailwind Paths
  configJS: 'tailwind.config.js',
  sourceCSS: 'projects/assets/tailwind.css',
  outputCSS: 'projects/espresso-ui/src/tailwind-compiled.less',
  watchRelatedFiles: [],
  // Sass
  sass: false,
  // PurgeCSS Settings
  purge: false,
  keyframes: false,
  fontFace: false,
  rejected: false,
  whitelist: [],
  whitelistPatterns: [],
  whitelistPatternsChildren: [],
  extensions: [
    '.ts',
    '.html',
    '.js'
  ],
  extractors: [],
  content: [
    './projects/**/*.js',
    './projects/**/*.html',
    './projects/**/*.ts'
  ]
}
