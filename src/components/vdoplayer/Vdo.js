import React, { Component } from "react";
import  './Vdo.css';
import bgvdo from "../../images/bgvdo.mp4";
import { render } from "@testing-library/react";
class Vdo extends Component {
    render(){
    return(
        <div className="bgvideo">
        <video className='bgvideo_content' autoPlay muted >
        <source src={this.props.name} type="video/mp4" /> 
        </video>
        </div>
    )
}
};
export default Vdo;