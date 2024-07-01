<template>
  <div id="app" class="bg-gray-100 min-h-screen">
    <header class="bg-blue-500 p-4">
      <nav>
        <ul class="flex justify-center">
          <li class="mx-4"><router-link to="/">Home</router-link></li>
          <li class="mx-4"><router-link to="/login">Login</router-link></li>
          <li class="mx-4">
            <router-link to="/register">Register</router-link>
          </li>
          <!-- Add other navigation links as needed -->
        </ul>
      </nav>
    </header>

    <main class="container mx-auto mt-4">
      <router-view></router-view>
    </main>

    <footer class="bg-blue-500 p-4 mt-8 text-center text-white">
      <!-- Footer content -->
      &copy; 2024 Your Company. All rights reserved.
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  // Other configuration
};
</script>

<style>
/* Global styles */
</style>
