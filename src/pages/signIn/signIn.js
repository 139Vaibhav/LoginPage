import React from "react";
import  "./signIn.module.css";
import SignInform from '../../components/SignIn/SigIn'
import Vdo from '../../components/vdoplayer/Vdo'
import bgvdo from '../../images/bgvdo.mp4'

const SignIn = () => {
  return (
   <div>
     <SignInform />
     <Vdo name ={bgvdo} />
  </div>
    
  );
};

export default SignIn;




