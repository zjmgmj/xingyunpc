<template lang="pug">
.crm-content
  .text-center.crm-content-bg
    .content
      .ft-30.pt-60.pb-60.text-white 型云CRM功能特色
      .flex
        .crm-card
          img(src="@/assets/images/fa-icon1.png", width="133px", height="133px")
          .mt-15.ft-20
            strong 客户分类、拜访计划
          <p>——</p>
          small.text-999 科学的客户分类管理与拜访计划
        .crm-card.border-left-line.border-right-line
          img(src="@/assets/images/fa-icon2.png", width="133px", height="133px")
          .mt-15.ft-20
            strong 销量数据分析
          <p>——</p>
          small.text-999 全面的用户与销售数据分析
        .crm-card
          img(src="@/assets/images/fa-icon3.png", width="133px", height="133px")
          .mt-15.ft-20
            strong 全天候客户服务
          <p>——</p>
          small.text-999 完善的信息中心与全天候的客户服务
  b-row.content.pt-60.pb-30.flex-content-between
    b-col(cols="4").line-height-30
      .ft-30 完善的行为记录机制
      p.text-blue.ft-bold ————
      .ft-16 让企业针对客户的行为进行跟踪记录，为企业平台数据化、智能化运营搭建了良好的基础，用户的所有行为和操作均有迹可寻。
    b-col.text-right(cols="8")
      img.img-shadow(src="@/assets/images/fa-img2.png", width="80%")
  b-container.p-0.bg-white(:fluid="true")
    b-row.content.pt-60.pb-30.flex-content-between
      b-col.text-center(cols="8")
        img.img-shadow(src="@/assets/images/fa-img3.png", width="80%")
      b-col(cols="4").line-height-30
        .ft-30 完善的行为记录机制
        p.text-blue.ft-bold ————
        .ft-16 让企业针对客户的行为进行跟踪记录，为企业平台数据化、智能化运营搭建了良好的基础，用户的所有行为和操作均有迹可寻。
  b-row.content.pt-60.pb-30.flex-content-between
    b-col(cols="4").line-height-30
      .ft-30 独立定制的系统
      p.text-blue.ft-bold ————
      .ft-16 型云自主研发CRM客户管理系统，对用户进行了科学的分级和维护，为企业风控体系的建立提供了良好的环境，集成的用户画像功能与平台数据中心进行了联动贯通，利用可视化的图表功能科学完善的展示用户信息、个性喜好、行为判断让业务的开展无往不利。
    b-col.text-right(cols="8")
      img(src="@/assets/images/fa-img6.png", width="80%")
  b-container.p-0.bg-white(:fluid="true")
    b-row.content.pt-60.pb-30.flex-content-between
      b-col.text-center(cols="8")
        img.img-shadow(src="@/assets/images/ff.png", width="80%")
      b-col(cols="4").line-height-30
        .ft-30 智能化的客服中心
        p.text-blue.ft-bold ————
        .ft-16 集成高效客服呼叫中心功能，及时接受用户的建议和反馈，与用户形成良好互动，实时掌握用户需求，一键拨号，让企业和客户之间的沟通变得简单方便。
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
class Crm extends Vue {}
export default Crm
</script>
<style lang="stylus" scoped>
.crm-content
  .crm-content-bg
    width 100%
    height 600px
    background-size cover
    background url('../../assets/images/fa-img1.jpg') fixed 50% 50%
    background-size cover
  .crm-card
    background #fff
    width 400px
    height 320px
    padding-top 50px
    line-height 25px
    &:hover
      background #f6f6f6
  .img-shadow
    box-shadow 0px 0px 14px #999
</style>
