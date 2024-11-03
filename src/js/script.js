function setActiveNavLink(id) {
    // Remove a classe 'active' de todos os itens do menu principal e do mobile-menu
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    document.querySelectorAll('.mobile-menu .nav-item').forEach(nav => nav.classList.remove('active'));

    // Adiciona a classe 'active' ao item correspondente no menu principal e no mobile-menu
    document.querySelector('.nav-item a[href*=' + id + ']').parentElement.classList.add('active');
    document.querySelector('.mobile-menu .nav-item a[href*=' + id + ']').parentElement.classList.add('active');
}

// Função que será chamada quando o usuário clicar em qualquer item de navegação
document.querySelectorAll('.nav-item a, .mobile-menu .nav-item a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do clique
        const sectionId = this.getAttribute('href').substring(1); // Obtém o id da seção
        setActiveNavLink(sectionId); // Define o item ativo baseado na seção
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' }); // Rolagem suave para a seção
    });
});

window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.nav-item, .mobile-menu .nav-item');

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Chama a função para sincronizar a classe 'active' nos dois menus
            setActiveNavLink(id);
        }
    });
});



function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let icon = document.querySelector('.icon');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');

        // Muda o ícone do .mobile-menu-icon
        icon.src = "assets/images/menu-icon.svg"

        // Remove a rotação horária e aplica a anti-horária
        icon.classList.remove('icon-rotate-clockwise');
        icon.classList.add('icon-reset');
    } else {
        menuMobile.classList.add('open');

        // Muda o ícone para close-icon.svg
        icon.src = "assets/images/close-icon.svg";
        
        // Remove a rotação anti-horária e aplica a horária
        icon.classList.remove('icon-reset');
        icon.classList.add('icon-rotate-clockwise');
    }
}