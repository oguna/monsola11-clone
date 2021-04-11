<template>
  <svg
    id="map"
    :width="width"
    :height="height"
    @wheel="scroll"
    @mousedown="dragstart"
    @mousemove="drag"
  >
    <g :transform="transform">
      <g>
        <path :d="e" v-for="(e, i) in d" :key="i" />
      </g>
      <g>
        <circle
          v-for="e in amedasList"
          :key="e.id"
          :cx="e.long"
          :cy="e.lat"
          r="0.1"
          @click.stop="amedas = e.id"
          :class="{ active: amedas === e.id }"
        />
      </g>
    </g>
  </svg>
  <div v-if="getSelectedAmedas">
    <table>
      <tr>
        <th>地点</th>
        <td>{{ getSelectedAmedas.name }}</td>
      </tr>
      <tr>
        <th>緯度</th>
        <td>{{ getSelectedAmedas.lat }} °</td>
      </tr>
      <tr>
        <th>経度</th>
        <td>{{ getSelectedAmedas.long }} °</td>
      </tr>
      <tr>
        <th>標高</th>
        <td>{{ getSelectedAmedas.alti }} m</td>
      </tr>
    </table>
    <router-link :to="{ name: 'home' }">
      <button>この地点のグラフを<br />表示</button>
    </router-link>
  </div>
  <br />
  ※国土地理院発行の地球地図日本のデータを利用しています。
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Amedas, Area, NationWide } from "../types";
import { parseAmedasFile } from "../utils";

export default defineComponent({
  props: {},
  mounted() {
    const base = "/monsola11-clone";
    fetch(base + "/data/point_amedas.txt")
      .then((res) => res.text())
      .then((text) => (this.amedasList = parseAmedasFile(text)))
      .then(() => {
        fetch("/monsola11-clone/data/japan.geojson")
          .then((res) => res.json())
          .then((res) => {
            this.createMap(res);
          });
      });
  },
  data() {
    return {
      areaList: null as Area[] | null,
      nationwidePos: null as NationWide | null,
      amedasList: [] as Amedas[] | null,
      d: null as string[] | null,
      scale: 20,
      x: 138,
      y: 36,
      startX: null as null | number,
      startY: null as null | number,
      mouseX: null as null | number,
      mouseY: null as null | number,
      selectedAmedas: null as null | number,
      width: 800,
      height: 600,
    };
  },
  methods: {
    createMap: function (res: any) {
      const a = [];
      for (let i = 0; i < res.features.length; i++) {
        const b = [];
        if (res.features[i].geometry.type === "MultiPolygon") {
          for (
            let j = 0;
            j < res.features[i].geometry.coordinates.length;
            j++
          ) {
            for (
              let k = 0;
              k < res.features[i].geometry.coordinates[j].length;
              k++
            ) {
              const coords = res.features[i].geometry.coordinates[j][k];
              const c = [];
              for (let e of coords) {
                c.push(e[0] + "," + e[1]);
              }
              b.push("M" + c.join("L") + "Z");
            }
          }
        } else if (res.features[i].geometry.type === "Polygon") {
          for (
            let j = 0;
            j < res.features[i].geometry.coordinates.length;
            j++
          ) {
            const coords = res.features[i].geometry.coordinates[j];
            const c = [];
            for (let e of coords) {
              c.push(e[0] + "," + e[1]);
            }
            b.push("M" + c.join("L") + "Z");
          }
        }
        a.push(b.join(""));
      }
      this.d = a;
    },
    scroll(e: WheelEvent) {
      this.scale -= (e.deltaY / 150) * 2;
      if (this.scale < 10) {
        this.scale = 10;
      }
      if (this.scale > 100) {
        this.scale = 100;
      }
      e.preventDefault();
    },
    drag(e: MouseEvent) {
      if (e.buttons === 1) {
        this.x = this.startX! + -(e.x - this.mouseX!) / this.scale;
        this.y = this.startY! + (e.y - this.mouseY!) / this.scale;
      }
    },
    dragstart(e: MouseEvent) {
      if (e.buttons === 1) {
        this.mouseX = e.x;
        this.mouseY = e.y;
        this.startX = this.x;
        this.startY = this.y;
      }
    },
  },
  computed: {
    transform: function (): string {
      const t1 = `translate(${this.width / 2},${this.height / 2})`;
      const t2 = `scale(${this.scale}, -${this.scale})`;
      const t3 = `translate(-${this.x}, -${this.y})`;
      return t1 + " " + t2 + " " + t3;
    },
    amedas: {
      get(): number {
        return this.$store.state.amedas;
      },
      set(value: number) {
        this.$store.commit("setAmedas", value);
      },
    },
    getSelectedAmedas(): Amedas | null {
      if (this.amedasList == null) {
        return null;
      }
      if (this.amedas == null) {
        return null;
      }
      return this.amedasList.find((e) => e.id == this.amedas)!;
    },
  },
});
</script>

<style scoped>
#map {
  background-color: #cfffff;
}
#map path {
  stroke: green;
  fill: greenyellow;
  stroke-width: 0.01;
}
#map circle {
  stroke: orange;
  fill: orange;
  fill-opacity: 0.5;
  stroke-width: 0.01;
}
#map circle.active {
  fill: red;
}
</style>