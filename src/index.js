import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-hx26rbohxpmb4exy.us.auth0.com"
    clientId="tAjuFIiTl1uF4jeVh7lq8NMwND48X6X0"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);

reportWebVitals();
