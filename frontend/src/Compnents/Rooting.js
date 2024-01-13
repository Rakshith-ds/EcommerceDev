import { useState, useEffect } from "react";
import { fetchProducts } from "../Slices/ProductSlice";
import Loading from "./Loading";
import Products from "./Products";
import { useDispatch } from "react-redux";

const Rooting = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchUserData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    dispatch(fetchProducts(data));
    setLoading(false);
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  if (loading) {
    return <Loading />;
  } else {
    return <Products />;
  }
};

export default Rooting;
