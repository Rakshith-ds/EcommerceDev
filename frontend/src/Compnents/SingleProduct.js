import { useParams } from "react-router-dom";
import { productsData } from "../Slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Slices/CartSlice";
import { cartItems } from "../Slices/CartSlice";
import "../css/singleproduct.css";

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
      <div className=" single-product-segment border ">
        <div className="single-product-image">
          <img src={product.images} alt="" />
        </div>
        <div className="single-product-title">
          <span className="fw-bold adjust-font text-truncate empty">
            {product.title}
          </span>
          {/* </div>

        <div className="single-product-price"> */}
          <span className="fw-bold adjust-font text-truncate empty">
            ${product.price}
          </span>
        </div>
        <button
          type="button"
          onClick={() => Add_to_cart(product?.cartId)}
          className="btn-buy"
        >
          Remove
        </button>
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default SingleProduct;
