<template>
  <div>
    <h1 v-if="averageScores">Average Scores</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <p v-if="averageScores">
        Average G1: {{ averageScores.avgG1.toFixed(2) }}
      </p>
      <p v-if="averageScores">
        Average G2: {{ averageScores.avgG2.toFixed(2) }}
      </p>
      <p v-if="averageScores">
        Average G3: {{ averageScores.avgG3.toFixed(2) }}
      </p>
    </div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getAverageScores } from '../axios-plugin';

export default {
  setup() {
    const averageScores = ref(null);
    const loading = ref(false);
    const error = ref(null);

    const fetchAverageScores = async () => {
      try {
        loading.value = true;
        const response = await getAverageScores();
        averageScores.value = response.data.averageScores;
      } catch (error) {
        console.error('Error fetching average scores:', error);
        error.value = {
          message: 'Error fetching average scores. Please try again later.',
        };
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchAverageScores);

    return { averageScores, loading, error };
  },
};
</script>
