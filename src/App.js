import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Component/About/About";
import Blogs from "./Component/Blogs/Blogs";
import CheckOut from "./Component/CheckOut/CheckOut";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import RequireAuth from "./Component/Login/RequireAuth/RequireAuth";
import NotFound from "./Component/NotFound/NotFound";
import Register from "./Component/Register/Register";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        {/* <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          } */}
        {/* ></Route> */}
        <Route
          path="/checkout/:checkoutId"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
