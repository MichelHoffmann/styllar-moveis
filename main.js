var header = document.getElementById('navigation')
var openbtn = document.getElementById('open-menu')
var closebtn = document.getElementById('close-menu')

window.addEventListener('scroll', onScroll)
openbtn.addEventListener('click', openMenu)
closebtn.addEventListener('click', closeMenu)

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
