document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.cambiar-modo');
    const body = document.body;

    // verificar el estado del modo en el almacenamiento local
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // guardar el estado del modo en el almacenamiento local
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});