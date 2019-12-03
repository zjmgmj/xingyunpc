<template lang="pug">
.left-box.bg-white
  .title-box.border-bottom-line
    router-link.zhd-text-main(to="/management/userCenter")
      i.iconfont.icon-user
      span 用户中心
  .zhd-menu.border-bottom-line(v-for="(item, index) in managementMenu", :key="index")
    .title
      i.iconfont.ft-18(:class="item.icon")
      span.pl-5 {{item.title}}
    .menu-list(@click="jumpUrl(child)", v-for="(child, index) in item.child", :key="index", :class="menuActive(child)") {{child.title}}
</template>
<script lang='ts'>
import { Component, Vue, Emit } from 'vue-property-decorator'
import { mapState } from 'vuex'

@Component({
  computed: mapState(['managementMenu'])
})
class Left extends Vue {
  managementMenu: Array<any>
  activeMenu: any
  menuActive(menu: any) {
    let className = ''
    if (this.$route.path === menu.path) {
      className = 'active'
      this.activeMenu = menu
      // this.$emit('jumpUrl', menu)
    }
    return className
  }

  // @Emit('jumpUrl')
  jumpUrl(menu: any) {
    this.$router.push(menu.path)
    // return menu
  }
}
export default Left
</script>
<style lang="stylus" scoped>
.left-box
  width 180px
  border-box box-sizing
  .title-box
    padding 15px
    font-size 24px
    .iconfont
      font-size 24px
      padding-right 5px
  .title
    color #000
    padding 15px
    font-size 16px
    .iconfont
      color #f68f1d
  .zhd-menu
    padding-bottom 10px
    .menu-list
      padding 7px 15px
      cursor pointer
      // display block
      border-left 2px solid #fff
      color #333
      width 100%
      &:hover, &.active
        background #fafafa
        border-left 2px solid #0289fb
        color #0289fb
</style>
