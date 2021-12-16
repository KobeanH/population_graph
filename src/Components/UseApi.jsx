import React, { useEffect, useState } from 'react';
import { PrefCheckBox } from './PrefCheckBox';
import axios from 'axios';
import { showGraph } from './ShowGraph';

export const UseApi = () => {
  const [prefectures, setPreFectures] = useState(null);

  useEffect(() => {
    // サイト表示する際に都道府県一覧を取得
    axios
      .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: { 'X-API-KEY': process.env.REACT_APP_API_KEY },
      })
      .then((results) => {
        setPreFectures(results.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [prefPopulation, setPrefPopulation] = useState([]);

  // チェックボックスをクリックした際の処理
  const clickCheckBox = (prefName, prefCode, check) => {
    let eachPrefPopulation = prefPopulation.slice();

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
            data: results.data.result.data[0].data,
          });
          setPrefPopulation(eachPrefPopulation);
          console.log(eachPrefPopulation);
        })
        .catch((error) => {
          console.log(error);
          return;
        });
    }
    // チェックを外すとグラフから削除
    else {
      const deleteIndex = eachPrefPopulation.findIndex((value) => value.prefName === prefName);
      if (deleteIndex === -1) return;
      eachPrefPopulation.splice(deleteIndex, 1);
      setPrefPopulation(eachPrefPopulation);
      console.log(eachPrefPopulation);
    }
  };

  return (
    <main>
      <h2>都道府県</h2>
      {prefectures && <PrefCheckBox prefectures={prefectures.result} onChange={clickCheckBox} />}
      <showGraph></showGraph>
    </main>
  );
};
