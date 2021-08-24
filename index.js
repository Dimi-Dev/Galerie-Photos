const images = document.querySelectorAll('#galery img');
let imgActive = 0;
let interval; // variable global pour syocker l'interval
images[imgActive].classList.add('show');

// Masquer les photos a l'aide d'une boucle for
for (i = 1; i < images.length; i++) {
    images[i].classList.add('hidden')
}

// Click sur button prev
document.querySelector('#prev').addEventListener('click', () => {
    // Appel de la function prev
    prev();
})

// Click sur button next
document.querySelector('#next').addEventListener('click', () => {
    // Appel de la function next
    next();
})

// Click sur button play
document.querySelector('#play').addEventListener('click', () => {
    interval = setInterval(next, 2500); // creation de l'interval de temps
})

// Click sur button pause
document.querySelector('#pause').addEventListener('click', () => {
    clearInterval(interval); // destruction de l'interval de temps
})


// creation d'une function(next) pour afficher photos suivante
const next = function() {
    images[imgActive].classList.remove('show')
    images[imgActive].classList.add('hidden')

    imgActive++
    if (imgActive >= images.length) {
        imgActive = 0;
    }

    //ajouter une transition pour les photos
    images[imgActive].classList.remove('hidden')
    setTimeout(() => {
        images[imgActive].classList.add('show')
    }, 300)
}


// creation d'une function(next) pour afficher photos precedente
const prev = function() {
    images[imgActive].classList.remove('show')
    images[imgActive].classList.add('hidden')

    imgActive--
    if (imgActive <= 0) {
        imgActive = images.length - 1;
    }

    //ajouter une transition pour les photos
    images[imgActive].classList.remove('hidden')
    setTimeout(() => {
        images[imgActive].classList.add('show')
    }, 300)
}

// gestion touche clavier
window.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowRight') {
        next();
    }
    if (e.key == 'ArrowLeft') {
        prev();
    }
})