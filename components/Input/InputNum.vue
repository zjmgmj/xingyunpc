<template lang="pug">
b-input-group.input-num
  b-input-group-prepend
    b-button(@click="reduce")
      i.iconfont.icon-jian
  b-form-input(type="number", min="0.00", :value="copyValue")
  b-input-group-prepend
    b-button(@click="add")
      i.iconfont.icon-jia1
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator'
@Component({})
class InputNum extends Vue {
  copyValue: number = 0
  @Prop() value: number
  @Watch('value')
  onValueChanged(value: number) {
    this.copyValue = value
  }

  mounted() {
    this.copyValue = this.value
  }

  @Emit('reduce')
  reduce(): void {}

  @Emit('add')
  add(): void {}
}
export default InputNum
</script>
