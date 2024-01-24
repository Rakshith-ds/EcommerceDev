import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SignIn from "./Compnents/Signin.js";
import SignUp from "./Compnents/SignUp.js";
import RootLayout from "./Compnents/RootLayout.js";
import Home from "./Compnents/Home.js";
import Cart from "./Compnents/Cart.js";
import Rooting from "./Compnents/Rooting.js";
import SingleProduct from "./Compnents/SingleProduct.js";
import SeachProducts from "./Compnents/SearchProducts.js";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={() => <SignIn />} />
          <Route path="/SignIn" Component={() => <SignIn />} />
          <Route path="/SignUp" Component={() => <SignUp />} />
          <Route path="/" Component={() => <RootLayout />}>
            <Route index path="/Home" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Products" Component={() => <Rooting />} />
            <Route path="/Cart" Component={() => <Cart />} />
            <Route path="/Products/:productId" element={<SingleProduct />} />
            <Route path="/SearchProducts" Component={() => <SeachProducts />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
