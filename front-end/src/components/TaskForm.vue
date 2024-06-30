<template>
  <form @submit.prevent="handleSubmit" class="mb-4">
    <div class="mb-2">
      <label class="block text-sm font-medium">Title</label>
      <input v-model="form.title" type="text" class="input-field" />
    </div>
    <div class="mb-2">
      <label class="block text-sm font-medium">Description</label>
      <textarea v-model="form.description" class="input-field"></textarea>
    </div>
    <div class="mb-2">
      <label class="block text-sm font-medium">Status</label>
      <select v-model="form.status" class="select-field">
        <option
          v-for="status in statusOptions"
          :key="status.value"
          :value="status.value"
        >
          {{ status.label }}
        </option>
      </select>
    </div>
    <button type="submit" class="btn-submit">
      {{ isEdit ? "Update Task" : "Add Task" }}
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

interface Task {
  id?: number;
  title: string;
  description: string;
  status: "TO_DO" | "IN_PROGRESS" | "DONE"; // Adjusted to match backend enum
}

export default defineComponent({
  props: {
    task: {
      type: Object as () => Task,
      default: () => ({ title: "", description: "", status: "TO_DO" }),
    },
  },
  emits: ["addTask", "editTask"],
  setup(props, { emit }) {
    const form = ref<Task>({ ...props.task });
    const isEdit = ref(!!props.task.id);

    const statusOptions = [
      { value: "TO_DO", label: "To Do" },
      { value: "IN_PROGRESS", label: "In Progress" },
      { value: "DONE", label: "Done" },
    ];

    watch(
      () => props.task,
      (newTask) => {
        form.value = { ...newTask };
        isEdit.value = !!newTask.id;
      }
    );

    const handleSubmit = () => {
      if (isEdit.value) {
        emit("editTask", { ...form.value });
      } else {
        emit("addTask", { ...form.value });
      }
      form.value = { title: "", description: "", status: "TO_DO" }; // Reset form after submit
    };

    return { form, isEdit, statusOptions, handleSubmit };
  },
});
</script>

<style scoped>
.input-field,
.select-field {
  border: 1px solid #d1d5db;
  padding: 0.5rem;
  width: 100%;
  font-size: 1rem;
  border-radius: 0.25rem;
}

.btn-submit {
  background-color: #34d399;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>
