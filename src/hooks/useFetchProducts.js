import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/product-actions";
import { useEffect } from "react";

export const useFetchProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
};
