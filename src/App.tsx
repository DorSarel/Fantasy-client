import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import PlayersPage from './components/pages/PlayersPage';
import WelcomePage from './components/pages/WelcomePage';
import { GlobalPaths } from './components/common/GlobalPath';
import CreateLeague from './components/pages/CreateLeaguePage';
import MyTeam from './components/pages/MyTeamPage';
import GuardRoute from './components/common/GuardRoute';

const App = () => {
  return (
    <div className="main-grid">
      <Router>
        <Header />
        <Route path={GlobalPaths.welcomeUrl} exact={true} component={WelcomePage} />
        <GuardRoute path={GlobalPaths.myTeamUrl} exact={true} component={MyTeam} />
        <GuardRoute path={GlobalPaths.playersUrl} exact={true} component={PlayersPage} />
        <GuardRoute path={GlobalPaths.createLeagueUrl} exact={true} component={CreateLeague} />
      </Router>
    </div>
  );
};

export default App;
