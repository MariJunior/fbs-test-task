// Дополнительные стили для картинок с указанным `object-fit: ...;` добавится с помощью PostCSS-плагина на этапе постобработки css.
//
// Инструменты: [полифил](https://github.com/bfred-it/object-fit-images), [PostCSS-плагин, реализующий автоматическое применение полифила](https://github.com/ronik-design/postcss-object-fit-images).

const objectFitImages = require('object-fit-images');
const ready = require('./utils/documentReady.js');

ready(function(){
  objectFitImages();
});
