<template>
  echart练习
  <div id="echart" style="width: 200px; height: 200px"></div>
</template>
<script setup lang="ts">
// import * as echarts from 'echarts'

// var dom = document.getElementById('echart')
// var myChart = echarts.init(dom as any, null as any, {
//   renderer: 'canvas'
// })
// var app = {}

// var option

// option = {
//   title: {
//     text: 'Referer of a Website',
//     subtext: 'Fake Data',
//     left: 'center'
//   },
//   tooltip: {
//     trigger: 'item'
//   },
//   legend: {
//     orient: 'vertical',
//     left: 'left'
//   },
//   series: [
//     {
//       name: 'Access From',
//       type: 'pie',
//       radius: '50%',
//       data: [
//         { value: 1048, name: 'Search Engine' },
//         { value: 735, name: 'Direct' },
//         { value: 580, name: 'Email' },
//         { value: 484, name: 'Union Ads' },
//         { value: 300, name: 'Video Ads' }
//       ],
//       emphasis: {
//         itemStyle: {
//           shadowBlur: 10,
//           shadowOffsetX: 0,
//           shadowColor: 'rgba(0, 0, 0, 0.5)'
//         }
//       }
//     }
//   ]
// }

// if (option && typeof option === 'object') {
//   myChart.setOption(option as any)
// }

// window.addEventListener('resize', (myChart as any).resize)
// 加载完成
onMounted(() => {
  console.log('echart模板')
})
</script>
<style scoped lang="scss"></style>
