import { useSelector, useDispatch } from "react-redux";
import { productsData } from "../Slices/ProductSlice";
import { useParams } from "react-router-dom";
import "../css/products.css";
import Categories from "./Categories.js";
import ProductResults from "./ProductResults";
import { useState, useEffect } from "react";
import { selectSearchData, searchword } from "../Slices/SearchSlice";

const SearchProducts = () => {
  const products = useSelector(productsData);
  const [checkboxSearch, setcheckboxSearch] = useState([]);
  const searchItems1 = useSelector(selectSearchData);

  const { searchQuery } = useParams();

  const dispatch = useDispatch();

  const handleCheckboxSearch = (checkedvalues) => {
    setcheckboxSearch(checkedvalues);
  };

  useEffect(() => {
    dispatch(searchword(searchQuery));
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
export default SearchProducts;
