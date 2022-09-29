import React from 'react';
import ReactECharts from 'echarts-for-react';


export default function BarChart() {
  const option = {
    title: {
      text: 'Basic Chart Example'
    },
    toolbox: {
        feature: {
            saveAsImage: {},            
            restore: {}
        }
    },
    tooltip: {},
    legend: {
      data:['Label']
    },
    xAxis: {
       data: simpleChartData.map(c => c.name),
        axisLabel: {
              interval: 0,
              rotate: 45,
              textStyle: {
                baseline: "top",
                color: "#333",
                fontSize: 11,
                fontWeight: 500
              }
            },
    },
    yAxis: {},
    series: [{
      name: 'City',
      type: 'line',
      data: simpleChartData.map(c => c.value),
    }]
  };

  return (

    <ReactECharts
      option={option}
      style={{ height: 400 }}      
    />

  )
}

const simpleChartData = [
  { value: 1048, name: 'Search Engine' },
  { value: 735, name: 'Direct' },
  { value: 580, name: 'Email' },
  { value: 484, name: 'Union Ads' },
  { value: 522, name: 'Magazine Ads' },
  { value: 648, name: 'FaceBook Ads' },
  { value: 379, name: 'Twitter Ads' },
  { value: 550, name: 'Google Ads' },
  { value: 450, name: 'Amazon Ads' }
]

