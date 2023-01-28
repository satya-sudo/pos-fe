import React from 'react';
import Chart from 'react-apexcharts'

const chartWrapper = ({data,width,height}) => {
  return (
    <Chart options={{labels:data.labels,colors:["#1F8A70",
      "#301E67",
      "#5B8FB9",
      "#FC7300"]}} series={data.series} type="pie" width={width} height={height} />
  )
}

export default chartWrapper;