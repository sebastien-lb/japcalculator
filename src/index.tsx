import "./index.css";

import * as Sentry from "@sentry/react";
import * as serviceWorker from "./serviceWorker";

import App from "./App";
import { ConnectedRouter } from "connected-react-router";
import { Integrations } from "@sentry/tracing";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { history } from "./redux/Router/router";
import { store } from "./redux/config";
import { theme } from "./style/theme";

Sentry.init({
  dsn: "https://ab482aa399a24337b08ecd7b095a5c7e@o1040153.ingest.sentry.io/6009070",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

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
