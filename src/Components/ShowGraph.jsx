import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const ShowGraph = ({ prefPopulation }) => {
  let series = [];
  let categories = [];

  for (let pop of prefPopulation) {
    let data = [];

    for (let pop_data of pop.data) {
      data.push(pop_data.value);
      categories.push(pop_data.year);
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
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
