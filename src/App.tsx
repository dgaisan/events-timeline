import React from 'react';
import './App.css';
import Timeline from './components/Timeline';
import VerticalLine from './components/VerticalLine';

function App() {
  return (
    <div className="App">
      <>Timeline component.</>
      <Timeline />
      <VerticalLine isEven={true}/>
    </div>
  );
}

export default App;
