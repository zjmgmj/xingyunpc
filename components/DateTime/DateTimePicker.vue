<template lang="pug">
.flex.flex-center
  span(:style="{width: labelWidth, 'text-align': labelAlign}", v-if="label") {{label}}
  .col.picker
    vue-ctk-date-time-picker(
      ref="dateTimePicker",
      label="请选择日期范围",
      :locale="locale",
      v-model="copyVal",
      :formatted="formatted",
      :format="format",
      noHeader,
      noLabel,
      noShortcuts,
      autoClose,
      noButton,
      range,
      @formatted-value="getFormattedValue",
      @input="getValue")
</template>
<script lang='ts'>
import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator'

@Component
class DateTimePicker extends Vue {
  @Prop({ default: '60px' }) labelWidth: string
  @Prop({ default: 'right' }) labelAlign: string
  @Prop({ default: '' }) label: string
  @Prop({ default: '' }) placeholder: string
  @Prop(Object) val: any
  locale: string = ''
  format: string = ''
  formatted: string = ''
  copyVal: any = ''

  @Watch('val')
  onValChange(val: any) {
    console.log(val)
    this.copyVal = this.val
  }

  @Emit('value')
  getValue(event: any) {
    console.log('event', event)
    return event
  }

  getFormattedValue(event: any) {
    console.log('getInput', event)
  }

  mounted() {
    this.$nextTick(() => {
      this.locale = 'zh-cn'
      this.format = 'YYYY-MM-DD'
      this.formatted = 'YYYY-MM-DD'
    })
  }
}
export default DateTimePicker
</script>
<style lang="stylus" scoped>
/deep/.field-input
  height 38px
  line-height 1.3
  line-height 38px \9
  border 1px solid #e2e2e2
  background-color #fff
  border-radius 2px
  width 100%
  text-indent 10px
  font-size 14px
  padding-left 0
  padding-right 24px
  &.no-clear-button
    padding 0
/deep/.field-clear-button
  right 4px
  display none
.picker
  &:hover
    /deep/.field-clear-button
      display block
</style>
