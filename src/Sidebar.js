import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { SidebarOption } from './SidebarOption';

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <TwitterIcon className='twitter__icon' />
            <SidebarOption active Icon={HomeIcon} title='Home' />
            <SidebarOption Icon={ExploreIcon} title='Explore' />
            <SidebarOption Icon={NotificationsIcon} title='Notifications' />
            <SidebarOption Icon={MailOutlineIcon} title='Messages' />
            <SidebarOption Icon={BookmarkBorderIcon} title='Bookmarks' />
            <SidebarOption Icon={ListAltIcon} title='Lists' />
            <SidebarOption Icon={PersonOutlineIcon} title='Profile' />
            <SidebarOption Icon={MoreHorizIcon} title='More' />
        </div>
    )
}
