<template lang="pug">
  .content.main-list(ref="mainList")
    .flex.flex-content-between.bg-white.main-list-header
      .flex.p-10.flex-center
        .time
          strong 距闭市：
          span.time-box 03
          span.pl-5.pr-5 时
          span.time-box 44
          span.pl-5.pr-5 分
          span.time-box 43
          span.pl-5.pr-5 秒
        .ml-20.flex.flex-center.shop-hot
          .relative-position
            span 快速筛选：
            i
          b-form-checkbox.ml-15(v-model="isLike", inline)
            strong 猜您喜欢
        .ml-20.check-area
          b-form-group(label="地区：", label-cols-lg="4")
            b-form-select(v-model="tableVariant", :options="tableVariants")
        .ml-20.search-box
          .flex.flex-center
            input.border-dd(placeholder="请输入关键词,多关键词以空格隔开")
            button 搜索
      .pagination.flex.flex-center.mr-10
        .page-num.mr-10
          span.text-blue 6
          span.pl-5.pr-5 /
          span 27
          span.pl-5 页
        .page-btn.flex
          button
            i.iconfont.icon-arrowleft
          button
            i.iconfont.icon-arrowright
    b-table.ft-13.main-table(striped, hover, :items="tableValue.item", :fields="tableValue.fields")
      template(v-slot:cell(name)="data")
        router-link(to="/shop/detail") {{data.value}}
        //- span {{data.value}}
      template(v-slot:cell(warehouse)="data")
        .warehouse.text-blue(:id="'warehouse_'+data.index") {{data.value}}
        b-tooltip(:target="'warehouse_'+data.index", placement="topleft", custom-class="main-list-table-tooltip")
          span 江苏常州武进区东港
      template(v-slot:cell(price)="data")
        b-form-group
          b-form-radio(v-model="data.item.metering" checked value="理计") 理计 {{data.value}}
          b-form-radio(v-model="data.item.metering" checked value="磅计") 磅计 {{data.value}}
      template.num-input(v-slot:cell(num)="data")
        z-input-num(@add="inputNumberAdd(data)", @reduce="inputNumberReduce(data)", :value="data.value")
      template(v-slot:cell(option)="data")
        b-button.ft-13.zhd-btn-sm.zhd-btn-abs(variant="danger")
          i.iconfont.icon-cart
          span.pl-5 购买
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'

@Component
class MainList extends Vue {
  isLike: boolean = false
  tableVariants: Array<string> = ['全部', '常州']
  tableVariant: string = '全部'
  tableValue: any = {
    fields: [
      { key: 'name', label: '品名', sortable: true, class: 'name-style' },
      { key: 'material', label: '材质', class: 'material-style' },
      { key: 'specification', label: '规格', class: 'specification-style' },
      { key: 'length', label: '长度(m)', class: 'length-style' },
      { key: 'range', label: '重量范围/公差范围', class: 'range-style' },
      { key: 'area', label: '产地', class: 'area-style' },
      { key: 'warehouse', label: '仓库', class: 'warehouse-style' },
      { key: 'number', label: '数量(支)', class: 'number-style' },
      { key: 'weight', label: '总重量(吨)', class: 'weight-style' },
      { key: 'price', label: '单价', class: 'price-style' },
      { key: 'num', label: '购买数(支)', class: 'num-input' },
      { key: 'option', label: '操作', class: 'option-style' }
    ],
    item: [
      {
        name: 'H型钢',
        material: 'Q235B',
        specification: '100*100*6000',
        length: '12.0',
        range: '',
        area: '常州',
        warehouse: '东港',
        number: '10',
        weight: '100',
        price: '1000',
        num: '100',
        metering: '理计'
      },
      {
        name: 'H型钢',
        material: 'Q235B',
        specification: '100*100*6000',
        length: '12.0',
        range: '',
        area: '常州',
        warehouse: '东港',
        number: '10',
        weight: '100',
        price: '1000',
        num: '100',
        metering: '理计'
      },
      {
        name: 'H型钢',
        material: 'Q235B',
        specification: '100*100*6000',
        length: '12.0',
        range: '',
        area: '常州',
        warehouse: '东港',
        number: '10',
        weight: '100',
        price: '1000',
        num: '100',
        metering: '理计'
      }
    ]
  }

  @Watch('scroll')
  onScrollChaned(val: number) {
    console.log('scroll', val)
  }

  mounted() {
    this.$nextTick(() => {
      const me = this
      const mainListRef: any = me.$refs.mainList
      let scrollTop = 0
      const mainListOffsetTop = mainListRef.offsetTop
      window.addEventListener('scroll', () => {
        scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop
        if (scrollTop >= mainListOffsetTop) {
          mainListRef.childNodes[1].firstElementChild.className =
            'zhd-shop-table-thead'
          mainListRef.childNodes[0].className =
            'flex flex-content-between bg-white main-list-header pf'
        } else {
          mainListRef.childNodes[1].firstElementChild.className = ''
          mainListRef.childNodes[0].className =
            'flex flex-content-between bg-white main-list-header'
        }
      })
    })
  }

  inputNumberAdd(data: any): void {
    let val = Number(data.value)
    data.item[data.field.key] = ++val
    console.log(val)
  }

  inputNumberReduce(data: any): void {
    console.log('inputNumberReduce')
    let val = Number(data.value)
    data.item[data.field.key] = --val
  }
}
export default MainList
</script>
<style lang="stylus">
.main-list
  // border 1px #ddd solid
  margin-top 30px
  .main-list-header
    border 1px #ddd solid
    border-bottom none
    &.pf
      position fixed
      width 1200px
      z-index 9
      top 0
  .time
    .time-box
      color #fff
      background #dd514c
      border-radius 2px
      padding 2px 2px
  /deep/.custom-control-label::before
    width 1.2rem
    height 1.2rem
  /deep/.custom-checkbox .custom-control-label::before
    border-radius 0.15rem
  /deep/.custom-control-label::after
    width 1.2rem
    height 1.2rem
  /deep/.custom-control, .shop-hot
    i
      position absolute
      background url('../../assets/images/hot.png') no-repeat center
      width 28px
      height 17px
      top -14px
      right -18px
    .custom-checkbox
      strong
        position relative
        top 4px
        left 3px
  .check-area
    width 150px
    /deep/.form-group
      margin-bottom 0
    /deep/.custom-select
      /deep/option
        font-size 14px
  .main-table
    text-align center
  /deep/.table
    margin-bottom 0
    border 1px #ddd solid
    /deep/.form-group
      margin-bottom 0
    .warehouse
      width 100%
    .zhd-shop-table-thead
      position fixed
      top 54px
      width 1198px
      background #f6f6f6
      z-index 5
      // border-right: 1px #ddd solid
    .name-style
      width 109px
    .material-style
      width 70px
    .specification-style
      width 141px
    .length-style
      width 77px
    .range-style
      width 156px
    .area-style
      width 81px
    .warehouse-style
      width 98px
    .number-style
      width 77px
    .weight-style
      width 94px
    .price-style
      width 100px
    .option-style
      width 94px
  /deep/.main-table.table td
    // padding 0.4rem 0.3rem
    padding 10px 5px
    line-height 24px
  /deep/.main-table.table thead th
    border-bottom none
  /deep/.main-table.table th
    padding 10px 5px
    font-weight bold
    line-height 30px
    outline medium
  .num-input
    width 120px
  .search-box
    input
      height 33px
      line-height 33px
      width 220px
      box-sizing border-box
      padding 0 9px
      border 1px solid #ddd
      outline medium
      &::-webkit-input-placeholder
        color #999
        font-size 12px
    button
      width 64px
      height 33px
      background #0289fb
      color #fff
      border none
  .pagination
    button
      border 1px solid #ddd
      background #fff
      padding 10px
      outline medium
      &:hover
        background #eee
  /deep/.table th, /deep/.table td
    vertical-align middle
</style>
