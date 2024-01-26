import { useSelector } from "react-redux";
import { productsData } from "../Slices/ProductSlice";
import "../css/products.css";
import Categories from "./Categories.js";
import ProductResults from "./ProductResults";
import { useState } from "react";

const Products = () => {
  const products = useSelector(productsData);
  const [checkboxSearch, setcheckboxSearch] = useState([]);

  const handleCheckboxSearch = (checkedvalues) => {
    setcheckboxSearch(checkedvalues);
  };
  return (
    <>
      <section className="product-list">
        <h4>Filters</h4>
        <div style={{ display: "flex" }}>
          <div className="categories border">
            <Categories oncheckboxchange={handleCheckboxSearch} />
          </div>
          <ProductResults products={products} checkboxSearch={checkboxSearch} />
        </div>
      </section>
    </>
  );
};
export default Products;
