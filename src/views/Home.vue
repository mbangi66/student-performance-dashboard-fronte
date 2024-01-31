<template>
  <header class="bg-indigo-600 text-white p-5">
    <div class="container mx-auto">
      <h1 class="text-2xl font-semibold my-0 py-0">Student Dashboard</h1>
    </div>
  </header>

  <div class="container mx-auto px-4 mt-4">

    <Dashboard />

    <div class="flex flex-col md:flex-row md:justify-evenly mt-4">
      <AverageScore class="mb-4 md:mb-0" />
      <PerformanceByGender />
    </div>

    <div class="flex justify-evenly m-4">
      <PerformanceByParentalEducation />
    </div>

  </div>

  <footer class="bg-indigo-600 text-white p-4 mt-8">
    <div class="container mx-auto">
      <p>&copy; 2024 Your Website. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
import Dashboard from '../components/Dashboard.vue';  
import PerformanceByParentalEducation from '../components/PerformanceByParentalEducation.vue';
import AverageScore from "../components/AverageScores.vue";
import PerformanceByGender from "../components/PerformanceByGender.vue"

export default {
  components: {
    Dashboard,
    PerformanceByParentalEducation,
    AverageScore,
    PerformanceByGender
  },
  data() {
    return {
      error: null,
    };
  },
};
</script>

<style scoped>
</style>
