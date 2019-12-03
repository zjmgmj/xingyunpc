<template lang="pug">
div
  b-row
    b-col(cols="5")
      z-input(label="提单编号", placeholder="请输入提单编号")
    b-col(cols="5")
      z-date-picker(:val="testTime", @value="(value) => {testTime = value}", labelWidth="85px" label="订单范围日期", placeholder="请选择订单范围日期")
    b-col(cols="2")
      button.zhd-btn 搜索
      button.ml-10.zhd-btn.zhd-btn-normal 重置
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
class Search extends Vue {
  testTime: any = null

  mounted() {
    this.$nextTick(() => {
      this.testTime = { start: '2018-04-05', end: '2018-04-20' }
    })
  }
}
export default Search
</script>
<style lang="stylus" scoped></style>
