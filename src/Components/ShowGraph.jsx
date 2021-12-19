import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const ShowGraph = ({ population }) => {
  let series = [];
  let categories = ['', '', 1980, '', 1990, '', 2000, '', 2010, '', 2020];

  for (let pop of population) {
    let data = [];

    for (let pop_data of pop.data) {
      data.push(pop_data.value);
    }
    series.push({
      type: 'line',
      name: pop.prefName,
      data: data,
    });
  }
  Highcharts.setOptions({
    lang: {
      thousandsSep: ',',
    },
  });
  const options = {
    chart: {
      marginTop: 35,
      marginRight: 30,
    },
    title: {
      text: '',
    },
    xAxis: {
      title: {
        text: '年度',
        rotation: 0,
        align: 'high',
        offset: 10,
        x: 20,
        tickInterval: 10,
      },
      categories: categories,
    },
    yAxis: {
      lineWidth: 1,
      title: {
        text: '人口数',
        align: 'high',
        rotation: 0,
        offset: 0,
        y: -20,
      },
    },
    series: series,
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
      },
    },
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};
