<template lang="pug">
b-container.p-0(:fluid="true")
  .swiper-container(v-swiper:mySwiper="swiperOption")
    .swiper-wrapper
      .swiper-slide(v-for="(path, index) in swiperSlides" :key="index")
        .banner-img
          img(:src="path", :key="index")
    .swiper-pagination
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

// interface swiperOption {
//   initialSlide?: number
//   pagination?: object
//   speed?: number
//   autoplay?: object
// }

@Component({})
class Banner extends Vue {
  swiperOption: any
  swiperSlides: Array<string>
  constructor() {
    super()
    this.swiperOption = {
      initialSlide: 0,
      pagination: {
        el: '.swiper-pagination'
      },
      speed: 300,
      autoplay: {
        delay: 3000
      }
    }
    this.swiperSlides = [
      require('@/assets/images/banner1.jpg'),
      require('@/assets/images/banner2.jpg')
    ]
  }
}
export default Banner
</script>
<style lang="stylus" scoped>
/deep/.swiper-pagination-bullet
  background #fff
  opacity 1
  /deep/&.swiper-pagination-bullet-active
    background #f9a720
/deep/.swiper-slide
  position relative
.swiper-container
  height 390px
.banner-img
  width 1920px
  position absolute
  left 50%
  margin-left -960px
  text-align center
  z-index 3
</style>
