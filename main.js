window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToToButtonOnScroll()

  activateMenuCurrentSection(home)
  activateMenuCurrentSection(services)
  activateMenuCurrentSection(about)
  activateMenuCurrentSection(contact)

}

function activateMenuCurrentSection(section){
  // linha alvo
  const targetLine = scrollY + innerHeight / 2 
  
  // Verificar se a secção passou na linha.
  // Quais dados vou precisar?

 // o topo da secção
 const sectionTop = section.offsetTop

 // a altura da secção
 const sectionHeight = section.offsetHeight
  
 // o topo da secção chegou ou ultrapassou a linha alvo
 const sectionTopReachOrTargetLine = targetLine >= sectionTop
 /* console.log('O topo da secção chegou ou passou da linha?',sectionTopReachOrTargetLine) */

 // verificar se a base está baixo da linha
 // Quais os dados vou precisar?

  // a secção termina aonde?
  const sectionEndsAt = sectionTop + sectionHeight 
  
  // o final da secção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries = sectionTopReachOrTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id') 
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    
 menuElement.classList.remove('active')
  if(sectionBoundaries) {
    menuElement.classList.add('active')
  }

}

function showNavOnScroll() {
  if(scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToToButtonOnScroll() {
  if(scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

// Scroll reveal 
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
 #home,
 #home img,
 #home .stats, 
 #services,
 #services header,
 #services .card,
 #about,
 #about header,
 #about .content
 `);