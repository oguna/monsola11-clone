<template>
  <h2>地点指定</h2>
  エリア名
  <select v-model="selectedArea">
    <option v-for="i in areaList" :key="i.id" :value="i.id">{{ i.name }}</option>
  </select>
  <br />
  地点名
  <select v-model="selectedAmedas">
    <option v-for="i in filteredPoints" :key="i.id" :value="i.id">{{ i.name }}</option>
  </select>

  <h2>表示データ指定</h2>
  <input type="radio" id="month" value="Month" v-model="picked" />
  <label for="month">月指定</label>
  <select v-model="optionMonth">
    <option v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]" :key="i">
      {{ i }}
    </option>
  </select>
  <br />
  <input type="radio" id="angle" value="Angle" v-model="picked" />
  <label for="angle">角度指定</label>
  <br />
  <input type="radio" id="year" value="Year" v-model="picked" />
  <label for="year">年変動</label>
  <br />

  <h2>角度指定</h2>

  <input type="radio" id="tilt" value="Tilt" v-model="angleMode" />
  <label for="tilt">傾斜角指定</label>
  <select v-model="valueTilt">
    <option v-for="i in [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]" :key="i">
      {{ i }}
    </option>
  </select>
  度
  <br />
  <input type="radio" id="azimuth" value="Azimuth" v-model="angleMode" />
  <label for="azimuth">方位角指定</label>
  <select v-model="valueAzimuth">
    <option
      v-for="i in [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180]"
      :key="i"
    >
      {{ i }}
    </option>
  </select>
  度
  <br />
  <input
    type="radio"
    id="tiltAzimuth"
    value="TiltAzimuth"
    v-model="angleMode"
  />
  <label for="tiltAzimuth">任意の指定</label>
  <br />
  傾斜角<select v-model="valueTilt">
    <option v-for="i in [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]" :key="i">
      {{ i }}
    </option>
  </select>度
  <br />
  方位角<select v-model="valueAzimuth">
    <option
      v-for="i in [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180]"
      :key="i"
    >
      {{ i }}
    </option>
  </select>
  度
  <br />
  <input type="radio" id="bestAngle" value="BestAngle" v-model="angleMode" />
  <label for="bestAngle">最適傾斜角</label>
  <br />
  <input
    type="radio"
    id="everyMonthBest"
    value="EveryMonthBest"
    v-model="angleMode"
  />
  <label for="everyMonthBest">各月の最適傾斜角における日射量</label>
  <br />
  <input type="radio" id="yearBest" value="YearBest" v-model="angleMode" />
  <label for="yearBest">年間最適傾斜角における日射量</label>
  <br />
  <Chart v-if="info != null" :data="chartData" :options="chartOptions"></Chart>
  <router-link :to="'/table/m'+selectedAmedas">データ一覧表を表示</router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Chart from "./Chart.vue";
import {
  parseAmedasFile,
  parseDataFile,
  parseNationwideFile,
  parseAreaFile,
} from "../utils";
import { DataFile, Amedas, NationWide, Area } from "../types";

export default defineComponent({
  name: "Home",
  props: {},
  components: {
    Chart,
  },
  data() {
    return {
      picked: "Angle",
      angleMode: "Tilt",
      selectedArea: 11,
      selectedAmedas: 11001,
      areaList: null as Area[] | null,
      nationwidePos: null as NationWide | null,
      amedasList: null as Amedas[] | null,
      info: null as DataFile | null,
      optionMonth: 1,
      valueTilt: "0",
      valueAzimuth: "0",
    };
  },
  mounted: function () {
    // 全国地図の座標データを読み込む
    fetch("/data/code_map1.txt")
      .then((res) => res.text())
      .then((text) => parseNationwideFile(text));
    // エリアのデータを読み込む
    fetch("/data/code_map3.txt")
      .then((res) => res.text())
      .then((text) => (this.areaList = parseAreaFile(text)));
    // 地点のデータを読み込む
    fetch("/data/point_amedas.txt")
      .then((res) => res.text())
      .then((text) => (this.amedasList = parseAmedasFile(text)));
    // ある地点のデータを読み込む
    fetch("/data/monsola11/m11001")
      .then((res) => res.text())
      .then((text) => (this.info = parseDataFile(text)));
  },
  computed: {
    filteredPoints: function(): Amedas[] {
      if (this.amedasList == null) {
        return []
      } 
      return this.amedasList!.filter(v=>v.area===this.selectedArea)
    },
    chartData: function (): any {
      const degreeLabels = "0° 10° 20° 30° 40° 50° 60° 70° 80° 90°".split(" ");
      const monthLabels = "1月 2月 3月 4月 5月 6月 7月 8月 9月 10月 11月 12月 平均 冬 春 夏 秋 ".split(
        " "
      );
      const azimuthLabels = "0度 15度 30度 45度 60度 75度 90度 105度 120度 135度 150度 165度 180度".split(
        " "
      );
      const markers = [
        {
          borderColor: "#43BEE5",
          pointStyle: "circle",
        },
        {
          borderColor: "#0B92D9",
          backgroundColor: "#0B92D9",
          pointStyle: "circle",
        },
        {
          borderColor: "#2061D5",
          pointStyle: "cross",
        },
        {
          borderColor: "#2121CD",
          pointStyle: "triangle",
        },
        {
          borderColor: "#C866D1",
          pointStyle: "triangle",
        },
        {
          borderColor: "#ED02B3",
          backgroundColor: "#ED02B3",
          pointStyle: "triangle",
        },
        {
          borderColor: "#FF211F",
          pointStyle: "rect",
        },
        {
          borderColor: "#FF9D00",
          backgroundColor: "#FF9D00",
          pointStyle: "rect",
        },
        {
          borderColor: "#E0CC58",
          pointStyle: "rect",
        },
        {
          borderColor: "#A7AC00",
          backgroundColor: "#A7AC00",
          pointStyle: "rect",
        },
        {
          borderColor: "#AEE92C",
          pointStyle: "rect",
        },
        {
          borderColor: "#62D911",
          backgroundColor: "#62D911",
          pointStyle: "rect",
        },
        {
          borderColor: "#5EA829",
          pointStyle: "rect",
        },
      ];
      if (this.picked === "Month") {
        const a: number[][] = [];
        for (let i = 0; i < 13; i++) {
          const b: number[] = [];
          b.push(this.info!.data[0][this.optionMonth - 1]);
          for (let j = 0; j < 9; j++) {
            b.push(this.info!.data[i * 9 + j + 3][this.optionMonth - 1]);
          }
          a.push(b);
        }
        const datasets = [];
        for (let i = 0; i < 13; i++) {
          datasets.push({
            label: azimuthLabels[i],
            backgroundColor: markers[i].backgroundColor,
            borderColor: markers[i].borderColor,
            fill: false,
            lineTension: 0,
            data: a[i],
          });
        }
        return {
          labels: degreeLabels,
          datasets: datasets,
        };
      } else if (this.picked === "Year") {
        const datasets: any[] = [
          {
            label: "平均値",
            backgroundColor: "#00FF00",
            borderColor: "#00FF00",
            fill: false,
            lineTension: 0,
            data: this.info!.data[0],
          },
          {
            label: "最大値",
            borderColor: "#FF0000",
            fill: false,
            lineTension: 0,
            data: this.info!.data[1],
          },
          {
            label: "最小値",
            borderColor: "#0000FF",
            fill: false,
            lineTension: 0,
            data: this.info!.data[2],
          },
        ];
        return {
          datasets: datasets,
          labels: monthLabels,
        };
      } else if (this.picked === "Angle") {
        if (this.angleMode === "BestAngle") {
          const datasets: any[] = [
            {
              label: "最適傾斜角グラフ",
              backgroundColor: "#0000FF",
              borderColor: "#0000FF",
              fill: false,
              lineTension: 0,
              data: this.info!.data[120],
            },
          ];
          return {
            datasets: datasets,
            labels: monthLabels,
          };
        } else if (this.angleMode === "EveryMonthBest") {
          const datasets: any[] = [
            {
              label: "最適傾斜角における日射量",
              borderColor: "#0000FF",
              fill: false,
              lineTension: 0,
              data: this.info!.data[121],
            },
          ];
          return {
            datasets: datasets,
            labels: monthLabels,
          };
        } else if (this.angleMode === "YearBest") {
          const datasets: any[] = [
            {
              label: "年間最適傾斜角における日射量",
              borderColor: "#0000FF",
              fill: false,
              lineTension: 0,
              data: this.info!.data[122],
            },
          ];
          return {
            datasets: datasets,
            labels: monthLabels,
          };
        } else if (this.angleMode === "Tilt") {
          const index = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90].indexOf(
            Number.parseInt(this.valueTilt)
          );
          if (index === 0) {
            const datasets = [];
            datasets.push({
              label: azimuthLabels[0],
              backgroundColor: markers[0].backgroundColor,
              borderColor: markers[0].borderColor,
              fill: false,
              lineTension: 0,
              data: this.info!.data[0],
            });
            return {
              labels: monthLabels,
              datasets: datasets,
            };
          }
          const datasets = [];
          for (let i = 0; i < 12; i++) {
            datasets.push({
              label: azimuthLabels[i],
              backgroundColor: markers[i].backgroundColor,
              borderColor: markers[i].borderColor,
              fill: false,
              lineTension: 0,
              data: this.info!.data[i * 9 + 2 + index],
            });
          }
          return {
            labels: monthLabels,
            datasets: datasets,
          };
        } else if (this.angleMode === "Azimuth") {
          const index = [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180].indexOf(
            Number.parseInt(this.valueAzimuth)
          );
          const datasets = [];
          for (let i = 0; i < 9; i++) {
            datasets.push({
              label: degreeLabels[i+1],
              backgroundColor: markers[i].backgroundColor,
              borderColor: markers[i].borderColor,
              fill: false,
              lineTension: 0,
              data: this.info!.data[i + 3 + index*9],
            });
          }
          return {
            labels: monthLabels,
            datasets: datasets,
          };
        } else if (this.angleMode === "TiltAzimuth") {
          const tiltIndex = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90].indexOf(
            Number.parseInt(this.valueTilt)
          );
          const azimuthIndex = [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180].indexOf(
            Number.parseInt(this.valueAzimuth)
          );
          let index: number
         if (tiltIndex === 0) {
           index = 0
          } else {
            index = tiltIndex + 2 + azimuthIndex*9
          }
          const datasets = [];
            datasets.push({
              label: `傾斜角${this.valueTilt}度 方位角${this.valueAzimuth}度`,
              borderColor: markers[0].borderColor,
              fill: false,
              lineTension: 0,
              data: this.info!.data[index],
            });
          return {
            labels: monthLabels,
            datasets: datasets,
          };
        }
        return null;
      } else {
        throw "unexpected reach";
      }
    },
    chartOptions: function (): any {
      let title: String;
      let xlabel: String;
      let ylabel: String;
      let max: Number;
      if (this.picked === "Month") {
        title = "月別の日射量グラフ " + this.optionMonth + "月";
        xlabel = "傾斜角";
        ylabel = "日射量(kWh/m2)";
        max = 8.0;
      } else if (this.picked === "Year") {
        title = "年変動グラフ";
        xlabel = "月・季";
        ylabel = "日射量(kWh/m2)";
        max = 8.0;
      } else if (this.picked === "Angle") {
        if (this.angleMode === "Tilt") {
          title = "斜面日射量グラフ 傾斜角 " + this.valueTilt + "度";
          xlabel = "月・季";
          ylabel = "日射量(kWh/m2)";
          max = 8.0;
        } else if (this.angleMode === "Azimuth") {
          title = "斜面日射量グラフ 方位角 " + this.valueAzimuth + "度";
          xlabel = "月・季";
          ylabel = "日射量(kWh/m2)";
          max = 8.0;
        } else if (this.angleMode === "TiltAzimuth") {
          title =
            "斜面日射量グラフ 傾斜角 " +
            this.valueTilt +
            "度 方位角 " +
            this.valueAzimuth +
            "度";
          xlabel = "月・季";
          ylabel = "日射量(kWh/m2)";
          max = 8.0;
        } else if (this.angleMode === "BestAngle") {
          title = "最適傾斜角グラフ";
          xlabel = "月・季";
          ylabel = "最適傾斜角(°)";
          max = 90;
        } else if (this.angleMode === "EveryMonthBest") {
          title = "最適傾斜角における日射量グラフ";
          xlabel = "月・季";
          ylabel = "日射量(kWh/m2)";
          max = 8.0;
        } else if (this.angleMode === "YearBest") {
          title = "年間最適傾斜角における日射量グラフ";
          xlabel = "月・季";
          ylabel = "日射量(kWh/m2)";
          max = 8.0;
        } else {
          throw "unexpected reach";
        }
      } else {
        throw "unexpected reach";
      }
      return {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: title + ' @' + this.info!.name,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: xlabel,
              },
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: ylabel,
              },
              ticks: {
                min: 0.0,
                max: max,
              },
            },
          ],
        },
      };
    },
  },
  watch: {
    selectedArea: function(oldValue, newValue) {
      this.selectedAmedas = this.filteredPoints[0].id
    },
    selectedAmedas: function(oldValue, newValue) {
    fetch("/data/monsola11/m"+newValue)
      .then((res) => res.text())
      .then((text) => (this.info = parseDataFile(text)));
    }
  }
});
</script>
