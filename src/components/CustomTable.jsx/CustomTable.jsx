import React, { useState } from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  TablePagination,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Alert from "@mui/material/Alert";
import ListManager from "../../utils/ListManager.json";
import { BASE_URL } from "../../Constants/Constant";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const CustomTable = ({ schema, data2, type }) => {
  const selectedObject = ListManager[type];
  const [data, setData] = useState();
  const login = useSelector((state) => state.authentication);
  // Add more data as need;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [openDialog, setOpenDialog] = useState(false);
  const [newProduct, setNewProduct] = useState({});
  const [editProduct, setEditProduct] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    message: "",
  });
  useEffect(() => {
    const getData = async () => {
      const { url, method, fetchField } =
        selectedObject.endPoints.properties.getAll;
      const config = {
        method,
        url: BASE_URL + url,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${login.userToken}`,
        },
      };
      const result = await axios.request(config);
      setData(result.data.data[fetchField].reverse());
    };
    getData();
  }, []);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = (id) => {
    // Implement delete logic
    setData(data.filter((item) => item._id !== id));
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewProduct({});
    setEditProduct(null);
  };

  const handleAddProduct = () => {
    // Implement add product logic
    makeRequest("add");
    setData([...data, { id: data.length + 1, ...newProduct }]);
    handleCloseDialog();
  };

  const makeRequest = async (endpoint) => {
    const { url, method } = selectedObject.endPoints.properties[endpoint];
    try {
      const config = {
        url: BASE_URL +url,
        method,
        data: { ...newProduct, id: newProduct._id },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${login.userToken}`,
        },
      };
      const response = await axios(config);
      console.log("Response:", response.data);
      setAlert((prev) => ({
        ...prev,
        show: true,
        type: "success",
        message: response.data.msg ? response.data.msg : response.data.message,
      }));
      setTimeout(() => {
        setAlert((prev) => ({ ...prev, show: false, type: "", message: "" }));
      }, 2000);
      // Handle success
    } catch (error) {
      console.error("Error:", error);
      setAlert((prev) => ({
        ...prev,
        show: true,
        type: "error",
        message: error.response.data.message
      }));
      setTimeout(() => {
        setAlert((prev) => ({ ...prev, show: false, type: "", message: "" }));
      }, 2000);
      // Handle error
    }
  };

  const handleEditProduct = () => {
    // Implement edit product logic
    // makeRequest('edit')
    makeRequest("edit");
    const updatedData = data.map((item) =>
      item._id === editProduct._id ? { ...item, ...newProduct } : item
    );
    setData(updatedData);

    handleCloseDialog();
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setNewProduct(product);
    handleOpenDialog();
  };

  const handleSearch = (e) => {
    // console.log(e.target.value);
    const text = e.target.value;
    const filteredData = data.filter((item) => {
      return Object.values(item).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(text)
        // console.log(value)
      );
    });
    setData(filteredData);
  };
  return (
    <Paper
      style={{
        margin: "10px",
        boxShadow: "10px 10px 20px #cbced1, -10px -10px 20px #ffffff",
        position: "relative",
      }}
    >
      {alert.show ? <Alert severity={alert.type}>{alert.message}</Alert> : ""}
      {/* <Alert severity="success">This is a success Alert.</Alert> */}
      {selectedObject.addButton.status ? (
        <Button
          variant="outlined"
          style={{
            margin: "10px",
            borderRadius: "50px",
            background: "#e0e0e0",
            boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
          }}
          // color="primary"
          startIcon={<AddIcon />}
          onClick={handleOpenDialog}
        >
          {selectedObject.addButton.title}
        </Button>
      ) : (
        ""
      )}
      <TableContainer responsive={"scroll"}>
        <Table stickyHeader style={{ overflow: "scroll", minWidth: "500px" }}>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={6} variant="head">
                {selectedObject.title}
                {/* <input type="text"  onChange={handleSearch}/> */}
              </TableCell>
            </TableRow>
            <TableRow>
              {Object.keys(selectedObject.properties).map((item, index) => (
                <TableCell key={"table_head" + index}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}{" "}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {data ? (
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={"table_row" + row._id}>
                    {Object.keys(selectedObject.properties).map((item, index) =>
                      item != "action" ? (
                        <TableCell key={"table_" + index}>
                          {row[item]}
                        </TableCell>
                      ) : (
                        <TableCell key={"table_" + index}>
                          {selectedObject.properties.action.properties?.edit ? (
                            <IconButton
                              onClick={() => handleEdit(row)}
                              color="primary"
                            >
                              <EditIcon />
                            </IconButton>
                          ) : (
                            ""
                          )}
                          {selectedObject.properties.action.properties
                            ?.delete ? (
                            <IconButton
                              onClick={() => handleDelete(row._id)}
                              color="secondary"
                            >
                              <DeleteIcon />
                            </IconButton>
                          ) : (
                            ""
                          )}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                ))}
            </TableBody>
          ) : (
            ""
          )}
        </Table>
      </TableContainer>
      {data ? (
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      ) : (
        ""
      )}

      <Dialog open={openDialog} style={{}} onClose={handleCloseDialog}>
        <DialogTitle>
          {editProduct ? "Edit Product" : "Add New Product"}
        </DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            marginTop: "5px",
            paddingTop: "5px",
            gap: "10px",
            width: "400px",
            flexDirection: "column",
          }}
        >
          {/* Add form fields for new product */}
          {Object.keys(selectedObject.properties).map((item, index) => {
            return item != "action" ? (
              <TextField
                key={"action_" + index}
                label={selectedObject.properties[item].title}
                fullWidth
                value={newProduct[item] || ""}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, [item]: e.target.value })
                }
              />
            ) : (
              ""
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button
            onClick={editProduct ? handleEditProduct : handleAddProduct}
            color="primary"
          >
            {editProduct ? "Save Changes" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default CustomTable;
