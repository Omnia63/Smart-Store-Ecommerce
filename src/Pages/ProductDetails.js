import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import ProductDetailCard from "../Components/ProductDetailCard";
import "../Styles/product-details-page.css"

function ProductDetails() {
  const products = useSelector((state) => state.products.items);

  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    const productApi = fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <p className="text-center py-5">Loading...</p>;
  }

  const recommendedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 10);

  return (
    <>
      <Container className="py-5 product-details-page">
        <div className="product-detail-layout">
          <ProductDetailCard />
        </div>
        <h3 className="mt-5">You may also like</h3>
        <Row>
          {recommendedProducts.map((p) => (
      <Col lg={4} md={4} sm={6} key={p.id}>
        <ProductCard product={p} />
      </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default ProductDetails;
