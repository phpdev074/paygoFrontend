import React from "react";
import { LOGO } from "../constants/constantMessages";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaLifeRing, FaCog, FaMailBulk, FaClock, FaPaperPlane } from 'react-icons/fa'; 

const SidebarComponent = () => {
    return (
        <div className="sideBarComponent">
                <div className="logoSideBarComponent">
                    <img src={LOGO} alt="sidebar logo"/>
                </div>
                <div className="main">
                    <ul className="menu">
                        <li>
                            <Link to="/home">
                                <FaHome />
                                <span> Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/user">
                                <FaUser />
                                <span> Users</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/messages">
                                <FaMailBulk />
                                <span> Messages</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/jobs">
                                <FaPaperPlane />
                                <span> Jobs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/completed-jobs">
                                <FaClock />
                                <span> Completed Jobs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/support">
                                <FaLifeRing />
                                <span> Support</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/settings">
                                <FaCog />
                                <span> Settings</span>
                            </Link>
                        </li>                        
                    </ul>
                </div>
            
        </div>
    );
};

export default SidebarComponent;