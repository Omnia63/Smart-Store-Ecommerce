import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProducts } from "../Redux-toolkit/Slices/product-slice";
import { addToCart } from "../Redux-toolkit/Slices/cart-slice";
import { toggleWishlist } from "../Redux-toolkit/Slices/wishlist-slice";
import "../Styles/product-detail-card.css";

function ProductDetailCard() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.items);

  const product = products.find((p) => p.id === Number(id));

  const wishlist = useSelector((state) => state.wishlist);

  const isWishlisted = wishlist.some((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts({ limit: 100, skip: 0 }));
    }
  }, [dispatch, products.length]);

  if (!product) {
    return <p className="text-center py-5">Loading...</p>;
  }

  return (
    <div className="product-detail-card">

      <div className="product-gallery">
        <div className="image-wrapper">
          <img src={product.thumbnail} alt={product.title} loading="lazy"/>
        </div>
      </div>

      <div className="product-info">

        <h1>{product.title}</h1>
        <p className="product-price">${product.price}</p>
        <p className="description">{product.description}</p>
        <p className="category">{product.category.toUpperCase()}</p>

        <div className="actions-btn">

          <div className="quantity-controls">
            <button className="minus-btn"
              onClick={() =>
                setQuantity((prev) => Math.max(1, prev - 1))
              }
            >
              -
            </button>

            <span className="quantity-value">{quantity}</span>

            <button className="plus-btn"
              onClick={() =>
                setQuantity((prev) => prev + 1)
              }
            >
              +
            </button>
          </div>

          <button
            className="add-btn"
            onClick={() =>{
              dispatch(
                addToCart({
                  ...product,
                  quantity,
                })
              )
            setQuantity(1)
            }}
          >
            Add To Cart
          </button>

          <button
            className="wish-btn"
            onClick={() => dispatch(toggleWishlist(product))}
            aria-label={
              isWishlisted
                ? "Remove from wishlist"
                : "Add to wishlist"
            }
          >
            <i
              className={`fa-heart ${
                isWishlisted
                  ? "fa-solid active-heart"
                  : "fa-regular"
              }`}
            />
          </button>

        </div>
      </div>

    </div>
  );
}

export default ProductDetailCard;