<template lang="pug">
div
  Search
  .mt-20.text-red.zhd-tishi
    i.iconfont.icon-tishi
    span.pl-5 请在合同支付后 5 天内提货，如出现多次延时提货，平台将酌情收取仓储费用！
  .mt-15
    UniteTable(:options="tableValue")
      template(slot="title", slot-scope="item")
        .flex.flex-center.flex-content-between
          .col.p-0.flex.flex-center
            span.pr-5 合同号:
            img(src="@/assets/images/ding.png", width="18px", height="18px")
            router-link.pl-5.ft-bold.zhd-text-main(to="/") DD19112400011
            span.pl-15 合同金额：
            span.text-red.ft-bold ￥6233.04
            span.text-999.ft-12 （预计1.584吨，实发1.584吨，含吊费：39.6）
          .ft-12.text-999(style="width: 165px") 下单时间：2019-11-24 09:08
      template(slot="status", slot-scope="item")
        .text-center.text-success.ft-bold(style="width:79px") {{item.data.status}}
      template(slot="options", slot-scope="item")
        .text-center(style="width:88px")
          router-link.zhd-btn.zhd-btn-default.zhd-btn-sm.zhd-btn-abs(:to="btn.path", v-for="(btn, index) in item.data.options", :key="index") {{btn.label}}
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Search from './search.vue'
import UniteTable from '@/components/UniteTable.vue'

@Component({
  components: {
    Search,
    UniteTable
  }
})
class ContractAll extends Vue {
  allSelected: boolean = false
  tableValue: any = {
    pagination: true,
    count: 150,
    head: [
      { key: 'documentNo', label: '商品信息', width: '250px' },
      { key: 'documentNo', label: '仓库', width: '80px' },
      { key: 'documentNo', label: '单价', width: '80px' },
      { key: 'documentNo', label: '数量', width: '80px' },
      { key: 'documentNo', label: '重量', width: '80px' },
      { key: 'documentNo', label: '小计', width: '80px' },
      { key: 'documentNo', label: '可提数量', width: '80px' },
      { key: 'documentNo', label: '发货出库', width: '80px' }
    ],
    slotList: [
      { key: 'status', label: '合同状态', width: '79px' },
      { key: 'options', label: '操作', width: '88px' }
    ],
    tableData: [
      {
        title: '合同号: DD19112400011',
        status: '已完成',
        options: [{ label: '合同详情', path: '/management/contract/detail' }],
        list: [{ documentNo: 'ssssss' }]
      },
      {
        title: '合同号: DD19112400011',
        status: '已完成',
        options: [{ label: '合同详情', path: '/management/contract/detail' }],
        list: [{ documentNo: 'ssssss' }, { documentNo: 'ssssss' }]
      },
      {
        title: '合同号: DD19112400011',
        status: '已完成',
        options: [{ label: '合同详情', path: '/management/contract/detail' }],
        list: [
          { documentNo: 'ssssss' },
          { documentNo: 'ssssss' },
          { documentNo: 'ssssss' }
        ]
      }
    ]
  }
}
export default ContractAll
</script>
<style lang="stylus" scoped></style>
