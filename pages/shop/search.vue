<template lang="pug">
.mt-15
  .flex.flex-center
    .col.p-0
      .flex.flex-center(v-show="filterShow")
        .key-list.flex.flex-center(v-for="(item, index) in searchKey", :key="index")
          span {{item.category}}:
          .key-content.ellps-row {{item.data.toString()}}
          i.iconfont.icon-shanchu.pl-5
        .key-clear.key-list 清除全部
    .open-btn(@click="openFilter")
      span {{filterShow ? '收起' : '展开'}}
      i.iconfont(:class="filterShow ? 'icon-arrowup' : 'icon-arrowdown'")
  .bg-white.border.mt-10
    //- transition(name="filter-view", mode="out-in")
    .filter-view-enter(:style="{height: filterShow ? '280px' : '0'}")
      FilterView(v-show="filterShow", @check="getFilter")
    transition(name="check-name", mode="out-in")
      .goods-name-panel.flex.flex-center(v-show="!filterShow")
        .list(v-for="(name, index) in goodsNameList") {{name}}
    .search-box.flex.p-10
      .flex.flex-center.search-input
        .pr-10 品名
        z-input-remote(:options="options", @input="inputRemoteChange", :value="searchForm.goodsName")
      .flex.flex-center.search-input
        .pr-10 规格
        z-input-remote(:options="options", @input="inputRemoteChange", :value="searchForm.goodsName")
      .flex.flex-center.search-input
        .pr-10 材质
        z-input-remote(:options="options", @input="inputRemoteChange", :value="searchForm.goodsName")
      .flex.flex-center.search-input
        .pr-10 长度
        input.border-eee.pl-5(type="text")
      .flex.flex-center.search-input
        .pr-10 公差
        input.border-eee.pl-5(type="text")
      .flex.flex-center.search-input
        .pr-10 重量
        //- InputRemote(:options="options", @change="inputRemoteChange", :value="searchForm.goodsName")
        input.border-eee.pl-5(type="text")
      .flex.flex-center.search-input
        .pr-10 产地
        z-input-remote(:options="options", @input="inputRemoteChange", :value="searchForm.goodsName")
      .flex.flex-center.search-input
        .pr-10 仓库
        z-input-remote(:options="options", @input="inputRemoteChange", :value="searchForm.goodsName")
      button.zhd-btn.search-btn 搜索
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import FilterView from './filterView.vue'

@Component({
  components: {
    FilterView
  }
})
class Search extends Vue {
  searchKey: Array<any>
  filterShow: boolean = false
  options: any = {
    list: ['普碳开平板', '普碳开平板1']
  }

  searchForm: any = {
    goodsName: '11'
  }

  goodsNameList: Array<any> = [
    '全部品名',
    '普碳H型钢',
    '低合金H型钢',
    '工字钢',
    '等边角钢',
    '不等边角钢',
    '槽钢',
    '圆钢',
    '纵剪扁钢',
    '镀锌扁钢',
    '热轧扁钢',
    '普碳开平板',
    '低合金开平板',
    '花纹板',
    '普碳卷板',
    '低合金卷板',
    '花纹卷',
    '冷卷',
    '镀锌槽钢',
    '镀锌角钢'
  ]

  constructor() {
    super()
    this.searchKey = [
      {
        category: '品名',
        data: ['低合金H型钢', '低合金H型钢']
      },
      {
        category: '材质',
        data: ['Q235B', 'Q345B']
      }
    ]
  }

  openFilter() {
    this.filterShow = !this.filterShow
  }

  inputRemoteChange(e: any) {
    console.log('inputRemoteChange', e)
  }

  getFilter({ item, id }: any) {
    this.searchForm.goodsName = item.name
    console.log(id)
  }
}
export default Search
</script>
<style lang="stylus" scoped>
.open-btn
  background none
  border 1px solid #0289fb
  color #0289fb
  padding 5px 10px
  width 70px
  text-align center
  border-radius 3px
  cursor pointer
.key-list
  white-space nowrap
  padding 0 8px 0 8px
  border dotted 1px #999
  font-size 12px
  height 25px
  line-height 24px
  margin-right 10px
  background-color #fff
  color #999
  cursor pointer
  // display none
  overflow hidden
  .key-content
    max-width 200px
.search-input
  margin-right 10px
  /deep/.input-remote, input
    height 40px
    width 75px
  &:nth-child(1)
    /deep/.input-remote
      width 90px
  &:nth-child(2)
    /deep/.input-remote
      width 150px
  &:nth-child(3)
    /deep/.input-remote
      width 100px
.border-eee
  border 1px #eee solid
.search-btn
  width 64px
.goods-name-panel
  background #fafafa
  .list
    width 10%
    height 50px
    line-height 50px
    text-align center
    font-size 13px
    color #333
    cursor pointer
    &:hover
      color #0289fb
      background #fff
      border-bottom 2px solid #0289fb
.filter-view-enter
  height 0
  overflow hidden
  transition all 0.4s ease
</style>
