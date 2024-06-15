import { useDispatch } from "react-redux";
import { fetchCart } from "../store/cart-actions";
import { useEffect } from "react";

export const useFetchCart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);
};
