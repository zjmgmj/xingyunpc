<template lang="pug">
.flex.flex-center
  span(:style="{width: labelWidth, 'text-align': labelAlign}", v-if="label") {{label}}
  .col
    input.border.zhd-input(type="text", :placeholder="placeholder")
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
class Input extends Vue {
  @Prop({ default: '60px' }) labelWidth: string
  @Prop({ default: 'right' }) labelAlign: string
  @Prop({ default: '' }) label: string
  @Prop({ default: '' }) placeholder: string
}
export default Input
</script>
<style lang="stylus" scoped>
input[type=text]:focus
  border 1px solid #1e90ff !important
</style>
