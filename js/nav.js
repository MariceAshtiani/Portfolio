/*---Hamburger-menu---*/

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// followed this tutorial: https://www.youtube.com/watch?v=flItyHiDm7E

/*---Active nav links---*/

const sections = document.querySelectorAll('section');
const NavList = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', ()=> {
    let current = "";

    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset > (sectionTop - sectionHeight / 3)){
            current = section.getAttribute('id');
        }
    })

    NavList.forEach( li => {
        li.classList.remove('current-page');
        if(li.classList.contains(current)){
            li.classList.add('current-page');
        }
    });
})

// followed this tutorial: https://www.youtube.com/watch?v=RsPWEmfOQdU&t=402s
