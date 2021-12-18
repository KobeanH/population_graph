import React from 'react';
import './App.css';
import { UseApi } from './Components/UseApi';

function App() {
  const app = {
    maxWidth: '1080px',
    margin: '40px auto',
    border: '1px solid #000',
  };
  const title = {
    padding: '20px 0',
    margin: 0,
    backgroundColor: '#C4C4C4',
  };
  return (
    <div className="App" style={app}>
      <h2 style={title}>Title</h2>
      <UseApi></UseApi>
    </div>
  );
}

export default App;
