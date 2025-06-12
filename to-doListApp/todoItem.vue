<template>
  <li class="todo-item">
    <!-- v-bind:checked -->
    <input
      type="checkbox"
      :checked="task.done"
      @change="$emit('toggle-task')"
    />

    <!-- v-bind:class = directive untuk condisional class -->
    <span :class="{ done: task.done }">{{ task.text }}</span>

    <!-- v-on:click -->
    <button @click="$emit('delete-task')">Hapus</button>
  </li>
</template>

<script setup>
// menerima props task dari parent 'todoList'
const props = defineProps({
  task: Object,
});

// memancarkan event ke parent 'todoList'
const emit = defineEmits(["delete-task", "toggle-task"]);
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  background-color: yellow;
  padding: 10px;
  border-radius: 7px;
  position: relative;
  top: 5px;
  width: 100%;

  .done {
    text-decoration: line-through;
    color: gray;
  }

  span {
    color: black;
    cursor: default;
  }

  button {
    background-color: red;
    padding: 2px 5px;
    border: none;
    outline: none;
    border-radius: 3px;
    color: white;
  }
}
</style>
