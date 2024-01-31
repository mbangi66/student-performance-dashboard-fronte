import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getAverageScores = () => apiService.get('/api/average-scores');
export const getSchools = () => apiService.get('/api/schools');
export const getStudentsBySchool = (schoolId) => apiService.get(`/api/students/by-school/${schoolId}`);
export const getPerformanceByGender = () => apiService.get('/api/performance-by-gender');
export const getAllStudents = () => apiService.get('/api/students');
export const createStudent = (studentData) => apiService.post('/api/students', studentData);
export const getStudentsByGender = (gender) => apiService.get(`/api/students/by-gender/${gender}`);
export const getPerformanceByStudentId = (studentId) => apiService.get(`/api/performance/${studentId}`);
export const getPerformanceBySchoolId = (schoolId) => apiService.get(`/api/schools/${schoolId}/performance`);
export const filterStudents = (filterCriteria) => apiService.post('/api/students/filter', filterCriteria);
export const updateStudentDetails = (studentId, updatedDetails) => apiService.patch(`/api/students/${studentId}`, updatedDetails);
export const deleteStudent = (studentId) => apiService.delete(`/api/students/${studentId}`);
export const getScoreDistributions = () => apiService.get('/api/score-distributions');
export const getPerformanceByParentalEducation = () => apiService.get('/api/performance-by-parental-education');

export default apiService;
