<template lang="pug">
b-container.p-0(:fluid="true")
  .menu-box
    .content.flex.relative-position
      BannerLogin(v-if="categoryShow()")
      .category-nav
        span 品种分类
        .category-box(v-show="categoryShow()")
          Category
      .nav-box.flex.ml-35
        .nav-list(v-for="(nav, index) in shopMallMenu", :key="index", :class="$route.path.indexOf(nav.path) !== -1 ? 'menu-active' : ''", @click="jumpMenu(nav.path)") {{nav.title}}
        //- router-link(:to="nav.path", v-for="(nav, index) in shopMallMenu", :key="index")
          .nav-list(:class="activeMenu === nav.path ? 'menu-active' : ''") {{nav.title}}
  Banner(v-if="$route.path === '/home'")
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapState } from 'vuex'
import Banner from './Banner.vue'
import BannerLogin from './BannerLogin.vue'
import Category from './Category.vue'

@Component({
  components: {
    Banner,
    BannerLogin,
    Category
  },
  computed: mapState(['shopMallMenu'])
})
class Menu extends Vue {
  shopMallMenu: Array<any>
  activeMenu: string = '/'

  jumpMenu(url: string): void {
    const me: any = this
    me.jump(url)
    // this.activeMenu = url
  }

  categoryShow(): boolean {
    return this.$route.path === '/home' || this.$route.path === '/'
  }
}
export default Menu
</script>
<style lang="stylus" scoped>
.menu-box
  border-bottom 2px solid #0289FB
  height 34px
  position relative
.category-nav
  color #ffffff
  position relative
  text-align center
  width 201px
  background #0289FB
  border-top-right-radius 3px
  border-top-left-radius 3px
  line-height 34px
  height 34px
  font-size 18px
  .category-box
    display block
  &:hover
    .category-box
      display block !important
.nav-list
  min-width 63px
  padding 0 10px
  height 30px
  line-height 30px
  color #333
  font-size 16px
  text-align center
  margin-right 15px
  cursor pointer
.nav-list:hover
  color #ea651a
.menu-active
  color #ffffff
  background #0289FB
  border-radius 3px
.menu-active:hover
  color #ffffff
</style>
