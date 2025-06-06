<template>
    <!-- vue directive v-on dan v-bind class -->
    <button class="lamp" @click="toggleActive" :class="isDarkMode ? 'dark' : 'light'">
      <i class="fa-solid fa-lightbulb"></i>
    </button>
    <!-- vue directive v-if -->
    <form action="" v-if="!registerActive">
        <!-- vue directive v-bind attribute -->
        <img v-bind="{ src: './src/assets/cinema.jpg', alt: 'cinema' }">
        <h2>login</h2>
        <div class="user">
            <!-- vue directive v-model dan v-bind class -->
            <input id="user" type="text" v-model="user" autocomplete="username"  :class="{ dark:isDarkMode }">
            <label for="user">username</label>
        </div>
        <div class="pass">
            <input id="pass" type="password" v-model="pass" autocomplete="current-password"  :class="{ dark:isDarkMode }">
            <label for="pass">password</label>
        </div>
        <button>login</button>
        <!-- vue directive v-on -->
        <p>Belum punya akun?<a @click.prevent = "toggleForm"> register</a></p>
    </form>
    
    <!-- vue directive v-else -->
    <form action="" v-else>
        <h2>register</h2>
        <div class="user">
            <!-- vue directive v-model dan v-bind class -->
            <input id="user" type="text" v-model="user" autocomplete="username"  :class="{ dark:isDarkMode }">
            <label for="user">username</label>
        </div>
        <div class="pass">
            <input id="pass" type="password" v-model="pass" autocomplete="current-password"  :class="{ dark:isDarkMode }">
            <label for="pass">password</label>
        </div>
        <div class="pass2">
            <input id="pass2" type="password" v-model="pass2" autocomplete="current-password"  :class="{ dark:isDarkMode }">
            <label for="pass2">konfirmasi password</label>
        </div>
        <button>register</button>
        <!-- vue directive v-on -->
        <p>Belum punya akun?<a @click.prevent = "toggleForm">login</a></p>
    </form>
</template>

<script setup>
import { ref } from 'vue';

// reactive Darkmode
const isDarkMode = ref('');
function toggleActive() {
  isDarkMode.value = !isDarkMode.value;
  const form = document.querySelector("form");
  if (!form) return;
  form.classList.toggle("dark", isDarkMode.value);
  form.classList.toggle("light", !isDarkMode.value);
  background.value = isDarkMode.value ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)";
  filter.value = isDarkMode.value ? "blur(2px)" : "blur(2px)";
}

// reactive data username dan password
const user = ref('');
const pass = ref('');
const pass2 = ref('');

// reactive data register
const registerActive = ref(false);
function toggleForm() {
    registerActive.value = !registerActive.value
}
</script>

<style scoped>
.lamp {
    position: fixed;
    top: 5%;
    left: 5%;
    width: 45px;
    height: 45px;
    border: none;
    outline: none;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1000;
    font-size: 1.2rem;
}

form {
    min-width: 40%;
    height: 80vh;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(2px);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 12px;
    position: relative;
    transition: all 0.5s ease;

    img {
        width: 80%;
        height: 20%;
        object-fit: cover;
        border-radius: 10px;
    }

    h2 {
        cursor: default;
        text-transform: capitalize;
    }

    .user,
    .pass,
    .pass2 {
        width: 80%;
        height: 10%;
        position: relative;

        input {
            width: 100%;
            height: 100%;
            background-color: transparent;
            border: none;
            border-bottom: 2px solid black;
            outline: none;
            position: relative;
            top: -30%;
            transition: all 0.5s ease;
        }

        input.dark {
            color: white;
            border-bottom: 2px solid white;
        }
        
        input:active,
        input:focus {
            border-bottom: 2px solid yellow;
        }

        label {
            position: absolute;
            top: 0;
            left: 0;
            text-transform: capitalize;
            font-size: 1.1rem;
            transform: translateX(10px);
            transition: all 0.5s ease;
        }

        input:active + label,
        input:focus + label {
            font-size: 1rem;
            transform: translateY(-30px) translateX(0);
        }
    }

    button {
        width: 140px;
        height: 40px;
        border: none;
        outline: none;
        background-color: yellow;
        border-radius: 10px;
        text-transform: capitalize;
        cursor: pointer;
        box-shadow: 5px 5px 10px black;
        transition: all 0.3s ease;
    }

    button:hover {
        transform: scale(1.05);
        box-shadow: none;
    }

    p {
        cursor: default;

        a {
            cursor: pointer;
            margin-left: 5px;
            color: blue;
            text-decoration: underline;
            text-transform: uppercase;
        }
    }
}

.dark {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    color: white;
    transition: all 0.5s ease;
}
</style>
