import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import PageNotFound from "./pages/PageNotFound";
import TestPage from "./pages/TestPage";
import MainPage from './pages/MainPage';

export default (
    <BrowserRouter basename="/wikiaves">
      <Switch>
      <Route exact path="/" component={MainPage} />
        <Route exact path="/login">
        <LoginPage />
        </Route>
        <Route path="/testPage" component={TestPage} />
        <Route path="*" component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);