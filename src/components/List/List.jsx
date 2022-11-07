import React from "react";
import "./list.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const List = ()=>{

    const data = [
        {
            id : 101,
            name : "Manish Rai",
            email : "saajanyankee@gmail.com",
            mobile: 8222828123,
            amount : 105,
            status : "Approved"
        },
        {
            id : 105,
            name : "Harjinder Singh",
            email : "Harjinder@gmail.com",
            mobile: 9509301559,
            amount : 35,
            status : "Approved"
        },
        {
            id : 106,
            name : "Prashant Bhatia",
            email : "prashantbhatia29@gmail.com",
            mobile: 8607527115,
            amount : 64,
            status : "Pending"
        },
        {
            id : 107,
            name : "Amit",
            email : "alexverma@gmail.com",
            mobile: 9876782345,
            amount : 64,
            status : "Approved"
        },
        {
            id : 108,
            name : "Kaka ",
            email : "kakasinghrsnr@gmail.com",
            mobile: 9922993388,
            amount : 23,
            status : "Failed"
        }
    ]
    return (
        <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id </TableCell>
              <TableCell  className="tableCell" align="left">Name</TableCell>
              <TableCell className="tableCell" align="left">Email&nbsp;(g)</TableCell>
              <TableCell className="tableCell" align="left">Mobile&nbsp;(g)</TableCell>
              <TableCell className="tableCell" align="left">Amount&nbsp;(g)</TableCell>
              <TableCell className="tableCell" align="left">Status&nbsp;(g)</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell className="tableCell"  component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell className="tableCell" align="left">{row.name}</TableCell>
                <TableCell className="tableCell" align="left">{row.email}</TableCell>
                <TableCell  className="tableCell"align="left">{row.mobile}</TableCell>
                <TableCell  className="tableCell"align="left">{row.amount}</TableCell>
                <TableCell  className="tableCell"align="left">
                  <span className={`status ${row.status}` }>
                  {row.status}
                  </span>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  
    )
}
export default List;