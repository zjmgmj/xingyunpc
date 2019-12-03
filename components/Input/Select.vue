<template lang="pug">
.flex.flex-center
  span(:style="{width: labelWidth, 'text-align': labelAlign}", v-if="label") {{label}}
  .col
    .relative-position
      input.zhd-input(type="text", v-model="val", @click.stop="", @focus.stop="focus", @input.stop="input", @blur="blur", :placeholder="placeholder")
      .select-box(v-show="selectShow")
        .select-list(v-for="(item, index) in selectList", :key="index", @click.stop="select(item)") {{prop ? item[prop] : item}}
</template>
<script lang='ts'>
import { Component, Vue, Emit, Prop, Watch } from 'vue-property-decorator'

@Component
class Select extends Vue {
  @Prop({ default: '60px' }) labelWidth: string
  @Prop({ default: 'right' }) labelAlign: string
  @Prop({ default: '' }) label: string
  @Prop({ default: '' }) placeholder: string

  @Prop(Object) options: any
  @Prop(String) value: string

  val: string
  selectShow: boolean = false
  selectList: Array<any>
  prop: string
  labelProp: string

  constructor() {
    super()
    this.prop = this.options.prop || ''
    this.val = this.value || ''
  }

  @Watch('options.list', { immediate: true, deep: true })
  onOptionsListChange(val: Array<any>) {
    this.selectList = val
  }

  @Watch('value')
  onValueChange(newVal: string) {
    this.val = newVal
  }

  @Emit()
  focus(e: any) {
    console.log('---this', this)
    this.selectShow = true
    return e
  }

  @Emit()
  input(e: any) {
    console.log('change', e.target.value)
    return e.target.value
  }

  @Emit()
  select(item: any) {
    console.log('select')
    this.val = this.prop ? item[this.prop] : item
    this.selectShow = false
    return item
  }

  @Emit()
  blur(e: any) {
    console.log('blur', e)
    setTimeout(() => {
      this.selectShow = false
    }, 200)
  }
}
export default Select
</script>
<style lang="stylus" scoped>
input[type=text]:focus
  border 1px solid #1e90ff !important
.select-box
  position absolute
  z-index 9
  border 1px #eee solid
  min-width 100%
  max-height 250px
  overflow auto
  background #fff
  .select-list
    min-width 100%
    cursor pointer
    white-space nowrap
    padding 10px
    &:hover
      background #eee
</style>
