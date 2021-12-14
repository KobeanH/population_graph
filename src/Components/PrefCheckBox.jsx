import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const PrefCheckBox = () => {
  const [prefectures, setPreFectures] = useState([]);
  useEffect(() => {
    // 都道府県一覧を取得する
    axios
      .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: { 'X-API-KEY': process.env.REACT_APP_API_KEY },
      })
      .then((results) => {
        setPreFectures(results.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(prefectures);
  return (
    <>
      {prefectures.map((prefecture) => (
        <li key={prefecture.prefName}>
          <input type="checkbox" name="pref_name" />
          <label>{prefecture.prefName}</label>
        </li>
      ))}
      ;
    </>
  );
};
