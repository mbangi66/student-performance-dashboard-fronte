<template>
  <div class="relative flex flex-col items-center rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div class="relative mx-4 mt-4 flex flex-col gap-4 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none md:flex-row md:items-center">
      <div>
        <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
          School Performance Bar Chart
        </h6>
      </div>
      <div class="mt-4">
        <label class="text-sm font-medium text-gray-600">Select School:</label>
        <div class="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
          <div class="flex divide-x divide-gray-800 row">
            <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-r-none border-r-0"
              :class="{ 'bg-blue-500': selectedSchool === 'GP' }"
              @click="selectSchool('GP')"
              type="button"
            >
              GP
            </button>
            <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-r-none border-r-0 rounded-l-none"
              :class="{ 'bg-blue-500': selectedSchool === 'MS' }"
              @click="selectSchool('MS')"
              type="button"
            >
              MS
            </button>
          </div>
        </div>
        </div>
    </div>
    <div class="pt-6 px-2 pb-0 w-full">
      <div id="bar-chart" style="width: 100%;"></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { getPerformanceBySchoolId } from '../axios-plugin';
import ApexCharts from 'apexcharts';

export default {
  setup() {
    const performanceData = ref([]);
    const loading = ref(false);
    const error = ref(null);
    const schoolIds = ['GP', 'MS'];
    const selectedSchool = ref(schoolIds[0]);
    let numberOfStudents = 10;

    const fetchPerformanceBySchool = async () => {
      try {
        loading.value = true;
        const response = await getPerformanceBySchoolId(selectedSchool.value, { limit: 10 });
        performanceData.value = response.data.performanceData.slice(0, numberOfStudents);;

        renderChart();
      } catch (error) {
        console.error('Error fetching school performance data:', error);
        error.value = {
          message: 'Error fetching school performance data. Please try again later.',
        };
      } finally {
        loading.value = false;
      }
    };

    const renderChart = () => {
      const chartConfig = {
        series: [
          {
            name: 'G1',
            data: performanceData.value.map(performance => performance.G1),
          },
          {
            name: 'G2',
            data: performanceData.value.map(performance => performance.G2),
          },
          {
            name: 'G3',
            data: performanceData.value.map(performance => performance.G3),
          },
        ],
        chart: {
          type: 'line',
          height: 440,
          width: '100%',
          toolbar: {
            show: false,
          },
        },
        title: {
          show: '',
        },
        xaxis: {
          categories: performanceData.value.map((_, index) => `Student ${index + 1}`),
        },
        stroke: {
          lineCap: 'round',
          curve: 'smooth',
        },
        grid: {
          show: true,
          borderColor: '#dddddd',
          strokeDashArray: 5,
          xaxis: {
            lines: {
              show: true,
            },
          },
          padding: {
            top: 5,
            right: 40,
          },
        },
        fill: {
          opacity: 0.8,
        },
        tooltip: {
          theme: 'dark',
        },
      };

      const chart = new ApexCharts(document.querySelector('#bar-chart'), chartConfig);
      chart.render();
    };

    const selectSchool = (school) => {
      selectedSchool.value = school;
      fetchPerformanceBySchool();
    };

    const handleResize = () => {
      if (window.innerWidth < 800) {
        numberOfStudents = 5;
      } else {
        numberOfStudents = 10;
      }

      fetchPerformanceBySchool();
    };

    onMounted(() => {
      fetchPerformanceBySchool();
      window.addEventListener('resize', handleResize);
    });

    watch(() => selectedSchool.value, fetchPerformanceBySchool);

    return { performanceData, loading, error, schoolIds, selectedSchool, selectSchool };
  },
};
</script>
