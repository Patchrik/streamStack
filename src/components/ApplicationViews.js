import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import { DataProvider } from "../providers/DataProvider";

const ApplicationViews = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <DataProvider>
          <Home />
        </DataProvider>
      </Route>
      <Route path="/details/:title" exact>
        <DataProvider>
          <Home />
        </DataProvider>
      </Route>
    </Switch>
  );
};

export default ApplicationViews;
