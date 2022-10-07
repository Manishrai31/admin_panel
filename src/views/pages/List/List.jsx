import React from "react";
import Sidebar from "../../../components/Base/Sidebar/Sidebar";
import Topbar from "../../../components/Base/Topbar/Topbar";
import './list.scss';
const List=()=>{
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Topbar />
                datatable
            </div>
        </div>
    )
}
export default List;