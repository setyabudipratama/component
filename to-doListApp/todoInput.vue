<template>
  <!-- v-on:submit.prevent -->
  <form @submit.prevent="submitTask">
    <div class="input">
      <!-- v-model = two way data binding -->
      <input
        v-model="newTask"
        type="text"
        id="tugas"
        required
      />
      <label for="tugas">tugas baru</label>
    </div>
    <button type="submit">tambah</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

// untuk menyimpan teks input
const newTask = ref("");

// emit untuk memancarkan event ke parent 'App.vue'
const emit = defineEmits(["add-task"]);

// memancarkan data saat form di submit
function submitTask() {
  if (newTask.value.trim()) {
    emit("add-task", newTask.value);
    newTask.value = "";
  }
}
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
  background-color: yellow;
  border-radius: 10px;
  padding: 15px 10px;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;

  .input {
    width: 200px;
    height: 45px;

    input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      padding: 5px 10px;
      background-color: transparent;
      border-bottom: 2px solid black;
    }

    label {
      position: absolute;
      left: 5%;
      top: 25px;
      color: black;
      text-transform: capitalize;
      transition: all 0.5s ease;
    }

    input:focus + label,
    input:valid + label {
      transform: translateY(-20px) translateX(-7px);
      font-size: 0.8rem;
    }
  }

  button {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: blue;
    color: white;
    text-transform: capitalize;
    cursor: pointer;
  }
}
</style>
