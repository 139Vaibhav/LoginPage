import React from "react";
import classes from "./Navigation.module.css";

const navigation = () => {
  return (
    <div className={classes.outer}>
      <div className={classes.space}></div>
      <div className={classes.item}>Events</div>
      <div className={classes.item}>Activities</div>
      <div className={classes.item}>Regionals</div>
      <div className={classes.item}>Campuss Ambassdors</div>
      <div className={classes.item}>Merchandise</div>
      <div className={classes.item}>Contact Us</div>
      <div className={classes.toggler}>
        <div className={classes.toggleInner}>Sign In</div>
        <div className={classes.toggleInner}>Sign Up</div>
      </div>
    </div>
  );
};

export default navigation;
