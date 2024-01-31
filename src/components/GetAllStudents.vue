<template>
    <div>
      <h1>Students List</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <ul v-if="students.length">
          <li v-for="student in students" :key="student.id">
            <h2>Student ID: {{ student.id }}</h2>
            <p>School: {{ student.school }}</p>
            <p>Sex: {{ student.sex }}</p>
          </li>
        </ul>
        <p v-else>No students available.</p>
      </div>
      <div v-if="error">{{ error }}</div>
    </div>
</template>
  
<script>
  import { ref, onMounted } from 'vue';
  import { getAllStudents } from '../axios-plugin';
  
  export default {
    setup() {
      const students = ref([]);
      const loading = ref(false);
      const error = ref(null);
  
      const fetchAllStudents = async () => {
        try {
          loading.value = true;
          const response = await getAllStudents();
          students.value = response.data.students;
        } catch (error) {
          console.error('Error fetching students:', error);
          error.value = {
            message: 'Error fetching students. Please try again later.',
          };
        } finally {
          loading.value = false;
        }
      };
  
      onMounted(fetchAllStudents);
  
      return { students, loading, error };
    },
  };
</script>  