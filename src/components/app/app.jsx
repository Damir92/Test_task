import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import {Routes} from '../../const';

import WelcomePage from '../welcome-page/welcome-page';
import Users from '../users/users';

const App = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path={Routes.MAIN} component={WelcomePage} />
      <Route exact path={Routes.USERS} component={Users} />
    </Switch>
  </BrowserRouter>
;

export default App;
