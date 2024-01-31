<template>
    <div>
      <h1>Welcome to the Student Performance Dashboard</h1>
      <p>This dashboard provides insights into student performance data.</p>

      <Dashboard />
  
      <div v-if="error">{{ error }}</div>
    </div>
</template>
  
<script>
  import Dashboard from './Dashboard.vue';  
  
  export default {
    components: {
      Dashboard,
    },
    data() {
      return {
        error: null,
      };
    },
  };
</script>
<style></style>