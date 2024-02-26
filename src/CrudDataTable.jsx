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

const CustomDataTable = () => {
  const obj =[{
    id: 1,
    title: "Rice",
    description: "Basmati rice ",
    price: 10.99,
    thumbnail: "thumb1.jpg",
    category: "Category 1",
  },
  {
    id: 2,
    title: "Maggie",
    description: "Delicious maggie",
    price: 19.99,
    thumbnail: "thumb2.jpg",
    category: "Category 2",
  }];
  const [data, setData] = useState(obj)
   
    // Add more data as need;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [openDialog, setOpenDialog] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: 0,
    thumbnail: "",
    category: "",
  });

  const [editProduct, setEditProduct] = useState(null);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = (id) => {
    // Implement delete logic
    setData(data.filter((item) => item.id !== id));
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewProduct({
      title: "",
      description: "",
      price: 0,
      thumbnail: "",
      category: "",
    });
    setEditProduct(null);
  };

  const handleAddProduct = () => {
    // Implement add product logic
    setData([...data, { id: data.length + 1, ...newProduct }]);
    handleCloseDialog();
  };

  const handleEditProduct = () => {
    // Implement edit product logic
    const updatedData = data.map((item) =>
      item.id === editProduct.id ? { ...item, ...newProduct } : item
    );
    setData(updatedData);
    handleCloseDialog();
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setNewProduct(product);
    handleOpenDialog();
  };

  const handleSearch=(e)=>{
    // console.log(e.target.value);
    console.log(typeof(e.target.value))
    const text = e.target.value;
    const filteredData =data.filter((item)=>{
      return Object.values(item).some(
        (value)=> typeof(value) === 'string' && value.toLowerCase().includes(text)
          // console.log(value)
      )
    })
    console.log(filteredData);
    setData(filteredData);
  }
  return (
    <Paper
      style={{
        margin: "10px",
        boxShadow: "10px 10px 20px #cbced1, -10px -10px 20px #ffffff",
        position: "relative",
      }}
    >
      <Button
        variant="outlined"
        style={{
          margin:'10px',
          borderRadius: "50px",
          background: "#e0e0e0",
          boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
        }}
        // color="primary"
        startIcon={<AddIcon />}
        onClick={handleOpenDialog}
      >
        Add Product
      </Button>
      <TableContainer responsive={"scroll"}>
        <Table stickyHeader style={{ overflow: "scroll", minWidth: "500px" }}>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={6} variant="head">
                Product List
                {/* <input type="text"  onChange={handleSearch}/> */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Thumbnail</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.thumbnail}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEdit(row)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDelete(row.id)}
                      color="secondary"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <Dialog open={openDialog} style={{}} onClose={handleCloseDialog}>
        <DialogTitle>
          {editProduct ? "Edit Product" : "Add New Product"}
        </DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            gap: "10px",
            width: "400px",
            flexDirection: "column",
          }}
        >
          {/* Add form fields for new product */}
          <TextField
            label="Title"
            fullWidth
            value={newProduct.title}
            onChange={(e) =>
              setNewProduct({ ...newProduct, title: e.target.value })
            }
          />
          <TextField
            label="Description"
            fullWidth
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />
          <TextField
            label="Price"
            type="number"
            fullWidth
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <TextField
            label="Thumbnail"
            fullWidth
            value={newProduct.thumbnail}
            onChange={(e) =>
              setNewProduct({ ...newProduct, thumbnail: e.target.value })
            }
          />
          <TextField
            label="Category"
            fullWidth
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
          />
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

export default CustomDataTable;
