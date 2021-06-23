import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import PlayersPage from './components/pages/PlayersPage';
import WelcomePage from './components/pages/WelcomePage';
import { GlobalPaths } from './components/common/GlobalPath';
import CreateLeague from './components/pages/CreateLeaguePage';
import MyTeam from './components/pages/MyTeamPage';

const App = () => {
  return (
    <div className="main-grid">
      <Router>
        <Header />
        <Route path={GlobalPaths.welcomeUrl} exact component={WelcomePage} />
        <Route path={GlobalPaths.playersUrl} exact component={PlayersPage} />
        <Route path={GlobalPaths.createLeagueUrl} exact component={CreateLeague} />
        <Route path={GlobalPaths.myTeamUrl} exact component={MyTeam} />
        <Redirect from="/" to="welcome" exact />
      </Router>
    </div>
  );
};

export default App;
