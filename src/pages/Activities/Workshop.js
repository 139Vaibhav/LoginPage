import React, { Component } from 'react';
import Vdo from "../../components/vdoplayer/Vdo";
import workshopvdo from "../../images/WORKSHOP.mp4";
import './Workshop.css';

class Workshop extends Component {
    render(){
        return(
            <div>
            <Vdo name={workshopvdo} loopCondition={true} />
            <div className="title" >
            <h1>Workshops</h1>
            </div>
    
            <div className="text">
            <p>She patiently waited for his number to be called. She had no desire to be there, but her mom had insisted that she go. She's resisted at first, but over time she realized it was simply easier to appease her and go. Mom tended to be that way. She would keep insisting until you wore down and did what she wanted. So, here she sat, patiently waiting for her number to be called.</p>
            <p>vdghjckop</p>
            <p>bvndoinji vewouhviuijnvjdsk ehiuv dvnkjdj vnav lv d vjl .zmcnc djld dncjd d;lkbfvk,dv nslv khv</p>
            <p>adjbv dvkldv n,z n zbv ,v vdbv,zd vdhvbdv d,kvbdvl kjb k,zc mbvkjhdblkjnv z zbjhzm vksff,nv fv</p>
            <p>She patiently waited for his number to be called. She had no desire to be there, but her mom had insisted that she go. She's resisted at first, but over time she realized it was simply easier to appease her and go. Mom tended to be that way. She would keep insisting until you wore down and did what she wanted. So, here she sat, patiently waiting for her number to be called.</p>
            <p>She patiently waited for his number to be called. She had no desire to be there, but her mom had insisted that she go. She's resisted at first, but over time she realized it was simply easier to appease her and go. Mom tended to be that way. She would keep insisting until you wore down and did what she wanted. So, here she sat, patiently waiting for her number to be called.</p>
            </div>
            
            </div>
        );
    }
}
export default Workshop;