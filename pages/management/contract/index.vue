<template lang="pug">
div
  menuTitle(title="合同管理")
  .mt-10.bg-white.p-15.main-content
    b-tabs(content-class="mt-15", v-model="tabIndex")
      b-tab(title="待支付")
        contractManage
      b-tab(title="待提货")
        waitPickUp
      b-tab(title="修改中")
        underRevision
      b-tab(title="已完成")
        completed
      b-tab(title="全部")
        contractAll
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import contractManage from './contractManage.vue'
import waitPickUp from './waitPickUp.vue'
import underRevision from './underRevision.vue'
import completed from './completed.vue'
import contractAll from './contractAll.vue'
import menuTitle from '@/components/Management/MenuTitle.vue'
@Component({
  layout: 'Management',
  components: {
    menuTitle,
    contractManage,
    waitPickUp,
    underRevision,
    completed,
    contractAll
  }
})
class Index extends Vue {
  tabIndex: number = 0
}
export default Index
</script>
<style scoped>
</style>
