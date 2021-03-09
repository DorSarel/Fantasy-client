import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <div className="left" style={{ background: '#ccc' }}>
          This is the left column
        </div>
        <div className="middle" style={{ background: 'red' }}>
          This is the middle column
        </div>
        <div className="right" style={{ background: 'yellow' }}>
          This is the right column
        </div>
      </Router>
    </div>
  );
};

export default App;
