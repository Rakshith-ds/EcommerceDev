import { useDispatch, useSelector } from "react-redux";
import { add } from "../Slices/CartSlice";
import { productsData } from "../Slices/ProductSlice";
import { cartItems } from "../Slices/CartSlice";
import { useState, useEffect } from "react";
import "../css/products.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SeachProducts = () => {
  const products = useSelector(productsData);
  const cartItems1 = useSelector(cartItems);
  const dispatch = useDispatch();

  const [filteredItems, setFilteredItems] = useState(products);

  const location = useLocation();
  const { searchInput } = location.state || {};

  useEffect(() => {
    document.title = "Products";
    filterSearch(searchInput);
  }, [searchInput]);

  const Add_to_cart = (product) => {
    dispatch(
      add([
        ...cartItems1,
        ...[{ ...product, cartId: cartItems1.length, quantity: 1 }],
      ])
    );
  };
  //   const getFilteredItems = (e) => {
  //     if (selectedCategory === "All") {
  //       setFilteredItems(products);
  //     } else {
  //       setFilteredItems(
  //         products.filter((item) => item.category === selectedCategory)
  //       );
  //     }
  //   };

  const filterSearch = (search) => {
    const results = products.filter((items) => {
      return items.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredItems(results);
  };

  return (
    <>
      {/* <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
      
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            marginTop: "5px",
          }}
        >
          <h4
            style={{
              marginTop: "8px",
              marginLeft: "10px",
            }}
          >
            Filter:
          </h4>
          <select
            style={{
              width: "130px",
              height: "30px",
              marginTop: "8px",
              marginLeft: "10px",
            }}
            defaultValue="All"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="men's clothing">men's clothing</option>
            <option value="electronics">electronics</option>
          </select>
        </div>
        <Button
          variant="primary"
          onClick={getFilteredItems}
          style={{
            height: "30px",
            width: "70px",
            marginTop: "12px",
            marginLeft: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          ok
        </Button>
      </div> */}
      <section className="product-list">
        <h4>Categories</h4>
        <div style={{ display: "flex" }}>
          <div className="categories border">
            <h4>Hey</h4>
          </div>
          <div className="row" style={{ width: "83%" }}>
            {filteredItems?.map((product) => {
              return (
                <div className=" col-md-2 border" key={product.id}>
                  <div className="product-segment">
                    <div className="product-image">
                      <img
                        className="product-image-size"
                        src={
                          product.images ||
                          "/Users/rakshithds/Desktop/ReactJS/frontend/src/images/default.png"
                        }
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
                    <div className="overlay"></div>
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
export default SeachProducts;