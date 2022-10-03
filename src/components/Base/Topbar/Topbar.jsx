import React from "react";
import './topbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import image from '../../../Assets/Images/avatar.png'
const Topbar=()=>{
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text"  placeholder="Search..."/>
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon  className="icon"/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon"/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlinedIcon className="icon"/>
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon"/>
                        
                    </div>
                    <div className="item">
                        <img  
                        className="avatar"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Topbar;