<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { onMounted } from "vue";

onMounted(async () => {
  const { Tooltip, initTE } = await import("tw-elements");
  initTE({ Tooltip });
});

export default {
  name: 'App',
};

</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
