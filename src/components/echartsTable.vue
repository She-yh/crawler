<template>
  <div id="echartsTable">
sss
  </div>
</template>

<script>

import * as echarts from 'echarts/core';
import { TooltipComponent, VisualMapComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { Bar3DChart } from 'echarts-gl/charts';
import { Grid3DComponent } from 'echarts-gl/components';
import { onMounted } from 'vue-demi'
import {option} from './options'
echarts.use([
  TooltipComponent,
  VisualMapComponent,
  Grid3DComponent,
  Bar3DChart,
  CanvasRenderer
]);
export default {
    setup(){
        onMounted(() => {
            var myChart = echarts.init(document.getElementById('echartsTable'))
            option && myChart.setOption(option);
        })
    }
}
</script>

<style>
#echartsTable{
    top: 0;
    position: fixed !important;
    height: 30vh;
    max-width: 980px;
    min-width: 300px;
    width: 100%;
}
</style>