<template lang="pug">
div
  .prompt.text-red.zhd-tishi
    i.iconfont.icon-tishi
    span.pl-5 请联系司机去平台仓库进行提货，平台将为您制作提单！收到确认短信后，请进行提单确认操作！
  .mt-15
    BasicTable.text-center(:options="tableValue", @onRowSelected="rowSelected", ref="basicTable")
      template(slot="option")
        b-button.zhd-btn.bg-success.zhd-btn-sm(@click.stop="") 待收票
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import BasicTable from '@/components/BasicTable.vue'

@Component({
  components: {
    BasicTable
  }
})
class ContractPending extends Vue {
  allSelected: boolean = false
  tableValue: any = {
    selectMode: 'multi',
    selectable: true,
    pagination: true,
    count: 0,
    fields: [
      { key: 'selected', label: '选项', class: 'basic-table-selected' },
      { key: 'documentNo', label: '商品信息' },
      { key: 'num', label: '仓库' },
      { key: 'weight', label: '单价' },
      { key: 'totalAmount', label: '数量' },
      { key: 'invoiceNum', label: '重量' },
      { key: 'option', label: '操作', class: 'basic-table-option' }
    ],
    tableData: []
  }

  mounted() {
    this.$nextTick(() => {
      this.$emit('count', this.tableValue.count)
    })
  }

  rowSelected(row: Array<any>) {
    console.log('rowSelected', row)
  }

  allSelectedEvent(val: boolean) {
    const basicTable: any = this.$refs.basicTable
    val ? basicTable.selectAllRows() : basicTable.clearSelected()
  }
}
export default ContractPending
</script>
<style lang="stylus" scoped></style>
