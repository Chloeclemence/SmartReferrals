const navLinks = document.querySelectorAll(
    '.nav-link, .mobile-nav-link'
);

const sections = document.querySelectorAll('.page-section');

const currentPageElement = document.getElementById('current-page');
const currentPageMobileElement = document.getElementById('current-page-mobile');

const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');

const previousMobileButton = document.getElementById('previous-mobile');
const nextMobileButton = document.getElementById('next-mobile');

const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');

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

    const currentPage = sections[index].dataset.page;

    navLinks.forEach(link => {

        if (link.dataset.page === currentPage) {
            link.classList.add('active');
        }

    });

    if (currentPageElement) {
        currentPageElement.textContent = index + 1;
    }

    if (currentPageMobileElement) {
        currentPageMobileElement.textContent = index + 1;
    }

    currentIndex = index;

    updateArrowStates();
}

navLinks.forEach(link => {

    link.addEventListener('click', () => {

        const page = link.dataset.page;

        const index = [...sections].findIndex(
            section => section.dataset.page === page
        );

        if (index !== -1) {
            showSection(index);
        }

        if (mobileMenu) {
            mobileMenu.classList.remove('open');
        }

    });

});

if (nextButton) {

    nextButton.addEventListener('click', () => {

        if (currentIndex >= sections.length - 1) return;

        showSection(currentIndex + 1);

    });

}

if (previousButton) {

    previousButton.addEventListener('click', () => {

        if (currentIndex <= 0) return;

        showSection(currentIndex - 1);

    });

}

if (nextMobileButton) {

    nextMobileButton.addEventListener('click', () => {

        if (currentIndex >= sections.length - 1) return;

        showSection(currentIndex + 1);

    });

}

if (previousMobileButton) {

    previousMobileButton.addEventListener('click', () => {

        if (currentIndex <= 0) return;

        showSection(currentIndex - 1);

    });

}

function updateArrowStates() {

    const isFirst = currentIndex === 0;
    const isLast = currentIndex === sections.length - 1;

    if (previousButton) {
        previousButton.disabled = isFirst;
    }

    if (nextButton) {
        nextButton.disabled = isLast;
    }

    if (previousMobileButton) {
        previousMobileButton.disabled = isFirst;
    }

    if (nextMobileButton) {
        nextMobileButton.disabled = isLast;
    }

}

if (mobileMenuToggle) {

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });

}

showSection(0);
