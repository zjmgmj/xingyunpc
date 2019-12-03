<template lang="pug">
b-container.mt-20.p-0(:fluid="true")
  .bg-gray
    .content
      .footer_top.flex
        .list.flex.flex-center
          .icon-img
          span 平台说明
        .list.flex.flex-center
          .icon-img
          span 购物指导
        .list.flex.flex-center
          .icon-img
          span 售后说明
        .list.flex.flex-center
          .icon-img
          span 会员服务
        .list
          span 全国服务热线：
            span.ft-22 400-8788-361
  .footer_content           
    .content.flex
      .footer_content_row
        .list 
          router-link(to="/") 平台交易总则
        .list 定金支付协议
        .list 提货运输规则
      .footer_content_row
        .list 物流指导
        .list 购物流程
        .list 支付方式
      .footer_content_row
        .list 质量异议
        .list 退款与退货
      .footer_content_row
        .list 会员注册协议
        .list 发票说明
        .list 热线服务
        .list 常见操作指南
      .ewm-box.flex
        img(:src="require('@/assets/images/erweima.png')", width="105px", height="105px")
        .ml-10.pt-10
          .ft-14.pb-15 欢迎关注型云公众号
          .pb-10 
            strong 客服时间
          .ft-14.mb-10 周一至周日 08:00 - 17:00
          .text-666.ft-12 （法定节假日除外）
  .footer-bottom.text-center.ft-12
    router-link(to="/") 关于我们
    span.pl-15.pr-15 |
    router-link(to="/") 联系我们
    span.pl-15.pr-15 |
    router-link(to="/") 人才招聘
    span.pl-15.pr-15 |
    router-link(to="/") 广告服务
    span.pl-15.pr-15 |
    router-link(to="/") 友情链接
    span.pl-15.pr-15 |
    router-link(to="/") 媒体中心
    .mt-15 江苏智恒达型云网络科技有限公司 版权所有©型云 www.xingyun361.com苏ICP备16013765号-2
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
class Footer extends Vue {

}
export default Footer
</script>
<style lang="stylus" scoped>
.bg-gray{
  background #eee
}
.footer_top{
  // padding 15px 0
  .list{
    line-height: 110px;
    width: 210px;
    font-size: 16px;
    span {
      font-weight: bold;
      color: #333;     
      padding-left: 10px;
    }
    // background: none !important;    
    .icon-img{
      background: url(../../assets/images/xy_icon.png);
      width: 55px;
      height: 55px;
      // margin-top: 27px;    
    }
    &:first-child{
      .icon-img{
        background-position: -9px -61px;
      }
    }
    &:nth-child(2){
      .icon-img{
        background-position: -9px -120px;
      }
    }
    &:nth-child(3){
      .icon-img{
        background-position: -9px -179px;
      }
    }
    &:nth-child(4){
      .icon-img{
        background-position: -9px -238px;
      }
    }
    &:nth-child(5){
      width 338px
      text-align right
    }
  }
}
.footer_content{
  height 154px
  padding-left 120px
  padding-top 20px
  .footer_content_row{
    width: 211px;    
    .list{
      background: url('../../assets/images/li_arrow.png') no-repeat 0px center;
      padding-left: 21px
      line-height: 25px;
      color: #666;
      a {
        color: #666;
      }
    }
    .ewm-box{
      line-height 30px
    }
  }   
}
.footer-bottom {
  background: #f6f6f6 url('../../assets/images/footer_bottom.png') repeat-x top;
  // padding: 30px 20px;
  padding-top: 50px
  padding-bottom: 30px
  a{
    color #333
  }
}
</style>