<template lang="pug">
.content
  .p-20.flex.bg-white.mt-15
    div
      .pro-img
        pic-zoom(:url="require('@/assets/images/1497918912192.jpg')", :scale="3")
      .pt-10.text-center 图片为货物尺寸及外包装示例，仅供参考
    .pro-detail.ml-40
      .title.ft-16
        strong H型钢
        span.pl-5.text-666 (Q235B)
        span.pl-5 194*150*6*9
        span.pl-5 12.0米
        span.pl-5 莱钢
      .mt-15.ft-13
        span 支件 :12 支/件
        span.text-red （支件数仅供参考，详情请联系业务员）
      .mt-15.flex.flex-center
        .label 计量方式 :
        b-button.login-btn.ml-10 请登录后查看
      .mt-15.flex.flex-center
        .label 商品价格:
        strong.pl-10.text-red ¥ --元
      .mt-15.flex.flex-center
        .label 吊费价格:
        strong.pl-10.text-red ¥
          strong.pl-5.ft-18 25
          span 元/吨
      .mt-15.flex.flex-center
        .label 购买支数:
        .input-num-com.ml-10
          //- InputNum(:value="saleNum")
          z-input-num(:value="saleNum")
        span.pl-10 (最多可选0支)
      .mt-15.flex.flex-center
        span 已选择
        span.text-blue 0
        span 支，
        span 总重量：
        span.text-blue 0
        span 吨，
        span 总金额：
        span.text-blue ¥ 0
        span 元
      .mt-20
        button.zhd-btn.zhd-btn-lg.zhd-btn-warning.zhd-btn-disabled 立即购买
        button.ml-10.zhd-btn.zhd-btn-lg.zhd-btn-danger.zhd-btn-disabled 加入购物车
  .mt-20.p-20.bg-white
    .ft-16 商品信息
    .mt-15.flex
      .col
        .mb-15 品名：H型钢
        .mb-15 规 格：100*100*6000
        .mb-15 技术标准：Q235B
      .col
        .mb-15 材 质：Q235B
        .mb-15 支 数：29
        .mb-15 长 度：12.0 米
      .col
        .mb-15 产 地： 鞍钢
        .mb-15 仓 库： 1号门
        .mb-15 捆包号： 0
  .mt-20.p-20.bg-white
    .ft-16 质保书
    .text-center.mt-15 如需质保书，可拨打客服电话：88825500进行咨询！
  .mt-20.p-20.bg-white.flex
    .col.flex.line-height-20.border-right-line.flex-content-between
      img(src="@/assets/images/img01.png", width="84px", height="50px")
      .text-center.col.p-0
        .text-yellow.ft-18 配送方式
        .mt-20
          p 买方自提
          p 委托代运
    .col.flex.line-height-20.border-right-line.flex-content-between
      img(src="@/assets/images/img02.png", width="61px", height="50px")
      .text-center.col.p-0
        .text-yellow.ft-18 付款方式
        .mt-10
          p 线下转账、余额支付、
          p 承兑汇票、东方付通
    .col.flex.line-height-20.border-right-line.flex-content-between
      img(src="@/assets/images/img03.png", width="49px", height="57px")
      .text-center.col.p-0
        .text-yellow.ft-18 订单付款日期
        .mt-10
          p 转账、承兑汇票为当日17:00以前
          p 余额支付为当日24:00以前
    .col.flex.line-height-20.flex-content-between
      img(src="@/assets/images/img04.png", width="68px", height="56px")
      .text-center.col.p-0
        .text-yellow.ft-18 存货地址
        .mt-10
          p 存货地点：江苏常州武进区
          p 存货详细地点：东港
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PicZoom from '@/components/PicZoom.vue'

@Component({
  layout: 'ShopMall',
  components: {
    PicZoom
  }
})
class Detail extends Vue {
  saleNum: number = 0
}
export default Detail
</script>
<style lang="stylus" scoped>
.pro-img
  width 340px
  height 320px
.pro-detail
  .login-btn
    background #f37b1d
    padding 2px 15px
    border-radius 2px
    text-align center
    color #fff
    border-color #f37b1d
    /deep/.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle
      background-color #f37b1d
      border-color #f37b1d
  .input-num-com
    width 150px
</style>
