// fungsi untuk tampilkan form
const toggleLogin = () => {
    const loginForm = document.getElementById('login');
    loginForm.style.opacity = loginForm.style.opacity === '1' ? '0' : '1';
    loginForm.style.visibility = loginForm.style.visibility === 'visible' ? 'hidden' : 'visible';
    loginForm.style.transform = loginForm.style.transform === 'translateY(0)' ? 'translateY(-100%)' : 'translateY(0)';
    loginForm.style.transition = 'opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease';
};

// event listener untuk tombol login
const button = document.getElementById('loginBtn');
button.addEventListener('click', toggleLogin);

// fungsi untuk menampilkan form aktif
const toggleForm = (formId) => {
    const loginForm = document.getElementById('login');
    const signupForm = document.getElementById('signup');

    if (formId === 'login') {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    } else {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    }
};

// event listener untuk tombol signup
const signup = document.getElementById('showSignup');
signup.addEventListener('click', () => toggleForm('signup'));

// event listener untuk tombol login
const login = document.getElementById('showLogin');
login.addEventListener('click', () => toggleForm('login'));