import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { store } from "./redux/config";
import { history } from "./redux/Router/router";
import { theme } from "./style/theme";

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</ConnectedRouter>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Change to test the netlify deploy preview feature
