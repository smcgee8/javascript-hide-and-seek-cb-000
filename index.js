function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  root = document.querySelector('div#grand-node');
  tags = root.children;
  while (tags.length > 1) {
    tags = tags.children;
  } else {
    return tags[0];
  }
}
