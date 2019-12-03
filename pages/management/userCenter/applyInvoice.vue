<template lang="pug">
.mt-15
  BasicTable.text-center(:options="tableValue", @onRowSelected="rowSelected", ref="basicTable")
    template(slot="option")
      b-button.zhd-btn.bg-success.zhd-btn-sm(@click.stop="") 待收票
    template(slot="footer")
      b-form-checkbox(v-model="allSelected", label="全选", @change="allSelectedEvent")
      .text-right.pr-10
        span 已选择 0 条，共计金额 0 元
        button.ml-10.zhd-btn 批量确认
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import BasicTable from '@/components/BasicTable.vue'

@Component({
  components: {
    BasicTable
  }
})
class ApplyInvoice extends Vue {
  allSelected: boolean = false
  tableValue: any = {
    selectMode: 'multi',
    selectable: true,
    pagination: true,
    count: 150,
    fields: [
      { key: 'selected', label: '选项', class: 'basic-table-selected' },
      { key: 'documentNo', label: '单据号' },
      { key: 'num', label: '数量' },
      { key: 'weight', label: '重量' },
      { key: 'totalAmount', label: '总金额' },
      { key: 'invoiceNum', label: '发票号' },
      { key: 'option', label: '操作', class: 'basic-table-option' }
    ],
    tableData: [
      {
        documentNo: 'TD19112000180',
        num: '202',
        weight: '26.63',
        totalAmount: '256666.36',
        invoiceNum: '03652169'
      },
      {
        documentNo: 'TD19112000180',
        num: '202',
        weight: '26.63',
        totalAmount: '256666.36',
        invoiceNum: '03652169'
      },
      {
        documentNo: 'TD19112000180',
        num: '202',
        weight: '26.63',
        totalAmount: '256666.36',
        invoiceNum: '03652169'
      },
      {
        documentNo: 'TD19112000180',
        num: '202',
        weight: '26.63',
        totalAmount: '256666.36',
        invoiceNum: '03652169'
      },
      {
        documentNo: 'TD19112000180',
        num: '202',
        weight: '26.63',
        totalAmount: '256666.36',
        invoiceNum: '03652169'
      }
    ]
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
export default ApplyInvoice
</script>
<style lang="stylus" scoped></style>
