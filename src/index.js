import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { compose, createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

import initialState from "./app/state";

import { RootPage } from "./app/components/RootPage";
import { TrackDetails } from "./app/components/TrackDetails";
import reducer from "./app/reducers";

const middleWares = [thunk, logger];
const store = createStore(reducer, initialState, compose(applyMiddleware(...middleWares)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={RootPage} />
        <Route exact path="/track/:trackId" component={TrackDetails} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
