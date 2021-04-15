import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DataProvider } from "../providers/DataProvider";

const ApplicationViews = () => {
	return (
		<Switch>
			<Route>
				<DataProvider></DataProvider>
			</Route>
		</Switch>
	);
};
