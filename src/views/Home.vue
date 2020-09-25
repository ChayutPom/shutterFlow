<template>
  <div><chartpie/>
  <chartcolumn/>
  <chartstatusTask/>
  <numChart/></div>
</template>
<script>
import chartpie from "../components/chartpie.vue";
import chartcolumn from "../components/chartcolumn.vue";
import chartstatusTask from "../components/chartstatusTask.vue";
import numChart from "../components/numChart.vue";

export default {
  components: {    
       chartpie,
       chartcolumn,
       chartstatusTask,
       numChart
    },
}
</script>