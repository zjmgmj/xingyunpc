<template lang="pug">
.p-0.banner-bg
  b-row.content
    b-col.pt-100(cols="4")
      img.animated.slideInUp(src="@/assets/images/jiagong_b1.png", alt="高效加工普卷、花卷、热轧钢卷")
    b-col.text-right(cols="8")
      img.animated.slideInDown(src="@/assets/images/jiagong_b2.png", alt="加工机器")
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
class Banner extends Vue {}
export default Banner
</script>
<style lang="stylus" scoped>
.banner-bg
  height 500px
  width 100%
  text-align center
  position relative
  overflow hidden
  background url('../../assets/images/jiagong_bg.jpg') no-repeat center
.slideInUp
  -webkit-animation-name slideInUp
  animation-name slideInUp
.animated
  -webkit-animation-duration 1s
  animation-duration 1s
  -webkit-animation-fill-mode both
  animation-fill-mode both
.slideInDown
  -webkit-animation-name slideInDown
  animation-name slideInDown
</style>
