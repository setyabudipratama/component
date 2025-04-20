document.querySelectorAll('.login form h5 span, .register form h5 span').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector('.login').classList.toggle('active');
        document.querySelector('.register').classList.toggle('active');
    })
})
document.querySelectorAll('.fa-eye').forEach(eye => {
    eye.addEventListener('click', function () {
        const passwordInputs = document.querySelectorAll
        ('.login .pass input, .register .pass input, .register .pass2 input')
        passwordInputs.forEach(passwordInput => {
            passwordInputs.forEach(passwordInput => {
                passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
                this.classList.toggle('fa-eye-slash', passwordInput.type === 'text');
                this.classList.toggle('fa-eye', passwordInput.type !== 'text');
                this.classList.toggle('active', passwordInput.type === 'text');
            })
        })
    })
})
