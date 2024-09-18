// Seleciona todos os itens de projeto clicáveis
document.querySelectorAll('.projetos').forEach(item => {
    item.addEventListener('click', () => {
        
        const targetSection = document.getElementById(item.getAttribute('data-target'));
        
        
        document.querySelector('.desenvolvimento').style.display = 'none';

        
        targetSection.style.display = 'block';
    });
});

// Adiciona evento para esconder as seções quando o botão "Esconder" for clicado
document.querySelectorAll('.hide-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const section = event.target.closest('section');
        
        
        section.style.display = 'none';
        
        
        document.querySelector('.desenvolvimento').style.display = 'block';
    });
});

// Seleciona todos os itens de projeto clicáveis
document.querySelectorAll('.projetos').forEach(item => {
    item.addEventListener('click', () => {
        
        const targetSection = document.getElementById(item.getAttribute('data-target'));
        
        
        document.querySelector('.desenvolvimento').style.display = 'none';

        // Mostra a seção correspondente com suavidade
        targetSection.classList.add('show');
    });
});

// Adiciona evento para esconder as seções quando o botão "Esconder" for clicado
document.querySelectorAll('.hide-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const section = event.target.closest('section');
        
        
        section.classList.remove('show');
        
        // Mostra novamente a seção desenvolvimento com um pequeno delay para suavidade
        setTimeout(() => {
            document.querySelector('.desenvolvimento').style.display = 'block';
        }, 500); // Espera a transição de 0.5s
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



// Intersection Observer para animações de seção
const sections = document.querySelectorAll('.corpo, .sobre, .desenvolvimento, .skills');
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
