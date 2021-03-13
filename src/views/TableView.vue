<template>
  <h1>月平均斜面日射量 (kWh/㎡・day)</h1>
  {{ caption }}
  <table v-if="info">
    <tr>
      <th>方位角</th>
      <th>傾斜角</th>
      <th>1月</th>
      <th>2月</th>
      <th>3月</th>
      <th>4月</th>
      <th>5月</th>
      <th>6月</th>
      <th>7月</th>
      <th>8月</th>
      <th>9月</th>
      <th>10月</th>
      <th>11月</th>
      <th>12月</th>
      <th>年<br />1-12月</th>
      <th>冬<br />12-2月</th>
      <th>春<br />2-5月</th>
      <th>夏<br />6-8月</th>
      <th>秋<br />9-11月</th>
    </tr>
    <tr>
      <td rowspan="3">水平面</td>
      <td>平均値<br />(C)</td>
      <td v-for="e of info.data[0]" :key="e">{{ e }}</td>
    </tr>
    <tr>
      <td>最大値</td>
      <td v-for="e of info.data[1]" :key="e">{{ e }}</td>
    </tr>
    <tr>
      <td>最小値</td>
      <td v-for="e of info.data[2]" :key="e">{{ e }}</td>
    </tr>
    <tr v-for="i in 117" :key="i">
      <td v-if="(i - 1) % 9 == 0" rowspan="9">
        {{ Math.floor((i - 1) / 9) * 15 }}°
      </td>
      <td>{{ (((i - 1) % 9) + 1) * 10 }}°</td>
      <td v-for="j in 17" :key="j">{{ info.data[i + 2][j - 1].toFixed(2) }}</td>
    </tr>
    <tr>
      <td colspan="2">月別最適傾斜角</td>
      <td v-for="i in 12" :key="i">{{ info.data[120][i - 1].toFixed(1) }}</td>
      <td>＊<br />{{ info.data[120][12].toFixed(1) }}</td>
      <td>＊＊<br />{{ info.data[120][13].toFixed(1) }}</td>
      <td>＊＊<br />{{ info.data[120][14].toFixed(1) }}</td>
      <td>＊＊<br />{{ info.data[120][15].toFixed(1) }}</td>
      <td>＊＊<br />{{ info.data[120][16].toFixed(1) }}</td>
    </tr>
    <tr>
      <td colspan="2">月別最適傾斜角<br />における日射量(A)</td>
      <td v-for="i in 12" :key="i">{{ info.data[121][i - 1].toFixed(2) }}</td>
      <td>※<br />{{ info.data[121][12].toFixed(1) }}</td>
      <td>※※<br />{{ info.data[121][13].toFixed(1) }}</td>
      <td>※※<br />{{ info.data[121][14].toFixed(1) }}</td>
      <td>※※<br />{{ info.data[121][15].toFixed(1) }}</td>
      <td>※※<br />{{ info.data[121][16].toFixed(1) }}</td>
    </tr>
    <tr>
      <td colspan="2">年間最適傾斜角<br />における日射量(B)</td>
      <td v-for="i in 17" :key="i">{{ info.data[122][i - 1].toFixed(2) }}</td>
    </tr>
    <tr>
      <td colspan="2">比率 (A/B)</td>
      <td v-for="i in 17" :key="i">{{ info.data[123][i - 1].toFixed(2) }}</td>
    </tr>
    <tr>
      <td colspan="2">比率 (B/C)</td>
      <td v-for="i in 17" :key="i">{{ info.data[124][i - 1].toFixed(2) }}</td>
    </tr>
    <tr>
      <td colspan="2">平均気温</td>
      <td v-for="i in 17" :key="i">{{ info.data[125][i - 1].toFixed(1) }}</td>
    </tr>
    <tr>
      <td colspan="2">散乱日射量</td>
      <td v-for="i in 17" :key="i">{{ info.data[126][i - 1].toFixed(2) }}</td>
    </tr>
    <tr>
      <td colspan="2">積雪10cm以上<br />の出現率</td>
      <td v-for="i in 17" :key="i">{{ info.data[127][i - 1].toFixed(2) }}</td>
    </tr>
  </table>
  ＊年間最適傾斜角 ＊＊季節別最適傾斜角　※月別最適傾斜角における日射量の年平均値
  ※※季節別最適傾斜角における日射量
</template>

<script lang="ts">
import { parseDataFile } from "../utils";
import { DataFile } from "../types";

export default {
  name: "TableView",
  props: {
    amedas: String,
  },
  data: () => {
    return {
      info: null as DataFile | null,
    };
  },
  mounted: function () {
    fetch("/data/monsola11/"+this.amedas)
      .then((res) => res.text())
      .then((text) => (this.info = parseDataFile(text)));
  },
  computed: {
    caption: function (): string {
      if (this.info == null) {
        return "";
      }
      return `地点 ${this.info.name} (緯度=${this.info.lat_d}°${this.info.lat_m}′ 経度=${this.info.long_d}°${this.info.long_m}′ 標高=${this.info.alti}m)`;
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  border: solid 2px gray;
}
table th,
table td {
  border: solid 1px gray;
  padding: 0 0.1em 0 0.1em;
}
</style>