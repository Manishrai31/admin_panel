import React from "react";
import Home from "./views/pages/Home/Home";
import Login from "./views/pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./views/pages/List/List";
import Single from "./views/pages/Single/Single"
// import './Style/dark.scss'
// import Single from "./components/Base/Sidebar";

//check
import New from "./views/pages/New/New";
const  App=()=> {
  return (
    <div className="app dark">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>} />
            <Route path="users">
              <Route index element={<List/>} />
              <Route path=":userId" element={<Single/>} />
              <Route path="new" element={<New/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
