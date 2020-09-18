import React, { Component } from "react";
import './form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faPenNib, faGraduationCap, faCity, faHotel } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
class form extends Component{
    render() {
    return (
        <div className="form">
        <form className="forminner">
         <div className="formInput">
         <FontAwesomeIcon icon={faUser}  />
         <input type="text" placeholder="Name" required></input> </div>
        <div className="formInput">
        <FontAwesomeIcon icon={faEnvelope}  /> 
        <input type="email" placeholder="Email"  required></input></div>
        <div className="sid">
        <div>
        <FontAwesomeIcon icon={faPeopleArrows} className="formLogo" />
        <input type="text" placeholder={"Gender"} className="Gender" required></input>
        </div>
        <div className="sidz">
        <FontAwesomeIcon icon={faPhoneAlt} className="formLogo" />
        <input type="tel" placeholder="Phone No" required></input>
        </div>
        </div>
        <div className="sid2">
        <div>
        <FontAwesomeIcon icon={faGraduationCap} className="formLogo2" />
        <input type="text" placeholder={"College"} required></input>
        </div>
        <div>
        <FontAwesomeIcon icon={faPen} className="formLogo2" />
        <input type="text" placeholder="College id" required></input>
        </div>
        </div>
        <div className="formInput">
        <FontAwesomeIcon icon={faBook}  />
        <input type="text" placeholder="Department"  required></input>
        </div>
        <div className="sid2">
        <div>
        <FontAwesomeIcon icon={faCity} className="formLogo2" />
        <input type="text" placeholder="City" required></input>
        </div>
        <div>
        <FontAwesomeIcon icon={faHotel} className="formLogo2" />
        <input type="text" placeholder="State"  required></input>
        </div>
        </div>
        <div className="sid2">
        <div>
        <FontAwesomeIcon icon={faLock} className="formLogo2" />
        <input type="Password" placeholder="Enter Password"  required></input>
        </div>
        <div>
        <FontAwesomeIcon icon={faLock} className="formLogo2" />
        <input type="Password" placeholder="Confirm Password"   required></input>
        </div>
        </div>
        <input  type="submit" value="Sign Up" className="formSubmit" ></input>       
        </form>
        </div>
    );
    }
}
export default form;