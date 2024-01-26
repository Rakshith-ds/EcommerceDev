import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../Slices/CartSlice";
import { Button } from "react-bootstrap";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const removeCart = (cid) => {
    dispatch(remove(props.cartProducts.filter((item) => item.id !== cid)));
  };

  return (
    <>
      <div className="row">
        {props.cartProducts?.map((product) => {
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
                <div className="qty">
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div className="cart-price">
                  <span className="fw-bold adjust-font text-truncate empty">
                    ${product.price}
                  </span>
                </div>
                <div className="btn">
                  <Button type="button" onClick={() => removeCart(product.id)}>
                    Remove
                  </Button>
                </div>
                {/* <div className="overlay-cart"></div> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartItem;
