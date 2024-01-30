<template>
    <div>
        <h1>Average Scores</h1>
        <p v-if="averageScores !== null">{{ averageScores }}</p>
        <p v-else>Loading...</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        averageScores: null,
      };
    },
    mounted() {
      this.fetchAverageScores();
    },
    methods: {
      async fetchAverageScores() {
        try {
          const response = await this.$http.get('/api/average-scores');
          this.averageScores = response.data.averageScores;
        } catch (error) {
          console.error('Error fetching average scores:', error);
        }
      },
    },
  };
  </script>