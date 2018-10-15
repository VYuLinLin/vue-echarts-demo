<template>
  <v-chart :options="option" auto-resize></v-chart>
</template>
<script>
export default {
  name: 'LineChart',
  data() {
    return {
      option: {
        title: {
          text: '各月买入金额',
          left: 'center',
          top: '25',
          textStyle: {
            fontSize: '16'
          }
        },
        xAxis: {
          type: 'category',
          data: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06'],
          axisLabel: {
            interval: 0,
            fontSize: '8',
            showMinLabel: true,
            showMaxLabel: true,
            padding: 0
            // backgroundColor: 'red',
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          }
        },
        series: [{
          type: 'line',
          data: [100, 520, 330, 780, 630, 996]
        }]
      }
    }
  }
}
</script>
<style scoped>

</style>
