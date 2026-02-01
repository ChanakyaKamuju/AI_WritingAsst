import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import ai from "./images/ai.png";
import { PrivyProvider } from "@privy-io/react-auth";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <PrivyProvider
      appId={import.meta.env.VITE_PRIVY_APP_ID}
      //key="privy_app_secret_5V7P8mXMtuvL6yn6XJXwV7ngM14MAkwUkcqSndq3BR19qDiL881VS7p96k7vJhsu446RTtiabMrBML4WFBxbhjy6"
      config={{
        loginMethods: ["email", "wallet", "google"],
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          logo: ai,
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          ethereum: {
            createOnLogin: "users-without-wallets",
          },
        },
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>,
);
