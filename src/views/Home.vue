<template>
   <!-- Header -->
   <header class="bg-indigo-600 text-white p-5">
      <div class="container mx-auto">
        <h1 class="text-2xl font-semibold">Student Dashboard</h1>
      </div>
    </header>
        <Dashboard />
        <PerformanceByParentalEducation />
      <!-- Footer -->
        <footer class="bg-indigo-600 text-white p-4 mt-8">
          <div class="container mx-auto">
            <p>&copy; 2024 Your Website. All rights reserved.</p>
          </div>
        </footer>
</template>
  
<script>
  import Dashboard from '../components/Dashboard.vue';  
  import PerformanceByParentalEducation from '../components/PerformanceByParentalEducation.vue';
  
  export default {
    components: {
      Dashboard,
      PerformanceByParentalEducation
    },
    data() {
      return {
        error: null,
      };
    },
  };
</script>
<style></style>