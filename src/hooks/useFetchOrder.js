import { useDispatch } from "react-redux";
import { fetchOrder } from "../store/order-actions";
import { useEffect } from "react";

export const useFetchOrder = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrder());
  }, [dispatch]);
};
