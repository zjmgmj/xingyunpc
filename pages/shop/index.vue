<template lang="pug">
  .content
    Search
    MainList
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MainList from './mainList.vue'
import Search from './search.vue'

@Component({
  layout: 'ShopMall',
  components: {
    MainList,
    Search
  }
})
class Shop extends Vue {}
export default Shop
</script>
