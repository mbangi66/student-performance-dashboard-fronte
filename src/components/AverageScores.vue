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
 import AxiosPlugin from '../axios-plugin.js';
 const self = this;
  export default {
    data() {
      return {
        averageScores: null,
        loading: false,
        error: null,
      };
    },
    mounted() {
      this.fetchAverageScores();
    },
    methods: {
      async fetchAverageScores() {
        try {
          this.loading = true;
          if (!this.$http) {
            console.error('$http is not defined');
            return;
          }
          const response = await this.$http.get('/api/average-scores');
          this.averageScores = response.data.averageScores;
        } catch (error) {
          console.error('Error fetching average scores:', error);
          this.error = {
            message: 'Error fetching average scores. Please try again later.',
          };
        } finally {
          this.loading = false;
        }
      },
    },
  };
</script>
  
  