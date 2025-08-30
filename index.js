document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behaviour: 'smooth'
        })
    })
})

const maintitle = document.getElementById('main-title');
const text = "Damaris's Portfolio";
let i = 0;

function typeWriter() {
    if (1 < text.length) {
        maintitle.innerHTML += text.charAt(i);
        1++;
        setTimeout(typeWriter, 100);
    }
}

maintitle.innerHTML = '';
typeWriter();