import React from 'react';
import '@innovaccer/design-system/css';
import Header from './Header';
import TaskManager from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <TaskManager />
    </div >
  );
}

export default App;
