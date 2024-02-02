import React, {useState} from "react";
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import TimelineIcon from '@mui/icons-material/Timeline';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import WalletIcon from '@mui/icons-material/Wallet';
import LogoutIcon from '@mui/icons-material/Logout';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import {Link} from 'react-router-dom';
import { logout } from "../../../Action/authenticate";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ConfirmAlert from "../../Alert/ConfirmAlert";
const Sidebar = ()=>{
    const [isOpen , setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout =()=>{
       setIsOpen(true);
    }   

    const onConfirm=()=>{
        dispatch(logout());
        setIsOpen(false)
        navigate('/');
    }
    const onCancel=()=>{
        setIsOpen(false)

    }
    return (
        
       <div className="sidebar" >
            < ConfirmAlert isOpen={isOpen}  onCancel={onCancel} onConfirm={onConfirm}/>

            <div className="top">
                <Link to="/" style={{textDecoration : 'none'}}>
                    <span className="logo">KFC MART</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <Link to="/users" style={{textDecoration : 'none'}}>
                        <li>
                            <PeopleIcon className="icon"/>
                            <span>Operators</span>
                        </li>
                    </Link>
                    <p className="title">Product</p>

                    <li>
                        <TimelineIcon className="icon"/>
                        <span>Category List</span>
                    </li>
                    <li>
                        <CurrencyBitcoinIcon className="icon"/>
                        <span>Product List</span>
                    </li>
                    <p className="title">Services</p>
                   
                    <li>
                        <WalletIcon className="icon"/>
                        <span>Order</span>
                    </li>
                    <li>
                        <PsychologyIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon"/>
                        <span>Settings</span>
                    </li>

                    <p className="title">Users</p>
                    <li>
                        <AccountCircleRoundedIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li onClick={handleLogout}>
                        <LogoutIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                    
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOptions"></div>
                <div className="colorOptions"></div>
                <div className="colorOptions"></div>

            </div>
       </div>
    )
}
export default Sidebar;