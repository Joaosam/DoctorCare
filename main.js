/* Adiciono o evento scroll utilizando a função roll */
addEventListener('scroll', roll)

/*  Na função roll eu linko a função showNav e backToTop */
function roll() {
  showNav()
  backToTop()
}

function showNav() {
  const navigation = document.getElementById('navigation')
  if (scrollY != 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function backToTop() {
  const buttonTop = document.getElementById('backToTopButton')
  if (scrollY > 495) {
    buttonTop.classList.add('show')
  } else {
    buttonTop.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menuExtend')
}

function closeMenu() {
  document.body.classList.remove('menuExtend')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(
  `#home, .logoMulher, #home .stats, #services, #services header, .card, #about, #about header, #about .content, #about img, #contact, #contact header, #contact .content, #contact .button, #contact img`
)
