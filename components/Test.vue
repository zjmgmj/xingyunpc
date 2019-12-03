<template lang="pug">
  div
    span.ft-16 {{nowDate}}
    .mt-15.mb-10
      span {{driverData.driverCode}}
      span.pl-10 {{driverData.driverPhone}}
    b-button.ml-10(@click="btnClick") 测试点击
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { loadData } from '~/models/test'
import { mapState } from 'vuex'

interface User {
  firstName: string
  lastName: number
}

@Component({
  computed: mapState([
    'driverIdcard'
  ])
})
class Test extends Vue {
  // @Prop({ type: Object, required: true }) readonly user!: User
  @Prop() user!: User

  message: string = 'This is a message'
  nowDate: string = (this as any).toStringDate(new Date())
  driverData: object = {}
  driverIdcard!: string  
  // constructor() {
  //   super()
  //   console.log(this)    
  // }
  mounted() {
    this.$nextTick(() => {
      this.loadData()
    })
  }

  get apiObj(): object {
    return (this as any).api.logoApi
  }

  loadData(): void {
    const paramsBody: loadData = {
      driverIdcard: this.driverIdcard
    }
    const params: object = {
      body: JSON.stringify(paramsBody)
    }
    const that = (this as any)
    that.requestDecode((this.apiObj as any).loadData, params, 'post').then((res: any) => {
      console.log(res)
      this.driverData = res
    }).catch((err: any) => {
      console.error(err)
    })
  }

  get fullName(): string {
    return `${this.user.firstName} ${this.user.lastName}`
  }

  btnClick(): void {
    console.log('----btnClick')
    this.nowDate = (this as any).toStringDate(new Date())
  }
}
export default Test
</script>

<style>
</style>
