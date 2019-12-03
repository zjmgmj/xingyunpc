<template lang="pug">
.bg-white.p-10.line-height-25.ft-12.mt-5.pt-0
  .filter-list.flex.flex-content-between.mb-10(v-for="(category, index) in searchList", :key="index")
    .ft-13.name {{category.name}}：
    .ft-12.all-btn.text-666.active-btn 全部
    .search-content.text-666(style="height: 25px", :ref="`${category.id}Ref`", v-show="!category.checkShow")
      .search-content-ul.flex
        .key-list(v-for="(item, index) in category.list", :key="index", @click="check(item, category.id)") {{item.name}}
    .more-btn.flex.ft-12.text-666(v-show="!category.checkShow")
      .check-btn.flex.flex-center.border(@click="checkShowBtn(category)")
        i.iconfont.icon-jia
        span 多选
      .ml-10.flex.flex-center.more-open(@click="openMore(`${category.id}Ref`, category)")
        span {{category.moreShow ? '收起' : '更多' }}
        i.iconfont.ft-12(:class="category.moreShow ? 'icon-arrowup' : 'icon-arrowdown'")
    .search-check-content.pb-15(v-show="category.checkShow")
      .flex.flex-center.search-check-content-ul
        b-form-checkbox.check-list(v-for="(item, index) in category.list", :key="index", inline) {{item.name}}
      .text-center
        button.zhd-btn.zhd-btn-sm.zhd-btn-warning-border.zhd-btn-warning 确定
        button.zhd-btn.zhd-btn-sm.zhd-btn-warning-border.zhd-btn-warning.back-check-btn(@click="checkShowBtn(category)") 回单选
</template>
<script lang='ts'>
import { Component, Vue, Emit } from 'vue-property-decorator'

@Component
class FilterView extends Vue {
  searchList: Array<any>
  constructor() {
    super()
    this.searchList = [
      {
        name: '品名',
        id: 'goodsName',
        moreShow: false,
        checkShow: false,
        list: [
          { name: '普碳开平板' },
          { name: '低合金H型钢' },
          { name: '工字钢' },
          { name: '等边角钢' }
        ]
      },
      {
        name: '材质',
        id: 'material',
        moreShow: false,
        checkShow: false,
        list: [
          { name: 'Q235' },
          { name: 'Q235B' },
          { name: 'Q345B' },
          { name: 'RECC' }
        ]
      },
      {
        name: '规格',
        id: 'spec',
        moreShow: false,
        checkShow: false,
        list: [
          { name: '1.0*1500' },
          { name: '1.4*1500' },
          { name: '1.5*1250' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' },
          { name: '1.6*1260*2500-1.5' }
        ]
      }
    ]
  }

  checkShowBtn(category: any) {
    category.checkShow = !category.checkShow
  }

  openMore(ref: string, category: any) {
    const node: any = this.$refs[ref]
    category.moreShow = !category.moreShow
    if (parseInt(node[0].style.height) > 25) {
      node[0].style.height = '25px'
    } else {
      const height: number = node[0].children[0].clientHeight
      node[0].style.height = height + 'px'
    }
  }

  @Emit()
  check(item: any, id: any) {
    return { item, id }
  }
}
export default FilterView
</script>
<style lang="stylus" scoped>
.name
  width 80px
  text-align right
.key-list
  height 25px
  margin 0 10px 10px 0
  padding 0 10px
  cursor pointer
  word-wrap break-word
  word-break break-all
  &.active-btn, &:hover
    background #007ce5
    color #fff
    border-radius 2px
.check-list
  height 25px
  width 200px
  margin 0 10px 10px 10px
  // padding 0 10px
.all-btn
  padding 0 10px
  width 45px
  margin-bottom 10px
  height 25px
  cursor pointer
  word-wrap break-word
  word-break break-all
  &.active-btn, &:hover
    background #007ce5
    color #fff
    border-radius 2px
.search-content
  width 915px
  height 35px
  overflow hidden
  transition all 0.5s
  padding-left 3px
.search-check-content
  width 1030px
  // padding-left 3px
.search-check-content-ul
  max-height 400px
.more-btn
  line-height 25px
  width 105px
  height 27px
.more-open
  cursor pointer
.check-btn
  border 1px #ddd solid
  text-align center
  cursor pointer
  border-radius 2px
  padding 0 5px
  line-height 25px
  font-size 12px
  color #666
  &:hover
    background #ddd
    color #333
/deep/.custom-checkbox .custom-control-label::before
  top 0.4rem
/deep/.custom-control-label::after
  top 0.4rem
.back-check-btn
  margin-left 10px
  background #fff
  color #333
  border 1px solid #ddd
  &:hover
    border-color #0289fb
.filter-list
  border-bottom 1px #eee solid
  &:last-child
    border-bottom none
</style>
