import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { useEffect } from "react";
import { fetchProducts } from "../Redux-toolkit/Slices/product-slice";


function ProductsSection() {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  
      useEffect(() => {
        dispatch(fetchProducts({limit: 4, skip: 0}));
      }, [dispatch]);

  return (
    <section className="products-section">
        <h2>Featured Products</h2>
      <div className="products-flex">
  {products.map((product) => (
    <div className="product-wrapper" key={product.id}>
      <ProductCard product={product} />
    </div>
  ))}
      </div>
    </section>
  );
}

export default ProductsSection;
