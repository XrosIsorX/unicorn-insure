'use strict'

const CONTAINER = document.getElementById('main-container');

function clear () {
  contains = document.getElementById('main-container');
  while (contains.firstChild) {
    contains.removeChild(contains.firstChild);
  }
}

function createTag (tagName, className = '', parent = undefined) {
  var tag = document.createElement(tagName);
  tag.className = className;

  if (parent) {
    parent.appendChild(tag);
  } else {
    CONTAINER.append(tag);
  }
  
  return tag;
}
