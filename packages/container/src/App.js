import React from "react";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
    productionPrefix: "co"
})

export default function App() {
  return (
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
            <Header />
            <MarketingApp />
        </BrowserRouter>
      </StylesProvider>
  );
}
