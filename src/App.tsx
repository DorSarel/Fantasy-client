import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import PlayersPage from './components/pages/PlayersPage';
import HomePage from './components/pages/HomePage';


const App = () => {
  return (
    <div className="main-grid">
      <Router>
        <Header />
        <Route path="/players" exact component={PlayersPage} />
        <Route path="/home" exact component={HomePage} />
      </Router>
    </div>
  );
};

export default App;
