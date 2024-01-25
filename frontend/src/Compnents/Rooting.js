import { useState, useEffect } from "react";
import { fetchProducts } from "../Slices/ProductSlice";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import Products from "./Products";

const Rooting = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchUserData = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    dispatch(fetchProducts(data));
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
