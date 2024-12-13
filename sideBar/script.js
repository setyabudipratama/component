const sidebar = document.querySelector('.sidebar');
const bars = document.querySelector('.fa-bars-staggered');
const sidebarStatus = localStorage.getItem('sidebar');

// sidebar tersembunyi di awal
sidebar.classList.remove('active');

// membuka dan menutup sidebar
bars.addEventListener('click', function () {
    this.classList.toggle('fa-x');
    bars.style.color = sidebar.classList.contains('active') ? 'white' : 'black';
    sidebar.classList.toggle('active');
});

// fungsi dropdown
const btnDropdown = document.querySelector('.sidebar .dropdown button');
btnDropdown.addEventListener('click', function () {
    const icon = document.querySelector('.sidebar .dropdown i');
    if (icon.classList.contains('fa-chevron-down')) {
        icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
    } else {
        icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
    }
    const aDropdown = document.querySelectorAll('.sidebar .dropdown .content a');
    aDropdown.forEach(function (dropdown) {
        dropdown.classList.toggle('active');
    });
});

// // periksa status sidebar dari local storage
// if (sidebarStatus === 'true') {
//     sidebar.classList.add('active');
// };

const header = document.querySelector('nav li:first-child');
header.addEventListener('click', function (e) {
    e.preventDefault();
    const headerPage = document.querySelector('header');
    headerPage.scrollIntoView({ behavior: 'smooth', top: 0 });
});

const page = document.querySelector('nav li:nth-child(2)');
page.addEventListener('click', function (e) {
    e.preventDefault();
    const pagePage = document.getElementById('page1');
    pagePage.scrollIntoView({ behavior: 'smooth' });
});

const page2 = document.querySelector('nav li:nth-child(3)');
page2.addEventListener('click', function (e) {
    e.preventDefault();
    const page2Page = document.getElementById('page2');
    page2Page.scrollIntoView({ behavior: 'smooth' });
});