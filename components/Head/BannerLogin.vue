<template lang="pug">
.banner-login
  .flex.flex-center.p-20
    .avator
      img(:src="avator")
    .col.ft-13
      .ft-14 您好！
      .mt-10 欢迎登陆型云商城
  .mt-5.flex.flex-content-around.pl-20.pr-20
    b-button(variant="primary") 登陆
    b-button.ml-5(variant="outline-primary") 注册
  .mt-20.pl-15.pr-15
    .flex.flex-content-between.flex-center.title-border.pb-10
      h1.ft-18 型云动态
      .more.ft-12.flex.flex-center
        span 更多
        i.iconfont.icon-gengduo
    .new-box
      router-link.list.mt-10(to="/", v-for="(item, index) in newList", :key="index")        
        .col.ellps-row.p-0 {{item.title}}
        .time {{item.time}}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

interface newList {
  time: string,
  title: string
}

@Component({})
class BannerLogin extends Vue {
  avator: string = require('@/assets/images/default-avator.png')
  newList: Array<newList> = [{
    time: '2019-02-01',
    title: '【公告】型云钢铁电商平台系统维型云钢铁电商平台系统维'
  }, {
    time: '2019-02-01',
    title: '【公告】型云钢铁电商平台系统维型云钢铁电商平台系统维'
  }, {
    time: '2019-02-01',
    title: '【公告】型云钢铁电商平台系统维型云钢铁电商平台系统维'
  }, {
    time: '2019-02-01',
    title: '【公告】型云钢铁电商平台系统维型云钢铁电商平台系统维'
  }, {
    time: '2019-02-01',
    title: '【公告】型云钢铁电商平台系统维型云钢铁电商平台系统维'
  }, {
    time: '2019-02-01',
    title: '【公告】型云钢铁电商平台系统维型云钢铁电商平台系统维'
  }, {
    time: '2019-02-01',
    title: '【公告】型云钢铁电商平台系统维型云钢铁电商平台系统维'
  }]
}

export default BannerLogin
</script>

<style lang="stylus" scoped>
.banner-login{
  width 282px
  height 370px
  background #fff
  border-radius 2px
  position absolute
  top 45px
  right 0px
  z-index 999
  .avator{
    width 58px
    height 58px
  }
}
button {
  width 108px
  height 38px
}
.title-border {
  border-bottom 1px dashed #dedede
}
.time {
  color #999
  width 70px
  font-size 12px
}
.new-box {
  height 150px
  overflow hidden
}
.list {
  display -webkit-box
  display -webkit-flex
  display flex
  flex-wrap wrap
  align-items center
  justify-content: space-between;
  color #666
}
</style>