import React from "react";
import classes from "./Navigation.module.css";
import {Link} from 'react-router-dom'

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
      <Link to='/signin'> <div className={classes.toggleInner}>Sign In</div>   </Link>      
      <Link to='/'> <div className={classes.toggleInner}>Sign Up</div> </Link>  
      </div>
    </div>
  );
};

export default navigation;
