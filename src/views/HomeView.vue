<template>
  <Home :id="numberedId"></Home>
</template>

<script lang="ts">
import Home from "../components/Home.vue";

export default {
  name: "HomeView",
  components: {
    Home,
  },
  props: {
    id: String,
  },
  computed: {
    numberedId: function(): number|undefined {
      if (this.id) {
        return Number.parseInt(this.id)
      } else {
        return undefined
      }
    }
  }
};
</script>
