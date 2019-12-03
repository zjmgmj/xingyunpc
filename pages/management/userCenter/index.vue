<template lang="pug">
div
  .bg-white.p-15.mb-10.flex.flex-center
    .author.ml-20
      img(src="@/assets/images/default_logo.png")
    .ml-25
      .ft-16.mb-10
        span 您好！
        span.zhd-text-main wxhmt855
        span ，欢迎来到型云!
      small.ft-12.text-999 上次登录时间：2019-11-29 08:05:23
      .mt-5.ft-14
        span 手机号: 13706178180
        span.pl-10 账户余额:
        span.text-red.ft-20 ￥0
        span.zhd-btn.zhd-btn-sm.btn-circle.mr-5.ml-10 充值
        span.zhd-btn.zhd-btn-sm.btn-circle.zhd-btn-warning 提现
  .mt-10.bg-white.p-15.main-content
    .title 待办事项
    b-tabs.mt-20(content-class="mt-15", v-model="tabIndex")
      b-tab
        template(v-slot:title)
          span 合同付款
          span(:class="paymentCount > 0 ? 'text-red' : ''") ({{paymentCount}})
        ContractPayment(@count="count => { paymentCount = count }")
      b-tab
        template(v-slot:title)
          span 合同待提
          span(:class="pendingCount > 0 ? 'text-red' : ''") ({{pendingCount}})
        ContractPending(@count="count => { pendingCount = count }")
      b-tab
        template(v-slot:title)
          span 提单确认
          span(:class="billCount > 0 ? 'text-red' : ''") ({{billCount}})
        ConfimBill(@count="count => { billCount = count }")
      b-tab
        template(v-slot:title)
          span 申请发票
          span(:class="invoiceCount > 0 ? 'text-red' : ''") ({{invoiceCount}})
        ApplyInvoice(@count="count => { invoiceCount = count }")
      b-tab
        template(v-slot:title)
          span 确认收票
          span(:class="receiptCount > 0 ? 'text-red' : ''") ({{receiptCount}})
        ConfirmReceipt(@count="count => { receiptCount = count }")
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import ContractPayment from './contractPayment.vue'
import ConfirmReceipt from './confirmReceipt.vue'
import ContractPending from './contractPending.vue'
import ConfimBill from './confimBill.vue'
import ApplyInvoice from './applyInvoice.vue'

@Component({
  components: {
    ContractPayment,
    ConfirmReceipt,
    ContractPending,
    ConfimBill,
    ApplyInvoice
  },
  layout: 'Management'
})
class Index extends Vue {
  tabIndex: number = 1
  billCount: number = 0
  receiptCount: number = 0
  pendingCount: number = 0
  invoiceCount: number = 0
  paymentCount: number = 0
}
export default Index
</script>
<style lang="stylus" scoped>
.author
  width 110px
  height 110px
  border-radius 50%
  border 1px solid #ddd
  overflow hidden
  img
    width 100%
    height 100%
.main-content
  .title
    color #333
    text-indent 10px
    border-left 3px solid #0289fb
    font-size 16px
  // .tab-title
  // padding 0 20px
  // font-size 16px
  // cursor pointer
  // color #333
  // &.active
  // color #0289fb
  // border-bottom 2px solid #0289fb
  .prompt
    background #fef7e7
    padding 5px
</style>
