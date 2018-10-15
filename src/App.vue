<template>
  <div id="app">
    <index />
  </div>
</template>

<script>
import Index from './Index.vue'

export default {
  name: 'app',
  components: {
    Index
  }
}
</script>

<style lang="scss">
#app {
  height: 100%;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
