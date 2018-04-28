'use strict'

function loadPictureSummary () {
  var row = createTag('div', 'row');
  row.innerHTML = 'Your Car';
  renderImages();

  row = createTag('div', 'row');
  row.innerHTML = 'Disputant Car';
  renderImages();

  row = createTag('div', 'row');
  var a = createTag('a', 'btn btn-outline-primary btn-sm');
  a.innerHTML = 'Proceed';
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
