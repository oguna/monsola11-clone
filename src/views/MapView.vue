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
      <g fill="#e74c3c" fill-opacity="50%">
        <rect
          v-for="e in amedasCells"
          :x="e[1]"
          :y="e[0]"
          width="0.0083333"
          height="0.0125"
           />
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
import {feature} from 'topojson-client';

function readMaptable(ab: ArrayBuffer): Uint32Array[] {
  // parse
  const dv = new DataView(ab)
  let offset = 0
  const firstMeshcodeListSize = dv.getUint32(offset, true)
  offset += 4
  const firstMeshcodeList = new Uint16Array(ab, offset, firstMeshcodeListSize)
  offset += 2 * firstMeshcodeListSize
  const firstMeshcodeCountsSize = dv.getUint32(offset, true)
  offset += 4
  const firstMeshcodeCounts = new Uint16Array(ab, offset, firstMeshcodeCountsSize)
  offset += 2 * firstMeshcodeCountsSize
  const shortMeshcodesSize = dv.getUint32(offset, true)
  offset += 4
  const shortMeshcodes = new Uint16Array(ab, offset, shortMeshcodesSize)
  offset += 2 * shortMeshcodesSize
  const amedascodesSize = dv.getUint32(offset, true) 
  offset += 4
  const upperAmedascodes = new Uint8Array(ab, offset, amedascodesSize)
  offset += amedascodesSize
  const lowerAmedascodes = new Uint16Array(ab.slice(offset), 0, amedascodesSize)
  offset += 2 * amedascodesSize
  if (offset != ab.byteLength) {
    throw Error()
  }
  // rebuild
  const meshcodes = new Uint32Array(shortMeshcodes.length)
  let meshcodeIndex = 0
  for (let i=0; i<firstMeshcodeList.length; i++) {
    for (let j=0; j<firstMeshcodeCounts[i]; j++) {
      meshcodes[meshcodeIndex] = firstMeshcodeList[i] * 10000
      meshcodeIndex++
    }
  }
  for (let i=0; i<shortMeshcodes.length; i++) {
    meshcodes[i] += shortMeshcodes[i]
  }
  const amedascodes = new Uint32Array(lowerAmedascodes.length)
  for (let i=0; i<amedascodes.length; i++) {
    amedascodes[i] = (upperAmedascodes[i]<<16)+ lowerAmedascodes[i]
  }
  // return values
  return [meshcodes, amedascodes]
}

export default defineComponent({
  props: {},
  mounted() {
    const base = "/monsola11-clone";
    fetch(base + "/data/point_amedas.txt")
      .then((res) => res.text())
      .then((text) => (this.amedasList = parseAmedasFile(text)))
      .then(() => {
        fetch(base + "/data/japan.topojson")
          .then((res) => res.json())
          .then((res) => {
            this.createMap(res);
          });
      });
    fetch(base + "/data/maptable")
    .then(res => res.arrayBuffer())
    .then(ab => {
      const [meshcodes, amedascodes] = readMaptable(ab)
      this.meshcodes = meshcodes
      this.amedascodes = amedascodes
    })
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
      meshcodes: null as null | Uint32Array,
      amedascodes: null as null | Uint32Array,
      amedasCells: [] as number[][],
    };
  },
  methods: {
    createMap: function (res: any) {
      res = feature(res, res.objects.japan)
      const a: string[] = [];
      for (let i = 0; i < res.features.length; i++) {
        const b: string[] = [];
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
              const c: string[] = [];
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
            const c: string[] = [];
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
    calcPos(meshcode: number): number[] {
      const first = (meshcode / 10000)|0
      const second = ((meshcode % 10000)/100)|0
      const third = meshcode % 100
      const latitude = (((first/100)|0) * 80 + ((second/10)|0)*10 + (third/10)|0)*30/3600
      const longitude = (((first%100)|0) * 80 + ((second%10)|0)*10 + (third%10)|0)*45/3600+100
      return [latitude, longitude]
    }
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
  watch: {
    amedas: function(newValue) {
      const r = [] as number[][]
      for (let i = 0; i < this.meshcodes!.length; i++) {
        if (this.amedascodes![i] === newValue) {
          const mc = this.meshcodes![i]
          r.push(this.calcPos(mc))
        }
      }
      this.amedasCells = r
    }
  }
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