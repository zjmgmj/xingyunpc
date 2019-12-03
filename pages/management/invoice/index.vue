<template lang="pug">
div
  MenuTitle(title="发票管理")
  .mt-10.bg-white.p-15.main-content
    b-tabs(content-class="mt-15", v-model="tabIndex")
      b-tab(title="未申请提单")
        NotApplied
      b-tab(title="已申请提单")
        AlreadyApplied
      b-tab(title="已开票提单")
        Invoiced
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import NotApplied from './notApplied.vue'
import AlreadyApplied from './alreadyApplied.vue'
import Invoiced from './Invoiced.vue'
import MenuTitle from '@/components/Management/MenuTitle.vue'

@Component({
  layout: 'Management',
  components: {
    MenuTitle,
    NotApplied,
    AlreadyApplied,
    Invoiced
  }
})
class Index extends Vue {
  tabIndex: number = 0
}
export default Index
</script>
<style scoped>
</style>
