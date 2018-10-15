<template>
  <!-- <figure> -->
    <china-map :options="map" :init-options="initOptions" />
  <!-- </figure> -->
</template>
<script>
import ECharts from 'vue-echarts/components/ECharts'
import map from './data/map'
// built-in theme
import 'echarts/theme/dark'
// Map of China
import chinaMap from './data/china.json'
// custom theme
// import theme from './data/theme.json'
// registering map data
ECharts.registerMap('china', chinaMap)
// registering custom theme
// ECharts.registerTheme('ovilia-green', theme)
export default {
  name: 'ChinaMap',
  components: {
    chinaMap: ECharts
  },
  data() {
    return {
      map,
      initOptions: {
        renderer: 'canvas'
      }
    }
  }
}
</script>
<style lang="scss">
  .echarts {
    > div {
      width: 100%;
    }
  }
</style>
