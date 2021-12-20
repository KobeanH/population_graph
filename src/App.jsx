import React from 'react';
import './App.css';

import { UseApi } from './Components/UseApi';

const app = {
  maxWidth: '1080px',
  margin: '0 auto',
  border: '1px solid #000',
  textAlign: 'center',
};
const appTtl = {
  margin: 0,
  padding: '20px 0',
  backgroundColor: '#C4C4C4',
};

function App() {
  return (
    <div style={app}>
      <h2 style={appTtl}>Title</h2>
      <UseApi />
    </div>
  );
}

export default App;
