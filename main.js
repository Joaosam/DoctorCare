/* Adiciono o evento scroll utilizando a função roll */
addEventListener('scroll', roll)

/*  Na função roll eu linko a função showNav e backToTop */
function roll() {
  showNav()
  backToTop()

  activateMenu(home)
  activateMenu(services)
  activateMenu(about)
}

function activateMenu(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndsAt = sectionTop + sectionHeight

  /* A base da seção passou da linha alvo? */
  const sectionEndPassedTargeLine = sectionEndsAt <= targetLine
  const sectionLimit =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargeLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionLimit) {
    menuElement.classList.add('active')
  }
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
