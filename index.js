function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild(){
  const lis = document.getElementById('grand-node').querySelectorAll('*');
  var deepestChild;

  for (let i = 0, l = lis.length; i < l; i++) {
      deepestChild = lis[i];
  }
  return deepestChild;
}
