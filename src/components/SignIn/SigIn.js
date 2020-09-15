import React from "react";
import classes from "./SignIn.module.css";
import Navigation from "../Navigation/Navigation";

const signIn = () => {
  return (
    <div className={classes.outer}>
      <Navigation />
      <div className={classes.signOuter}>
        <form className={classes.formOuter}>
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

export default signIn;
