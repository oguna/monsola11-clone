<template>
  <h1>MONSOLA-11 Clone</h1>
  太陽光発電の評価で広く利用されてきたNEDOのデータベースが、Flashのサポート終了に伴いウェブ上での利用ができなくなりました。
  非公式ですが、Flashに代わりJavaScriptでウェブアプリを実装しましたので、皆様にご利用いただけますよう公開します。
  <br />
  ※データベースの著作権は、すべてNEDOが所有しています。
  データの利用については<a href="https://www.nedo.go.jp/qinf/copyright.html">NEDOのサイト</a>をご確認ください。
  本サイトに記載されている情報の正確さについては万全を期しておりますが、プログラム作成者は利用者が本サイトの情報を用いて行う一切の行為について、何ら責任を負うものではありません。
  <Home></Home>
</template>

<script lang="ts">
import Home from "../components/Home.vue";

export default {
  name: "HomeView",
  components: {
    Home,
  },
};
</script>
