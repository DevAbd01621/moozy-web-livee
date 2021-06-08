import React from 'react'
import "./LoginScreen.css"
import ListIcon from '@material-ui/icons/List';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { IconButton } from '@material-ui/core';
import Login from './Login';
function LoginScreen() {
    return (
        <div className="loginScreen">
            <div className="loginScreen__information">
                <div className="loginScreen__text">

                    <div className="loginScreen__textImage">

                        <div className="loginScreen__Headertext">
                        
                            <div className="loginScreen__textHead"> 

                                <IconButton >
                                {/* className="loginScreen__textIcon" MuiButtonBase-root MuiIconButton-root |MuiIconButton-label | MuiSvgIcon-root*/}
                                    <ListIcon  />
                                </IconButton>
                                
                                <img src={process.env.PUBLIC_URL + 'images/logo_white.svg'} alt="logo"/>
                            </div>
                                
                            
                            <div className="loginScreen__textMain">
                                <div className="loginscreen__vidPlay"
                                    style={{
                                        backgroundSize: "cover",
                                        backgroundImage:`url(${process.env.PUBLIC_URL + 'images/login_video.png'})`,
                                        backgroundPosition: "center center",
                                        height: "80px",
                                        backgroundRepeat: "no-repeat",
                                    
                                    }}
                                >
                                    
                                    <div className="loginScreen__playButton">
                                        <IconButton>
                                        <PlayArrowIcon />
                                        </IconButton>
                                        
                                    </div>  
                                    

                                </div>
                                
                                <div className="loginScreen__allText">
                                    <div className="loginScreen__textTitle">
                                        <p>Mood your life with Moozy </p> 
                                    </div>
                                    
                                    <div className="loginScreen__textSub">
                                        <p>Moozy is a groundbreaking social app for those who need something new!</p> 
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                            

                        <div className="loginScreen__img">

                            <img src={process.env.PUBLIC_URL + 'images/login_image.png'} alt=" " />
                            <div className="loginScreen_Imagetext">
                                <p>Photo Credit To <span>John Michel</span></p>
                            </div>
                            
                        </div> 
                        
                    </div>
                                    
                    
                </div>

                <div className="loginScreen__bottom">

                    <div className="loginScreen__bottomflex">
                    <div className="loginScreen__bottomText">
                        MOOD
                    </div>
                    <div className="loginScreen__bottomSpan">
                        
                    </div>

                    <div className="loginScreen__bottomText">
                        USABILITY
                    </div>

                    <div className="loginScreen__bottomSpan">

                    </div>

                    <div className="loginScreen__bottomText">
                        CONTENT
                    </div>
                    
                    </div>
                    
                    

                </div>

                
            </div>

            
            <div className="loginScreen__login">
                {/* <h1> This is Registration screen</h1> */}
                    <Login />
                {/* <img src={process.env.PUBLIC_URL + 'images/login_video.png'} alt="logo" /> */}

            </div>
        </div>
    )
}

export default LoginScreen
