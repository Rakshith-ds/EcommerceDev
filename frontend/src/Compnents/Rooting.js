import { useState, useEffect } from "react";
import { fetchProducts } from "../Slices/ProductSlice";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import Products from "./Products";
import data_json from "../data/data";

const Rooting = () => {
  const [loading, setLoading] = useState(true);
  const [fulldata, setFullData] = useState(data_json);
  const dispatch = useDispatch();

  const fetchUserData = async () => {
    dispatch(fetchProducts(fulldata));
    setLoading(false);
  };
  useEffect(() => {
    fetchUserData();
  });
  if (loading) {
    return <Loading />;
  } else {
    return <Products />;
  }
};

export default Rooting;
