import React from 'react';
import './App.css';
import { Timeline } from './components/Timeline';
import data from './mockData/events';

function App() {
  return (
    <div className="App">
      <>Timeline component.</>
      <Timeline events={data}></Timeline>
    </div>
  );
}

export default App;
