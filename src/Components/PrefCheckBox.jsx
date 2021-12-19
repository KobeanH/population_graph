import React from 'react';

export const PrefCheckBox = (props) => {
  const { prefectures, onChange } = props;

  const checkList = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px 16px',
    padding: 0,
  };
  const checkListItem = {
    display: 'flex',
    justifyContent: 'center',
    width: 40,
    listStyle: 'none',
  };
  const checkListItemLabel = {
    width: 15,
  };

  const alphabets = [...Array(26)].map((a, b) => (10 + b).toString(36));

  for (let i = 0; i < prefectures.length; ++i) {
    const ALPHABETS = alphabets[i].toUpperCase();
    prefectures[i].prefName = ALPHABETS;
  }

  return (
    <>
      <ul style={checkList}>
        {prefectures.map((prefecture) => (
          <li key={prefecture.prefName} style={checkListItem}>
            <input
              type="checkbox"
              name="pref_name"
              onChange={(event) =>
                onChange(prefecture.prefName, prefecture.prefCode, event.target.checked)
              }
              id={'checkbox' + prefecture.prefCode}
            />
            <label style={checkListItemLabel} htmlFor={'checkbox' + prefecture.prefCode}>
              {prefecture.prefName}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};
