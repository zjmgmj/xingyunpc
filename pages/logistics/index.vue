<template lang="pug">
b-container.p-0(:fluid="true")
  .banner
  .content
    .ft-20.pt-20.pb-15.text-333 询价找车
    .flex.flex-content-between
      .bg-white.ride-finder.flex.flex-content-between
        .ride-finder-l.pt-20
          .mb-15.flex.flex-center
            .label 装货地
            .input-box
              select
                option(v-for="(item, index) in placeOption", :key="index") {{item}}
          .mb-15.flex.flex-center
            .label 卸货地
            .input-box
              SelectArea
          .mb-15.flex.flex-center
            .label 品种
            .input-box
              SelectVariety
          .mb-15.flex.flex-center
            .label 吨位
            .input-box
              input(type="number", placeholder="0.00")
          .mt-25
            b-button.wl_btn
              i.ft-13.iconfont.icon-sousuo
              span.pl-5 查运价
            b-button.wl_z 帮我找车
          .mt-25
            b-button.wl_btn.wl_o 我的物流单
        .ride-finder-r
          .pt-15.ft-18.text-center 微信下单更便捷
          .pt-10.ft-14.text-666.line-height-20 扫码立即关注型云微信公众号第一时间了解型云动态
          .pt-15
            img(src="@/assets/images/wl_xy.jpg", width="240px", height="284px")
      .real-time-data.text-center.text-666
        .ft-18.p-20 实时数据
        .real-time-data-content.ft-13
          .real-time-data-box(ref="realTimeDataBox", :class="{anim: animate}", style="top: 0px")
            .pt-15.pb-15.flex.flex-content-between(v-for="(item, index) in realTimeData", style="height: 45px")
              .wl_city {{item.city}}
              .wl_weight
                span.text-red {{item.weight}}
                span 吨  {{item.name}}
              .wl_num  {{item.tel}}
              .wl_text(:class="item.status === '询价中' ? 'text-red' : 'text-green'")  {{item.status}}
    .ft-20.pt-20.pb-15.text-333 优质线路推荐
    .bg-white.line-recommendation
      .swiper-container.swiper-container-horizontal(v-swiper:mySwiper="swiperOption")
        .swiper-wrapper
          .swiper-slide.text-center(v-for="(item, index) in 9" :key="index")
            .border-right-line
              .ft-16 常州市  武进区
              i.iconfont.icon-arrowdown
              .ft-16 无锡市  江阴市
              .mt-10.text-red.ft-18
                strong 参考价：35元/吨
              .text-666.ft-13 (含税)
              b-button.wl_z.mt-10 帮我找车
        .swiper-button-next
        .swiper-button-prev
    .ft-20.pt-20.pb-15.text-333 战略合作伙伴
    .bg-white.p-25.flex.text-center.team-box
      .border-right-line.pt-35.pl-20.pr-20
        img(src="@/assets/images/wl_hyh.jpg")
      .border-right-line.pt-35.pl-30.pr-30
        img(src="@/assets/images/wl_zczy.jpg")
      .col.pt-5.pl-40.ft-14.text-666.text-left.line-height-25.flex.flex-content-between.flex-center
        div
          .ft-18.mb-10 联系我们
          p 地址：江苏省常州市新北区太湖东路9-3创意产业园C栋8楼
          p 电话：400-8788-361
          p 传真：0519-86868361
          p 微信：型云
        img(src="@/assets/images/wl_wx.jpg", width="112px", height="112px")
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import SelectArea from '@/components/SelectArea/index.vue'
import SelectVariety from '@/components/SelectVariety/index.vue'

@Component({
  layout: 'ShopMall',
  components: {
    SelectArea,
    SelectVariety
  }
})
class Index extends Vue {
  animate: boolean = false
  placeOption: any = [
    '请选择仓库',
    '常州东港',
    '合肥徽商钢材市场',
    '合肥东港码头'
  ]

  realTimeData: Array<any> = [
    {
      city: '常州市-杭州市',
      weight: '31',
      name: '工字钢',
      tel: '188******52',
      status: '询价中'
    },
    {
      city: '常州市-杭州市',
      weight: '32',
      name: '工字钢',
      tel: '188******52',
      status: '询价中'
    },
    {
      city: '常州市-杭州市',
      weight: '33',
      name: '工字钢',
      tel: '188******52',
      status: '询价中'
    },
    {
      city: '常州市-杭州市',
      weight: '34',
      name: '工字钢',
      tel: '188******52',
      status: '询价中'
    },
    {
      city: '常州市-杭州市',
      weight: '35',
      name: '工字钢',
      tel: '188******52',
      status: '已成交'
    },
    {
      city: '常州市-杭州市',
      weight: '36',
      name: '工字钢',
      tel: '188******52',
      status: '询价中'
    },
    {
      city: '常州市-杭州市',
      weight: '37',
      name: '工字钢',
      tel: '188******52',
      status: '询价中'
    },
    {
      city: '常州市-杭州市',
      weight: '38',
      name: '工字钢',
      tel: '188******52',
      status: '已成交'
    },
    {
      city: '常州市-杭州市',
      weight: '39',
      name: '工字钢',
      tel: '188******52',
      status: '询价中'
    },
    {
      city: '常州市-杭州市',
      weight: '32',
      name: '工字钢',
      tel: '188******52',
      status: '询价中'
    },
    {
      city: '常州市-杭州市',
      weight: '32',
      name: '工字钢',
      tel: '188******52',
      status: '已成交'
    },
    {
      city: '常州市-杭州市',
      weight: '32',
      name: '工字钢',
      tel: '188******52',
      status: '询价中'
    },
    {
      city: '常州市-杭州市',
      weight: '32',
      name: '工字钢',
      tel: '188******52',
      status: '询价中'
    },
    {
      city: '常州市-杭州市',
      weight: '32',
      name: '工字钢',
      tel: '188******52',
      status: '已成交'
    }
  ]

  realTimeDataInter: any

  swiperOption: any = {
    slidesPerView: 5,
    speed: 300,
    autoplay: {
      delay: 5000
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      notificationClass: 'swiper-notification'
    }
  }

  swiperSlides: Array<string> = []

  mounted() {
    this.$nextTick(() => {
      // const realTimeDataCount = this.realTimeData.length
      this.realTimeDataInter = setInterval(() => {
        this.animate = !this.animate
        const that = this // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
        const realTimeDataBox: any = this.$refs.realTimeDataBox
        const top: string = parseInt(realTimeDataBox.style.top) - 45 + 'px'
        realTimeDataBox.style.top = top
        setTimeout(function() {
          that.animate = !that.animate // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
          that.realTimeData.push(that.realTimeData[0])
          that.realTimeData.shift()
          realTimeDataBox.style.top = '0px'
        }, 500)
      }, 5000)
    })
  }

  destroyed() {
    clearInterval(this.realTimeDataInter)
  }
}
export default Index
</script>
<style lang="stylus" scoped>
.banner
  height 389px
  width 100%
  background url('../../assets/images/wl_banner.jpg') no-repeat center
.ride-finder
  width 788px
  height 400px
  padding 20px 15px 0 35px
.label
  width 60px
  float left
  height 40px
  line-height 40px
  color #666
.input-box select, .input-box input
  width 280px
  height 40px
  border 1px solid #ccc
  color #999
  padding-left 10px
  font-size 14px
.wl_btn, .wl_z
  width 130px
  height 38px
  border 1px solid #dcdcdc
  color #666
  font-size 16px
  background #fff
  margin-left 20px
.wl_z
  background #0171ef
  color #fff
  border 1px solid #0171ef
.wl_o
  background #dcb90e
  color #fff
  border 1px solid #dcb90e
  width 280px
.ride-finder-l
  width 455px
.ride-finder-r
  width 240px
  height 400px
.wl_right
  width 392px
  height 400px
  margin-left 20px
  background #fff
.real-time-data
  width 392px
  height 400px
  background #fff
  // padding 20px
  font-size 18px
  .wl_city
    width 120px
  .wl_weight
    width 120px
  .wl_num
    width 90px
  .wl_text
    width 60px
  .real-time-data-content
    height 315px
    overflow hidden
  .real-time-data-box
    position relative
    top 0px
    &.anim
      transition all 0.5s
.line-recommendation
  height 260px
  width 100%
.swiper-slide
  padding 30px 0
  // width 237px
  box-sizing border-box
  line-height 30px
  .wl_z
    background #0171ef
    color #fff
    border 1px solid #0171ef
    margin-left 0
/deep/.swiper-button-prev, .swiper-container-rtl .swiper-button-next
  background url('../../assets/images/wl_letf.png')
  width 36px
  height 70px
  margin-top -35px
/deep/.swiper-button-next, .swiper-container-rtl .swiper-button-prev
  background url('../../assets/images/wl_right.png')
  width 36px
  height 70px
  margin-top -35px
.team-box
  height 190px
  box-sizing border-box
</style>
