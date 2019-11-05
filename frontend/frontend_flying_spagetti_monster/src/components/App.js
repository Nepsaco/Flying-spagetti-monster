import React from 'react';

import './../stylesheets/App.css';

import Nav from './Nav'

const App =() => {
  return (
    <div className="App">
      <header>
        <Nav />
        <h1>The Lord of Illumination</h1>
      </header>
    </div>
  );
}

export default App;
