import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import PageNotFound from "./pages/PageNotFound";
import TestPage from "./pages/TestPage";
import MainPage from './pages/MainPage';
import PageInConstruction from "./pages/PageInConstruction";
import UserDashboard from "./pages/user/UserDashboard";
import UserAchievements from "./pages/user/UserAchievements";
import SinglePost from "./pages/post/SinglePost";
import UserPosts from "./pages/post/UserPosts";

export default (
    <BrowserRouter basename="/wikiaves">
      <Switch>
      <Route exact path="/" component={MainPage} />
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route path="/signUp" component={RegisterPage} />

        <Route path="/profile" component={UserDashboard} />
        <Route path="/achievements" component={UserAchievements} />

        <Route path="/post" component={SinglePost} />
        <Route path="/posts" component={UserPosts} />
        
        <Route path="/underConstructionPage" component={PageInConstruction} />
        <Route path="/testPage" component={TestPage} />
        <Route path="*" component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);