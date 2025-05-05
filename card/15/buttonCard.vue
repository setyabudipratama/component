<template>
    <button @click="handleClick('suka')" class="buttonCard fa-solid fa-heart">
    </button>
    <button @click="handleClick('tidak suka')" class="buttonCard fa-solid fa-thumbs-down">
    </button>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    name: 'buttonCard',
    methods: {
        handleClick(type) {
            if (type == 'suka') {
                Swal.fire({
                    title: 'Suka!',
                    text: 'Saya menyukainya',
                    color: 'black',
                    background: 'yellow',
                    confirmButtonText: 'Oke'
                })
            } else {
                Swal.fire({
                    title: 'Tidak Suka!',
                    text: 'Saya tidak suka',
                    color: 'white',
                    background: 'red',
                    confirmButtonText: 'Oke'
                })
            }
        }
    }
}
</script>

<style scoped>
button {
    width: 120px;
    height: 35px;
    background-color: yellow;
    border: none;
    outline: none;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 5px 5px 10px black;
    transition: all 0.3s ease;
}

button:hover {
    transform: scale(1.1);
    box-shadow: none;
}

.fa-heart {
    color: red;
    font-size: 1.2rem;
}

.fa-thumbs-down {
    color: darkblue;
    font-size: 1.2rem;
}
</style>
