import React from "react";
import Sidebar from '../../components/Base/Sidebar/Sidebar';
import Topbar from '../../components/Base/Topbar/Topbar'
import Chart from '../../components/Chart/Chart'
import List from '../../components/List/List'

import './single.scss';
const Single=()=>{
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Topbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">
                            Edit
                        </div>
                        <div className="title">User Information</div>
                        <div className="item">
                            <img 
                                src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1795&q=80" 
                                alt="" 
                                className="itemImg" 
                            />
                            <div className="details">
                                <h1 className="itemTitle">
                                    Arya Stark
                                </h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email :</span>
                                    <span className="itemValue"> aryastark@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone :</span>
                                    <span className="itemValue"> 8222828123</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address :</span>
                                    <span className="itemValue"> aryastark@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country :</span>
                                    <span className="itemValue"> India </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={ 3/1 } title="User spending"/>
                    </div>
                </div>
                <div className="bottom">
                <div className="title">Last Transection</div>

                    <List />
                </div>
            </div>
        </div>
    )
}
export default Single;