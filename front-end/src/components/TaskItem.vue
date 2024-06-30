<template>
  <div class="border p-4 rounded-lg shadow mb-4">
    <h2 class="text-xl font-semibold mb-2">{{ task.title }}</h2>
    <p class="text-gray-700">{{ task.description }}</p>
    <p class="text-gray-600">Status: {{ formatStatus(task.status) }}</p>
    <div class="flex mt-4">
      <button @click="editing = true" class="btn-edit">Edit</button>
      <button @click="$emit('deleteTask', task.id)" class="btn-delete">
        Delete
      </button>
    </div>
    <TaskForm v-if="editing" :task="task" @editTask="handleEdit" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TaskForm from "./TaskForm.vue";

interface Task {
  id: number;
  title: string;
  description: string;
  status: "TO_DO" | "IN_PROGRESS" | "DONE"; // Adjusted to match backend enum
}

export default defineComponent({
  components: { TaskForm },
  props: {
    task: {
      type: Object as () => Task,
      required: true,
    },
  },
  setup(props, { emit }) {
    const editing = ref(false);

    const handleEdit = (updatedTask: Task) => {
      emit("editTask", updatedTask);
      editing.value = false;
    };

    const formatStatus = (status: Task["status"]): string => {
      switch (status) {
        case "TO_DO":
          return "To Do";
        case "IN_PROGRESS":
          return "In Progress";
        case "DONE":
          return "Done";
        default:
          return "";
      }
    };

    return { editing, handleEdit, formatStatus };
  },
});
</script>

<style scoped>
.btn-edit,
.btn-delete {
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>
