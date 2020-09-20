import React, { Component } from "react";
import "./signIn.module.css";
import SignInform from "../../components/SignIn/SigIn";
import Vdo from "../../components/vdoplayer/Vdo";
import bgvdo from "../../images/bgvdo.mp4";
import Middle from "../../images/Middle.mp4";

class SignIn extends Component {
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
      <div>
        <SignInform />
        <Vdo name={this.state.videoName} loopCondition={this.state.loopCheck} />
        {this.state.loopCheck === false
          ? setTimeout(this.videoChangeHandler, 3000)
          : null}
      </div>
    );
  }
}

export default SignIn;
