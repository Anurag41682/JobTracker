import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Sigup";
import Add from "./components/Add/Add";
function App() {
  const jwtToken = localStorage.getItem("jwtToken");
  const decodedToken = JSON.parse(atob(jwtToken.split(".")[1]));
  const currentTime = Date.now() / 1000;
  const isTokenExpired = decodedToken.exp < currentTime;
  const isAuth = jwtToken && !isTokenExpired;
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home decoded={decodedToken} isAuth={isAuth} />}
        ></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route
          exact
          path="/add"
          element={<Add decoded={decodedToken} isAuth={isAuth} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
