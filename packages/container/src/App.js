import React, {useEffect, useState} from "react";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./components/Header";

const DashboardApp = React.lazy(() => import("./components/DashboardApp"));
const MarketingApp = React.lazy(() => import("./components/MarketingApp"));
const AuthApp = React.lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
    productionPrefix: "co"
})

const history = createBrowserHistory();

export default function App() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        isSignedIn && history.push("/dashboard");
    }, [isSignedIn])

  return (
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
            <Header signedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
            <React.Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path={"/auth"} render={() => <AuthApp onSignIn={() => setIsSignedIn(true)} />} />
                    {isSignedIn && <Route path={"/dashboard"} component={DashboardApp} />}
                    <Route path={"/"} component={MarketingApp} />
                    <Redirect to={"/"} />
                </Switch>
            </React.Suspense>
        </Router>
      </StylesProvider>
  );
}
