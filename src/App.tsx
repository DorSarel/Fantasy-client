import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import PlayersPage from './components/pages/PlayersPage';

const App = () => {
  return (
    <div className="main-grid">
      <Router>
        <Header />
        <Route path="/players" exact component={PlayersPage} />
      </Router>
    </div>
  );
};

export default App;
