import React, { Component } from "react";
import "./Vdo.css";

class Vdo extends Component {
  render() {
    return (
      <div className="bgvideo">
        <video
          className="bgvideo_content"
          loop={this.props.loopCondition}
          autoPlay
          muted
        >
          <source src={this.props.name} type="video/mp4" />
        </video>
      </div>
    );
  }
}
export default Vdo;
