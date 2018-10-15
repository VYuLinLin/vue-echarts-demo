import Vue from 'vue'
import App from './App.vue'
import ECharts from 'vue-echarts/components/ECharts.vue'
// 手动引入 ECharts 各模块来减小打包体积
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/tooltip'
import './assets/css/common.scss'
import './assets/flexible.js'
// 注册组件后即可使用
Vue.component('v-chart', ECharts)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
