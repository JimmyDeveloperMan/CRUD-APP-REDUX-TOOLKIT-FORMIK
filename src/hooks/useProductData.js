import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductDetails } from "../store/slices/productsSlice";

function useProductData() {
  const { id } = useParams();
  const dispath = useDispatch();
  const { product, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispath(ProductDetails(id));
  }, [dispath, id]);
  return { loading, error, product, id };
}

export default useProductData;
