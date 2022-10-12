import React from "react";
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';

const Datatable =() =>{

    const columns = [
        { field: 'id', headerName: 'ID', width: 140 },
        { field : 'username', headerName : "User" ,width: 220,
        renderCell : (param)=> {
                return(
                    <div className="cellWithImg">
                        <img src={param.row.img} className="cellImg" alt="" />
                        {param.row.username}
                    </div>
                )
            }
        },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 150,
        },
        {
            field : "email",
            headerName: "Email",
            width :190
        },
        {
            field : "status",
            headerName : "Status",
            width: 190,
            renderCell : (param)=>{
                return (
                    <span className={`status ${param.row.status}`}>
                        {param.row.status}
                    </span>
                )
            }
        },
        {
            field : "action",
            headerName: "Action",
            width : 190,
            renderCell : (param)=>{
                return(
                    <div className="cellAction">
                        <div className="viewButton">View</div>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
        // {
        //   field: 'fullName',
        //   headerName: 'Full name',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        //   valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        // },
      ];
      

    const rows = [
        { id: 1, 
            img: "https://media.istockphoto.com/photos/young-man-playing-in-vr-glasses-events-games-creativity-metaverse-picture-id1389740608?b=1&k=20&m=1389740608&s=170667a&w=0&h=UG3lJ6_Bt04bzXv3JU_RqQuA0M-dirVAs3iSURSRvmU=",  
            username: 'Jon', 
            email : "Jon@gmail.com",
            status : "Active",
            age: 35 
        },
        { 
            id: 2, 
            img: "https://media.istockphoto.com/photos/young-man-playing-in-vr-glasses-events-games-creativity-metaverse-picture-id1389740608?b=1&k=20&m=1389740608&s=170667a&w=0&h=UG3lJ6_Bt04bzXv3JU_RqQuA0M-dirVAs3iSURSRvmU=", 
            username: 'Cersei', 
            email : "Cersei@gmail.com",
            status : "Pending",
            age: 42 
        },
        { 
            id: 3, 
            img: "https://media.istockphoto.com/photos/young-man-playing-in-vr-glasses-events-games-creativity-metaverse-picture-id1389740608?b=1&k=20&m=1389740608&s=170667a&w=0&h=UG3lJ6_Bt04bzXv3JU_RqQuA0M-dirVAs3iSURSRvmU=", 
            username: 'Jaime',
            email : "Jaime@gmail.com",
            status : "Active",
            age: 45 
        },
        { 
            id: 4, 
            img: "https://media.istockphoto.com/photos/young-man-playing-in-vr-glasses-events-games-creativity-metaverse-picture-id1389740608?b=1&k=20&m=1389740608&s=170667a&w=0&h=UG3lJ6_Bt04bzXv3JU_RqQuA0M-dirVAs3iSURSRvmU=", 
            username: 'Arya', 
            email : "Arya@gmail.com",
            status : "Failed",
            age: 16 
        },
        { 
            id: 5, 
            img: "https://media.istockphoto.com/photos/young-man-playing-in-vr-glasses-events-games-creativity-metaverse-picture-id1389740608?b=1&k=20&m=1389740608&s=170667a&w=0&h=UG3lJ6_Bt04bzXv3JU_RqQuA0M-dirVAs3iSURSRvmU=", 
            username: 'Daenerys', 
            email : "Daenerys@gmail.com",
            status : "Failed",
            age: null 
        },
        { 
            id: 6, 
            img: "https://media.istockphoto.com/photos/young-man-playing-in-vr-glasses-events-games-creativity-metaverse-picture-id1389740608?b=1&k=20&m=1389740608&s=170667a&w=0&h=UG3lJ6_Bt04bzXv3JU_RqQuA0M-dirVAs3iSURSRvmU=", 
            email : "King@gmail.com",
            username: 'King', 
            status : "Pending",
            age: 150 
        },
        { 
            id: 7, 
            img: "https://media.istockphoto.com/photos/young-man-playing-in-vr-glasses-events-games-creativity-metaverse-picture-id1389740608?b=1&k=20&m=1389740608&s=170667a&w=0&h=UG3lJ6_Bt04bzXv3JU_RqQuA0M-dirVAs3iSURSRvmU=", 
            username: 'Ferrara', 
            email : "Ferrara@gmail.com",
            status : "Active",
            age: 44 
        },
        { 
            id: 8, 
            img: "https://media.istockphoto.com/photos/young-man-playing-in-vr-glasses-events-games-creativity-metaverse-picture-id1389740608?b=1&k=20&m=1389740608&s=170667a&w=0&h=UG3lJ6_Bt04bzXv3JU_RqQuA0M-dirVAs3iSURSRvmU=", 
            username: 'Rossini', 
            email : "Rossini@gmail.com",
            status : "Approved",
            age: 36 
        },
        { 
            id: 9, 
            img: "https://media.istockphoto.com/photos/young-man-playing-in-vr-glasses-events-games-creativity-metaverse-picture-id1389740608?b=1&k=20&m=1389740608&s=170667a&w=0&h=UG3lJ6_Bt04bzXv3JU_RqQuA0M-dirVAs3iSURSRvmU=", 
            username: 'Harvey', 
            email : "Harvey@gmail.com",
            status : "Active",
            age: 65 
        },
      ];


    return (
        <div className="datatable" >
           <DataGrid
                rows={rows}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[7]}
                checkboxSelection
            />
        </div>
    )
}
export default Datatable;