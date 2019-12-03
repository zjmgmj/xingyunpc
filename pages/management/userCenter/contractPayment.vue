<template lang="pug">
div
  .zhd-tishi.text-red
    i.iconfont.icon-tishi
    span.pl-5 请在合同支付后 5 天内提货，如出现多次延时提货，平台将酌情收取仓储费用！
  .mt-15
    BasicTable.text-center(:options="tableValue", @onRowSelected="rowSelected", ref="basicTable")
      template(slot="option")
        b-button.zhd-btn.bg-success.zhd-btn-sm(@click.stop="") 待收票
      template(slot="footer")
        b-form-checkbox(v-model="allSelected", @change="allSelectedEvent")
          span 全选
          span.pl-10 已选0支，共0吨
        .text-right.pr-10.flex.flex-content-end
          .line-height-20
            p 合计：
              span.ft-16.text-red.ft-bold 0
              span 元
            .text-999.ft-12 (含吊费：0元)
          button.ml-10.zhd-btn 批量支付
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import BasicTable from '@/components/BasicTable.vue'

@Component({
  components: {
    BasicTable
  }
})
class ContractPayment extends Vue {
  allSelected: boolean = false
  tableValue: any = {
    selectMode: 'multi',
    selectable: true,
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
export default ContractPayment
</script>
<style lang="stylus" scoped></style>
