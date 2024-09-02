const starCount = 200; // Jumlah bintang
const body = document.body;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Posisi acak untuk setiap bintang
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const size = Math.random() * 3; // Ukuran acak untuk setiap bintang

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Waktu dan durasi animasi acak
    const duration = Math.random() * 5 + 5; // 5 hingga 10 detik
    const delay = Math.random() * 5; // Penundaan antara 0 hingga 5 detik

    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;

    body.appendChild(star);
}

// ambil element yang diperlukan
const playPauseBtn = document.querySelector('.controls .play-pause');
const playPauseIcon = playPauseBtn.querySelector('i');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
// fungsi play & pause audio dan update ikon play/pause
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseIcon.classList.remove('fa-play'); // Hapus kelas play
        playPauseIcon.classList.add('fa-pause');  // Tambah kelas pause
    } else {
        audio.pause();
        playPauseIcon.classList.remove('fa-pause'); // Hapus kelas pause
        playPauseIcon.classList.add('fa-play');    // Tambah kelas play
    }
});

// Update ikon play/pause saat audio selesai
audio.addEventListener('ended', () => {
    playPauseIcon.classList.remove('fa-pause');
    playPauseIcon.classList.add('fa-play');
});

// Update progress
audio.addEventListener('timeupdate', updateProgress);

// addEventListener untuk set progress
progressContainer.addEventListener('click', setProgress);

// untuk update durasi
audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audio.duration);
});

// perbarui progress
function updateProgress() {
    const { duration, currentTime } = audio;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    currentTimeEl.textContent = formatTime(currentTime);
}

// atur progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

// set waktu dalam mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}