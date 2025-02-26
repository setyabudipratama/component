document.querySelector('.profile').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.add('active');
});

document.body.addEventListener('click', function(e) {
    if (!e.target.closest('.profile, .sidebar')) {
        document.querySelector('.sidebar').classList.remove('active');
    }
})