const button = document.querySelector('.popup-close');
const popup = document.querySelector('.popup-wrapper');

button.addEventListener('click', () => {
    popup.style.display = 'none';
})

popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0];

    console.log('Qual classe clicada', classNameOfClickedElement)

    const classNames = ['popup-close', 'popup-wrapper', 'popup-link']

    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)

    if (shouldClosePopup) {
        popup.style.display = 'none';
    }
})