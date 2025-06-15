const nomeElemento = document.querySelector('.label strong');
const nome = "Deleon Santos!";
let i = 0;

function escreverNome() {
    if (i < nome.length) {
        nomeElemento.textContent += nome.charAt(i);
        i++;
        setTimeout(escreverNome, 200);
    }
}

document.addEventListener('DOMContentLoaded', escreverNome);

document.querySelectorAll('.mostra-projeto').forEach(item => {
    item.addEventListener('click', () => {
        const targetSection = document.getElementById(item.getAttribute('data-target'));
        document.querySelector('.desenvolvimento').style.display = 'none';
        targetSection.style.display = 'block';
    });
});

document.querySelectorAll('.hide-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const section = event.target.closest('section');
        section.style.display = 'none';
        document.querySelector('.desenvolvimento').style.display = 'block';
    });
});

document.querySelectorAll('.mostra-projeto').forEach(item => {
    item.addEventListener('click', () => {
        const targetSection = document.getElementById(item.getAttribute('data-target'));
        document.querySelector('.desenvolvimento').style.display = 'none';

        // Mostra a seção correspondente com suavidade
        targetSection.classList.add('show');
        setTimeout(() => {
            document.querySelector('.desenvolvimento').style.display = 'none';
        }, 1500);
    });
});

document.querySelectorAll('.hide-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const section = event.target.closest('section');

        section.classList.remove('show');

        setTimeout(() => {
            document.querySelector('.desenvolvimento').style.display = 'block';
        }, 1500); // Espera a transição de 0.5s
    });
});


let lastScrollTop = 0;
const header = document.querySelector('header');

// Função para detectar a rolagem
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {

        header.style.top = '-100px';
    } else if (scrollTop === 0) {

        header.style.top = '0';
    }

    lastScrollTop = scrollTop;
});

// Função para detectar o movimento do mouse
window.addEventListener('mousemove', (event) => {
    if (event.clientY < 50) {

        header.style.top = '0';
    }
});

const menuHamburger = document.getElementById('menu_hamburger');
const menuMobile = document.querySelector('.menu_mobile');
const menuLinks = document.querySelectorAll('.menu_mobile a');

// Adiciona um evento de clique ao botão hamburguer para abrir/fechar o menu
menuHamburger.addEventListener('click', function () {
    menuHamburger.classList.toggle('active');
    menuMobile.classList.toggle('active');
});

// Adiciona eventos de clique a cada link do menu mobile para fechar o menu
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        menuHamburger.classList.remove('active'); // Remove a classe 'active' do botão
        menuMobile.classList.remove('active'); // Remove a classe 'active' do menu mobile
    });
});

// Intersection Observer para animações de seção
const sections = document.querySelectorAll('.corpo, .label, .redes__sociais, .text_sobre, .sobre, .desenvolvimento, .sub-titulo, .projetos, .portfolio, .skills, .footer, .logomarca, .footer-col');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        }// } else {
        //     entry.target.classList.remove('section-visible');
        // }
    });
});

sections.forEach(section => {
    section.classList.add('section-hidden');
    observer.observe(section);
});
