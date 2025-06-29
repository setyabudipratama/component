<template>
  <h2>kalkulator</h2>
  <div class="kalkulator">
    <!-- v-model -->
    <input v-model="display" placeholder="" />
    <div class="buttons">
      <!-- v-on @click -->
      <button class="reset" @click="reset">C</button>
      <button class="hapus" @click="hapus">D</button>
      <button class="hasil" @click="hasil">=</button>
      <!-- v-for looping array -->
      <button
        v-for="btn in buttons"
        :key="btn"
        @click="input(btn)"
        class="number"
      >
        {{ btn }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// state utama menyimpan angka, operator, dan nilai pertama sebelum operator
const display = ref("");
const operator = ref(null);
const firstValue = ref(null);

// array tombol
const buttons = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "0",
  "-",
  "*",
  ".",
  "/",
];

// fungsi input saat tombol diklik
function input(value) {
  // jika operator
  if (["+", "-", "*", "/"].includes(value)) {
    // tidak diproses
    if (display.value === "") return;
    // simpan angka pertama
    firstValue.value = display.value;
    // simpan operator
    operator.value = value;
    // bersihkan display
    display.value = "";
  } else {
    // tambah angka/titik ke display
    display.value += value;
  }
}

// fungsi hasil
function hasil() {
  // perseFloat untuk mengubah string menjadi number
  const first = parseFloat(firstValue.value);
  const secondValue = parseFloat(display.value);

  // variabel hasil
  let hasil = "";

  // perhitungan
  switch (operator.value) {
    case "+":
      hasil = first + secondValue;
      break;
    case "-":
      hasil = first - secondValue;
      break;
    case "*":
      hasil = first * secondValue;
      break;
    case "/":
      // pembagian 0 = can't
      hasil = secondValue !== 0 ? first / secondValue : "Can't";
      break;
  }

  // hasil display dalam bentuk string
  display.value = String(hasil);
  // reset nilai pertama dan operator
  firstValue.value = null;
  operator.value = null;
}

// fungsi untuk reset value
function reset() {
  // bersihkan display
  display.value = "";
  // reset nilai pertama dan operator
  firstValue.value = null;
  operator.value = null;
}

// fungsi hapus
function hapus() {
  // nilai string atau number
  if (typeof display.value === "string" || typeof display.value === "number") {
    // ubah string menjadi number
    display.value = String(display.value).slice(0, -1);
  }
}
</script>

<style scoped>
h2 {
  cursor: default;
  font-family: "Yellowtail", cursive;
  color: black;
  font-size: 2rem;
  margin-bottom: 10px;
  text-transform: lowercase;
}

.kalkulator {
  min-width: 300px;
  min-height: 250px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  padding: 0 0 20px 0;
  border-radius: 15px;
  overflow: hidden;

  input {
    width: 100%;
    height: 80px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7);
    border: none;
    outline: none;
    border-bottom: 2px solid yellow;
    color: white;
    font-size: 1.2rem;
  }

  input::placeholder {
    color: white;
  }

  .buttons {
    width: 90%;
    min-height: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    place-items: center;
    row-gap: 10px;

    .number,
    .reset,
    .hapus,
    .hasil {
      background-color: rgb(41, 41, 41);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: none;
      border-radius: 50%;
      width: 60%;
      height: 50px;
      font-size: 1.2rem;
      box-shadow: inset -3px -3px 5px black;
      transition: all 0.2s ease-in-out;
    }

    .number:active,
    .reset:active,
    .hapus:active,
    .hasil:active {
      box-shadow: none;
    }

    .reset {
      color: red;
      background-color: rgb(186, 186, 186);
      font-size: 1.4rem;
      font-weight: bold;
    }

    .hapus {
      color: red;
      background-color: rgb(186, 186, 186);
      font-size: 1.4rem;
      font-weight: bold;
    }

    .hasil {
      color: blue;
      background-color: rgb(186, 186, 186);
      font-size: 1.8rem;
      font-weight: bold;
    }
  }
}
</style>
