const navbar = document.querySelector('.nav-side');
const dropdown = document.querySelector('.dropdown');
const header = document.querySelectorAll('.head');

dropdown.addEventListener('click', function (dd_menu) {
    navbar.style.display = 'block'
})
header.forEach(function(head_menu){
    head_menu.addEventListener('click', function(){
        navbar.style.display = "none"
    })
})
const swiper = new Swiper('.swiper-container' , {
    loop: true,
    speed:1000,
    autoplay:{delay:1500},
    effect: 'cube',
    // grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        ShadowOffset: 20,
        shadowScale: 0.94,
    }
});
const text = baffle(".welcome");
text.set({
    characters: '<░▓ ░█▓█░ ▓░░░█ >░▒ ▓<█▒/ ▓▒▓▒ ▓░▒ >░<▓ █▒░▓',
    speed: 200
});
text.start();
text.reveal(4000);

window.addEventListener('scroll', reveal);

function reveal(){
    const reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++){

        const windowheight = window.innerHeight;
        const revealtop = reveals[i].getBoundingClientRect().top;
        const revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active')
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}




