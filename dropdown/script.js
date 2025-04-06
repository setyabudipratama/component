document.querySelector('button').addEventListener('click', function() {
    document.querySelector('ul').classList.toggle('active')
    this.classList.toggle('active')
})