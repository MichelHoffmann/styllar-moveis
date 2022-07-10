var header = document.getElementById('navigation')
var openbtn = document.getElementById('open-menu')
var closebtn = document.getElementById('close-menu')
var toTop = document.getElementById('backToTop')
var corpo = document.getElementById('corpo')

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
  corpo.classList.add('open')
}

function closeMenu() {
  corpo.classList.remove('open')
}

function showButton() {
  if (scrollY > 100) {
    toTop.classList.add('active')
  } else {
    toTop.classList.remove('active')
  }
}

import Glide from '../quarto/glide.esm'

new Glide('.glide', {
  type: 'slider',
  perView: 2,
  focusAt: 'center',
}).mount()

// var simpleGlide = document.querySelector('glide__slides')

// new Glider(simpleGlide, {
//   slidesToShow: 2,
//   slidesToScroll: 2,
//   draggable: true,
//   arrows: {
//     prev: '.glide__arrow glide__arrow--left',
//     next: '.glide__arrow glide__arrow--right',
//   },
// })