import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Sigup";
import Add from "./components/Add/Add";
import Info from "./components/Info/Info";
import Root from "./components/Root/Root";
import { useReducer, useState } from "react";
import MyDataContext from "./ApplicationDataContext";
import applicationReducer from "./reducers/applicationReducer";
function App() {
  const [applicationData, dispatch] = useReducer(applicationReducer, []);
  const [pictureUrl, setPictureUrl] = useState(null);

  return (
    <>
      <MyDataContext.Provider
        value={{
          applicationData,
          dispatch,
          pictureUrl,
          setPictureUrl,
        }}
      >
        <Routes>
          <Route exact path="/" element={<Root />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/home/add" element={<Add />}></Route>
          <Route exact path="/home/info" element={<Info />}></Route>
        </Routes>
      </MyDataContext.Provider>
    </>
  );
}

export default App;
