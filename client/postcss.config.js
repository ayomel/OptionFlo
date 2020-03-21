'use strict'

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-apply'),
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'custom-media-queries': true,
        'nesting-rules': true,
        'color-mod-function': true,
      },
    }),
  ],
}
