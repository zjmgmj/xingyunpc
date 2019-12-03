<template lang="pug">
b-container.p-0.bg-white(:fluid="true")
  HeadTop
  .content.pb-25.pt-25
    b-row.flex-center
      .log-box.pl-10
        img(:src="require('@/assets/images/logo.png')", alt="型云")
      .flex.search-box
        input(type="text", placeholder="请输入关键词,多关键词以空格隔开")
        button.search-btn 搜索
      .flex.flex-center.flex-content-end.col
        .r-btn-box
          i.iconfont.icon-sousuo
          span.pl-5 帮我找货
        .r-btn-box.ml-10.flex.flex-center.flex-content-center
          i.iconfont.icon-gouwuche1
          span.pl-5 购物车
          .num-box.ml-5 10
        .r-btn-box.ml-10.flex.flex-center.flex-content-center
          i.iconfont.icon-daifukuan
          span.pl-5 待付款
          .num-box.ml-5 10
  Menu
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Menu from './Menu.vue'
import HeadTop from './HeadTop.vue'

@Component({
  components: {
    Menu,
    HeadTop
  }
})
class Head extends Vue {}
export default Head
</script>

<style lang="stylus" scoped>
.log-box
  width 202px
.search-box
  border 2px #0289fb solid
  background #0289fb
  margin-left 50px
  width 500px
.search-box input
  background #fff
  height 36px
  width 415px
  box-sizing border-box
  padding 0 10px
.search-btn
  border none
  color #fff
  width 80px
  background #0289fb
  font-size 16px
input::-webkit-input-placeholder
  color #999
  font-size 12px
.r-btn-box
  background #f6f6f6
  width 107px
  height 42px
  line-height 42px
  cursor pointer
  text-align center
  color #666
  font-size 14px
  -webkit-transition all 0.2s linear
  transition all 0.2s linear
.r-btn-box:hover
  -webkit-box-shadow 0 15px 30px rgba(0, 0, 0, 0.1)
  box-shadow 0 15px 30px rgba(0, 0, 0, 0.1)
  -webkit-transform translate3d(0, -2px, 0)
  transform translate3d(0, -2px, 0)
.num-box
  border-radius 100%
  line-height 20px
  text-align center
  width 20px
  height 20px
  background #0289fb
  color #fff
  font-size 13px
</style>
