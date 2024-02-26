import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Operator from "./pages/Operator/Operator";
import Single from "./pages/Single/Single"
import { useSelector } from "react-redux";
import Category from "./pages/Category/Category";
import './App.scss'
// import './Style/dark.scss'
// import Single from "./components/Base/Sidebar";

//check
import New from "./pages/New/New";
import { dark } from "@mui/material/styles/createPalette";


const  App=()=> {
  const [isLogin, setIsLogin]= useState(false);
  const login = useSelector((state)=>state.authentication);
  // console.log(login);
  useEffect(()=>{
    setIsLogin(login.isLogin);
  }, [login])
  return (
    <div className="app-dark">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index  element={isLogin ? <Home /> :<Login/>} />
            <Route path="dashboard" element={ isLogin ? <Home/> : <Login/>} />
            <Route path="users">
              <Route index element={<Operator/>} />
              <Route path=":userId" element={<Single/>} />
              <Route path="new" element={<New/>} />
            </Route>
            <Route path="category" element={ <Category/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
