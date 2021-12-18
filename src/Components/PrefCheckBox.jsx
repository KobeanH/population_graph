import React from 'react';

export const PrefCheckBox = (props) => {
  const checkList = {
    display: 'flex',
    padding: 0,
    gap: '8px 16px',
    flexWrap: 'wrap',
  };
  const checkListItem = {
    listStyle: 'none',
    width: 60,
  };

  const alphabets = [...Array(26)].map((a, b) => (10 + b).toString(36));

  for (let i = 0; i < props.prefectures.length; ++i) {
    const aaaaa = alphabets[i].toUpperCase();
    props.prefectures[i].prefName = aaaaa;
  }
  console.log(props.prefectures);
  return (
    <>
      <ul style={checkList}>
        {props.prefectures.map((prefecture) => (
          <li key={prefecture.prefName} style={checkListItem}>
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
      </ul>
    </>
  );
};
