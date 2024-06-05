document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('info-modal');
    const infoButtons = document.querySelectorAll('.info-button');
    const closeButton = document.querySelector('.close-button');

    infoButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
