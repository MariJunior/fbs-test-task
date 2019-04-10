/* global document */
// Включается при указании на теге `form` атрибута `data-check-form`.
//
// Для текстовых полей: по событию `blur` содержимое поля анализируется на соответствие регулярному выражению из атрибута `data-check-pattern`.
//
// Для чекбоксов: по событию `change` проверяется соответствия состояния и `data-check-state="on"` (`off`).
//
// Pug «умно» обрабатывает строки, убирая обратный слеш \, этот символ в pug нужно экранировать: не \d, а \\d.

const closest = require('closest');
const ready = require('./utils/documentReady.js');

ready(function(){
  // Для всех форм страницы
  const forms = Array.from(document.querySelectorAll('form[data-check-form]'));
  forms.forEach(function(form){
    // Подпишемся на событие отправки
    form.addEventListener('submit', function(e){
      let valid = true;
      // Проверим все текстовые инпуты
      const fieldsText = Array.from(form.querySelectorAll('input[data-check-pattern]'));
      fieldsText.forEach(function(input){
        if(!checkFieldText(input)) valid = false;
      });
      // Проверим все чекбоксы
      const fieldsCheckbox = Array.from(form.querySelectorAll('input[data-check-state]'));
      fieldsCheckbox.forEach(function(input){
        if(!checkFieldCheckbox(input)) valid = false;
      });
      // Если были ошибки, не отправляем форму
      if(!valid) e.preventDefault();
    });
  });

  // Для всех проверяемых текстовых полей
  const fieldsText = Array.from(document.querySelectorAll('input[data-check-pattern]'));
  fieldsText.forEach(function(input){
    input.addEventListener('blur', function(){ checkFieldText(input); });
    input.addEventListener('keyup', function(){ checkFieldText(input); });
  });

  // Для всех проверяемых чекбоксов
  const fieldsCheckbox = Array.from(document.querySelectorAll('input[data-check-state]'));
  fieldsCheckbox.forEach(function(input){
    input.addEventListener('change', function(){ checkFieldCheckbox(input); });
  });

  function checkFieldText(input) {
    const regExp = new RegExp(input.dataset.checkPattern, 'gi');
    const result = regExp.test(input.value);
    const errorClass = 'field-text--error';
    const parent = closest(input, '.field-text');
    result ? parent.classList.remove(errorClass) : parent.classList.add(errorClass);
    return result;
  }

  function checkFieldCheckbox(input) {
    const trueVal = input.dataset.checkState == 'on' ? true : false;
    const result = trueVal === input.checked
    const errorClass = 'field-checkbox__input-wrap--error';
    const parent = closest(input, '.field-checkbox__input-wrap');
    result ? parent.classList.remove(errorClass) : parent.classList.add(errorClass);
    return result;
  }
});
