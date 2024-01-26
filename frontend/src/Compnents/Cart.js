import "../css/cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { cartItems } from "../Slices/CartSlice";

const Cart = () => {
  const cartProducts = useSelector(cartItems);

  if (cartProducts.length === 0) {
    return (
      <div>
        <h4>Add items...!!!</h4>
      </div>
    );
  } else {
    return (
      <>
        <section className="cart-list">
          <div className="container" style={{ display: "flex" }}>
            <div className="total-cart">
              <CartItem cartProducts={cartProducts} />
            </div>
            <div>
              <h4>Total</h4>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default Cart;
