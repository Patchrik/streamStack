import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import { DataProvider } from '../providers/DataProvider';
import AppBar from './AppBar';

const ApplicationViews = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <DataProvider>
          <AppBar />
          <Home />
        </DataProvider>
      </Route>
      <Route path="/details/:title" exact>
        <DataProvider>
          <AppBar />
          <Home />
        </DataProvider>
      </Route>
    </Switch>
  );
};

export default ApplicationViews;
