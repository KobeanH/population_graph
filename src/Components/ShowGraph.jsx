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

  const options = {
    title: {
      text: '',
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories: categories,
    },
    yAxis: {
      title: {
        text: '人口数',
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
