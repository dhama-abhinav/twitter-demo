import React from 'react'
import './SidebarOption.css'

export const SidebarOption = ({active,title , Icon}) => {
    return (
        <div className={` sidebaroption ${active && 'sidebaroption--active'} ` } >
            {/* <Icon>{Icon}</Icon> */}
            <Icon />
            <h2>{title}</h2>
        </div>
    )
}
