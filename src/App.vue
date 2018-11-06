<template>
  <div id="app">
    <Menu></Menu>
    <router-view/>
  </div>
</template>

<script>
import Menu from "./components/Menu";
export default {
  name: 'App',
  components: {Menu}
}
</script>

<style lang="scss">
  @import "~bulma/sass/utilities/_all";

  // customize bulma

  @import "~bulma";
  @import "~buefy/src/scss/buefy";

  html,body {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  #app {
    padding: 0;
    margin: 0;
  }
</style>
