<template lang="pug">
.warehouse.animated.slideInLeft
  .bg-white.text-center.p-30
    .ft-30 系统间互联互通，操作方便
    .ft-16.text-999.pt-20 根据企业需要直联任何自有或三方仓储系统，与电商平台、ERP系统互联互通，形成了三位一体的系统优势，让仓库操作更加流畅，管理更加方便。
  //- .content.pt-60.pb-60
  .flex.content.pt-60.pb-30.flex-content-between.flex-center
    .col.text-center
      img(src="@/assets/images/ca-i1.png", width="80%")
    .col.line-height-30
      .ft-30 手机在手，出库无忧
      .ft-16.text-999.mt-15 简单明了的全图形化操作界面，功能覆盖了所有出入库流程操作，解放了电脑系统对仓储工作人员行动的限制，实时库存情况反馈与查询，真正做到仓储管理的移动化、微型化、精细化。
  .bg-white
    .flex.content.pt-60.pb-30.flex-content-between.flex-center
      .col.line-height-30
        .ft-30 流程规范，安全高效
        .ft-16.text-999.mt-15 集成了出库操作，表单核对等多种功能，实现了提货流程的标准化与规范化，让物资出库更加安全和快速，方便企业仓储人员工作，为客户提供高效快捷的提货出库服务。
      .col.text-center
        img(src="@/assets/images/ca-i2.png", width="80%")

</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
class Warehouse extends Vue {}
export default Warehouse
</script>
<style lang="stylus" scoped>

// .warehouse

//   transform all 0.5s

//   transform translateX(-1000px)

</style>
