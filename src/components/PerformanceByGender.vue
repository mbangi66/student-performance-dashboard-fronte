<template>
    <div>
      <h1>Performance By Gender</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <ul v-if="performanceByGender.length">
          <li v-for="performance in performanceByGender" :key="performance.sex">
            <h2>Gender: {{ performance.sex }}</h2>
            <p>Average G1: {{ performance.avgG1.toFixed(2) }}</p>
            <p>Average G2: {{ performance.avgG2.toFixed(2) }}</p>
            <p>Average G3: {{ performance.avgG3.toFixed(2) }}</p>
          </li>
        </ul>
        <p v-else>No performance data available.</p>
      </div>
      <div v-if="error">{{ error.message }}</div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getPerformanceByGender } from '../axios-plugin';

 export default {
      setup() {
        const performanceByGender = ref([]);
        const loading = ref(false);
        const error = ref(null);

        const fetchPerformanceByGender = async () => {
          try {
            loading.value = true;
            const response = await getPerformanceByGender();
            performanceByGender.value = response.data.performanceByGender;
          } catch (err) {
            console.error('Error fetching performance data by gender:', err);
            error.value = {
              message: 'Error fetching performance data. Please try again later.',
            };
          } finally {
            loading.value = false;
          }
        };

        onMounted(fetchPerformanceByGender);

        return { performanceByGender, loading, error };
      },
    };
</script>