import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Sigup";
import Add from "./components/Add/Add";
import Edit from "./components/Edit/Edit";
import Info from "./components/Info/Info";
import Root from "./components/Root/Root";
import { useReducer, useState } from "react";
import MyDataContext from "./ApplicationDataContext";
import applicationReducer from "./reducers/applicationReducer";
function App() {
  const [applicationData, dispatch] = useReducer(applicationReducer, []);
  const [dpFileName, setDpFileName] = useState(null);

  return (
    <>
      <MyDataContext.Provider
        value={{
          applicationData,
          dispatch,
          dpFileName,
          setDpFileName,
        }}
      >
        <Routes>
          <Route exact path="/" element={<Root />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/home/add" element={<Add />} />
          <Route exact path="/home/edit/:id" element={<Edit />} />
          <Route exact path="/home/info/" element={<Info />} />
        </Routes>
      </MyDataContext.Provider>
    </>
  );
}

export default App;
