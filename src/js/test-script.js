/* global document */

const ready = require('./utils/documentReady.js');

ready(function(){
  const form = document.querySelector('.form');
  const input = form.querySelector('[type="text"]');
  const checkboxField = form.querySelector('.field-checkbox');
  const checkbox = checkboxField.querySelector('#check');
  const text = form.querySelector('.form__text');

  form.addEventListener('change', function(evt) {
    if (evt.target.hasAttribute('type') && evt.target.getAttribute('type') === 'checkbox') {
      input.disabled = evt.target.checked ? true : false;
    } else if (evt.target.tagName === 'SELECT') {
      const value = evt.target.options[evt.target.selectedIndex].value;
      if (value === 'value-2' || value === 'value-3') {
        input.disabled = false;
        checkbox.disabled = true;
        checkboxField.classList.add('visually-hidden');
        text.classList.remove('visually-hidden');
      } else if (value === 'value-1') {
        checkbox.disabled = false;
        checkboxField.classList.remove('visually-hidden');
        text.classList.add('visually-hidden');
      }
    }
  });
});
