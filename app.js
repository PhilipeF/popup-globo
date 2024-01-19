const button = document.querySelector('.popup-close');
const popup = document.querySelector('.popup-wrapper');

button.addEventListener('click', () => {
    popup.style.display = 'none';
})

