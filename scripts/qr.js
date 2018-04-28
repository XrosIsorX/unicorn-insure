'use strict'

function loadQR () {
  var head = createTag('h4');
  head.innerHTML = 'We recieved your information';

  var div = createTag('div');
  div.innerHTML = 'Your disputant has to complete filling information in the provided link.';

  createTag('br');

  var div = createTag('div', 'text-center');

  var qr = createTag('img', '', div);
  qr.src = 'pic/qrcode.png';

  var a = createTag('a', '', div);
  a.onclick = function () {
    clear();
    loadDisputantDetail();
  }
  a.innerHTML = 'http://unicorn-insure.com/A7yck9';
}
