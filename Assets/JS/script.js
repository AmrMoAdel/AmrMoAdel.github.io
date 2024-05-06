// Conatact me shaking button

document.addEventListener("DOMContentLoaded", function () {
        function addShakingEffect() {
        const btn = document.querySelector('.btn');
        btn.classList.add('shaking-btn');
        }
    
        function removeShakingEffect() {
        const btn = document.querySelector('.btn');
        btn.classList.remove('shaking-btn');
        }
    
        setInterval(() => {
        addShakingEffect();
    
        setTimeout(() => {
            removeShakingEffect();
        }, 500);
        }, 4000);
    });

//hidden menu shaking button
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const hiddenMenu = document.querySelector('.hidden-menu');

    function addShakingEffect() {
        hamburgerMenu.classList.add('shaking-menu');
    }

    function removeShakingEffect() {
        hamburgerMenu.classList.remove('shaking-menu');
    }

    setInterval(() => {
        addShakingEffect();

        setTimeout(() => {
            removeShakingEffect();
        }, 500);
    }, 4000); // Trigger the shaking animation every 4 seconds
});

//hamburger menu buttons
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const hiddenMenu = document.querySelector('.hidden-menu');

    hamburgerMenu.addEventListener('click', function () {
        hiddenMenu.classList.toggle('active');
    });
});
