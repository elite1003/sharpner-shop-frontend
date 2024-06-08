import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/product-actions";
import { useEffect } from "react";

export const useFetchProducts = () => {
  console.log("useFetchProducts");
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("useEffect");
    dispatch(fetchProducts());
  }, [dispatch]);
};
