import React from "react";
import SignIn from "./components/SignIn/SigIn";
import Navigation from "./components/Navigation/Navigation";
import classes from "./App.module.css";
import Vdo from "./components/vdoplayer/Vdo"
import bgvdo from "./images/bgvdo.mp4";
function App() {
  return (
    
    <div className={classes.outer}>
    <Vdo name={bgvdo}/>
      <Navigation />
      <SignIn />
     </div>
    
  );
}

export default App;
