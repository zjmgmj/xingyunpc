<template lang="pug">
  section
    b-container(:fluid="true")
      router-view
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  layout: 'ShopMall'
})
class App extends Vue {
}
export default App
</script>

<style>
</style>
