import { useSelector, useDispatch } from "react-redux";
import { productsData } from "../Slices/ProductSlice";
import "../css/products.css";
import Categories from "./Categories.js";
import ProductResults from "./ProductResults";
import { useState, useEffect } from "react";
import {
  selectSearchData,
  resetsearch,
  searchword,
} from "../Slices/SearchSlice";

const Products = () => {
  const products = useSelector(productsData);
  const [checkboxSearch, setcheckboxSearch] = useState([]);
  const searchItems1 = useSelector(selectSearchData);

  const dispatch = useDispatch();

  const handleCheckboxSearch = (checkedvalues) => {
    setcheckboxSearch(checkedvalues);
  };

  useEffect(() => {
    dispatch(resetsearch());
    dispatch(searchword(""));
  }, [dispatch]);

  return (
    <>
      <section className="product-list">
        <h4>Filters</h4>
        <div style={{ display: "flex" }}>
          <div className="categories border">
            <Categories oncheckboxchange={handleCheckboxSearch} />
          </div>
          <ProductResults />
        </div>
      </section>
    </>
  );
};
export default Products;
