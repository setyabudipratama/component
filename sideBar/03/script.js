document.querySelector('h4').addEventListener('click', function () {
    document.querySelector('.dropdown').classList.toggle('active');
    document.querySelector('h4 span').classList.toggle('active');
})

document.querySelector('.sidebar .line').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('active');
    this.classList.toggle('active');
})