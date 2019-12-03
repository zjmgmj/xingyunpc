<template lang="pug">
.flex.flex-center.flex-content-end.ft-12
  .pagination
    .tool-list.reload.page-box(@click="reload")
      i.iconfont.icon-shuaxin.ft-12
    .tool-list.per-start.page-box(@click="perStartPage", v-if="active > 3") «
    .tool-list.per.page-box(@click="perPage", v-if="active > 3") ‹
    .page-list.flex.flex-center
      .list(v-for="p in showPage", :key="p", :class="p === active ? 'active' : ''", @click="selectPage(p)") {{p}}
    .tool-list.nex.page-box(@click="nextPage", v-if="active < countPage") ›
    .tool-list.nex-end.page-box(@click="nextStartPage", v-if="active < countPage") »
    .tool-list.count-page.page-box 共{{countPage}}页
    .tool-list.count.page-box 共{{count}}条记录
</template>
<script lang='ts'>
import { Component, Vue, Emit, Prop } from 'vue-property-decorator'

@Component
class Pagination extends Vue {
  size: number = 10
  active: number = 1
  @Prop(Number) count: number

  @Emit()
  reload() {
    this.active = 1
  }

  get countPage(): number {
    const countPage: number = Math.ceil(this.count / this.size)
    return countPage
  }

  get showPage(): Array<number> {
    const showPageCount: number = 5
    let pageList: Array<number> = []
    if (this.countPage === 0) {
      return pageList
    }
    if (this.active <= 3) {
      pageList = [1, 2, 3, 4, 5]
    } else if (this.countPage - this.active >= 3) {
      pageList = [
        this.active - 2,
        this.active - 1,
        this.active,
        this.active + 1,
        this.active + 2
      ]
    } else {
      const arr = []
      for (let i = 0; i < showPageCount; i++) {
        arr.unshift(this.countPage - i)
      }
      pageList = arr
    }
    return pageList
  }

  @Emit('changePage')
  selectPage(p: number) {
    this.active = p
    return this.active
  }

  @Emit('changePage')
  perStartPage() {
    this.active = 1
    return this.active
  }

  @Emit('changePage')
  perPage() {
    if (this.active > 1) this.active--
    return this.active
  }

  @Emit('changePage')
  nextPage() {
    if (this.active < this.countPage) this.active++
    return this.active
  }

  @Emit('changePage')
  nextStartPage() {
    this.active = this.countPage
    return this.active
  }
}
export default Pagination
</script>
<style lang="stylus" scoped>
.pagination
  border 1px #eee solid
  line-height 20px
  .tool-list
    border-right 1px solid #eee
    padding 5px 10px
    cursor pointer
    &:last-child
      border-right none
      cursor default
    &:nth-last-child(2)
      cursor default
    &:hover
      background-color #eee
    .page-box
      padding 5px 10px
    .reload
      padding 5px 10px
  .page-list
    .list
      border-right 1px solid #eee
      padding 5px 10px
      cursor pointer
      &:hover
        background-color #eee
      &.active
        color #fff
        cursor default
        background-color #0289fb
        border-color #1e9fff
</style>
