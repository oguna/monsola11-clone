<template>
<nav class="navbar navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">MONSOLA-11 Clone</a>
  </div>
</nav>
<main class="container">
    <div class="alert alert-warning mt-2" role="alert">
       太陽光発電の評価で広く利用されてきたNEDOのデータベースが、Flashのサポート終了に伴いウェブ上での利用ができなくなりました。
  非公式ですが、Flashに代わりJavaScriptでウェブアプリを実装しましたので、皆様にご利用いただけますよう公開します。
  <br />
  ※データベースの著作権は、すべてNEDOまたはJWAが所有しています。
  データの利用については<a href="https://www.nedo.go.jp/qinf/copyright.html">NEDOのサイト</a>をご確認ください。
  本サイトに記載されている情報の正確さについては万全を期しておりますが、プログラム作成者は利用者が本サイトの情報を用いて行う一切の行為について、何ら責任を負うものではありません。
    </div>
  <router-view></router-view>
</main>
</template>

<script lang="ts">
export default {
  name: 'App',
}
</script>
