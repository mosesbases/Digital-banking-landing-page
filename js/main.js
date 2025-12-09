const navMenu = document.getElementById('nav-menu');
const closeBtn = document.getElementById('close-btn');
const hamburgerBtn = document.getElementById('hamburger-btn');
const requestInvite = document.getElementById('request-invite');

const mobileOverlay = document.getElementById('mobile-overlay');
const mobileScroll = document.getElementById('mobile-scroll')

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.add('show')
    hamburgerBtn.style.display = 'none'
    closeBtn.style.display = 'block'
    mobileOverlay.classList.add('show')
    requestInvite.style.display = 'block'
    mobileScroll.style.overflow = 'hidden'
})

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('show')
    hamburgerBtn.style.display = 'block'
    closeBtn.style.display = 'none'
    mobileOverlay.classList.remove('show')
    requestInvite.style.display = 'none'
    mobileScroll.style.overflow = 'scroll'
})

mobileOverlay.addEventListener('click', () => {
    navMenu.classList.remove('show')
    hamburgerBtn.style.display = 'block'
    closeBtn.style.display = 'none'
    mobileOverlay.classList.remove('show')
    requestInvite.style.display = 'none'
    mobileScroll.style.overflow = 'scroll'
})