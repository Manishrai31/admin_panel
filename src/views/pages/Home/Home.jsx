import React from "react";
import Topbar from "../../../components/Base/Topbar/Topbar";
import Sidebar from "../../../components/Base/Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets"
import './home.scss'
import Featured from "../../../components/Featured/Featured";
import Chart from "../../../components/Chart/Chart";

const Home = ()=>{
    return(
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Topbar />
                <div className="widgets">
                    <Widgets type="user"/>
                    <Widgets type="transections"/>
                    <Widgets type="league"/>
                    {/* <Widgets type="league"/> */}
                    {/* <Widgets /> */}
                    
                </div>
                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
            </div>
        </div>
        
        )
}
export default Home;