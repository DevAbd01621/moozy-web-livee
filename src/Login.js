import React from 'react';
import "./Login.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InfoIcon from '@material-ui/icons/Info';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import SmsIcon from '@material-ui/icons/Sms';
import { IconButton } from '@material-ui/core';
function Login() {
    return (
        <div className="login">
            <div className="login__main">
                
                <div className="login__mainLogin">

                    <form>
                        <div className="login__mainBox">
                            <p>Email</p>
                            <div className="login__inputBox">
                                <MailOutlineIcon />
                            <input placeholder="Enter Email" type="email" />
                            </div>
                            
                        </div>

                        <div className="login__mainBox">
                            <p>Password <span> Forget Password ?</span></p>
                            <div className="login__inputBox">
                                <MailOutlineIcon />
                                <input placeholder="Enter Password" type="password" />
                            </div>
                            
                            
                        </div>

                        <div className="login__mainBtn">
                            <ArrowForwardIcon />
                            </div>



                    
                    </form>

                </div>
                
                <div className="login__mainRegister">

                    <div className="login__registerContainer">
                        <div className="login__registertion">

                            <div className="login__reistrationText">
                                <p>Hi There, Create your account ensures your memory stays private.</p>
                            </div>

                            <div className="login__formMeun">
                                
                                <form>
                                    <div className="login__formNameinput">
                                        <div className="login__formNamecontainer">
                                            <div className="login__formNamebox">
                                            
                                                <p>First Name</p>
                                                <IconButton>
                                                    <InfoIcon />
                                                </IconButton>
                                            </div>
                                            
                                            <div className="login__formNameinpuBox">
                                                
                                                <PersonOutlineIcon />
                                                <input type="text" placeholder="First Name"/>
                                            </div>

                                        </div>
                                        <div className="login__formNamecontainer">
                                            <div className="login__formNamebox">
                                                
                                                <p>Last Name</p>
                                                <IconButton>
                                                    <InfoIcon />
                                                </IconButton>
                                                
                                            </div>
                                            
                                            <div className="login__formNameinpuBox">
                                                <PersonOutlineIcon />
                                                <input type="text" placeholder="Last Name"/>

                                            </div>

                                        </div>
                                        
                                    </div>
                                    
                                    
                                    <div className="login__formNumberinput">
                                        <div className="login__formNumbercontainer">
                                            <div className="login__formNumberbox">
                                            
                                                <p>Mobile Number</p>
                                                <IconButton>
                                                    <InfoIcon />
                                                </IconButton>
                                            </div>
                                            
                                            <div className="login__formNumberinputBox">
                                                
                                                <PhoneIcon />
                                                <input type="text" placeholder="Number"/>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="login__formNumberinput">
                                        <div className="login__formNumbercontainer">
                                            <div className="login__formNumberbox">
                                            
                                                <p>OTP Please!</p>
                                                <IconButton>
                                                    <InfoIcon />
                                                </IconButton>
                                            </div>
                                            
                                            <div className="login__formNumberinputBox">
                                                
                                                <SmsIcon />
                                                <input type="text" placeholder="OTP Code"/>
                                            </div>

                                        </div>

                                    </div>
                                    {/* <div className="login__formNameinput">
                                        <div className="login__formNamebox">
                                            
                                            <p> Last Name</p>
                                        </div>
                                            
                                        <div className="login__formInputbox">

                                            <input type="text" placeholder="Last Name"/>
                                        </div>

                                    </div> */}
                                </form>
                            </div>
                            
                            <div className="login__footText"> 
                                <p>By clicking Sign Up, you agree to our <span>Terms</span>,<span>Data Policy</span> and <span>Cookie Policy</span>. 
                                    You may receive SMS notifications from us and can opt out at any
                                    time
                                </p>
            
                            </div>

                            <div className="login__registrationBtn">
                                <button>Register Me!</button>
                            </div>
                        
                       </div>
                        
                    </div>

                        

                </div>
                
            </div>
        </div>
    )
}

export default Login
