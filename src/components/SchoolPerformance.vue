<template>
    <div>
      <h1>School Performance</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-if="performanceData.length">
          <ul>
            <li v-for="(performance, index) in performanceData" :key="index">
              <h2>Performance Data</h2>
              <p>G1: {{ performance.G1 }}</p>
              <p>G2: {{ performance.G2 }}</p>
              <p>G3: {{ performance.G3 }}</p>
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
  import { getPerformanceBySchoolId } from '../axios-plugin';
  
  export default {
    props: {
      schoolId: {
        type: Number,
        required: true,
      },
    },
    setup(props) {
      const performanceData = ref([]);
      const loading = ref(false);
      const error = ref(null);
  
      const fetchPerformanceBySchool = async () => {
        try {
          loading.value = true;
          const response = await getPerformanceBySchoolId(props.schoolId);
          performanceData.value = response.data.performanceData;
        } catch (error) {
          console.error('Error fetching school performance data:', error);
          error.value = {
            message: 'Error fetching school performance data. Please try again later.',
          };
        } finally {
          loading.value = false;
        }
      };
  
      onMounted(fetchPerformanceBySchool);
  
      return { performanceData, loading, error };
    },
  };
</script>  