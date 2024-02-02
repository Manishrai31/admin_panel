import React, { useEffect, useState } from "react";
import Home from "./views/pages/Home/Home";
import Login from "./views/pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./views/pages/List/List";
import Single from "./views/pages/Single/Single"
import { useSelector } from "react-redux";
import './App.scss'
// import './Style/dark.scss'
// import Single from "./components/Base/Sidebar";

//check
import New from "./views/pages/New/New";


const  App=()=> {
  const [isLogin, setIsLogin]= useState(false);
  const login = useSelector((state)=>state.authentication);
  console.log(login);
  useEffect(()=>{
    setIsLogin(login.isLogin);
  }, [login])
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index  element={isLogin ? <Home /> :<Login/>} />
            <Route path="dashboard" element={ isLogin ? <Home/> : <Login/>} />
            <Route path="users">
              <Route index element={<List/>} />
              <Route path=":userId" element={<Single/>} />
              <Route path="new" element={<New/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
