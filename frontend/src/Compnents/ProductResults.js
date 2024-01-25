import { useDispatch, useSelector } from "react-redux";
import { add } from "../Slices/CartSlice";
import { useState, useEffect } from "react";
import { productsData } from "../Slices/ProductSlice";
import "../css/products.css";
import { Link } from "react-router-dom";
import { cartItems } from "../Slices/CartSlice";
import { selectSearchData, selectSearchWord } from "../Slices/SearchSlice";

const ProductResults = (props) => {
  const products = useSelector(productsData);
  const searchItems1 = useSelector(selectSearchData);
  const cartItems1 = useSelector(cartItems);
  const dispatch = useDispatch();
  const searchkey = useSelector(selectSearchWord);
  const [filteredItems, setFilteredItems] = useState(props.products);

  useEffect(() => {
    document.title = "Products";
    if (searchkey === "") {
      searchResults();
    } else {
      filterSearch(searchkey);
    }
  }, [searchkey, searchItems1]);

  const Add_to_cart = (product) => {
    dispatch(add([...cartItems1, ...[{ ...product }]]));
  };

  const filterSearch = (search) => {
    const results = props.products.filter((items) => {
      return items.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredItems(results);
  };
  const searchResults = () => {
    const filteredData =
      searchItems1.length === 0
        ? products
        : products.filter((item) => searchItems1.includes(item.category.name));
    setFilteredItems(filteredData);
  };

  return (
    <>
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
                <div className="overlay"></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductResults;
