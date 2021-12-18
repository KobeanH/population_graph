import React from 'react';

export const PrefCheckBox = (props) => {
  const checkList = {
    display: 'flex',
    padding: 0,
    gap: '8px 24px',
    flexWrap: 'wrap',
  };
  const checkListItem = {
    listStyle: 'none',
  };

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
