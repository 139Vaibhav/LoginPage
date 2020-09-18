import React from "react";
import classes from "./signup.module.css";
import Vdo from '../../components/vdoplayer/Vdo'
import bgvdo from '../../images/bgvdo.mp4'
import Form from "../Form";

const Signup = () => {
  return (
   <div>
    
    <Vdo name={bgvdo} />
    <Form />

   </div>
  );
};

export default Signup;
