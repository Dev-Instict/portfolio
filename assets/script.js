
//Evento de pulo de sessões
const menuItems = document.querySelectorAll('#menuNavbar a[href^="#"]')

menuItems.forEach(item => {
    item.addEventListener('click', scrolaritem);
})

function scrolaritem(event) {
    event.preventDefault();
    const to = getScroolTopByHref(event.target) - 10

    scrollToPosition(to)

}

function getScroolTopByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

 
function scrollToPosition(to){
    window.scroll({
        top: to - 50,
        behavior: "smooth"
    
    })
}

// Efeito na barra de navegação

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
});
