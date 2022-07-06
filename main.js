window.addEventListener('scroll', onScroll)

var header = document.getElementById('navigation')
var openm = document.getElementsByClassName('open-menu')
var close = document.getElementsByClassName('close-menu')

function onScroll() {
  if (scrollY > 0) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

function menuExpanded() {
  body.classList.add('menu-expanded')
  alert('jvv')
}

function menuClose() {
  body.classList.remove('menu-expanded')
}
