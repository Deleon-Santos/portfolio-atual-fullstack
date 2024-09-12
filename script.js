// Seleciona todos os itens de projeto clicáveis
document.querySelectorAll('.projetos').forEach(item => {
    item.addEventListener('click', () => {
        // Obtém o ID do alvo correspondente
        const targetSection = document.getElementById(item.getAttribute('data-target'));
        
        // Esconde a seção desenvolvimento
        document.querySelector('.desenvolvimento').style.display = 'none';

        // Mostra a seção correspondente
        targetSection.style.display = 'block';
    });
});

// Adiciona evento para esconder as seções quando o botão "Esconder" for clicado
document.querySelectorAll('.hide-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const section = event.target.closest('section');
        
        // Esconde a seção de projeto
        section.style.display = 'none';
        
        // Mostra novamente a seção desenvolvimento
        document.querySelector('.desenvolvimento').style.display = 'block';
    });
});

// Seleciona todos os itens de projeto clicáveis
document.querySelectorAll('.projetos').forEach(item => {
    item.addEventListener('click', () => {
        // Obtém o ID do alvo correspondente
        const targetSection = document.getElementById(item.getAttribute('data-target'));
        
        // Esconde a seção desenvolvimento
        document.querySelector('.desenvolvimento').style.display = 'none';

        // Mostra a seção correspondente com suavidade
        targetSection.classList.add('show');
    });
});

// Adiciona evento para esconder as seções quando o botão "Esconder" for clicado
document.querySelectorAll('.hide-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const section = event.target.closest('section');
        
        // Esconde a seção de projeto com suavidade
        section.classList.remove('show');
        
        // Mostra novamente a seção desenvolvimento com um pequeno delay para suavidade
        setTimeout(() => {
            document.querySelector('.desenvolvimento').style.display = 'block';
        }, 500); // Espera a transição de 0.5s
    });
});

// let lastScrollTop = 0;
// const header = document.querySelector('header');


// // Função para detectar o movimento do mouse
// window.addEventListener('mousemove', (event) => {
//     if (event.clientY < 50) {
//         // Se o cursor estiver próximo do topo da página, mostra o header
//         header.style.top = '0';
//     }
// });

let lastScrollTop = 0;
const header = document.querySelector('header');

// Função para detectar a rolagem
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Rolar para baixo - esconde o header
        header.style.top = '-100px'; // Ajuste o valor para a altura do header
    } else if (scrollTop === 0) {
        // No topo da página - mostra o header
        header.style.top = '0';
    }

    lastScrollTop = scrollTop;
});

// Função para detectar o movimento do mouse
window.addEventListener('mousemove', (event) => {
    if (event.clientY < 50) {
        // Se o cursor estiver próximo do topo da página, mostra o header
        header.style.top = '0';
    }
});

// Intersection Observer para animações de seção
const sections = document.querySelectorAll('.cabeca, .corpo, .sobre, .desenvolvimento, .skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        } else {
            entry.target.classList.remove('section-visible');
        }
    });
});

sections.forEach(section => {
    section.classList.add('section-hidden');
    observer.observe(section);
});
