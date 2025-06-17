<template>
  <div class="card" @click="toggleActive">
    <img v-bind:src="src" alt="Ejen Ali the Movie 2" />
    <div class="card-body" :class="{ active: isActive }">
      <h3>ejen ali <span>the</span> movie 2</h3>
      <div class="star">
        <i
          v-for="(icon, index) in icons"
          :key="index"
          :class="['fa-icon', icon]"
        ></i>
        <p>
          Ejen Ali ditunjuk sebagai pilot Project SATRIA, baju zirah
          berteknologi baru dengan bantuan program kecerdasan buatan yang
          dirancang khusus untuk mengoptimalkan kinerja fisik dan keterampilan
          mental agen MATA saat menjalankan misi rahasia mereka.
        </p>
        <button>buy now</button>
        <div class="slide">
          <i class="fa-solid fa-chevron-up" :class="{ active: isActive }"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const src = ref("./src/assets/Ejen Ali the Movie 2.jpg");

const icons = ref([
  "fa-solid fa-star",
  "fa-solid fa-star",
  "fa-solid fa-star",
  "fa-solid fa-star",
  "fa-solid fa-star",
]);

const isActive = ref(false);

const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>

<style scoped>
.card {
  width: 250px;
  height: 320px;
  background-color: yellow;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-body {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
    transform: translateY(100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px 10px;
    transition: all 0.7s ease;

    h3 {
      color: white;
      text-transform: capitalize;
      cursor: default;

      span {
        text-transform: lowercase;
      }
    }

    .fa-icon {
      color: gold;
      font-size: 1rem;
      margin: 5px 1px;
    }

    p {
      color: white;
      font-size: 0.7rem;
      cursor: default;
      width: 85%;
      margin: 2px 0;
    }

    button {
      width: 140px;
      height: 35px;
      background: transparent;
      border: 2px solid white;
      border-radius: 50px;
      color: white;
      text-transform: uppercase;
      cursor: pointer;
      box-shadow: 2px 2px 2px rgb(81, 81, 81);
      transition: all 0.3s ease;
    }

    button:hover {
      background-color: white;
      color: black;
      box-shadow: none;
      scale: 1.05;
    }

    .slide {
      position: absolute;
      right: 2%;
      top: 4%;
      width: 40px;
      height: 90%;
      border: 2px solid white;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: end;
      z-index: 5;

      i {
        color: black;
        background-color: yellow;
        width: 38px;
        height: 38px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.7s ease;
      }

      i.active {
        transform: translateY(-362%);
      }
    }
  }

  .card-body.active {
    transform: translateY(0);
  }
}
</style>
