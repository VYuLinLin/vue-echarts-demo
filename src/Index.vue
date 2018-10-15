<template>
  <div class="index">
    <aside>
      <LineChart></LineChart>
      <BarChart></BarChart>
      <PieChart></PieChart>
    </aside>
    <main>
      <section>
        <ChartHeader></ChartHeader>
      </section>
      <section>
        <ChinaMap></ChinaMap>
        <ChinaMap></ChinaMap>
      </section>
    </main>
    <aside>
      <LineChart></LineChart>
      <BarChart></BarChart>
      <PieChart></PieChart>
    </aside>
  </div>
</template>
<script>
import LineChart from '@/components/LineChart'
import BarChart from '@/components/BarChart'
import ChartHeader from '@/components/ChartHeader'
import PieChart from '@/components/PieChart'
import ChinaMap from '@/components/ChinaMap'
export default {
  name: 'Index',
  components: {
    LineChart,
    BarChart,
    ChartHeader,
    PieChart,
    ChinaMap
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  aside {
    flex: 0 0 18.58%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    >:nth-child(2) {
      margin: .625rem 0;
    }
    > div{
      background-color: bisque;
    }
  }
  main {
    flex: 1 1 62.84%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 .625rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    >:first-child {
      background-color: cadetblue;
      height: 44%;
      margin-bottom: .75rem;
    }
    >:last-child {
      height: 66%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
