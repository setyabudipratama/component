<template>
  <ul class="todo-list">
    <h3>daftar</h3>

    <div class="scroll">
      <!-- v-bind:key untuk optimasi DOM -->
      <!-- v-bind:task untuk mengirim data ke child 'todoItem' -->
      <!-- v-on:delete-task, v-on:update-task -->
      <todoItem
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        @delete-task="() => emit('remove-task', index)"
        @toggle-task="() => emit('update-task', index)"
      />
    </div>
  </ul>
</template>

<script setup>
import todoItem from "./todoItem.vue";

// menerima props tasks dari parent 'App.vue'
const props = defineProps({
  tasks: Array,
});

// memancarkan event ke parent 'App.vue'
const emit = defineEmits(["remove-task", "update-task"]);
</script>

<style scoped>
.todo-list {
  min-width: 150px;
  max-height: 100%;
  background-color: rgb(120, 120, 0);
  border: 2px solid yellow;
  box-shadow: 0 0 5px yellow;
  padding: 5px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    text-transform: capitalize;
    cursor: default;
    color: black;
  }

  .scroll {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
}

@media only screen and (max-width: 833px) {
  .todo-list {
    max-height: 60% !important;
  }
}
</style>
