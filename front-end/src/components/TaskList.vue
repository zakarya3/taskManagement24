<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Task List</h1>
    <TaskForm @addTask="addTask" />
    <div v-for="task in tasks" :key="task.id" class="mb-4">
      <TaskItem :task="task" @deleteTask="deleteTask" @editTask="editTask" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import TaskItem from "./TaskItem.vue";
import TaskForm from "./TaskForm.vue";
import apiClient from "@/store/apiService";

interface Task {
  id: number;
  title: string;
  description: string;
  status: "TO_DO" | "IN_PROGRESS" | "DONE";
}

export default defineComponent({
  components: { TaskItem, TaskForm },
  setup() {
    const tasks = ref<Task[]>([]);

    console.log("i runn 2222222!!!!!!!");

    const fetchTasks = async () => {
      try {
        const response = await apiClient.get("/tasks");
        tasks.value = response.data; // Assuming your API returns an array of tasks
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    const addTask = async (task: Task) => {
      try {
        const response = await apiClient.post("/tasks", task);
        tasks.value.push(response.data); // Add new task to local tasks array
      } catch (error) {
        console.error("Error adding task:", error);
      }
    };

    const deleteTask = async (taskId: number) => {
      try {
        await apiClient.delete(`/tasks/${taskId}`);
        tasks.value = tasks.value.filter((task) => task.id !== taskId);
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    };

    const editTask = async (updatedTask: Task) => {
      try {
        const response = await apiClient.put(
          `/tasks/${updatedTask.id}`,
          updatedTask
        );
        const index = tasks.value.findIndex(
          (task) => task.id === updatedTask.id
        );
        if (index !== -1) {
          tasks.value[index] = response.data; // Update local task with updated data from API
        }
      } catch (error) {
        console.error("Error editing task:", error);
      }
    };

    // Fetch tasks on component mount
    onMounted(fetchTasks);

    return { tasks, addTask, deleteTask, editTask };
  },
});
</script>
