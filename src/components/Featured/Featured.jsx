import React from "react";
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
const Featured = ()=>{
    return (
        <div className="featured">
            <div className="top">
                <h3 className="title">Wallet Transection</h3>
                <MoreVertIcon fontSize="small"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={60} text={"60%"}  strokeWidth={5}/>
                </div>
                
                <p className="title">Total transection made today</p>
                <p className="amount">$1000</p>
                <p className="desc">
                    Previous transection processing.
                </p>

                <div className="successRate">
                    <div className="left">
                        <p className="complete">Complete</p>
                        <p className="amount">$600</p>
                    </div>
                    <div className="right">
                        <p className="incomplete">Incomplete</p>
                        <p className="amount">$400</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Featured;