<template>
  <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div class="relative mx-4 mt-4 flex flex-col gap-4 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none md:flex-row md:items-center">
      <div>
        <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
          Average Scores Pie Chart
        </h6>
      </div>
    </div>
    <div class="py-6 mt-4 flex place-items-center px-2">
      <div id="pie-chart"></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getAverageScores } from '../axios-plugin';
import ApexCharts from 'apexcharts';

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

          renderPieChart(response.data.averageScores);
        } catch (error) {
          console.error('Error fetching average scores:', error);
          error.value = {
            message: 'Error fetching average scores. Please try again later.',
          };
        } finally {
          loading.value = false;
        }
      };

      const renderPieChart = (data) => {
        const chartConfig = {
          series: [
          parseFloat(data.avgG1.toFixed(2)),
          parseFloat(data.avgG2.toFixed(2)),
          parseFloat(data.avgG3.toFixed(2)),
         ],
          chart: {
            type: 'pie',
            toolbar: {
              show: false,
            },
          },
          title: {
            show: '',
          },
          dataLabels: {
            enabled: true,
          },
          colors: ['#020617', '#ff8f00', '#00897b'],
          legend: {
            show: false,
          },
        };

        const chart = new ApexCharts(document.querySelector('#pie-chart'), chartConfig);
        chart.render();
      };

      onMounted(fetchAverageScores);

      return { averageScores, loading, error };
    },
  };
</script>