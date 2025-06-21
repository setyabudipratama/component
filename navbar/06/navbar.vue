<template>
  <nav>
    <!-- v-bind 'ul' untuk mengganti attribute class dan dibungkus dengan tanda []-->
    <ul :class="['ul']">
      <!-- item dari array items -->
      <li v-for="item in items">
        <!-- item.icon untuk menampilkan icon -->
        <i :class="[item.icon, 'fa-icon']"></i>
        <!-- propt item.text untuk menampilkan reactive dan juga teks di script -->
        <span>{{ item.text }}</span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";

// reactive items
const items = ref([
  { icon: "fa-solid fa-house-user", text: "home" },
  { icon: "fa-solid fa-circle-info", text: "about" },
  { icon: "fa-solid fa-headset", text: "contact" },
]);
</script>

<style scoped>
nav {
  width: 50%;
  height: 14vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  border: 2px solid cyan;
  border-radius: 100px;
  position: fixed;
  top: 5%;

  .ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;

    li {
      height: 100%;
      color: white;
      list-style: none;
      text-transform: capitalize;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 5px;
      transition: all 0.3s ease;

      .fa-icon {
        color: white;
        font-size: 1.7rem;
        opacity: 1;
        transform: translateY(40%);
        transition: all 0.3s ease;
      }

      span {
        color: white;
        font-size: 1rem;
        opacity: 0;
        transform: translateY(40%);
        transition: all 0.3s ease;
      }
    }

    li:hover .fa-icon,
    li:hover span {
      text-shadow: 0 0 2px cyan;
      color: cyan;
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>
