document.querySelectorAll('.login form h5 span, .register form h5 span').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector('.login').classList.toggle('active');
        document.querySelector('.register').classList.toggle('active');
    })
})