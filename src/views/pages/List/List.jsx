import React from "react";
import Sidebar from "../../../components/Base/Sidebar/Sidebar";
import Topbar from "../../../components/Base/Topbar/Topbar";
import Datatable from "../../../components/Datatable/Datatable"
import CustomDataTable from "../../../CrudDataTable";
import './list.scss';

const List=()=>{
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Topbar />
                <CustomDataTable className="custom-table"/>
            </div>
        </div>
    )
}
export default List;