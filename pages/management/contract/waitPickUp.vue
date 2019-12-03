<template lang="pug">
div
  Search
  .mt-20.text-red.zhd-tishi
    i.iconfont.icon-tishi
    span.pl-5 请联系司机去平台仓库进行提货，平台将为您制作提单！，收到确认短信后，请进行提单确认操作。
  .mt-15
    z-basic-table.text-center(:options="tableValue", @onRowSelected="rowSelected", ref="basicTable")
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Search from './search.vue'

@Component({
  components: {
    Search
  }
})
class WaitPickUp extends Vue {
  allSelected: boolean = false
  tableValue: any = {
    pagination: true,
    count: 0,
    fields: [
      { key: 'documentNo', label: '商品信息' },
      { key: 'num', label: '仓库' },
      { key: 'weight', label: '单价' },
      { key: 'totalAmount', label: '数量' },
      { key: 'invoiceNum', label: '重量' },
      { key: 'option', label: '操作', class: 'basic-table-option' }
    ],
    tableData: []
  }

  rowSelected(row: Array<any>) {
    console.log('rowSelected', row)
  }

  allSelectedEvent(val: boolean) {
    const basicTable: any = this.$refs.basicTable
    val ? basicTable.selectAllRows() : basicTable.clearSelected()
  }
}
export default WaitPickUp
</script>
<style lang="stylus" scoped></style>
