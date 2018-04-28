'use strict';

function loadDone () {
  createTag('br');
  createTag('br');

  var div = createTag('div', 'text-center');
  var img = createTag('img', '', div);
  img.src = 'pic/done.svg';
  img.style.width = '30%';

  createTag('br');
  createTag('br');

  var header = createTag('h5', '', div);
  header.innerHTML = 'DONE\nWe received your information.'

  var button = createTag('button', 'btn btn-raised btn-primary', div);
  button.setAttribute('type', 'button');
  button.innerHTML = 'Show Garage List';
  button.onclick = function(){
    clear();
    loadGarageList();
  };
}
