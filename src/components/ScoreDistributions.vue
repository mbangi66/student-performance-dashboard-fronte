<template>
    <div>
      <h1>Score Distributions</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-if="scoreDistributions.length">
          <ul>
            <li v-for="(distribution, index) in scoreDistributions" :key="index">
              <h2>Score Distribution</h2>
              <p>G1: {{ distribution.G1 }}</p>
              <p>G2: {{ distribution.G2 }}</p>
              <p>G3: {{ distribution.G3 }}</p>
            </li>
          </ul>
        </div>
        <p v-else>No score distributions available.</p>
      </div>
      <div v-if="error">{{ error }}</div>
    </div>
</template>
  
<script>
  import { ref, onMounted } from 'vue';
  import { getScoreDistributions } from '../axios-plugin';
  
  export default {
    setup() {
      const scoreDistributions = ref([]);
      const loading = ref(false);
      const error = ref(null);
  
      const fetchScoreDistributions = async () => {
        try {
          loading.value = true;
          const response = await getScoreDistributions();
          scoreDistributions.value = response.data.scoreDistributions;
        } catch (error) {
          console.error('Error fetching score distributions:', error);
          error.value = {
            message: 'Error fetching score distributions. Please try again later.',
          };
        } finally {
          loading.value = false;
        }
      };
  
      onMounted(fetchScoreDistributions);
  
      return { scoreDistributions, loading, error };
    },
  };
</script>  