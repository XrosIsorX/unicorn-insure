'use strict';

function loadSnap () {
  var div = createTag('div', 'step-container');
  var ul = createTag('ul', 'progressbar', div);

  var li = createTag('li', 'active', ul);
  li.innerHTML = 'Snap';

  var li = createTag('li', '', ul);
  li.innerHTML = 'Sign';

  var li = createTag('li', '', ul);
  li.innerHTML = 'Fix';

  var li = createTag('li', '', ul);
  li.innerHTML = 'Done';

  var div = createTag('div', 'text-center');
  var header = createTag('h5', '', div);
  var b = createTag('b', '', header);
  b.innerHTML = 'Hello, Mr.Kritsana Chaikaew';

  var b = createTag('b', '', div);
  b.innerHTML = 'Please take 8 photos of each car';

  var img = createTag('img', '', div);
  img.src = 'pic/howtotakepic.png';
  img.style.width = '100%';

  createTag('br');
  createTag('br');

  var button = createTag('button', 'btn btn-raised btn-success btn-lg', div);
  button.setAttribute('type', 'button');
  var i = createTag('i', 'material-icons', button);
  i.innerHTML = 'photo_camera';

  button.onclick = function () {
    clear();
    loadCamera();
  };
}
