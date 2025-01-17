document.querySelector('header .sidebar .fa-chevron-right').addEventListener('click', function () {
    document.querySelector('header .sidebar').classList.toggle('active');
    document.querySelector('header .sidebar .profile span').classList.toggle('active');
})
document.querySelector('header .sidebar ul li .dropdown').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('header .sidebar ul li .dropdown i').classList.toggle('fa-chevron-up');
})