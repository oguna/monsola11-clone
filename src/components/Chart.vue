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
      chart: null as Chart|null,
    }
  },
  mounted: function() {
    this.ctx = (document.getElementById('myChart') as HTMLCanvasElement).getContext('2d')
    this.chart = new Chart(this.ctx, {
      type: 'line',
      data: this.data,
      options: this.options,
    })
  },
  methods: {
  },
  watch: {
    data: function(oldValue, newValue) {
      this.chart.data = newValue
      this.chart.update()
    },
    options: function(oldValue, newValue) {
      this.chart.options = newValue
      this.chart.update()
    }
  }
})
</script>