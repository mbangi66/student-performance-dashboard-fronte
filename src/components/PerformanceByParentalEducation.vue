<template>
    <div>
      <h1>Performance by Parental Education</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-if="impactByParentalEducation.length">
          <ul>
            <li v-for="(performance, index) in impactByParentalEducation" :key="index">
              <h2>Performance Data</h2>
              <p>Medu: {{ performance.Medu }}</p>
              <p>Fedu: {{ performance.Fedu }}</p>
              <p>Average G1: {{ performance.avgG1.toFixed(2) }}</p>
              <p>Average G2: {{ performance.avgG2.toFixed(2) }}</p>
              <p>Average G3: {{ performance.avgG3.toFixed(2) }}</p>
            </li>
          </ul>
        </div>
        <p v-else>No performance data available.</p>
      </div>
      <div v-if="error">{{ error }}</div>
    </div>
</template>
  
<script>
  import { ref, onMounted } from 'vue';
  import { getPerformanceByParentalEducation } from '../axios-plugin';
  
  export default {
    setup() {
      const impactByParentalEducation = ref([]);
      const loading = ref(false);
      const error = ref(null);
  
      const fetchPerformanceByParentalEducation = async () => {
        try {
          loading.value = true;
          const response = await getPerformanceByParentalEducation();
          impactByParentalEducation.value = response.data.impactByParentalEducation;
        } catch (error) {
          console.error('Error fetching performance data by parental education:', error);
          error.value = {
            message: 'Error fetching performance data. Please try again later.',
          };
        } finally {
          loading.value = false;
        }
      };
  
      onMounted(fetchPerformanceByParentalEducation);
  
      return { impactByParentalEducation, loading, error };
    },
  };
</script>  