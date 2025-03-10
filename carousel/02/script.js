const carousel = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel .item');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const desc = document.querySelectorAll('.desc');
const image = document.querySelectorAll('.image');
let index = 0;
let interval;

// fungsi update carousel
function updateCarousel() {
    carousel.style.transform = `translateX(${-index * 100}%)`;
    showSlide() // add fungsi showSlide
}
updateCarousel()

// fungsi reset timer
function resetTimer() {
    clearInterval(interval) // hapus timer
    startTimer()  // add fungsi startTimer
}

// fungsi auto slide
function startTimer() {
    interval = setInterval(nextSlide, 3000)
}
startTimer()

function showSlide() {
    // if (!desc || !image || desc.length === 0 || image.length === 0 ) return
    // desc.forEach((item, i) => {
    //     item.classList.toggle('active', i === index)
    // })
    // image.forEach((img, i) => {
    //     img.classList.toggle('active', i === index)
    // })

    // remove kelas active
    desc.forEach(item => item.classList.remove('active'))
    image.forEach(img => img.classList.remove('active'))
    
    // add kelas active
    if (desc[index]) desc[index].classList.add('active')
    if (image[index]) image[index].classList.add('active')

}

// button next
function nextSlide() {
    index = (index + 1) % items.length;
    updateCarousel()
    resetTimer()
}

// button prev
function prevSlide() {
    index = (index - 1 + items.length) % items.length;
    updateCarousel()
    resetTimer()
}

prevBtn.addEventListener('click', prevSlide)
nextBtn.addEventListener('click', nextSlide)