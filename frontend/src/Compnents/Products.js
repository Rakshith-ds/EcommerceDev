import { useDispatch, useSelector } from "react-redux";
import { add } from "../Slices/CartSlice";
import { productsData } from "../Slices/ProductSlice";
import { cartItems } from "../Slices/CartSlice";
import { useState, useEffect } from "react";
import "../css/products.css";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Products = () => {
  const products = useSelector(productsData);
  const cartItems1 = useSelector(cartItems);
  const dispatch = useDispatch();

  const [filteredItems, setFilteredItems] = useState(products);

  useEffect(() => {
    document.title = "Products";
  }, []);

  const Add_to_cart = (product) => {
    dispatch(
      add([
        ...cartItems1,
        ...[{ ...product, cartId: cartItems1.length, quantity: 1 }],
      ])
    );
  };

  return (
    <>
      <section className="product-list">
        <div style={{ display: "flex", width: "15%", marginLeft: "5px" }}>
          <div className="categories-align">
            <h3>Filters</h3>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="categories border">
            <div className="categories-align">
              <h4>Categories</h4>
              <Form>
                <div className="mb-2">
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    inline
                    name="group1"
                    label="Electronics"
                    id={`inline-checkbox-Electronics`}
                  />
                </div>
                <div className="mb-2">
                  <Form.Check // prettier-ignore
                    inline
                    name="group1"
                    type="checkbox"
                    id={`inline-checkbox-Furniture`}
                    label="Furniture"
                  />
                </div>
                <div className="mb-2">
                  <Form.Check // prettier-ignore
                    inline
                    name="group1"
                    type="checkbox"
                    id={`inline-checkbox-Shoes`}
                    label="Shoes"
                  />
                </div>
                <div className="mb-2">
                  <Form.Check // prettier-ignore
                    inline
                    name="group1"
                    type="checkbox"
                    id={`inline-checkbox-Miscellaneous`}
                    label="Miscellaneous"
                  />
                </div>
              </Form>
            </div>
          </div>
          <div className="row" style={{ width: "83%" }}>
            {filteredItems?.map((product) => {
              return (
                <div className=" col-md-2 border" key={product.id}>
                  <div className="product-segment">
                    <div className="product-image">
                      <img
                        className="product-image-size"
                        src={product.images}
                        alt=""
                      />
                    </div>
                    <div>
                      <div style={{ height: "21px" }}>
                        <span className="fw-bold adjust-font text-truncate empty">
                          <Link
                            to={`/Products/${product.id}`}
                            className="adjust-font"
                          >
                            {product.title}
                          </Link>
                        </span>
                      </div>
                      <div className="d-inline-block text-truncate manage-text">
                        <span className="adjust-font-title text-truncate empty fw-light">
                          {product.description}
                        </span>
                      </div>
                      <div>
                        <span className="fw-bold adjust-font text-truncate empty">
                          ${product.price}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => Add_to_cart(product)}
                      className="btn-buy"
                    >
                      Buy Now
                    </button>
                    <div className="overlay-products"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Products;
