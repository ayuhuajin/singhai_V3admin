<template>
  echart练习
  <div id="myEchart" style="width: 30vw; height: 30vw"></div>
</template>
<script setup lang="ts">
import * as echarts from 'echarts'
// 加载完成
onMounted(() => {
  // const { proxy } = getCurrentInstance() as any
  // console.log(proxy.$echarts, 99999)
  // const myEchartDiv = document.getElementById('myEchart') as HTMLElement
  // const myEchart = echarts.init(myEchartDiv)
  // // 绘制图表
  // myEchart.setOption({
  //   title: {
  //     text: 'ECharts 入门示例2'
  //   },
  //   tooltip: {},
  //   xAxis: {
  //     data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  //   },
  //   yAxis: {},
  //   series: [
  //     {
  //       name: '销量',
  //       type: 'bar',
  //       data: [5, 20, 36, 10, 10, 20]
  //     }
  //   ]
  // })

  var dom = document.getElementById('myEchart') as HTMLElement
  const myChart: echarts.ECharts = echarts.init(dom)
  var app = {}

  var option

  option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  if (option && typeof option === 'object') {
    myChart.setOption(option)
  }

  window.addEventListener('resize', (myChart as any).resize)
})
</script>
<style scoped lang="scss"></style>
