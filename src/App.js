import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Topbar from "./component/topbar/Topbar";
import Sidebar from "./component/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

const App = () => {
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
      </Routes>
        { admin &&
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UserList />}/>
                <Route path="/newUser" element={<NewUser />}/>
                <Route path="/user/:userId" element={<User />}/>
                <Route path="/products" element={<ProductList />}/>
                <Route path="/product/:productId" element={<Product />}/>
                <Route path="/newProduct" element={<NewProduct />}/>    
              </Routes>
            </div>
          </>
          }
    </Router>
  )
};

export default App;