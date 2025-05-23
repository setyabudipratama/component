<template>
    <header class="lamp" :class="isNightMode ? 'dark' : 'light'">
        <button @click="toggleActive">
            <i class="fa-regular fa-lightbulb"></i>
        </button>
    </header>
</template>

<script setup>
import { ref } from 'vue'

// tidak aktif pada awal
const isNightMode = ref(false)

// fungsi untuk mengubah darkmode
function toggleActive() {
    isNightMode.value = !isNightMode.value
    
    // ambil elemen app sebagai target
    const app = document.querySelector('#app')
    if (!app) return
    app.classList.toggle('dark', isNightMode.value)
    app.classList.toggle('light', !isNightMode.value)
}
</script>

<style scope>
.lamp {
    position: fixed;
    top: -40%;
    left: -45%;

    button {
        position: fixed;
        z-index: 1000;
        width: 40px;
        height: 40px;
        background-color: yellow;
        border: none;
        outline: none;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 2px 2px 10px black;
        transition: all 0.3s ease;

        i {
            font-size: 1.5rem;
            color: black;
        }
    }
}

/* panggil elemen app untuk mengubah background */
#app.dark {
    background-color: rgb(39, 39, 39);
    color: white;
}

#app.light {
    background-color: lightblue;
    color: rgb(19, 45, 45);
}
</style>
