import React, {useEffect, useState} from "react";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header";

const MarketingApp = React.lazy(() => import("./components/MarketingApp"));
const AuthApp = React.lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
    productionPrefix: "co"
})

export default function App() {
    const [isSignedIn, setIsSignedIn] = useState(false);

  return (
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
            <Header signedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
            <React.Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path={"/auth"} render={() => <AuthApp onSignIn={() => setIsSignedIn(true)} />} />
                    <Route path={"/"} component={MarketingApp} />
                </Switch>
            </React.Suspense>
        </BrowserRouter>
      </StylesProvider>
  );
}
