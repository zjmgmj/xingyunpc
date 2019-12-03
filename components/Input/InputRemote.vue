<template lang="pug">
.input-remote
  input.input(type="text", v-model="val", @click.stop="", @focus.stop="focus", @input.stop="input", @blur="blur")
  .select-box(v-show="selectShow")
    .select-list(v-for="(item, index) in selectList", :key="index", @click.stop="select(item)") {{prop ? item[prop] : item}}
</template>
<script lang='ts'>
import { Component, Vue, Emit, Prop, Watch } from 'vue-property-decorator'

@Component
class InputRemote extends Vue {
  val: string
  selectShow: boolean = false
  @Prop(Object) options: any
  @Prop(String) value: string
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

  // @Watch('val')
  // onValChange(newVal: string) {
  //   this.$emit('change', newVal)
  // }

  // mounted() {
  //   this.$nextTick(() => {
  //     document.addEventListener('click', () => {
  //       console.log('-----------s', this)
  //       this.selectShow = false
  //     })
  //   })
  // }

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
export default InputRemote
</script>
<style lang="stylus" scoped>
.input-remote
  position relative
  width 100%
  // min-width 150px
  .input
    width 100%
    // height 30px
    // line-height 30px
    height 100%
    border 1px #eee solid
    padding 0 5px
    box-sizing border-box
  .select-box
    position absolute
    z-index 9
    border 1px #eee solid
    // min-width 80px
    background #fff
    .select-list
      min-width 150px
      cursor pointer
      white-space nowrap
      padding 10px
      &:hover
        background #eee
</style>
