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

let lastScrollTop = 0;
const header = document.querySelector('header');


// Função para detectar o movimento do mouse
window.addEventListener('mousemove', (event) => {
    if (event.clientY < 50) {
        // Se o cursor estiver próximo do topo da página, mostra o header
        header.style.top = '0';
    }
});

const scrollContainer = document.querySelector('.flexivel');


