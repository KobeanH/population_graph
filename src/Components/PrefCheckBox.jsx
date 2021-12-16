import React from 'react';

export const PrefCheckBox = (props) => {
  return (
    <>
      {props.prefectures.map((prefecture) => (
        <li key={prefecture.prefName}>
          <input
            type="checkbox"
            name="pref_name"
            onChange={(event) =>
              props.onChange(prefecture.prefName, prefecture.prefCode, event.target.checked)
            }
            id={'checkbox' + prefecture.prefCode}
          />
          <label htmlFor={'checkbox' + prefecture.prefCode}>{prefecture.prefName}</label>
        </li>
      ))}
      ;
    </>
  );
};
