<template lang="pug">
div
  Search
  .mt-20.text-red.zhd-tishi
    i.iconfont.icon-tishi
    span.pl-5 请在合同支付后 5 天内提货，如出现多次延时提货，平台将酌情收取仓储费用！
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
class UnderRevision extends Vue {
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
export default UnderRevision
</script>
<style lang="stylus" scoped></style>
