document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        this.classList.toggle('active');
        document.querySelectorAll('h3').forEach(h3 => {
            h3.classList.toggle('active');
        })
    })
})