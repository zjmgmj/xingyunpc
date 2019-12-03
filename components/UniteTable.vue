<template lang="pug">
.z-table
  .head.flex
    .td(v-for="(head, index) in options.head", :key="index", :style="{width: head.width ? head.width : '100px'}") {{head.label}}
    .td(v-for="(item, index) in options.slotList", :key="item.key", :style="{width: item.width ? item.width : '100px'}") {{item.label}}    
  .tbody
    .tbody-list(v-for="(item, index) in options.tableData", :key="index")
      .title
        slot(name="title", :data="item")
      .flex.item-body
        .td
          .tr.item-detail.flex.flex-nowrap(v-for="(content, index) in item.list", :key="index")
            .list(v-for="(item, index) in options.head", :key="index", :style="{width: item.width ? item.width : '100px'}") {{content[item.key]}}                
        .flex.slot-list(v-for="(itemSlot, index) in options.slotList", :key="itemSlot.key")
          .td
            slot(:name="itemSlot.key", :data="item")
          .td-right-border
  pagination.mt-15(:count="options.count", @changePage="getActivePage", v-if="options.pagination")         
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import pagination from '@/components/Pagination.vue'

interface options {
  tableData: Array<any>
  head: Array<any>
  pagination: boolean
  slotList?: Array<any>
}

@Component({
  components: {
    pagination
  }
})
class UniteTable extends Vue {
  @Prop(Object) options: options
  getActivePage(page: number) {
    console.log('page', page)
  }
}
export default UniteTable
</script>
<style lang="stylus" scoped>
.z-table
  width 980px
  overflow auto
  .head
    padding 12px 0px
    background #f6f6f6
    font-weight bold
    text-align center
    .td
      float left
  .tbody
    .tbody-list
      margin-top 15px
    .title
      width 100%
      padding 10px
      background #ebf7ff
      border 1px solid #d4f0fc
      border-bottom 0
    .item-body
      width 100%
      height 100%
      border 1px solid #d4f0fc
      border-top none
      margin-top -1px
      position relative
      font-size 13px
      .td
        align-self center
        &:last-child
          border-right none
      .td-right-border
        width 1px
        height 100%
        align-self stretch
        background #d4f0fc
      .item-detail
        border-top 1px solid #d4f0fc
        .list
          border-right 1px solid #d4f0fc
          box-sizing border-box
          padding 9px
      .slot-list
        border-top 1px solid #d4f0fc
        &:last-child
          .td-right-border
            display none
</style>
