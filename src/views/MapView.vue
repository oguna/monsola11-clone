<template>
  <svg id="map"></svg>
  <div v-if="getSelectedAmedas">
  <table>
    <tr><th>地点</th><td>{{getSelectedAmedas.name}}</td></tr>
    <tr><th>緯度</th><td>{{getSelectedAmedas.lat}} °</td></tr>
    <tr><th>経度</th><td>{{getSelectedAmedas.long}} °</td></tr>
    <tr><th>標高</th><td>{{getSelectedAmedas.alti}} m</td></tr>
  </table>
  <router-link :to="{name:'home', query:{id:getSelectedAmedas.id}}">
  <button>この地点のグラフを<br>表示</button>
  </router-link>
  <br>
  ※国土地理院発行の地球地図日本のデータを利用しています。
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import * as d3 from "d3";
import { Amedas, Area, NationWide } from "../types";
import { parseAmedasFile } from "../utils";

export default defineComponent({
  name: "MapView",
  props: {},
  mounted() {
      const base = "/monsola11-clone";
      fetch(base + "/data/point_amedas.txt")
        .then((res) => res.text())
        .then((text) => (this.amedasList = parseAmedasFile(text)))
        .then(()=>{
      fetch("/monsola11-clone/data/japan.geojson")
      .then((res) => res.json())
      .then((res) => {
      this.createMap(res);
      })
      });
  },
  data() {
    return {
      areaList: null as Area[] | null,
      nationwidePos: null as NationWide | null,
      amedasList: [] as Amedas[] | null,
      selectedAmedas: null as Number|null,
    };
  },
  computed: {
    getSelectedAmedas(): Amedas|null {
      if (this.amedasList == null) {
        return null
      }
      if (this.selectedAmedas == null) {
        return null
      }
      return this.amedasList.find((e) => e.id == this.selectedAmedas)!
    },
  },
  methods: {
    setAmedas(id: number) {
      this.selectedAmedas = id
    },
    loadData() {
    },
    createMap: function (json: any) {
      const width = 600;
      const height = 600;

      const zoom = d3.zoom().scaleExtent([1, 8]).on("zoom", zoomed);

      const projection = d3
        .geoMercator() 
        .center([137, 38])
        .scale(1600)
        .translate([width / 2, height / 2]);

      const path = d3.geoPath().projection(projection);
      const svg = d3
        .select("#map")
        .attr("width", width)
        .attr("height", height);
      const g = svg.append("g");
      g.append("g")
        .selectAll("path")
        .data(json.features)
        .enter()
        .append("path")
        .attr("d", path);

      svg.call(zoom);

      const g2 = g.append('g')
      for (const e of this.amedasList!) {
        var coordinate = projection([e.long, e.lat])
          g2.append("circle")
          .attr("cx", coordinate[0])
          .attr("cy", coordinate[1])
          .attr("r", 2)
          .attr("amedas", e.id)
          .on('mousedown.log', (d: any) => {
            this.setAmedas(d.target.attributes.amedas.value)
          })
      }

      function zoomed(event: any) {
        const { transform } = event;
        g.attr("transform", transform);
        g.attr("stroke-width", 1 / transform.k);
      }
    },
  },
});
</script>

<style scoped>
#map {
  background-color: #CFFFFF;
}
#map:deep(circle) {
  fill-opacity: 0.5;
  stroke: orange;
  fill: orange;
}
#map:deep(path) {
  fill: green;
}
</style>