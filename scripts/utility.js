function clear () {
  contains = document.getElementsById('main-container');
  while (contains.firstChild) {
    contains.removeChild(contains.firstChild);
  }
}
