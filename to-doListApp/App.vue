<template>
  <header>
    <div class="container">
      <h1>to do list app</h1>
      <div class="content">
        <todoInput class="input" @add-task="addTask" />

        <!-- komponent list, menerima props tasks dan memancarkan event untuk hapus dan toggle -->
         <!-- v-bind task,
        v-on:delete-task="removeTask",
        v-on:update-task="toggleTask" -->
        <todoList
          class="list"
          :tasks="tasks"
          @remove-task="removeTask"
          @update-task="toggleTask"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import todoInput from "./components/todoInput.vue";
import todoList from "./components/todoList.vue";

const tasks = ref([]);

// fungsi untuk menambah task ke array tasks
function addTask(text) {
  if (text.trim()) {
    tasks.value.push({ text, done: false });
  }
}

// fungsi untuk menghapus task berdasarkan index
function removeTask(index) {
  tasks.value.splice(index, 1);
}

// fungsi untuk toggle selesai
function toggleTask(index) {
  tasks.value[index].done = !tasks.value[index].done;
}
</script>

<style scoped>
header {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      text-transform: capitalize;
      cursor: default;
      font-family: "Titillium Web", sans-serif;
    }

    .content {
      width: 60%;
      height: 60%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: start;
      position: relative;
      padding: 30px 30px;
      background-color: rgb(74, 74, 0);
      border-radius: 12px;
      row-gap: 10px;
    }
  }
}

@media only screen and (max-width : 1144px) {
  .content {
    width: 80% !important;
  }
}
</style>
