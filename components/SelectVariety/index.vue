<template lang="pug">
.select-area
  input.select-area-input(v-model="selectAreaVal", ref="selectInput", placeholder="请选择品种", readonly, @click.stop="selectClick")
  .select-tab-box(v-show="tabShow")
    .select-tab
      .tabs
        .head.flex
          .col.border-right-line(@click.stop="tabIndex = 0", :class="tabIndex === 0 ? 'active' : 'border-bottom-line'") 一级
          .col.border-right-line(@click.stop="tabIndex = 1", :class="tabIndex === 1 ? 'active' : 'border-bottom-line'") 二级
          .col(@click.stop="tabIndex = 2", :class="tabIndex === 2 ? 'active' : 'border-bottom-line'") 三级
        .select-content.text-blue
          //- 省份
          .tab(v-show="tabIndex === 0")
            .flex.mb-10(v-for="(label, index) in category", :key="index")
              .label.pt-10 {{label}}
              .area-content.flex
                span.area-list.pr-10.pb-10.pt-10(v-for="item in provinceList[label]", :key="item.id", @click.stop="selectProvince(item)") {{item.name}}
          .tab(v-show="tabIndex === 1")
            .flex.mb-10(v-for="(label, index) in category", :key="index")
              .label.pt-10 {{label}}
              .area-content.flex
                span.area-list.pr-10.pb-10.pt-10(v-for="item in cityList[label]", :key="item.id", @click.stop="selectCity(item)") {{item.name}}
          .tab(v-show="tabIndex === 2")
            .flex.mb-10(v-for="(label, index) in category", :key="index")
              .label.pt-10 {{label}}
              .area-content.flex
                span.area-list.pr-10.pb-10.pt-10(v-for="item in areaList[label]", :key="item.id", @click.stop="selectArea(item)") {{item.name}}
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import CharfirstPinyin from '@/components/SelectArea/CharfirstPinyin'
const goodsData = require('./goods.json')
const CharfirstPinyinFun = new CharfirstPinyin()

@Component
class Index extends Vue {
  initData: Array<any>
  provinceList: Array<any>
  cityList: Array<any>
  areaList: Array<any>
  category: Array<string>
  tabIndex: number
  selectAreaVal: string
  tabShow: boolean = false
  constructor() {
    super()
    this.provinceList = []
    this.cityList = []
    this.areaList = []
    this.tabIndex = 0
    this.initData = goodsData
    this.category = ['A-G', 'H-N', 'O-U', 'V-Z']
    this.selectAreaVal = ''
  }

  mounted() {
    this.$nextTick(() => {
      this.getProvince()
      document.addEventListener('click', () => {
        this.tabShow = false
      })
    })
  }

  getProvince() {
    this.provinceList = this.filterArea(this.initData)
  }

  selectProvince(item: any) {
    this.selectAreaVal = item.name
    this.cityList = this.filterArea(item.children)
    this.areaList = []
    this.tabIndex++
  }

  selectCity(item: any) {
    this.areaList = this.filterArea(item.children)
    const selectAreaList: Array<string> = this.selectAreaVal.split(',')
    selectAreaList[1] = item.name
    selectAreaList[2] = ''
    this.selectAreaVal = selectAreaList.toString()
    this.tabIndex++
  }

  selectArea(item: any) {
    const selectAreaList: Array<string> = this.selectAreaVal.split(',')
    selectAreaList[2] = item.name
    this.selectAreaVal = selectAreaList.toString()
    this.tabShow = false
  }

  selectClick() {
    this.tabShow = !this.tabShow
  }

  filterArea(data: any) {
    const res: any = {
      'A-G': [],
      'H-N': [],
      'O-U': [],
      'V-Z': []
    }
    Array.from(data).map((item: any) => {
      const letter = CharfirstPinyinFun.makePy(item.name)[0]
        .toUpperCase()
        .charAt(0)
      switch (letter) {
        case 'A':
        case 'B':
        case 'C':
        case 'D':
        case 'E':
        case 'F':
        case 'G':
          res['A-G'].push(item)
          break
        case 'H':
        case 'I':
        case 'J':
        case 'K':
        case 'L':
        case 'M':
        case 'N':
          res['H-N'].push(item)
          break
        case 'O':
        case 'P':
        case 'Q':
        case 'R':
        case 'S':
        case 'T':
        case 'U':
          res['O-U'].push(item)
          break
        case 'V':
        case 'W':
        case 'X':
        case 'Y':
        case 'Z':
          res['V-Z'].push(item)
          break
      }
    })
    return res
  }
}
export default Index
</script>
<style lang="stylus" scoped>
.head
  line-height 30px
  list-style none
  text-align center
  height 35px
  line-height 35px
  box-sizing border-box
  cursor pointer
  background-color #f4f4f4
.label
  width 40px
.area-content
  width 415px
.select-area
  // width 480px
  position relative
  .area-list
    cursor pointer
.select-tab-box
  position relative
.select-tab
  position absolute
  top -1px
  z-index 99
  background #fff
  border 1px #cad0dd solid
  width 480px
.select-content
  padding 10px
.select-area-input
  width 280px
  height 40px
  border 1px solid #ccc
  color #999
  padding-left 10px
  font-size 14px
.head .active
  background #fff
</style>
