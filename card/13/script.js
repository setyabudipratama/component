document.querySelector('i').addEventListener('click', function() {
    if(this.classList.contains('fa-regular')) {
        this.classList.replace('fa-regular', 'fa-solid')
    } else {
        this.classList.replace('fa-solid', 'fa-regular')
    }
})