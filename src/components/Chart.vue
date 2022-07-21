<template>
<canvas id="myChart"></canvas>
</template>

<script lang="ts">
import { defineComponent, markRaw } from "vue";
import {Chart, LineElement, LineController, Legend, LinearScale, CategoryScale, PointElement, Title, Tooltip} from 'chart.js';

Chart.register(LineElement, LineController, Legend, LinearScale, CategoryScale, PointElement, Title, Tooltip)

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
    this.chart = markRaw(new Chart(this.ctx, {
      type: 'line',
      data: this.data,
      options: this.options,
    }))
  },
  methods: {
  },
  watch: {
    data: function(newValue, oldValue) {
      this.chart.data = newValue
      this.chart.update()
    },
    options: function(newValue, oldValue) {
      this.chart.options = newValue
      this.chart.update()
    }
  }
})
</script>