<template>
  <div id="panelpreview"></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import * as THREE from "three/build/three.module.js";
import { SVGRenderer } from "three/examples/jsm/renderers/SVGRenderer.js";
import { ShadowMesh } from 'three/examples/jsm/objects/ShadowMesh.js';

export default defineComponent({
  name: "PanelPreview",
  props: {
    azimuth: Number,
    altitude: Number,
  },
  data() {
    return {
      plane: null,
      renderer: null,
      camera: null,
      scene: null,
      shadow: null,
      groundPlane: null,
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
      this.plane.rotation.x = 0;
      this.plane.rotation.y = 0;
      this.plane.rotation.z = 0;
      this.plane.position.x = 0;
      this.plane.position.y = 0;
      this.plane.position.z = 0;
      this.plane.rotateY(this.azimuth);
      this.plane.translateZ(0.5);
      this.plane.translateY(0.5)
      this.plane.translateY(-0.5);
      this.plane.rotateX(Math.PI*3/2-this.altitude);
      this.plane.translateY(0.5);
      this.plane.updateMatrixWorld()

      const lightPosition4D = new THREE.Vector4(0, 100, 0, 0.01)
      this.shadow.update(this.groundPlane, lightPosition4D)

      this.renderer.render(this.scene!, this.camera!);
    }
  },
  mounted: function () {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 240/200, 0.1, 1000);

    const renderer = new SVGRenderer();
    renderer.setSize(240, 200);
    document.body.appendChild(renderer.domElement);

    {
      const material = new THREE.LineBasicMaterial({ color: 0x888888 });
      const points = [];
      for (let i = 0; i < 32; i++) {
        points.push(
          new THREE.Vector3(
            Math.sin(((Math.PI * 2) / 32) * i) * 1,
            0,
            Math.cos(((Math.PI * 2) / 32) * i) * 1
          )
        );
      }
      points.push(new THREE.Vector3(0, 0, 1));
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material);
      scene.add(line);
    }
    {
      const material = new THREE.LineBasicMaterial({ color: 0x888888 });
      const points = [];
      points.push(new THREE.Vector3(0, 0, 1.2));
      points.push(new THREE.Vector3(0, 0, -1.2));
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material);
      scene.add(line);
    }
    {
      const material = new THREE.LineBasicMaterial({ color: 0x888888 });
      const points = [];
      points.push(new THREE.Vector3(1.2, 0, 0));
      points.push(new THREE.Vector3(-1.2, 0, 0));
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material);
      scene.add(line);
    }
    const geometry = new THREE.PlaneGeometry(1.732, 1, 4);
    const material = new THREE.MeshBasicMaterial({
      color: 0x0000ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.position.y = 0.5;
    plane.rotateY(-Math.PI / 6);
    plane.rotateX(Math.PI / 3);
    scene.add(plane);

    const shadow = new ShadowMesh(plane)
    scene.add(shadow)

    camera.position.x = 1;
    camera.position.y = 1;
    camera.position.z = 2;
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // 影を投影する平面
    const normalVector = new THREE.Vector3( 0, 1, 0 );
		const planeConstant = 0.01;
		const groundPlane = new THREE.Plane( normalVector, planeConstant );

    // 太陽の位置
    const lightPosition4D = new THREE.Vector4(0, 10, 10, 0.01)
    shadow.update(groundPlane, lightPosition4D)
   
    this.renderer = renderer
    this.plane = plane
    this.camera = camera
    this.scene = scene
    this.shadow = shadow
    this.groundPlane = groundPlane

    this.updateScene()

    document.getElementById("panelpreview")!.appendChild(renderer.domElement);
  },
});
</script>