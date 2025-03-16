document.querySelector('nav .menu').addEventListener('click', function () {
    this.classList.toggle('active');
    const li = document.querySelectorAll('nav ul li');
    li.forEach(function (li) {
        li.classList.toggle('active');
    })
})