import React from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import  PercentOutlinedIcon from "@mui/icons-material";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import './widgets.scss';
// import { SportsRugbySharp } from "@mui/icons-material";
const Widgets =({type})=>{
    let data;
    switch(type){
        case "user" :
            data = {
                title :"USERS",
                isMoney : false,
                link : "See all users",
                icon : <PersonOutlinedIcon  className="icon" 
                style={{
                    color : "crimson",
                    backgroundColor: "rgba(255 ,0 ,0, 0.2)"
                }}/>
            }
            break;
        case "transections" :
                data = {
                    title :"Transections",
                    isMoney : true,
                    link : "See all transection",
                    icon : <CurrencyRupeeOutlinedIcon  className="icon"
                    style={{
                        color : "goldenrod",
                        backgroundColor :"rgba(218 , 165,32 , 0.2)"

                    }}/>
                }
                break;
        case "league" :
            data = {
                title :"Leagues",
                isMoney : false,
                link : "See all leagues",
                icon : <AutoGraphOutlinedIcon  className="icon"
                style={{
                    color : "purple",
                    backgroundColor :"rgba(128 , 0,128 , 0.2)"

                }}/>
            }
            break;
        default :
            break;
    }
    const amount=1234;
    return(
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$" } {amount}</span>
                <span className="link">{data.link}</span>

            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon/>
                    20%
                </div>
                {data.icon}
                {/* <PersonOutlinedIcon className="icon" /> */}
            </div>
        </div>
    )
}
export default Widgets;