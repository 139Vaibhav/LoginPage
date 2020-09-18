import React, { Component } from "react";
import Vdo from "../vdoplayer/Vdo";
import bgvdo1 from "../../images/bgvdo.mp4";
import classes from "./SignIn.module.css";
import Navigation from "../Navigation/Navigation";
import { render } from "@testing-library/react";


class signIn extends Component{
  render() {
  return (
    <div className={classes.outer}>
      <Navigation />
      <div className={classes.signOuter}>
        <form className={classes.formOuter} onSubmit={this.playvdo}>
          <input
            type="text"
            className={classes.formInput}
            placeholder="KTJ-ID"
          ></input>
          <input
            type="password"
            className={classes.formInput}
            placeholder="Enter Password"
          ></input>
          <input
            type="submit"
            className={classes.formSubmit}
            value="Sign In"
          ></input>
        </form>
        
      </div>
    </div>
  );
  };
};

export default signIn;
