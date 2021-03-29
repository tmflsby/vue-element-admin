<template>
  <div class="chart-container">
    <Chart height="100%" width="100%"/>
  </div>
</template>

<script>
import Chart from "@/components/Charts/LineMarker";
export default {
  name: "LineMarker",
  components: { Chart }
}
</script>

<style lang="scss" scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
