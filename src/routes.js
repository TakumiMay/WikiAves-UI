import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import PageNotFound from "./pages/others/PageNotFound";
import TestPage from "./pages/others/TestPage";
import MainPage from './pages/MainPage';
import PageInConstruction from "./pages/others/PageInConstruction";
import UserDashboard from "./pages/user/UserDashboard";
import SinglePost from "./pages/post/SinglePost";
import Posts from "./pages/post/Posts";
import Ranking from "./pages/user/Ranking";
import UserDashboardAchievements from "./pages/user/UserDashboardAchievements";

export default (
    <BrowserRouter basename="/wikiaves">
      <Switch>
      <Route exact path="/" component={MainPage} />
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route path="/signUp" component={RegisterPage} />

        <Route path="/profile" component={UserDashboard} />
        <Route path="/achievements" component={UserDashboardAchievements} />
        <Route path="/expeditions" component={UserDashboard} />

        <Route path="/post" component={SinglePost} />
        <Route path="/posts" component={Posts} />
        <Route path="/ranking" component={Ranking} />
        

        <Route path="/underConstructionPage" component={PageInConstruction} />
        <Route path="/testPage" component={TestPage} />
        <Route path="*" component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);