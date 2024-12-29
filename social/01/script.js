const bars = document.querySelector('header .fa-bars-staggered');
bars.addEventListener('click', function() {
    this.classList.toggle('fa-xmark');
    const icons = document.querySelectorAll('header .fa-brands');
    icons.forEach(icon => icon.classList.toggle('active'));
    bars.style.color = [...icons].some(icon => icon.classList.contains('active')) ? 'black' : 'white';
});

// const instagram = document.querySelector('header .fa-instagram');
// instagram.classList.toggle('active');
// const github = document.querySelector('header .fa-github');
// github.classList.toggle('active');
// const linkedin = document.querySelector('header .fa-linkedin');
// linkedin.classList.toggle('active');
// const telegram = document.querySelector('header .fa-telegram');
// telegram.classList.toggle('active');
// const facebook = document.querySelector('header .fa-facebook');
// facebook.classList.toggle('active');
// const twitter = document.querySelector('header .fa-x-twitter');
// twitter.classList.toggle('active');