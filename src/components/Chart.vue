<template>
<canvas id="myChart"></canvas>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Chart } from "chart.js";

export default defineComponent({
  name: "Chart",
  props: {
    data: null as any,
    options: null as any,
  },
  data() {
    return {
      ctx: null as CanvasRenderingContext2D|null,
    }
  },
  mounted: function() {
    this.ctx = (document.getElementById('myChart') as HTMLCanvasElement).getContext('2d')
    this.createChart()
  },
  methods: {
    createChart: function() {
      var myChart = new Chart(this.ctx, {
        type: 'line',
        data: this.data,
        options: this.options,
      })
    }
  },
  watch: {
    data: function(oldValue, newValue) {
      this.createChart()
    },
    options: function(oldValue, newValue) {
      this.createChart()
    }
  }
})
</script>