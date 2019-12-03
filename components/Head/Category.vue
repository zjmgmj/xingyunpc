<template lang="pug">
.category
  .category-nav
    .category-list.flex.flex-center(v-for="item in categoryList")
      .list-box
        i
        h3 {{item.title}}
        .mt-5.ft-13.list-height.flex
          span(v-for="name in item.goodsName") {{name}}
      i.ft-20.text-right.iconfont.icon-arrowright(style="width: 10px")
      //- .panel-more(:style="$route.path === '/home' ? ")
      .panel-more
        .tab-box.border-bottom-1.mt-20.pb-5
          .title 品名
          .flex.mt-5
            .list(v-for="name in item.goodsName") 
              router-link(to="/") {{name}}
        .tab-box.border-bottom-1.mt-15.pb-5
          .title 材质
          .flex.mt-5
            .list(v-for="material in item.material") 
              router-link(to="/") {{material}}
        .tab-box.mt-15.pb-5
          .title 产地
          .flex.mt-5
            .pro-list(v-for="area in item.productArea") 
              router-link(to="/") {{area}}
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

interface categoryListInterFace {
  title: string
  goodsName: Array<string>
  material?: Array<string>
  productArea?: Array<string>
  icon?: string
}

@Component({})
class Category extends Vue {
  categoryList: Array<categoryListInterFace> = [
    {
      title: '型钢',
      goodsName: [
        '角钢',
        '槽钢',
        'H型钢',
        '工字钢',
        '不等边角钢',
        '圆钢(机械类)',
        '低合金H型钢',
        '纵剪扁钢',
        '热轧扁钢'
      ],
      material: ['Q235', 'Q235B', 'Q345B', 'Q355B'],
      productArea: [
        '安钢',
        '安泰',
        '宝得',
        '东方特钢',
        '富钢',
        '杭州',
        '河北',
        '津西',
        '莱钢'
      ]
    },
    {
      title: '卷板',
      goodsName: ['普碳开平板', '低合金开平板', '花纹板']
    },
    {
      title: '镀锌',
      goodsName: ['镀锌槽钢', '镀锌角钢', '镀锌扁钢'],
      material: ['Q235', 'Q235B', 'Q345B', 'Q355B'],
      productArea: [
        '安钢',
        '安泰',
        '宝得',
        '东方特钢',
        '富钢',
        '杭州',
        '河北',
        '津西',
        '莱钢'
      ]
    }
  ]
}
export default Category
</script>
<style lang="stylus" scoped>
.category
  width 201px
  height 390px
  background rgba(0, 0, 0, 0.7)
  color #fff
  text-align left
  box-sizing border-box
  position absolute
  top 34px
  left 0
  z-index 999
.category-nav
  cursor pointer
.category-list
  padding-top 14px
  .list-box
    margin-left 10px
    // padding-top 30px
    padding-top 15px
    padding-bottom 15px
    width 161px
    margin-right 5px
    span
      padding-right 9px
      color #eee
      font-size 12px
      line-height 27px
      word-break keep-all
    i
      display block
      width 25px
      height 25px
      float left
      background url('../../assets/images/xy_icon.png') no-repeat
      margin-right 8px
  &:first-child
    .list-box i
      background-position -65px -18px
  &:nth-child(2)
    .list-box i
      background-position -90px -17px
  &:nth-child(3)
    .list-box i
      background-position -119px -15px
  .list-height
    height 60px
    overflow hidden
    text-overflow ellipsis
    color #eee
    font-size 12px
    line-height 27px
  .panel-more
    display none
    width 489px
    height 390px
    background #ffffff
    position absolute
    left 201px
    top 0
    padding 10px 20px 26px 20px
    .title
      color #333
      font-size 15px
      font-weight 700
    .list
      border-right 1px solid #cdcdcd
      font-size 13px
      color #666
      line-height 18px
      margin-bottom 10px
      margin-right 10px
      padding-right 10px
      &:last-child
        border-right none
      a
        color #666
        &:hover
          color #dc0000
    .pro-list
      color #666
      border 1px #ccc solid
      padding 0 5px
      height 30px
      line-height 30px
      font-size 13px
      margin-right 10px
      margin-bottom 10px
      a
        color #666
        &:hover
          color #fff
      &:hover
        background #dc0000
        color #fff
        a
          color #fff
  &:hover
    background #0289fb
    .panel-more
      display block
</style>