let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header')

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  stars.style.left = value + 'px';
  moon.style.top = value  + 'px';
  mountains_behind.style.top = value * 0.5 + 'px';
  mountains_front.style.top = value * 0.1 + 'px';
  text.style.marginRight = value * 3 + 'px';
  text.style.marginTop = value * 1.3 + 'px';
  btn.style.marginTop = value * 1.3 + 'px';
  header.style.top = value * 0.5 + 'px';
})
