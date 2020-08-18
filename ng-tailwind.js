module.exports = {
  // Tailwind Paths
  configJS: 'tailwind.config.js',
  sourceCSS: 'projects/assets/tailwind.css',
  outputCSS: 'projects/assets/tailwind-compiled.css',
  watchRelatedFiles: [],
  // Sass
  sass: true,
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
