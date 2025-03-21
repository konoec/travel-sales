import { destinations } from './data.js';

const buttons = document.querySelectorAll('.destination-btn');
const image = document.querySelector('.destination-image img');
const title = document.querySelector('.destination-info h2');
const description = document.querySelector('.destination-description');
const highlightsList = document.querySelector('.highlights ul');

function updateDestination(index) {
    const destination = destinations[index];

    const content = document.querySelector('.destination-content');
    content.style.opacity = '0';

    setTimeout(() => {
        image.src = destination.image;
        image.alt = `${destination.name} image`;
        title.textContent = destination.name;
        description.textContent = destination.description;
        highlightsList.innerHTML = destination.highlights
            .map(highlight => `<li>${highlight}</li>`)
            .join('');

        buttons.forEach(btn => btn.classList.remove('active'));
        buttons[index].classList.add('active');

        content.style.opacity = '1';
    }, 300);
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => updateDestination(index));
});

document.querySelector('.destination-content').style.transition = 'opacity 0.3s ease';

updateDestination(0);