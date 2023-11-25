import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-vilam7wggr8obwx7.us.auth0.com"
     clientId="dmfu3f6Ar6jyyuVmhMRe0cu3odreMqab"
     authorizationParams={{
      redirect_uri: "https://main.d2n0y8ywifgguf.amplifyapp.com/"
     }}
     audience="http://localhost:3000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
