<template lang="pug">
.basic-table
  b-table(
    ref="basicTable",
    show-empty,
    hover,
    :selectable="options.selectable",
    :select-mode="options.selectMode",
    :items="options.tableData",
    :fields="options.fields",
    @row-selected="onRowSelected")
    template(v-slot:table-busy)
      .text-center.text-danger.my-2
        b-spinner.align-middle
        strong Loading...
    template(v-slot:empty)
      .text-center.pt-25
        img(src="@/assets/images/null.png")
        .mt-10 暂无记录
    template(v-slot:cell(selected) = "{ rowSelected }")
      b-form-checkbox(v-model="rowSelected", label="")
    template(v-slot:cell(documentNo) = "data")
      router-link.zhd-text-main(to="/") {{data.value}}
    template(v-slot:cell(option)="data")
      slot(name="option", :data="data")
          //- b-button.zhd-btn.bg-success.zhd-btn-sm(@click.stop="") 待售票
  .mt-10.flex.flex-content-between.flex-center.pl-15
    slot(name="footer")
  pagination.mt-15(:count="options.count", @changePage="getActivePage", v-if="options.pagination")
</template>
<script lang='ts'>
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import pagination from '@/components/Pagination.vue'

interface options {
  selectable?: boolean
  selectMode?: string // 'multi', 'single', 'range'
  tableData: Array<any>
  fields: Array<any>
  pagination: boolean
}

@Component({
  components: {
    pagination
  }
})
class BasicTable extends Vue {
  isBusy: boolean = true
  @Prop(Object) options: options
  selected: Array<any>

  @Emit()
  onRowSelected(items: any) {
    console.log('onRowSelected', items)
    this.selected = items
  }

  selectAllRows() {
    const basicTable: any = this.$refs.basicTable
    basicTable.selectAllRows()
  }
  clearSelected() {
    const basicTable: any = this.$refs.basicTable
    basicTable.clearSelected()
  }

  getActivePage(page: number) {
    console.log('page', page)
  }
}
export default BasicTable
</script>
<style lang="stylus" scoped>
/deep/.b-table thead > tr > th
  padding 12px 5px
  line-height 24px
  background #f6f6f6
  border-collapse collapse
  font-weight bold
/deep/.table thead th
  border-bottom none
/deep/.table th, /deep/.table td
  border-top none
  vertical-align middle
/deep/tbody > tr:nth-child(2n) > td
  background #f6f6f6
</style>
