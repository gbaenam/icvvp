
const   header = document.getElementById('main-header'),
        burguerButton = document.querySelector('.burguer-button'),
        burguerLine = document.querySelector('.burguer-button__line'),
        nav = document.getElementById('main-nav'),
        helpBar = document.getElementById('help-bar'),
        mql = matchMedia('(min-width: 960px)')



// Hamburger button animation
burguerButton.addEventListener('click', () => {
    burguerLine.classList.toggle('cruz')
    nav.classList.toggle('main-nav__move')
})


console.log(helpBar)

const changeIcons = () => {
    if (mql.matches) {
        // header.appendChild(nav)
        // header.appendChild(helpBar)
        // console.log(helpBar)

        // document.getElementById("icon-checkin").src = "img/checkin-desk.svg"
        // document.getElementById("icon-contact").src = "img/contact-desk.svg"
    }

    else {
        // document.getElementById("icon-checkin").src = "img/checkin-mobl.svg"
        // document.getElementById("icon-contact").src = "img/contact-mobl.svg"
    }
}

changeIcons()

mql.addEventListener('change', changeIcons)


