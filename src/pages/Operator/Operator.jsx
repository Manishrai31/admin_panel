import React, { useState } from "react";
import Sidebar from "../../components/Base/Sidebar/Sidebar";
import Topbar from "../../components/Base/Topbar/Topbar";
import CustomTable from "../../components/CustomTable.jsx/CustomTable";
import { getCategory } from "../../api/category";
import { getOperator } from "../../api/operator";
import './operator.scss';
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Operator=()=>{
    
   
    return (
        <div className="list">

            <Sidebar />
            <div className="listContainer">
                <Topbar />
                <CustomTable className="custom-table" type="operator"  /> 
                
            </div>
        </div>
    )
}
export default Operator;