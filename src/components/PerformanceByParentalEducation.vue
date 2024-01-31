<template>
    <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div class="relative mx-4 mt-4 flex flex-col gap-4 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none md:flex-row md:items-center">
      <div>
        <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
          Performance by Parental Education Line Chart
        </h6>
      </div>
    </div>
    <div class="pt-6 px-2 pb-0">
      <div id="line-chart"></div>
    </div>
  </div>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import { getPerformanceByParentalEducation } from '../axios-plugin';
import ApexCharts from 'apexcharts';

export default {
  setup() {
    const impactByParentalEducation = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const fetchPerformanceByParentalEducation = async () => {
      try {
        loading.value = true;
        const response = await getPerformanceByParentalEducation();
        impactByParentalEducation.value = response.data.impactByParentalEducation;

        // Update the chart series with the fetched data
        const chartConfig = {
          series: impactByParentalEducation.value.map(item => ({
            name: item.Medu + ' / ' + item.Fedu,
            data: [item.avgG1, item.avgG2, item.avgG3],
          })),
          chart: {
            type: "line",
            height: 240,
            toolbar: {
              show: false,
            },
          },
          title: {
            show: "",
          },
          stroke: {
            lineCap: "round",
            curve: "smooth",
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
          }
        };
        if (chart) {
          chart.updateSeries(chartConfig.series);
        } else {
          chart = new ApexCharts(document.querySelector("#line-chart"), chartConfig);
          chart.render();
        }
      } catch (error) {
        console.error('Error fetching performance data by parental education:', error);
        error.value = {
          message: 'Error fetching performance data. Please try again later.',
        };
      } finally {
        loading.value = false;
      }
    };

    let chart;

    onMounted(fetchPerformanceByParentalEducation);

    return { impactByParentalEducation, loading, error };
  },
};
</script>