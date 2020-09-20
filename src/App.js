import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Signup from "./pages/signup/signup";
import SignIn from "./pages/signIn/signIn";
import SignupMess from "./pages/signupMess/signupMess";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signupmess" component={SignupMess} />
      </Switch>
    </Router>
  );
}

export default App;
