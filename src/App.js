import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Signup from "./pages/signup/signup";
import SignIn from "./pages/signIn/signIn";
import SignupMess from "./pages/signupMess/signupMess";
import Workshop from "./pages/Activities/Workshop";
import Exhibition from "./pages/Activities/Exhibition";
import Guest from "./pages/Activities/Guest";
function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/workshop" component={Workshop} />
        <Route exact path="/guest" component={Guest} />
        <Route exact path="/" component={Signup} />
        <Route exact path="/exhibition" component={Exhibition} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signupmess" component={SignupMess} />
      </Switch>
    </Router>
  );
}

export default App;
