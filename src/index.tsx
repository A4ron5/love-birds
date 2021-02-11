import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import { history } from "lib/routing";

import Application from "./Application";

ReactDOM.render(
	<Router history={history}>
		<Application />
	</Router>,
	document.getElementById("root")
);
