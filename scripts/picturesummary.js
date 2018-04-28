'use strict'

function loadPictureSummary () {
  var row = createTag('div', 'row');
  row.innerHTML = 'Your Car';
  renderImages();

  row = createTag('div', 'row');
  row.innerHTML = 'Disputant Car';
  renderImages();

  row = createTag('div', 'row');
  buttonProceed = createTag('a', 'btn btn-outline-primary btn-sm', row);
  buttonProceed.id = 'button-proceed'
  buttonProceed.innerHTML = 'Proceed';
  buttonProceed.onclick = function(){
    clear();
    loadQR();
  };
}

function renderImages () {
  var img;
  for (let i = 0; i < 4; i++) {
    img = createTag('img', 'm-1');
    if (images[i]) {
      img.src = images[i];
    } else {
      img.src = 'http://weknowyourdreams.com/images/unicorn/unicorn-04.jpg';
    }
    img.style.height = '120px';
    img.style.width = '120px';
  }
}
