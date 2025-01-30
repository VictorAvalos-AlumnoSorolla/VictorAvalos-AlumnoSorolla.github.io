// Cambiar entre secciones
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.querySelectorAll('.card').forEach(card => {
            card.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
    });
});

// Modo oscuro
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});