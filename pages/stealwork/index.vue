<template lang="pug">
b-container.p-0(:fluid="true")
  .banner
  .content.text-center
    .ft-30.mt-50.mb-50 专业的钢铁大宗供应链管理解决方案
    .flex
      .col.tab(@mouseover="selectTab('crm')", :class="{active: tabActive==='crm'}")
        .icon-img1
        .mt-10 型云CRM
        .animated.slideInLeft.fa-line ——————
      .col.tab(@mouseover="selectTab('warehouse')", :class="{active: tabActive==='warehouse'}")
        .icon-img2
        .mt-10 型云仓储App
        .animated.slideInLeft.fa-line ——————
      .col.tab(@mouseover="selectTab('craneScale')", :class="{active: tabActive==='craneScale'}")
        .icon-img3
        .mt-10 型云吊秤系统
        .animated.slideInLeft.fa-line ——————
  Crm(v-show="tabActive === 'crm'")
  Warehouse(v-show="tabActive === 'warehouse'")
  CraneScale(v-show="tabActive === 'craneScale'")
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Crm from './crm.vue'
import Warehouse from './warehouse.vue'
import CraneScale from './craneScale.vue'

@Component({
  layout: 'ShopMall',
  components: {
    Crm,
    Warehouse,
    CraneScale
  }
})
class Index extends Vue {
  tabActive: string = 'crm'
  selectTab(flag: string) {
    this.tabActive = flag
    // const selectTab: any = this.$refs[flag]
    // console.log('refs', this.$refs)
    // selectTab.className += ' active'
  }
}
export default Index
</script>
<style lang="stylus" scoped>
.banner
  height 378px
  width 100%
  background url('../../assets/images/fangan-banner.jpg') no-repeat center
.icon-img1, .icon-img2, .icon-img3
  width 92px
  height 107px
.tab
  font-size 18px
  height 207px
  .icon-img1
    background url('../../assets/images/fa-1.png') no-repeat center
  .icon-img2
    background url('../../assets/images/fa-2.png') no-repeat center
  .icon-img3
    background url('../../assets/images/fa-3.png') no-repeat center
  .fa-line
    display none
    text-align center
    font-weight bold
    margin 40px auto 0
  &.active
    color #0289fb
    .icon-img1
      background url('../../assets/images/fa-1-hover.png') no-repeat center
    .icon-img2
      background url('../../assets/images/fa-2-hover.png') no-repeat center
    .icon-img3
      background url('../../assets/images/fa-3-hover.png') no-repeat center
    .fa-line
      display block
</style>
