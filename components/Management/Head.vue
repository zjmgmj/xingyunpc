<template lang="pug">
b-container.p-0.bg-white(:fluid="true")
  HeadTop
  .head-box.pt-15
    .content.flex
      img(src="@/assets/images/user_logo.png", width="202", height="60")
      router-link(to="/shop")
        .title
          h1 我的型云
          .back-shop 返回型云商城
      .menu-box.flex.text-white
        .list 用户中心
        .list
          span 基础管理
          i.iconfont.icon-xiaosanjiaodown
          .menu-child
            .list-child 公司信息管理
            .list-child 站内信管理
            .list-child 支付密码管理
            .list-child 登录密码管理
        .list
          span 资金管理
          i.iconfont.icon-xiaosanjiaodown
          .menu-child
            .list-child 账户信息
            .list-child 充值提现明细
            .list-child 提现申请
            .list-child 账户收支明细
            .list-child 我的优惠券
      .flex.flex-center.flex-content-end.col.pr-0
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
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import HeadTop from '@/components/Head/HeadTop.vue'

@Component({
  components: {
    HeadTop
  }
})
class Head extends Vue {}
export default Head
</script>
<style lang="stylus" scoped>
.head-box
  height 90px
  width 100%
  background #0289fb
  img
    display block
  .title
    color #fff
    cursor pointer
    font-size 12px
    text-align center
    width 200px
    padding 5px 0 10px 0
    h1
      font-size 18px
    .back-shop
      border 1px #fff solid
      width 90px
      padding 5px
      border-radius 50px
      margin 10px auto 0
      &:hover
        background #fafafa
        color #0289fb
  .menu-box
    width 400px
    margin-top 35px
    font-size 13px
    .list
      padding 0 20px
      position relative
      cursor pointer
      height 40px
      .menu-child
        font-size 12px
        position absolute
        z-index 9
        left 0
        display none
        top 35px
        width 100%
        color #666
        line-height 30px
        text-align center
        background #fff
        .list-child
          &:hover
            background #eee
      &:hover
        .menu-child
          display block
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
    &:hover
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
