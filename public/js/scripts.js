
const   header = document.getElementById('main-header'),
        burguerButton = document.querySelector('.burguer-button'),
        burguerLine = document.querySelector('.burguer-button__line'),
        nav = document.getElementById('main-nav')


// Hamburger button animation
burguerButton.addEventListener('click', () => {
    burguerLine.classList.toggle('cruz')
    nav.classList.toggle('main-nav__move')
})

// Inserting the nav into the header
// header.appendChild(nav)

