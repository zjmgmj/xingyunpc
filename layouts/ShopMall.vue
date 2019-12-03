<template lang="pug">
no-ssr
  section
    Head
    b-container.p-0(:fluid="true")
      //- nuxt
      router-view
    Footer
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Head from '@/components/Head/Head.vue'
import Footer from '@/components/Footer/Footer.vue'

@Component({
  components: {
    Head,
    Footer
  },
  middleware: 'indexJump'
})
class ShopMall extends Vue {
  beforeMount() {
    console.log('this.$route.path', this.$route.path)
  }
}
export default ShopMall
</script>
