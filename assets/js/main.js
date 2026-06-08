const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.page-section');

const currentPageElement = document.getElementById('current-page');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');

let currentIndex = 0;
console.log("JS loaded");

function showSection(index) {

    sections.forEach(section => {
        section.classList.remove('active-section');
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    sections[index].classList.add('active-section');
    navLinks[index].classList.add('active');

    currentPageElement.textContent = index + 1;

    currentIndex = index;
    updateArrowStates();
}

navLinks.forEach((link, index) => {

    link.addEventListener('click', () => {
        showSection(index);
    });

});

nextButton.addEventListener('click', () => {

    let nextIndex = currentIndex + 1;

    if (nextIndex >= sections.length) {
        nextIndex = 0;
    }

    showSection(nextIndex);

});

previousButton.addEventListener('click', () => {

    let previousIndex = currentIndex - 1;

    if (previousIndex < 0) {
        previousIndex = sections.length - 1;
    }

    showSection(previousIndex);

});

showSection(0);

function updateArrowStates() {
    previousButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === sections.length - 1;
}
