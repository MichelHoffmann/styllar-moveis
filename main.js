var header = document.getElementById('navigation')
var opMenu = document.getElementById('op-menu')
var clMenu = document.getElementById('cl-menu')
var bd = document.getElementById('body')

window.addEventListener('scroll', onScroll)
opMenu.addEventListener('click', openMenu)
clMenu.addEventListener('click', closeMenu)

function onScroll() {
  if (scrollY > 0) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

function openMenu() {
  bd.classList.add('menu-expanded')
}

function closeMenu() {
  bd.classList.remove('menu-expanded')
}