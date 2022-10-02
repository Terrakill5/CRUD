<template>
  <div>
    <navbar></navbar>
    <div class="container p-5"><router-view></router-view></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Nav-bar.vue";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
  },
});
</script>

<style></style>
