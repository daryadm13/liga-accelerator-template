const contacts = document.querySelector('.contacts__header');
const sections = document.querySelector('.sections__header');
const contactsList = document.querySelector('.contacts__list');
const sectionsList = document.querySelector('.sections__list');
const contactsAddress = document.querySelector('.contacts__address');

const contactsPlus = document.querySelector('.contacts__header--plus');
const sectionsPlus = document.querySelector('.sections__header--plus');


const closeLists = () => {
    const mediaQuery = window.matchMedia('(max-width: 769px)');
    if (mediaQuery.matches) {        
        contactsAddress.classList.add('visually-hidden');
        contactsList.classList.add('visually-hidden');
        sectionsList.classList.add('visually-hidden');
        contactsPlus.classList.remove('visually-hidden');
        sectionsPlus.classList.remove('visually-hidden');
    }
    else {
        openLists();
    }
}

const openLists = () => {
    contactsAddress.classList.remove('visually-hidden');
    contactsList.classList.remove('visually-hidden');
    sectionsList.classList.remove('visually-hidden')
}

const closeMobile = () => {
    const mediaQuery = window.matchMedia('(max-width: 769px)');
    if (mediaQuery.matches) {
        closeLists();
    }
    else {
        openLists();
    }
}

closeMobile();

window.addEventListener('resize', () => closeMobile(), true);

contacts.addEventListener('click', () => {
    if (contactsList.classList.contains('visually-hidden')) {
        openContacts();
    }
    else {
        closeLists();
    }
})

sections.addEventListener('click', () => {
    if (sectionsList.classList.contains('visually-hidden')) {
        openSections();
    }
    else {
        closeLists();
    }
});

const openContacts = () => {
    closeLists();
    contactsList.classList.remove('visually-hidden');
    contactsAddress.classList.remove('visually-hidden');
    contactsPlus.classList.add('visually-hidden');
}


const openSections = () => {
    closeLists();
    sectionsList.classList.remove('visually-hidden');
    sectionsPlus.classList.add('visually-hidden');
}