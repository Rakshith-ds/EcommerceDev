import { useParams } from "react-router-dom";
import { productsData } from "../Slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Slices/CartSlice";
import { cartItems } from "../Slices/CartSlice";
import "../css/singleproduct.css";
import Button from "react-bootstrap/Button";

const SingleProduct = () => {
  const { productId } = useParams();
  const products = useSelector(productsData);
  const cartItems1 = useSelector(cartItems);

  const dispatch = useDispatch();
  console.log(products);
  console.log(productId);

  const Add_to_cart = (product) => {
    dispatch(
      add([...cartItems1, ...[{ ...product, cartId: cartItems1.length }]])
    );
  };

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );
  return (
    <div className="single-product-segment" key={product.id}>
      {/* <div className=" single-product-segment  "> */}
      <div className="single-product-image">
        <img
          className="single-product-image-size"
          src={product.images}
          alt=""
        />
      </div>
      <div className="single-product-title">
        <span className="fw-bold single-product-title-font text-truncate empty">
          {product.title}
        </span>
        <span className="single-product-description">
          {product.description}
        </span>
        <span className="single-product-price">${product.price}</span>
        <Button
          variant="primary"
          onClick={() => Add_to_cart(product?.cartId)}
          // className="btn-buy"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default SingleProduct;
