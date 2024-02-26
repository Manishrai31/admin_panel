import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Base/Sidebar/Sidebar";
import Topbar from "../../components/Base/Topbar/Topbar";
import CustomTable from "../../components/CustomTable.jsx/CustomTable";
import './category.scss';
import { getCategory } from "../../api/category";
import { useSelector } from "react-redux";


const Category=()=>{
    
    return (
        <div className="list">

            <Sidebar />
            <div className="listContainer">
                <Topbar />
                <CustomTable className="custom-table" type="category" /> 

                {/* <CustomTable className="custom-table" type="category"  data2={data2}/> */}
            </div>
        </div>
    )
}
export default Category;