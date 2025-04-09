document.querySelector('.button').addEventListener('click', function() {
    document.querySelector('.social').classList.toggle('active')
    document.querySelectorAll('ul li').forEach(li => {li.classList.toggle('active')})
    this.classList.toggle('active')
})