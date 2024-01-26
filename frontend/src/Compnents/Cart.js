import { useDispatch, useSelector } from "react-redux";
import { cartItems, remove } from "../Slices/CartSlice";
import "../css/cart.css";

const Cart = () => {
  const cartProducts = useSelector(cartItems);
  const dispatch = useDispatch();

  const removeCart = (cid) => {
    dispatch(remove(cartProducts.filter((item) => item.id !== cid)));
  };

  return (
    <>
      <section className="cart-list">
        <div className="container">
          <div className="total-cart">
            <div className="row">
              {cartProducts?.map((product) => {
                return (
                  <div className="cart-items" key={product.id}>
                    <div className=" cart-items border ">
                      <div className="cart-image">
                        <img src={product.images} alt="" />
                      </div>
                      <div className="cart-title">
                        <span className="fw-bold adjust-font text-truncate empty">
                          {product.title}
                        </span>
                      </div>

                      <div className="cart-price">
                        <span className="fw-bold adjust-font text-truncate empty">
                          ${product.price}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeCart(product.id)}
                        className="btn-buy"
                      >
                        Remove
                      </button>
                      <div className="overlay-cart"></div>
                    </div>
                  </div>
                );
              })}
            </div>
            <h1>Total</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
