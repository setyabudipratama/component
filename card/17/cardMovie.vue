<template>
  <span class="lamp" :class="lampMode ? 'off' : 'on'"></span>
  <button @click="toggleActive"><i class="fa-solid fa-sun"></i></button>
  <div class="card" :class="lampMode ? 'off' : 'on'">
    <h2 :class="lampMode ? 'off' : 'on'">movie</h2>
    <img v-bind:src="src" />
    <div class="card-body">
      <h3 :class="lampMode ? 'off' : 'on'">ejen ali: the movie 2</h3>
      <div class="desc">
        <div class="review">
          <i
            v-for="(icon, icons) in icons"
            :key="icons"
            :class="[icon, 'fa-icon', lampMode ? 'off' : 'on']"
          ></i>
          <p :class="lampMode ? 'off' : 'on'"><span>10</span> of 10</p>
        </div>
        <div class="date">
          <h4 :class="lampMode ? 'off' : 'on'">setya budi pratama</h4>
          <p :class="lampMode ? 'off' : 'on'">6 juni 2025</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const src = ref("./src/assets/ejen ali the movie 2.jpg");
const icons = ref([
  "fa-solid fa-star",
  "fa-solid fa-star",
  "fa-solid fa-star",
  "fa-solid fa-star",
  "fa-solid fa-star",
  "fa-solid fa-star",
  "fa-solid fa-star",
  "fa-solid fa-star",
  "fa-solid fa-star",
  "fa-solid fa-star",
]);

const lampMode = ref(true);
function toggleActive() {
  lampMode.value = !lampMode.value;
  const lamp = document.querySelector(".lamp");
  if (!lamp) return;
  lamp.classList.toggle("on", lampMode.value);
  lamp.classList.toggle("off", !lampMode.value);
}
</script>

<style scoped>
.lamp {
  width: 500px;
  min-height: 98%;
  background: transparent;
  clip-path: polygon(20% 0, 80% 0, 100% 100%, 0 100%);
  border-top: 5px solid cyan;
  position: absolute;
  top: 2%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
  transition: all 0.3s ease;
}

.lamp.on {
  background: rgba(147, 139, 255, 0.2);
}

.card.on {
  box-shadow: 0 10px 5px black;
}

.card h2.on,
.card .card-body h3.on,
.card .card-body .desc .date h4.on,
.card .card-body .desc .date p.on {
  text-shadow: 0 0 5px cyan;
}

.card .card-body .desc .review .fa-icon.on,
.card .card-body .desc .review p.on {
  text-shadow: 0 0 5px gold;
}

button {
  position: absolute;
  top: 5%;
  right: 20%;
  width: 50px;
  height: 50px;
  background-color: cyan;
  border: none;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000;
  font-size: 1.5rem;
}

.card {
  min-width: 350px;
  min-height: 80%;
  background-color: blue;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px;
  row-gap: 10px;
  transition: all 0.3s ease;

  h2 {
    color: white;
    position: relative;
    cursor: default;
    text-transform: uppercase;
    transition: all 0.3s ease;
  }

  img {
    width: 230px;
    height: 300px;
    object-fit: cover;
  }

  .card-body {
    width: 100%;
    min-height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      color: white;
      text-transform: uppercase;
      margin: 10px 0;
      cursor: default;
      transition: all 0.3s ease;
    }

    .desc {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .review {
        width: 50%;

        .fa-icon {
          color: gold;
          font-size: 1rem;
          margin: 5px 1px;
          transition: all 0.3s ease;
        }

        p {
          color: gold;
          cursor: default;
          transition: all 0.3s ease;

          span {
            font-size: 2rem;
          }
        }
      }

      .date {
        h4,
        p {
          color: white;
          text-transform: capitalize;
          cursor: default;
          transition: all 0.3s ease;
        }
      }
    }
  }
}

.card::before {
  content: "";
  width: 40px;
  height: 35px;
  background: var(--background);
  border-radius: 50%;
  position: absolute;
  left: -5%;
}

.card::after {
  content: "";
  width: 40px;
  height: 30px;
  background: var(--background);
  border-radius: 50%;
  position: absolute;
  right: -5%;
}
</style>
