<template>
    <div>
      <h1>Student Performance</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <p v-if="performanceData">
          G1: {{ performanceData.G1 }}
        </p>
        <p v-if="performanceData">
          G2: {{ performanceData.G2 }}
        </p>
        <p v-if="performanceData">
          G3: {{ performanceData.G3 }}
        </p>
      </div>
      <div v-if="error">{{ error }}</div>
    </div>
</template>
  
<script>
  import { ref, onMounted } from 'vue';
  import { getPerformanceByStudentId } from '../axios-plugin';
  
  export default {
    props: {
      studentId: {
        type: Number,
        required: true,
      },
    },
    setup(props) {
      const performanceData = ref(null);
      const loading = ref(false);
      const error = ref(null);
  
      const fetchPerformanceData = async () => {
        try {
          loading.value = true;
          const response = await getPerformanceByStudentId(props.studentId);
          performanceData.value = response.data.performanceData;
        } catch (error) {
          console.error('Error fetching performance data:', error);
          error.value = {
            message: 'Error fetching performance data. Please try again later.',
          };
        } finally {
          loading.value = false;
        }
      };
  
      onMounted(fetchPerformanceData);
  
      return { performanceData, loading, error };
    },
  };
</script>
  