<template lang="pug">
no-ssr
  section
    Head
    .content.flex.flex-between.mt-10.mb-10
      Left
      .col.pl-10.pr-0
        //- .bg-white.p-15(v-show="menuName && $route.path !== '/management/userCenter'") {{menuName}}
        router-view
    //- Footer
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Head from '@/components/Management/Head.vue'
import Left from '@/components/Management/Left.vue'

@Component({
  components: {
    Head,
    Left
  }
})
class Management extends Vue {
  // menuName: string = ''
  // jumpUrl(menu: any) {
  //   this.menuName = menu.title
  // }
}
export default Management
</script>
<style lang="stylus" scoped></style>
