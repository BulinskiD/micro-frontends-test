import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath } = {}) => {
  const history = defaultHistory ?? createMemoryHistory({
    initialEntries: [initialPath]
  });

  history.listen((location) => onNavigate?.(`${location.pathname}${location.search ?? ""}`));

  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

  return {
    navigate: (path) => {
      const {pathname, query} = history.location;
      const oldPath = `${pathname}${query ?? ""}`
      if(path !== oldPath) {
        history.push(path);
      }
    }
  }
};

if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#auth-dev-root");
  if (root) {
    mount(root, {defaultHistory: createBrowserHistory() });
  }
}

export { mount };
