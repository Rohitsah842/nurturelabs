import React, { useState, useEffect } from 'react'
import "./SidebarMenu.css"
import { Link } from "react-router-dom"


function SidebarMenu() {
    let items = [
        {
            title: "Add Keyword",
            name: "Keyword",
            icon: "home",
            link: "/",
        },
        {
            title: "Matches",
            name: "Keyword",
            icon: "people",
            link: "/Matches"
        },

        {
            title: "Manage Sources",
            name: "Manage Sources",
            icon: "credit_card",
            link: "/Managesource"
        },
        {
            title: "Integration",
            name: "Integration",
            icon: "credit_card",
            link: "/Integration"
        },
        {
            title: "Alerts",
            name: "Alerts",
            icon: "credit_card",
            link: "/Alert",
        },
        {
            title: "Setting",
            icon: "star",
            link: "/Settings",
        }
    ]

    const [menuItems, setMenuItems] = useState(items)
    function setActive(e) {
        menuItems.forEach(item => {
            if (e.link === item.link) {
                item.isActive = true
                setMenuItems([...menuItems])
            } else {
                item.isActive = false;
                setMenuItems([...menuItems])
            }
        })
    }
    useEffect(() => {
        let currentPath = window.location.pathname
        let obj = { link: currentPath };
        setActive(obj)
    }, [])

    return (
        <div className="sidebar sidebar_mob-v">
            {menuItems.map((e) => {
                return (
                    <div className={`sidebarMenu ${e.isActive ? 'active' : ''}`} key={e.title}>
                        <div className="sidebarContainer">
                            <span className="material-icons">{e.icon}</span>
                            <h3 ><Link to={e.link} onClick={setActive.bind(this, e)}>{e.title}</Link></h3>
                        </div>
                    </div>
                )
            })
            }
        </div>

    )
}

export default SidebarMenu