import React, { Component } from "react";
import Vdo from "../../components/vdoplayer/Vdo";
import guestvdo from "../../images/Guest.mp4";
import classes from "./Guest.module.css";
class Guest extends Component {
    render() {
        return (
          <div>
            <Vdo name={guestvdo} loopCondition={true} />
            </div>
        );
    }
}
    export default Guest;