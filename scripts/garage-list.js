'use strict';

function loadGarageList () {
  createProgressBar();

  var a = createTag('a', 'list-group-item list-group-item-action flex-column align-items-start');
  a.setAttribute('href', 'map.html');
  a.setAttribute('target', '_blank');
  var div = createTag('div', 'd-flex w-100 justify-content-between', a);
  var header = createTag('h5', 'mb-1', div);
  header.innerHTML = 'N. Changkol Garage';
  var small = createTag('small', '', div);
  small.innerHTML = '1.2 km';
  var p = createTag('p', 'mb-1', a);
  p.innerHTML = 'selling, repairing, maintaining, storing, servicing, towing or parking vehicles.';
  var small = createTag('small', 'text-muted', a);
  small.innerHTML = 'Unicorn Insurance Partner';

  var a = createTag('a', 'list-group-item list-group-item-action flex-column align-items-start');
  a.setAttribute('href', 'map.html');
  a.setAttribute('target', '_blank');
  var div = createTag('div', 'd-flex w-100 justify-content-between', a);
  var header = createTag('h5', 'mb-1', div);
  header.innerHTML = 'Charaernporn Garage';
  var small = createTag('small', '', div);
  small.innerHTML = '2.4 km';
  var p = createTag('p', 'mb-1', a);
  p.innerHTML = 'selling, repairing, maintaining, storing, servicing, towing or parking vehicles.';
  var small = createTag('small', 'text-muted', a);
  small.innerHTML = 'Unicorn Insurance Partner';

  var a = createTag('a', 'list-group-item list-group-item-action flex-column align-items-start');
  a.setAttribute('href', 'map.html');
  a.setAttribute('target', '_blank');
  var div = createTag('div', 'd-flex w-100 justify-content-between', a);
  var header = createTag('h5', 'mb-1', div);
  header.innerHTML = 'D.S.G Garage';
  var small = createTag('small', '', div);
  small.innerHTML = '2.4 km';
  var p = createTag('p', 'mb-1', a);
  p.innerHTML = 'selling, repairing, maintaining, storing, servicing, towing or parking vehicles.';
  var small = createTag('small', 'text-muted', a);
  small.innerHTML = 'Unicorn Insurance Partner';

  var a = createTag('a', 'list-group-item list-group-item-action flex-column align-items-start');
  a.setAttribute('href', 'map.html');
  a.setAttribute('target', '_blank');
  var div = createTag('div', 'd-flex w-100 justify-content-between', a);
  var header = createTag('h5', 'mb-1', div);
  header.innerHTML = 'Jarul-Yon Garage';
  var small = createTag('small', '', div);
  small.innerHTML = '2.5 km';
  var p = createTag('p', 'mb-1', a);
  p.innerHTML = 'selling, repairing, maintaining, storing, servicing, towing or parking vehicles.';
  var small = createTag('small', 'text-muted', a);
  small.innerHTML = 'Unicorn Insurance Partner';

  var a = createTag('a', 'list-group-item list-group-item-action flex-column align-items-start');
  a.setAttribute('href', 'map.html');
  a.setAttribute('target', '_blank');
  var div = createTag('div', 'd-flex w-100 justify-content-between', a);
  var header = createTag('h5', 'mb-1', div);
  header.innerHTML = 'Mitr-Borikarn Garage';
  var small = createTag('small', '', div);
  small.innerHTML = '3.6 km';
  var p = createTag('p', 'mb-1', a);
  p.innerHTML = 'selling, repairing, maintaining, storing, servicing, towing or parking vehicles.';
  var small = createTag('small', 'text-muted', a);
  small.innerHTML = 'Unicorn Insurance Partner';
}
