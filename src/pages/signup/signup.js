import React, { Component } from "react";
import classes from "./signup.module.css";
import Vdo from "../../components/vdoplayer/Vdo";
import bgvdo from "../../images/bgvdo.mp4";
import Middle from "../../images/Middle.mp4";
import Form from "../Form";

class Signup extends Component {
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
        <Vdo name={this.state.videoName} loopCondition={this.state.loopCheck} />
        {this.state.loopCheck === false
          ? setTimeout(this.videoChangeHandler, 2500)
          : null}
        <Form />
      </div>
    );
  }
}

export default Signup;
