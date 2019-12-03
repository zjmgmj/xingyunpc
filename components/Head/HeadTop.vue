<template lang="pug">
.head-top.border-bottom-1.ft-12
  .content.ft-12
    b-row
      b-col
        span 交易时间：08:00-17:00
      b-col.text-right
        span 微信
        span.pl-10.pr-10 |
        span 微博
        span.pl-15
          template(v-if="isLogin")
            router-link.text-333(to="/management/userCenter") 无锡海铭通物贸有限公司 wxhmt855
            span.text-red.pl-10 安全退出
          template(v-else)
            span 卖家入口
            span.pl-10 欢迎您来到型云！
            router-link.link-a.pl-10(to="/") 请登录
            router-link.link-a.pl-10(to="/") 免费注册
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
class HeadTop extends Vue {
  isLogin: boolean = true
}
export default HeadTop
</script>
<style lang="stylus" scoped>
.head-top
  background #fafafa
  line-height 33px
</style>
