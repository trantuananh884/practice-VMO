import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./component/User.jsx";
import Cart from "./component/cart.jsx";
import { Provider } from "react-redux";
function App() {
  console.log(1);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
