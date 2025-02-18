document.querySelector('.fa-magnifying-glass').addEventListener('dblclick', function() {
    document.querySelector('.search').classList.add('active');
    document.querySelector('.search input').focus();
})
document.body.addEventListener('dblclick', function(e) {
    if (!e.target.classList.contains('fa-magnifying-glass') && !e.target.classList.contains('search')) {
        document.querySelector('.search').classList.remove('active');
    }
})

const input = document.querySelector('input');
const label = document.querySelector('label');
input.addEventListener('input', toggleActiveClass);
input.addEventListener('blur', toggleActiveClass);

function toggleActiveClass() {
    if (input.value.trim() !== '') {
        label.classList.add('active');
    } else {
        label.classList.remove('active');
    }
}