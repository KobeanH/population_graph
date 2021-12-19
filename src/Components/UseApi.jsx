import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { PrefCheckBox } from './PrefCheckBox';
import { ShowGraph } from './ShowGraph';

const prefWrap = {
  marginBottom: '32px',
  padding: '3%',
};
const prefWrapTtl = {
  fontSize: 16,
  fontWeight: 'initial',
  textAlign: 'left',
};

export const UseApi = () => {
  const [prefectures, setPreFectures] = useState(null);

  useEffect(() => {
    // サイト表示する際に都道府県一覧を取得
    axios
      .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: { 'X-API-KEY': process.env.REACT_APP_API_KEY },
      })
      .then((results) => {
        setPreFectures(results.data.result.slice(0, 18));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [population, setPopulation] = useState([]);

  // チェックボックスをクリックした際の処理
  const clickCheckBox = (prefName, prefCode, check) => {
    let eachPrefPopulation = population.slice();

    // チェックをつけると都道府県別の人口取得
    if (check) {
      if (eachPrefPopulation.findIndex((value) => value.prefName === prefName) !== -1) return;
      axios
        .get(
          'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=' +
            String(prefCode),
          {
            headers: { 'X-API-KEY': process.env.REACT_APP_API_KEY },
          },
        )
        .then((results) => {
          eachPrefPopulation.push({
            prefName: prefName,
            data: results.data.result.data[0].data.slice(2, 13),
          });
          setPopulation(eachPrefPopulation);
        })
        .catch((error) => {
          console.log(error);
          return;
        });
    }
    // チェックを外すとグラフから削除
    else {
      const removeGraph = eachPrefPopulation.findIndex((value) => value.prefName === prefName);
      if (removeGraph === -1) return;
      eachPrefPopulation.splice(removeGraph, 1);
      setPopulation(eachPrefPopulation);
    }
  };

  return (
    <>
      <div style={prefWrap}>
        <h3 style={prefWrapTtl}>都道府県</h3>
        {prefectures && <PrefCheckBox prefectures={prefectures} onChange={clickCheckBox} />}
      </div>
      <ShowGraph population={population} />
    </>
  );
};
