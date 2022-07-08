var header = document.getElementById('navigation')
var openbtn = document.getElementById('open-menu')
var closebtn = document.getElementById('close-menu')
var toTop = document.getElementById('backToTop')

window.addEventListener('scroll', onScroll)
openbtn.addEventListener('click', openMenu)
closebtn.addEventListener('click', closeMenu)
window.addEventListener('scroll', showButton)

function onScroll() {
  if (scrollY > 0) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

function openMenu() {
  body.classList.add('open')
}

function closeMenu() {
  body.classList.remove('open')
}

function showButton() {
  if (scrollY > 100) {
    toTop.classList.add('active')
  } else {
    toTop.classList.remove('active')
  }
}