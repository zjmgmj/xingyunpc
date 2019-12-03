<template lang="pug">
div
  b-row
    b-col(cols="4")
      z-input(label="合同号", placeholder="请输入合同号")
    b-col(cols="4")
      z-date-picker(:val="testTime", @value="(value) => {testTime = value}", label="日期")
    b-col(cols="4")
      button.zhd-btn 搜索
      button.ml-10.zhd-btn.zhd-btn-normal 重置
  b-row.mt-10
    b-col(cols="4")
      z-select(label="状态", :options="options", placeholder="请选择")
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
class Search extends Vue {
  testTime: any = null
  options: any = {
    list: [
      '全部',
      '待支付',
      '待付款',
      '待支付',
      '待付款',
      '待支付',
      '待付款',
      '待支付',
      '待付款'
    ]
  }

  mounted() {
    this.$nextTick(() => {
      this.testTime = { start: '2018-04-05', end: '2018-04-20' }
    })
  }
}
export default Search
</script>
<style lang="stylus" scoped></style>
