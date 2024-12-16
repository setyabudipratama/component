// fungsi responsif navbar
const bars = document.querySelector('nav .fa-bars-staggered');
bars.addEventListener('click', function () {
    // icon bars
    this.classList.toggle('fa-x');
    const ulNavbar = document.querySelector('nav ul');
    ulNavbar.classList.toggle('active');
    const dropdown = document.querySelector('header nav .dropdown');
    dropdown.classList.toggle('active');
    const btnNavbar = document.querySelector('header nav .login');
    btnNavbar.classList.toggle('active');
});

// fungsi dropdown
const dropdown = document.querySelector('nav .dropdown .pilar');
dropdown.addEventListener('click', function () {
    // icon dropdown
    const icon = document.querySelector('nav .dropdown .pilar i');
    if (icon.classList.contains('fa-caret-down')) {
        icon.classList.replace('fa-caret-down', 'fa-caret-up');
    } else {
        icon.classList.replace('fa-caret-up', 'fa-caret-down');
    }
    const aDropdown = document.querySelectorAll('nav .dropdown .content a');
    aDropdown.forEach(function (dropdown) {
        dropdown.classList.toggle('active');
    });
});