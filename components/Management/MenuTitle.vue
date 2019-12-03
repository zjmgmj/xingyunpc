<template lang="pug">
.bg-white.p-15
  .title {{title}}
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
class MenuTitle extends Vue {
  @Prop(String) title: string
}
export default MenuTitle
</script>
<style lang="stylus" scoped>
.title
  font-size 16px
  border-left 2px solid #0289fb
  padding-left 12px
</style>
