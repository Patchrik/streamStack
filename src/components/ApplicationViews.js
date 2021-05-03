import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import { DataProvider } from "../providers/DataProvider";
import AppBar from "./AppBar";

const ApplicationViews = () => {
	return (
		<Switch>
			<Route path="/" exact>
				<DataProvider>
					<AppBar />
					<Home />
				</DataProvider>
			</Route>
			<Route path="/details">
				<DataProvider>
					<AppBar />
					<Details />
				</DataProvider>
			</Route>
		</Switch>
	);
};

export default ApplicationViews;
