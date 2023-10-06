import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Sigup";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </>
  );
}

export default App;
