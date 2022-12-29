//CAMBIAR BACKGROUND CUANDO HAGO SCROLL
const navEl = document.querySelector('.navbar');
const togglerBtnEl = document.querySelector('#toggler-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled');
    }
    else if (window.screenY < 56) {
        navEl.classList.remove('navbar-scrolled');
    }
})

//CAMBIAR BACKGROUND CUANDO HAGO CLICK EN TOGGLE
togglerBtnEl.addEventListener('click' , () => {
    navEl.classList.toggle('navbar-clicked')
})




