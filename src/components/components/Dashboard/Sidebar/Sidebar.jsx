import React, { useState } from 'react'
import logo from '../../imgs/logo.png'
import './Sidebar.css'
import { UilSignOutAlt } from '@iconscout/react-unicons'
import { SidebarData } from '../../Data/Data'
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = ({ setSelectedTab }) => {
    const [selected, setSelected] = useState(0);
    const { logout, user, isAuthenticated } = useAuth0();
    

    return (
        <div className="Sidebar">
            {/* logo*/}
            
            <div className="logo">
                <img src={logo} alt="" />
                <span>
                    E-Pass
                </span>
            </div>
            {/* Menu */}
            <div className="menu">
                {SidebarData.map((item, index) => {
                    return (
                        <div className={selected === index ? 'menuItem activeTab' : 'menuItem'}
                        key={index} onClick={() => {
                            setSelectedTab(index)
                            setSelected(index);
                        }}
                        >
                            
                                <item.icon />
                                {item.heading}
                            
                        </div>
                    )
                })}
                <div className="menuItem">
                    <UilSignOutAlt
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}

                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Sidebar