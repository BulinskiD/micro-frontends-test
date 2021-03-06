import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const mount = (el, { onNavigate, defaultHistory } = {}) => {
  const history = defaultHistory ?? createMemoryHistory();

  history.listen((location) => onNavigate?.(`${location.pathname}${location.search ?? ""}`));

  ReactDOM.render(<App history={history} />, el);

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
  const root = document.querySelector("#marketing-dev-root");
  if (root) {
    mount(root, {defaultHistory: createBrowserHistory() });
  }
}

export { mount };
