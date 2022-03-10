<template>
  <svg>
    <polyline :points="transformedPolylineString"
    style="fill:none;stroke:black;stroke-width:1" />
    <line v-if="transformedAxisPoints.length>=2" :x1="transformedAxisPoints[0].x" :y1="transformedAxisPoints[0].y"  :x2="transformedAxisPoints[1].x" :y2="transformedAxisPoints[1].y"
      style="stroke:black;stroke-width:1"/>
    <line v-if="transformedAxisPoints.length>=4" :x1="transformedAxisPoints[2].x" :y1="transformedAxisPoints[2].y"  :x2="transformedAxisPoints[3].x" :y2="transformedAxisPoints[3].y"
      style="stroke:black;stroke-width:1"/>
    <polygon :points="transformedPanelPointsString"
    style="fill:blue;fill-opacity:0.5;stroke:black;stroke-width:1" />
    <polygon :points="transformedShadowPointsString"
    style="fill:gray;fill-opacity:0.5;stroke:black;stroke-width:1" />
    <text :x="transformedAxisPoints[0].x" :y="transformedAxisPoints[0].y">南</text>
    <text :x="transformedAxisPoints[2].x" :y="transformedAxisPoints[2].y">東</text>
    <text :x="transformedAxisPoints[3].x" :y="transformedAxisPoints[3].y">西</text>
  </svg>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {Matrix4, OrthographicCamera, Vector3} from '../math'

export default defineComponent({
  name: "PanelPreview2",
  props: {
    azimuth: Number,
    altitude: Number,
  },
  data() {
    return {
      transformedPolyline: [] as Vector3[],
      transformedAxisPoints: [] as Vector3[],
      transformedPanelPoints: [] as Vector3[],
      transformedShadowPoints: [] as Vector3[],
      viewMatrix: new Matrix4(),
      projectionMatrix: new Matrix4(),
    };
  },
  watch: {
    azimuth: function(v: number) {
      this.updateScene()
    },
    altitude: function(v: number) {
      this.updateScene()
    }
  },
  methods: {
    updateScene() {
      // パネル
      const azimuth = this.azimuth! - Math.PI/2
      const y = Math.sin(this.altitude!)
      const a1 = new Vector3(Math.sin(azimuth+Math.PI*(2/3+1/6)), 0, Math.cos(azimuth+Math.PI*(2/3+1/6)))
      const a2 = new Vector3(Math.sin(azimuth+Math.PI*7/6), y, Math.cos(azimuth+Math.PI*7/6))
      const b1 = new Vector3(Math.sin(azimuth+Math.PI/6), 0, Math.cos(azimuth+Math.PI/6))
      const b2 = new Vector3(Math.sin(azimuth+Math.PI*(5/3+1/6)), y, Math.cos(azimuth+Math.PI*(5/3+1/6)))
      a1.multiplyScalar(1-Math.cos(this.altitude!))
      a2.multiplyScalar(Math.cos(this.altitude!))
      b1.multiplyScalar(1-Math.cos(this.altitude!))
      b2.multiplyScalar(Math.cos(this.altitude!))
      const panelPoints = [] as Vector3[]
      panelPoints.push(new Vector3(Math.sin(azimuth+Math.PI/6), 0, Math.cos(azimuth+Math.PI/6)));
      panelPoints.push(new Vector3(Math.sin(azimuth+Math.PI*(2/3+1/6)), 0, Math.cos(azimuth+Math.PI*(2/3+1/6))));
      panelPoints.push(new Vector3(a1.x + a2.x, -y, a1.z + a2.z));
      panelPoints.push(new Vector3(b1.x + b2.x, -y, b1.z + b2.z));
      const transformedPanelPoints = []
      for (const v of panelPoints) {
        transformedPanelPoints.push(this.transform(this.projectionMatrix, this.viewMatrix, v))
      }
      this.transformedPanelPoints = transformedPanelPoints 
      // パネル影
      const shadowPoints = [] as Vector3[]
      shadowPoints.push(new Vector3(Math.sin(azimuth+Math.PI/6), 0, Math.cos(azimuth+Math.PI/6)));
      shadowPoints.push(new Vector3(Math.sin(azimuth+Math.PI*(2/3+1/6)), 0, Math.cos(azimuth+Math.PI*(2/3+1/6))));
      shadowPoints.push(new Vector3(a1.x + a2.x, 0, a1.z + a2.z));
      shadowPoints.push(new Vector3(b1.x + b2.x, 0, b1.z + b2.z));
      const transformedShadowPoints = []
      for (const v of shadowPoints) {
        transformedShadowPoints.push(this.transform(this.projectionMatrix, this.viewMatrix, v))
      }
      this.transformedShadowPoints = transformedShadowPoints 
    },
    transform(proj: Matrix4, view: Matrix4, v: Vector3): Vector3 {
      v.applyMatrix4(view)
      v.applyMatrix4(proj)
      v.x = v.x * 120 + 120
      v.y = -v.y * 100 + 100
      return v
    }
  },
  computed: {
      transformedPolylineString(): string {
        return this.transformedPolyline.map(e => (e.x)+","+(e.y)).join(" ")
      },
      transformedPanelPointsString(): string {
        return this.transformedPanelPoints.map(e => (e.x)+","+(e.y)).join(" ")
      },
      transformedShadowPointsString(): string {
        return this.transformedShadowPoints.map(e => (e.x)+","+(e.y)).join(" ")
      },
  },
  beforeMount: function () {
    /*
    const camera = new THREE.OrthographicCamera(-1.2, 1.2, 1.2, -1.2, 1.2, 100);
    camera.position.x = 1.5;
    camera.position.y = 1;
    camera.position.z = 3;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    console.log(camera.matrixWorldInverse)
    */
    // カメラのワールド座標系の逆行列
    const viewMatrix = new Matrix4()
    viewMatrix.elements = [
      0.8944271909999157,
      -0.12777531299998798,
      0.4285714285714285,
      0,
      1.3877787807814454e-17,
      0.9583148474999098,
      0.2857142857142856,
      0,
      -0.4472135954999578,
      -0.2555506259999759,
      0.8571428571428571,
      0,
      -3.3306690738754686e-16,
      -2.2204460492503126e-16,
      -3.5,
      0.9999999999999998]
    this.viewMatrix = viewMatrix
    const camera = new OrthographicCamera(-1.2, 1.2, 1.2, -1.2, 1.2, 100)
    const projectionMatrix = camera.projectionMatrix
    this.projectionMatrix = projectionMatrix

    // 円
    const points = [];
    for (let i = 0; i < 32; i++) {
      const theta = ((Math.PI * 2) / 32) * i
      const v = new Vector3(Math.sin(theta), 0, Math.cos(theta))
      points.push(v)
    }
    points.push(new Vector3(0, 0, 1));
    const transformedPolyline = []
    for (const v of points) {
      transformedPolyline.push(this.transform(projectionMatrix, viewMatrix, v))
    }
    this.transformedPolyline = transformedPolyline

    // 座標軸線
    const axisPoints = [] as Vector3[]
    axisPoints.push(new Vector3(0, 0, 1.2));
    axisPoints.push(new Vector3(0, 0, -1.2));
    axisPoints.push(new Vector3(1.2, 0, 0));
    axisPoints.push(new Vector3(-1.2, 0, 0));
    const transformedAxisPoints = []
    for (const v of axisPoints) {
      transformedAxisPoints.push(this.transform(projectionMatrix, viewMatrix, v))
    }
    this.transformedAxisPoints = transformedAxisPoints 

    // パネル
    this.updateScene()
  }
});
</script>