import React from "react";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import "./App.css";
import { CalculatorPage } from "./pages";

Sentry.init({
  dsn: "https://6cf35c51df504b5bad2497b4465b4bc4@o1040136.ingest.sentry.io/6009053",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const App = () => {
  return (
    <div className="App">
      <CalculatorPage />
    </div>
  );
};

export default App;
