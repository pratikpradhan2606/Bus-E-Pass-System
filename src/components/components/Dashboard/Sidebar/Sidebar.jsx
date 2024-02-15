import React, { useState } from 'react'
import logo from '../../imgs/logo.png'
import './Sidebar.css'
import { UilSignOutAlt, UilBars, UilTimes } from '@iconscout/react-unicons' // Import menu icons
import { SidebarData } from '../../Data/Data'
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = ({ setSelectedTab }) => {
    const [selected, setSelected] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(true); // State to track menu open/close
    const { logout, user, isAuthenticated } = useAuth0();
    
    const toggleMenu = () => {
        // Toggle the state of isMenuOpen regardless of its current value
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="Sidebar">
            {/* logo*/}
            <div className="logo">
                <img src={logo} alt="" />
                <span>E-Pass</span>
            </div>
            {/* Toggle menu button */}
            <div className="toggleMenuButton" onClick={toggleMenu}>
                {isMenuOpen ? <UilTimes /> : <UilBars />} {/* Use appropriate icon based on menu state */}
            </div>
            {/* Menu */}
            <div className="menu">
                {/* Menu items */}
                {isMenuOpen && SidebarData.map((item, index) => {
                    return (
                        <div className={selected === index ? 'menuItem activeTab' : 'menuItem'}
                            key={index} onClick={() => {
                                setSelectedTab(index)
                                setSelected(index);
                            }}
                        >
                            {item.icon}
                            {item.heading}
                        </div>
                    )
                })}
                {/* Sign out button */}
                {isMenuOpen && (
                    <div className="menuItem" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        <UilSignOutAlt />
                        <span>Logout</span>
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default Sidebar
