import React, { Component } from "react";
import classes from "./signupMess.module.css";
import Vdo from "../../components/vdoplayer/Vdo";
import bgvdo from "../../images/bgvdo.mp4";
import Middle from "../../images/Middle.mp4";

class SignupMess extends Component {
  state = {
    videoName: bgvdo,
    loopCheck: false,
  };

  videoChangeHandler = () => {
    console.log(" I am working probably" + this.state.loopCheck);
    this.setState({ videoName: Middle, loopCheck: true });
  };

  render() {
    return (
      <>
        <div className={classes.background}>
          <div className={classes.msgWrapper}>
            <div className={classes.regLine}>You have been registered for</div>
            <div className={classes.ktjName}>
              KSHITIJ <span className={classes.year}>2021</span>.
            </div>
            <div className={classes.Idbox}>
              <span className={classes.idIntial}>Your KTJ-ID is </span>{" "}
              <span className={classes.ktjId}> 21KTJ________ </span>
            </div>
            <div className={classes.note}>
              Please note it for future reference
            </div>
            <div className={classes.explore}>Explore KTJ</div>
          </div>
        </div>
        <Vdo name={this.state.videoName} loopCondition={this.state.loopCheck} />
        {this.state.loopCheck === false
          ? setTimeout(this.videoChangeHandler, 2500)
          : null}
      </>
    );
  }
}

export default SignupMess;
