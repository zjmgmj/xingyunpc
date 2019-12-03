<template lang="pug">
b-container.p-0(:fluid="true")
  Banner
  .content
    .mt-10.flex.flex-content-between
      .ft-20.pt-75 加工范围
      .text-blue.flex
        .pr-15.ft-20.pt-75 服务热线: 400-8788-361
        img(src="@/assets/images/jiagong_b3.png")
    .mt-20.flex
      .col.p-0
        table.zhd-table.table-bordered.ft-16.bg-white.border
          thead
            tr
              th.ft-20(colspan="2")
                strong 小线
          tbody
            tr
              td 普卷
              td 1.5mm-5.75mm
            tr
              td 花卷
              td 1.5mm-3.75mm(花纹豆向上)
            tr
              td 卷宽度
              td 900-1800
            tr
              td
              td Q235热轧钢卷
            tr
              td 加工长度
              td 1m-9m
            tr
              td(align="center", colspan="2")
                span.zhd-btn.zhd-btn-block.ft-16 我要加工
      .col.p-0.ml-20
        table.zhd-table.ft-16.bg-white.border
          thead
            tr
              th.ft-20(colspan="2")
                strong 小线
          tbody
            tr
              td 普卷
              td 1.5mm-5.75mm
            tr
              td 花卷
              td 1.5mm-3.75mm(花纹豆向上)
            tr
              td 卷宽度
              td 900-1800
            tr
              td
              td Q235热轧钢卷
            tr
              td 加工长度
              td 1m-9m
            tr
              td(align="center", colspan="2")
                span.zhd-btn.zhd-btn-block.ft-16 我要加工
    .ft-20.pt-25.pb-25 收费标准
    .flex.text-center.text-666
      .col.bg-white.p-30.mr-10
        img(src="@/assets/images/jiagong_juan.png")
        .ft-20.pt-15.zhd-text-warning.ft-bold.ml-5 25元/吨
        .ft-16.mt-5 整卷出库吊费
      .col.bg-white.p-30.mr-10
        img(src="@/assets/images/jiagong_ban.png")
        .ft-20.pt-15.zhd-text-warning.ft-bold.ml-5 25元起/吨
        .ft-16.mt-5 开平长度4m以上
      .col.bg-white.p-30.mr-10
        img(src="@/assets/images/jiagong_ban.png")
        .ft-20.pt-15.zhd-text-warning.ft-bold.ml-5 30元起/吨
        .ft-16.mt-5 开平长度1.8m-4m
      .col.bg-white.p-30
        img(src="@/assets/images/jiagong_ban.png")
        .ft-20.pt-15.zhd-text-warning.ft-bold.ml-5 90元起/吨
        .ft-16.mt-5 开平长度1m-1.8m
    .ft-20.pt-25.pb-25 加工机器展示
    .content.bg-white.p-20.machine-content
      .swiper-container.swiper-container-horizontal(v-swiper:mySwiper="swiperOption")
        .swiper-wrapper
          .swiper-slide(v-for="(path, index) in swiperSlides" :key="index", style="width:260px")
            .slide-img
              img(:src="path", :key="index")
            .ft-16.pt-20.text-center 上料机
    .ft-20.pt-25.pb-25 联系我们
    .content.bg-white.flex.p-30.flex-center.flex-content-between
      .text-center.pl-30.pr-30
        img(src="@/assets/images/erweima.png", width="112px", height="112px")
        .ft-13 微信扫码关注
      .foot-contact.line-height-25
        p 公司地址：江苏省常州市新北区太湖东路9-3创意产业园C栋8楼
        p 加工地址：江苏省常州市武进区湖塘镇常州东港
        p 电话：400-8788-361
        p 传真：0519-86868361
        p 微信：型云
      img(src="@/assets/images/jiagong_b4.png", width="254px", height="251px")
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Banner from './banner.vue'

@Component({
  layout: 'ShopMall',
  components: {
    Banner
  }
})
class Index extends Vue {
  swiperOption: any
  swiperSlides: Array<string>
  constructor() {
    super()
    this.swiperOption = {
      slidesPerView: 4,
      spaceBetween: 35,
      speed: 300,
      autoplay: {
        delay: 3000
      }
    }
    this.swiperSlides = [
      require('@/assets/images/jiagong_j9.jpg'),
      require('@/assets/images/jiagong_j3.jpg'),
      require('@/assets/images/jiagong_j2.jpg'),
      require('@/assets/images/jiagong_j1.jpg'),
      require('@/assets/images/jiagong_j9.jpg'),
      require('@/assets/images/jiagong_j3.jpg'),
      require('@/assets/images/jiagong_j2.jpg'),
      require('@/assets/images/jiagong_j1.jpg')
    ]
  }
}
export default Index
</script>
<style lang="stylus" scoped>
.zhd-table thead > tr > th, .zhd-table tbody > tr > td, .zhd-table tfoot > tr > td
  padding 12px
  line-height 23px
  text-align center
  border-left none
  border-right none
.zhd-table thead tr th, .zhd-table thead tr td
  border-bottom-width 2px
.zhd-table thead tr th, .zhd-table tbody tr th, .zhd-table tfoot tr th, .zhd-table thead tr td, .zhd-table tbody tr td, .zhd-table tfoot tr td
  border 1px solid #dddddd
.zhd-table thead tr th
  background #f6f6f6
  border-collapse collapse
  font-weight bold
.zhd-table tbody tr:nth-child(2n) td
  background #f6f6f6
.zhd-btn
  width 188px
.slide-img
  border-radius 10px
  width 260px
  height 173px
  overflow hidden
.foot-contact
  width 700px
  padding-left 30px
.machine-content
  height 249px
  overflow hidden
</style>
