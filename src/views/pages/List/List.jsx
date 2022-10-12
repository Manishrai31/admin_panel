import React from "react";
import Sidebar from "../../../components/Base/Sidebar/Sidebar";
import Topbar from "../../../components/Base/Topbar/Topbar";
import Datatable from "../../../components/Datatable/Datatable"
import './list.scss';
const List=()=>{
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Topbar />
                <Datatable />
            </div>
        </div>
    )
}
export default List;