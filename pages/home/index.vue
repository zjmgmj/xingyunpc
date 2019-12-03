<template lang="pug">
  .content.mt-20
    b-row
      b-col.bg-white.pt-20.pb-10.relative-position
        img.xyzs(:src="require('@/assets/images/xyzs.png')", alt="型云指数")
        .echarts-box(ref="myChart")
      b-col.bg-white.new-box.p-20
        .flex.flex-content-between.flex-center
          img(:src="require('@/assets/images/hqzx.png')", alt="行业资讯")
          router-link(to="/")
            .more.text-333
              span 更多
              i.iconfont.icon-gengduo
        .new-content
          router-link(to="/", v-for="(item, index) in newList", :key="index")
            .flex.mt-25.flex-content-between.flex-center.text-666
              .col.ellps-row.p-0 {{item.title}}
              .time {{item.time}}
    .ft-22.mt-30
      span 型云服务
      span.pl-10.ft-14.text-666 客服热下：400-8788-361
    .flex.mt-15
      .serve-card
        .ft-22
          span.text-green 开平
          span.pl-5.ft-16 专业开平 高效加工
        .text-666.mt-20  大平:厚度：4~16mm  费用：20元每吨起
        .text-666.mt-20 小平:厚度：1.5~6mm  费用：20元每吨起
        .mt-15
          router-link.a_btn(to="/") 我要开平
      .serve-card
        .ft-22
          span.text-blue 镀锌
          span.pl-5.ft-16 专业镀锌 全程无忧
        .text-666.mt-20 镀锌槽钢、角钢、扁钢...
        .text-666.mt-20 经验丰富 欢迎咨询加工
        .mt-15
          router-link.a_btn(to="/") 我要镀锌
      .serve-card
        img(:src="require('@/assets/images/help.jpg')", width="310px")
        router-link.a_btn(to="/") 点我找货
    .ft-22.mt-30.flex.flex-content-between.flex-center
      .r
        span 型材
        span.pl-10.ft-14.text-666 H型钢9:00开售
      .ft-16 
        router-link.text-333(to="/")
          span 去商城选购
          i.iconfont.icon-gengduo
    .flex.mt-15
      img.animation(:src="require('@/assets/images/1524906188651.jpg')", width="178px", height="282px", alt="h型钢、工字钢、角钢、槽钢等")
      .pro-content.ml-5
        .list.animation
          router-link(to="/")
            .flex.flex-content-between
              .ft-13.text-333
                div 
                  span.text-blue 角钢
                  span.pl-5 河北
                  span.pl-5 常州
                .mt-15
                  span 80*80*10
                  span Q235
              .text-666.ft-12 11-19 13:49 
    .ft-22.mt-30.flex.flex-content-between.flex-center
      .r
        span 其它品类推荐
      .ft-16 
        router-link.text-333(to="/")
          span 去商城选购
          i.iconfont.icon-gengduo
    .flex.mt-15
      img.animation(:src="require('@/assets/images/1524906206384.jpg')", width="178px", height="282px", alt="h型钢、工字钢、角钢、槽钢等")
      .pro-content.ml-5
        .list.animation
          router-link(to="/")
            .flex.flex-content-between
              .ft-13.text-333
                div 
                  span.text-blue 角钢
                  span.pl-5 河北
                  span.pl-5 常州
                .mt-15
                  span 80*80*10
                  span Q235
              .text-666.ft-12 11-19 13:49
    .ft-22.mt-30
      span 战略合作单位
    .flex.cooperation.mt-15.flex-content-between
      .list.animation(v-for="(item, index) in cooperationList", :key="index")
        img(:src="item", width="183", height="65")                  
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// const echarts = require('echarts/lib/echarts')
// require('echarts/lib/chart/line')
// require('echarts/lib/chart/bar')
// require('echarts/lib/chart/radar')
import echarts from 'echarts'


interface newList {
  time: string,
  title: string
}

interface proList {}

@Component({
  layout: 'ShopMall'
})
class Home extends Vue {
  newList: Array<newList> = [{
    time: '2019-02-01',
    title: '【公告】型云钢铁电商平台系统维型云钢铁电商平台系统维'
  }]
  proList: Array<any> = [{}]
  cooperationList: Array<any> = [
    require('@/assets/images/1498266314979.jpg'), 
    require('@/assets/images/1498266314979.jpg'),
    require('@/assets/images/1498266314979.jpg'),
    require('@/assets/images/1498266314979.jpg'),
    require('@/assets/images/1498266314979.jpg'),
    require('@/assets/images/1498266314979.jpg'),
    require('@/assets/images/1498266314979.jpg'),
    require('@/assets/images/1498266314979.jpg'),
    require('@/assets/images/1498266314979.jpg'),
    require('@/assets/images/1498266314979.jpg'),
    require('@/assets/images/1498266314979.jpg'),
    require('@/assets/images/1498266314979.jpg')]

  echartShow:boolean = true
  lineOptions:any = {
    title: { text: '' },
    tooltip: {trigger: 'axis'},
    grid: { left: '1%', right: '3%', bottom: '0%', containLabel:true },
    legend: { right : 0, selectedMode :'single', data: ['H型钢', '槽钢', '普碳开平板'], selected: {'H型钢':true} },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        show: true,
        // rotate: 30,
        textStyle: {color: '#777'},
        formatter: function (value: any, index: number) {
          const d = new Date(value)
          let month:any = d.getMonth() + 1
          let day:any = d.getDate()
          month = month > 9 ? month : '0' + month
          day = day > 9 ? day : '0' + day
          return [month, day].join('/')
        }
      },
      axisLine: {
        lineStyle: { color: '#bcddfe', width: 1}
      },
      splitLine: {
        show: true,
        lineStyle: {color: ['#d6e9fc']}
      }
    },
    yAxis: {
      type: 'value',
      min: function (value:any) {
        return Math.floor(value.min / 100) * 100 - 100
      },
      max: function (value:any) {
        return Math.ceil(value.max / 100) * 100 + 100
      },
      axisLabel: {
        show: true,
        textStyle: {color: '#777'}
      },
      // minInterval: 100,
      axisLine: {
        lineStyle: {color: '#bcddfe', width: 1}
      },
      // splitArea: {show: false},
      splitLine: {
        show: true, lineStyle: {color: ['#d6e9fc']}
      }
    },
    series: [{
      name: 'H型钢',
      type: 'line',
      symbol: 'emptyCircle', // 拐点样式
      symbolSize: 5, // 拐点大小
      smooth: true,
      itemStyle: {
        normal: {
          color: '#409eff',
          lineStyle: {
            width: 2, // 折线宽度
            color: '#409eff'// 折线颜色
          },
          label: {show: false}
        }
      },
      data: []
    }]
  }  
  echartType:Array<string> = ['H型钢', '工角槽', '普碳开平板']
  lineOptionData:any = {}


  mounted() {
    console.log('echarts', echarts) 
    this.$nextTick(() => {
      this.getTrends()
    })
  }
  getTrends(): void {    
    const res:any = {"H型钢":[["2019-10-22","3760"],["2019-10-23","3760"],["2019-10-24","3760"],["2019-10-25","3760"],["2019-10-26","3760"],["2019-10-27","3760"],["2019-10-28","3760"],["2019-10-29","3760"],["2019-10-30","3760"],["2019-11-01","3760"],["2019-11-02","3760"],["2019-11-03","3760"],["2019-11-05","3780"],["2019-11-06","3780"],["2019-11-07","3780"],["2019-11-08","3780"],["2019-11-09","3780"],["2019-11-10","3780"],["2019-11-11","3780"],["2019-11-12","3780"],["2019-11-13","3630"],["2019-11-15","3630"],["2019-11-16","3630"],["2019-11-17","3630"],["2019-11-18","3630"],["2019-11-19","3620"]],"普碳开平板":[["2019-10-22","3805"],["2019-10-23","3805"],["2019-10-24","3805"],["2019-10-25","3805"],["2019-10-26","3805"],["2019-10-27","3805"],["2019-10-28","3805"],["2019-10-29","3805"],["2019-10-30","3805"],["2019-11-01","3805"],["2019-11-02","3805"],["2019-11-03","3805"],["2019-11-05","3805"],["2019-11-06","3805"],["2019-11-07","3805"],["2019-11-08","3805"],["2019-11-09","3805"],["2019-11-10","3805"],["2019-11-11","3805"],["2019-11-12","3805"],["2019-11-13","3805"],["2019-11-15","3805"],["2019-11-16","3805"],["2019-11-17","3805"],["2019-11-18","3805"],["2019-11-19","3805"]],"槽钢":[["2019-10-22","3720"],["2019-10-23","3720"],["2019-10-24","3720"],["2019-10-25","3720"],["2019-10-26","3720"],["2019-10-27","3720"],["2019-10-28","3720"],["2019-10-29","3720"],["2019-10-30","3720"],["2019-11-01","3720"],["2019-11-02","3720"],["2019-11-03","3720"],["2019-11-05","3730"],["2019-11-06","3730"],["2019-11-07","3730"],["2019-11-08","3730"],["2019-11-09","3730"],["2019-11-10","3730"],["2019-11-11","3730"],["2019-11-12","3730"],["2019-11-13","3800"],["2019-11-15","3800"],["2019-11-16","3800"],["2019-11-17","3800"],["2019-11-18","3800"],["2019-11-19","3830"]]}
    const lineOptionDataArr = []
    for (let i = 0; i < this.echartType.length; i++) {
      let key = this.echartType[i]
      if (key === '工角槽') key = '槽钢'
      const lineOption = {
        name: key,
        type: 'line',
        symbol: 'emptyCircle', // 拐点样式
        symbolSize: 5, // 拐点大小
        smooth: true,
        itemStyle: {
          normal: {
            color: '#409eff',
            lineStyle: {
              width: 2, // 折线宽度
              color: '#409eff'// 折线颜色
            },
            label: {show: false}
          }
        },
        data: res[key]
      }
      lineOptionDataArr.push(lineOption)
    }
    this.lineOptions.series = lineOptionDataArr
    this.drawLine()
  }
  drawLine(): void {
    // 基于准备好的dom，初始化echarts实例
    const me = this
    const myChart = (echarts as any).init(me.$refs.myChart)
    // 绘制图表
    myChart.setOption(me.lineOptions)
  }
}
export default Home
</script>
<style lang="stylus" scoped>
.new-box{
  height 300px
  margin-left 20px
  overflow hidden
  &.more{
    width 200px
  }
  .time{    
    width 80px
  }
  .new-content{
    height 250px
    overflow hidden
  }
}
.echarts-box{
  width: 100%;
  height: 250px;
  box-sizing border-box  
}
.xyzs{
  position absolute
  width 83px
  height 18px
  top 25px
  left 20px
  z-index 2
}
.serve-card {  
  height 190px  
  box-sizing border-box  
  -webkit-transition: all .2s linear;
  transition: all .2s linear;
  background: #fff;
  .a_btn{
    display: block;
    color: #fff;
    text-align: center;
    width: 115px;
    height: 36px;
    line-height: 36px;
    border-radius: 36px;
    margin-top: 20px;
  }
  &:first-child{
    margin-right 15px
    width 430px
    padding 25px
    background #fff url("../../assets/images/kaiping.png") no-repeat 93% 71%
    .a_btn{
      background #95d05c
    }
  }
  &:nth-child(2){
    margin-right 15px
    width 430px
    padding 25px
    background: #fff url("../../assets/images/duxin.png") no-repeat 93% 74%;
    .a_btn{
      background #6cc6fb
    }
  }
  &:last-child{
    width 310px
    .a_btn{
      text-align: center;
      color: #8894fe;
      display: block;
      height: 45px;
      line-height: 45px;
      width: 100%;
      font-size: 16px;
      margin-top: 0
    }    
  }
  &:hover{
    -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    -webkit-transform: translate3d(0, -2px, 0);
    transform: translate3d(0, -2px, 0);
  }
}
.pro-content{
  -webkit-box-flex: 1;
  flex: 1;
  .list{
    float: left;
    display: inline;
    background: #fff;
    border: none;
    margin-left: 6px;
    width: 333px;
    height: 90px;
    margin-bottom: 6px;
    padding: 25px 15px 10px 25px;
  }
}
.cooperation{
  .list{
    width: 183px;
    height: 78px;
    line-height: 78px;
    // margin-left: 20px;
    background: #fff;
    margin-bottom: 10px;
    // &:first-child{
    //   // margin-left: 0
    // }
  }
}
.animation{
  -webkit-transition: all .2s linear;
  transition: all .2s linear;
  &:hover{
    -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    -webkit-transform: translate3d(0, -2px, 0);
    transform: translate3d(0, -2px, 0);
  }
}
</style>