import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <div style={{ fontSize: '5rem' }}>Main will go here</div>
      </Router>
    </div>
  );
};

export default App;
