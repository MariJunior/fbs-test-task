const ready = require('./utils/documentReady.js');

ready(function(){
  // console.log('DOM героически построен!');
  require('./test-script.js');
  require('./form-validation.js');
});
//
// const $ = require('jquery');
// $( document ).ready(function() {});
