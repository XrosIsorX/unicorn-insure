'use strict';

function loadDisputantDetail () {
  createProgressBar();

  var div = createTag('div', 'form-group row');
  var label = createTag('label', 'col-10 col-form-label', div);
  label.innerHTML = 'ID Card Picture'
  label.setAttribute('for', 'example-text-input');
  var innerDiv = createTag('div', 'col-4', div);
  var img = createTag('img', 'rounded float-left', innerDiv);
  img.src = 'pic/dummy.png';
  img.style.height = '100%';
  img.style.width = '100%';

  var div = createTag('div', 'form-group row');
  var label = createTag('label', 'col-10 col-form-label', div);
  label.innerHTML = 'Driver Card Picture'
  label.setAttribute('for', 'example-text-input');
  var innerDiv = createTag('div', 'col-4', div);
  var img = createTag('img', 'rounded float-left', innerDiv);
  img.src = 'pic/dummy.png';
  img.style.height = '100%';
  img.style.width = '100%';

  var div = createTag('div', 'form-group row');
  var label = createTag('label', 'col-10 col-form-label', div);
  label.innerHTML = 'Vehicle registration book'
  label.setAttribute('for', 'example-text-input');
  var innerDiv = createTag('div', 'col-4', div);
  var img = createTag('img', 'rounded float-left', innerDiv);
  img.src = 'pic/dummy.png';
  img.style.height = '100%';
  img.style.width = '100%';

  var div = createTag('div', 'form-group row');
  var label = createTag('label', 'col-4 col-form-label', div);
  label.innerHTML = 'Name'
  label.setAttribute('for', 'example-text-input');
  var innerDiv = createTag('div', 'col-10', div);
  var formControl = createTag('input', 'form-control', innerDiv);
  formControl.setAttribute('type', 'text');
  formControl.setAttribute('value', 'Artisanal kale');

  var div = createTag('div', 'form-group row');
  var label = createTag('label', 'col-4 col-form-label', div);
  label.innerHTML = 'License plate'
  label.setAttribute('for', 'example-text-input');
  var innerDiv = createTag('div', 'col-10', div);
  var formControl = createTag('input', 'form-control', innerDiv);
  formControl.setAttribute('type', 'text');
  formControl.setAttribute('value', 'กข-9999');

  var div = createTag('div', 'form-group row');
  var label = createTag('label', 'col-4 col-form-label', div);
  label.innerHTML = 'Telephone'
  label.setAttribute('for', 'example-text-input');
  var innerDiv = createTag('div', 'col-10', div);
  var formControl = createTag('input', 'form-control', innerDiv);
  formControl.setAttribute('type', 'tel');
  formControl.setAttribute('value', '098-765-4321');

  var row = createTag('div', 'row');
  var buttonNext = createTag('a', 'btn btn-outline-primary btn-sm', row);
  buttonNext.innerHTML = 'Next';
  buttonNext.onclick = function () {
    clear();
    loadSign();
  }
}
