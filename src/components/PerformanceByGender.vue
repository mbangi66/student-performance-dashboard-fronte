<template>
  <div>
    <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div class="relative mx-4 mt-4 flex flex-col gap-4 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none md:flex-row md:items-center">
        <div>
          <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
            Performance By Gender Chart
          </h6>
        </div>
      </div>
      <div class="pt-6 px-2 pb-0">
        <div id="performance-gender-chart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getPerformanceByGender } from '../axios-plugin';
import ApexCharts from 'apexcharts';

export default {
  setup() {
    const performanceByGender = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const fetchPerformanceByGender = async () => {
      try {
        loading.value = true;
        const response = await getPerformanceByGender();
        performanceByGender.value = response.data.performanceByGender || [];

        // Check if performanceByGender is an array before mapping
        if (Array.isArray(performanceByGender.value)) {
          // Chart Configuration
          const chartConfig = {
            series: [
              {
                name: "Average G1",
                data: performanceByGender.value.map(performance => performance.avgG1.toFixed(2)),
              },
              {
                name: "Average G2",
                data: performanceByGender.value.map(performance => performance.avgG2.toFixed(2)),
              },
              {
                name: "Average G3",
                data: performanceByGender.value.map(performance => performance.avgG3.toFixed(2)),
              },
            ],
            chart: {
              type: "bar",
              height: 240,
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              lineCap: "round",
              curve: "smooth",
            },
            markers: {
              size: 0,
            },
            xaxis: {
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              labels: {
                style: {
                  colors: "#616161",
                  fontSize: "12px",
                  fontFamily: "inherit",
                  fontWeight: 400,
                },
              },
              categories: [
                "Male",
                "Female",
              ],
            },
            yaxis: {
              labels: {
                style: {
                  colors: "#616161",
                  fontSize: "12px",
                  fontFamily: "inherit",
                  fontWeight: 400,
                },
              },
            },
            grid: {
              show: true,
              borderColor: "#dddddd",
              strokeDashArray: 5,
              xaxis: {
                lines: {
                  show: true,
                },
              },
              padding: {
                top: 5,
                right: 20,
              },
            },
            fill: {
              opacity: 0.8,
            },
            tooltip: {
              theme: "dark",
            },
          };

          // Render Chart
          const chart = new ApexCharts(document.querySelector("#performance-gender-chart"), chartConfig);
          chart.render();
        } else {
          console.error('Invalid performance data format:', performanceByGender.value);
          error.value = {
            message: 'Invalid performance data format. Please check the API response.',
          };
        }
      } catch (err) {
        console.error('Error fetching performance data by gender:', err);
        error.value = {
          message: 'Error fetching performance data. Please try again later.',
        };
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchPerformanceByGender);

    return { performanceByGender, loading, error };
  },
};
</script>
