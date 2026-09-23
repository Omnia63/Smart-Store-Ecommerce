import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductsByCategory } from "../Redux-toolkit/Slices/product-slice";
import ProductCard from "../Components/ProductCard";

function CategoryDetails() {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { items: products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsByCategory(name));
  }, [name, dispatch]);
  return (
    <>
      <Container className="py-5 products-page">
        <Row className="py-5 g-4">
          {products.map((product) => (
      <Col lg={4} md={4} sm={6} key={product.id}>
        <ProductCard product={product} />
      </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default CategoryDetails;
