<template lang="pug">
.crane-scale.animated.slideInLeft
  .crane-scale-bg
    .content.relative-position.text-center
      .crane-scale-card.flex.flex-content-between
        .card.bg-white.img-shadow.animated.fadeInDown
          img(src="@/assets/images/dc-icon1.png", width="154px", height="154px")
          .ft-30.pt-10.pb-10.zhd-text-main.ft-bold 快
          .text-666.ft-16.mt-10 上秤计算快
        .card.bg-white.img-shadow.animated.fadeInDown
          img(src="@/assets/images/dc-icon2.png", width="154px", height="154px")
          .ft-30.pt-10.pb-10.text-yellow.ft-bold 准
          .text-666.ft-16.mt-10 物资重量准
        .card.bg-white.img-shadow.animated.fadeInDown
          img(src="@/assets/images/dc-icon3.png", width="154px", height="154px")
          .ft-30.pt-10.pb-10.text-gray.ft-bold 稳
          .text-666.ft-16.mt-10 数据传输稳
  b-container.pt-50.bg-white(:fluid="true")
    b-row.content.pt-100.pb-30.flex-content-between
      b-col.text-center(cols="8")
        img(src="@/assets/images/dc-2.png", width="80%")
      b-col(cols="4").line-height-30
        .ft-30.pt-90 物联网+智能硬件
        .ft-16.mt-15 利用先进的物联网智能技术，使吊秤硬件模块与企业仓储系统直联，物资上秤自动计算重量并输入系统，极大的提高了服务效率与物资重量数据的准确性。
  b-row.content.pt-60.pb-30.flex-content-between
    b-col(cols="4").line-height-30.pt-20
      .ft-30 成本低，效果好
      .ft-16.mt-15 硬件改造成本低，只需要简单的安装参数传递模块和触控终端，就能完成对传统吊秤的改造，全触控的应用界面，支持多秤同屏操作，为企业实现仓库物资吊装流程的降本增效。
    b-col.text-center(cols="8")
      img(src="@/assets/images/dc-1.png", width="80%")
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
class CraneScale extends Vue {}
export default CraneScale
</script>
<style lang="stylus" scoped>
.crane-scale-bg
  width 100%
  height 250px
  background-size cover
  background url('../../assets/images/fa-img1.jpg') fixed 50% 50%
  background-size cover
.crane-scale-card
  position absolute
  width 100%
  top 50px
  .card
    width 370px
    height 286px
    padding 30px 0
    img
      margin 0 auto
.img-shadow
  box-shadow 0px 0px 14px #999
</style>
