<template>
  <div class="min-h-screen bg-gray-100 flex justify-center items-center">
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm"
    >
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          v-model="username"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          v-model="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="login"
        >
          Sign In
        </button>
        <router-link
          to="/register"
          class="text-sm text-gray-500 hover:text-gray-700"
        >
          Register Now
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import apiClient from "@/store/apiService";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Implement your registration logic here
      console.log("Registering with:", this.username, this.password);
      // Example: Send registration request to backend
      const userData = {
        username: this.username,
        password: this.password,
      };

      // Example using Axios for API integration
      apiClient
        .post("/auth/login", userData)
        .then((response) => {
          const access_token = response.data.access_token;

          // Store access token in local storage
          localStorage.setItem("access_token", access_token);
          this.$router.push('/tasks');
        })
        .catch((error) => {
          console.error("Registration error:", error);
          // Handle error, e.g., show an error message
        });
    },
  },
};
</script>

<style>
/* Add any custom styles here */
</style>
