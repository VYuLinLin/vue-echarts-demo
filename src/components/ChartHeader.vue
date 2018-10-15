<template>
  <div class="nf-header">
    <h1>小明全年总收入</h1>
    <div class="total">
      <div>
        <p>总资产规模</p>
        <p class="num">￥5888.88万</p>
      </div>
      <div>
        <p>累计历史收益<span></span></p>
        <p class="num">￥888.88万</p>
      </div>
    </div>
    <div class="total-detail">
      <div>
        <p>投资收益总额<span>￥288.88万</span></p>
      </div>
      <div>
        <p>当月总收入<span>￥8.88万</span></p>
      </div>
      <div>
        <p>当日总收入<span>8888</span></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ChartHeader',
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.nf-header {
  height: 100%;
  padding-top: 1.875rem;
  font-size: 1rem;
  .total {
    display: flex;
    justify-content: space-between;
    margin-top: 4.375rem;
    > div {
      width: 100%;
      .num {
        margin-top: 1.875rem;
        font-size: 3.25rem;
      }
    }
  }
  .total-detail {
    display: flex;
    justify-content: space-between;
    margin: 4.375rem 6.875rem;
    text-align: left;
    font-size: 2rem;
    span{
      margin-left: 2rem;
    }
  }
}
</style>
