/* global module */

let config = {
  'notGetBlocks': [
    // 'blocks-demo.html',
  ],
  'ignoredBlocks': [
    'no-js',
  ],
  'alwaysAddBlocks': [
    // 'intro'
    'sprite-png',
    'sprite-svg'
  ],
  'addStyleBefore': [
    'src/scss/normalize.scss',
    'src/scss/variables.scss',
    'src/scss/fonts.scss',
    'src/scss/global.scss',
    'src/scss/mixins.scss',
    'src/scss/scaffolding.scss'
    // 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
  ],
  'addStyleAfter': [
    // 'src/scss/print.scss',
  ],
  'addJsBefore': [
    // 'somePackage/dist/somePackage.js', // для 'node_modules/somePackage/dist/somePackage.js',
  ],
  'addJsAfter': [
    './script.js',
  ],
  'addAssets': {
    'src/fonts/demo-empty-open-sans.woff2': 'fonts/',
    // 'src/img/demo-*.{png,svg,jpg,jpeg}': 'img/',
    // 'src/favicon/*.{png,ico,svg,xml,webmanifest}': 'img/favicon',
    // 'node_modules/somePackage/images/*.{png,svg,jpg,jpeg}': 'img/',
  },
  'dir': {
    'src': 'src/',
    'build': 'build/',
    'blocks': 'src/blocks/'
  }
};

module.exports = config;
