import React from "react";
import {Route, Router, Switch} from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au"
})

export default function App({ history, onSignIn }) {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
              <Route render={() => <SignIn onSignIn={onSignIn} />} path={"/auth/signin"} />
              <Route render={() => <SignUp onSignIn={onSignIn} />} path={"/auth/signup"} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}
