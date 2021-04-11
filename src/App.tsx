import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import PlayersPage from './components/pages/PlayersPage';
import HomePage from './components/pages/HomePage';
import { GlobalPaths } from './components/common/GlobalPath';
import CreateLeague from './components/pages/CreateLeaguePage';
import MyTeam from './components/pages/MyTeamPage';

const App = () => {
  return (
    <div className="main-grid">
      <Router>
        <Header />
        <Route path={GlobalPaths.playersUrl} exact component={PlayersPage} />
        <Route path={GlobalPaths.homeUrl} exact component={HomePage} />
        <Route path={GlobalPaths.createLeagueUrl} exact component={CreateLeague} />
        <Route path={GlobalPaths.myTeamUrl} exact component={MyTeam} />
        <Redirect from='/' to='home' exact />
      </Router>
    </div>
  );
};

export default App;
