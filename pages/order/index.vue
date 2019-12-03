<template lang="pug">
b-container.p-0(:fluid="true")
  .banner
  .content.bg-white.p-20.order-content
    .title.ft-16 完善求购内容
      span.text-999.ft-12.pl-5 (最多添加5条求购内容)
    .mt-10.mb-10
      .flex.mt-20
        .col
          span.text-red *
          span 品名
          span.text-999.ft-12 (必填项)
        .col
          span 规格
          span.text-999.ft-12 (选填项)
        .col
          span 材质
          span.text-999.ft-12 (选填项)
        .col
          span 产地
          span.text-999.ft-12 (选填项)
        .del-order
      .flex.flex-center.mt-15(v-for="(item, index) in orderFrom", :key="index")
        .col
          b-form-input(placeholder="请输入品名", v-model="item.name", :id="`name_${index}`")
          b-tooltip(:target="`name_${index}`", placement="topright", variant="danger") 品名不能为空
        .col
          b-form-input(placeholder="请输入规格", v-model="item.spec")
        .col
          b-form-input(placeholder="请输入材质", v-model="item.material")
        .col
          b-form-input(placeholder="请输入产地", v-model="item.proArea")
        .del-order.text-999
          span(v-if="index > 0", @click="delOrderForm(index)") 删除
      .mt-15.text-blue.add-order-btn(@click="addOrderForm")
        i.iconfont.icon-jia1
        span.pl-5 新增求购
    .title.ft-16.mt-25 联系方式
      span.text-999.ft-12.pl-5 留下联系方式以便我们快速给你匹配物资
    .mt-20
      .label.col
        span.text-red *
        span 联系电话
        span.text-999.ft-12 (必填项)
      .input.col.mt-15
        b-form-input(placeholder="请输入联系电话", id="phoneInput")
        b-tooltip(target="phoneInput", placement="topright", variant="danger") 不能为空！
    .title.ft-16.mt-25 其他要求
    .mt-15
      b-form-textarea( rows="6", placeholder="如有其他需求可在此填写，例：特殊规格商品，有无现货等")
    .mt-25.text-center
      button.submit.zhd-btn.zhd-btn-lg 发起求购
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

// interface order {
//   name: string,
//   spec: string,
// }

@Component({
  layout: 'ShopMall'
})
class Index extends Vue {
  orderFrom: Array<any>
  constructor() {
    super()
    this.orderFrom = [{ name: '', spec: '', material: '', proArea: '' }]
  }

  addOrderForm() {
    const obj = { name: '', spec: '', material: '', proArea: '' }
    this.orderFrom.push(obj)
  }

  delOrderForm(index: number): void {
    this.orderFrom.splice(index, 1)
    console.log(index)
  }
}
export default Index
</script>
<style lang="stylus" scoped>
.banner
  width 100%
  height 300px
  background url('../../assets/images/zh-step.jpg') no-repeat center
  text-align center
  position relative
  overflow hidden
.title
  height 29px
  line-height 29px
  background #f6f6f6
  border-left 5px solid #0289fb
  font-size 16px
  font-weight normal
  padding-left 10px
  color #333
.add-order-btn
  cursor pointer
  width 100px
.del-order
  cursor pointer
  width 50px
.input
  width 277.5px
.submit
  width 25%
.order-content
  padding 50px 55px
  margin-top -40px !important
  position relative
  overflow visible
  box-shadow 0 0 20px rgba(51, 51, 51, 0.25)
</style>
