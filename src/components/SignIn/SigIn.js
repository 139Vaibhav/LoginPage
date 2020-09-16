import React from "react";
import classes from "./SignIn.module.css";

const signIn = () => {
  return (
    
      <div className={classes.signOuter}>
        <form action='/signupmess' className={classes.formOuter}>
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
  );
};

export default signIn;







