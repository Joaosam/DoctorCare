function roll() {
  const navigation = document.getElementById('navigation')
  if (scrollY != 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
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
  duration: 750
}).reveal(
  `#home, .logoMulher, #home .stats, #services, #services header, .card, #about, #about header, #about .content`
)
