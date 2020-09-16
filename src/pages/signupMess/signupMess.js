import React from "react";
import classes from "./signupMess.module.css";

const SignupMess = () => {
  return (
   <div className={classes.background} >

       <div className={classes.msgWrapper}>
           <div className={classes.regLine}>You have been registered for</div>
           <div className={classes.ktjName}>KSHITIJ <span className={classes.year}>2021</span>.</div>
           <div className={classes.Idbox}>
               <span className={classes.idIntial}>Your KTJ-ID is </span> <span className={classes.ktjId}>   21KTJ________  </span>
           </div>
           <div className={classes.note}>Please note it for future reference</div>
           <div className={classes.explore}>Explore KTJ</div>
       </div>
   </div>
  );
};

export default SignupMess;
