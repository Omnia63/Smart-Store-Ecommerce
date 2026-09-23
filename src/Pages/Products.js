import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux-toolkit/Slices/product-slice";
import {
  Container,
  Row,
  Col,
  Pagination,
  Spinner
} from "react-bootstrap";
import ProductCard from "../Components/ProductCard";
import "../Styles/products-page.css";

function Products () {
  const { items, total, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const skip = (currentPage - 1) * itemsPerPage;
    dispatch(fetchProducts({ limit: itemsPerPage, skip }));
      window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  }, [currentPage, dispatch]);

  const totalPages = Math.ceil(total / itemsPerPage);
  const pageWindow = 1;
  const startPage = Math.max(currentPage - pageWindow, 2);
  const endPage = Math.min(currentPage + pageWindow, totalPages - 1);

  if (error) {
  return (
    <Container className="py-5 text-center">
      <h3>Something went wrong</h3>
      <p>{error}</p>
    </Container>
  );
}

  return (
    <>
      <Container className="py-5 products-page">
        <Row className="py-5 g-4">
  {loading ? (
    <Col xs={12} className="text-center">
      <Spinner animation="border" />
    </Col>
  ) : (
    items.map((product) => (
      <Col lg={4} md={4} sm={6} key={product.id}>
        <ProductCard product={product} />
      </Col>
    ))
  )}
</Row>

        {/* Pagination */}
        {totalPages > 0 && (
          <Row className="justify-content-center py-4">
            <Col xs="auto">
              <Pagination>
                {/* First & Previous */}
                <Pagination.First
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                />
                <Pagination.Prev
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  disabled={currentPage === 1}
                />

                {/* Page 1 */}
                <Pagination.Item
                  active={currentPage === 1}
                  onClick={() => setCurrentPage(1)}
                >
                  1
                </Pagination.Item>

                {/* Left Ellipsis */}
                {startPage > 2 && <Pagination.Ellipsis />}

                {/* Middle Pages */}
                {endPage >= startPage &&
                  [...Array(endPage - startPage + 1)].map((_, index) => {
                    const page = startPage + index;
                    return (
                      <Pagination.Item
                        key={page}
                        active={page === currentPage}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Pagination.Item>
                    );
                  })}

                {/* Right Ellipsis */}
                {endPage < totalPages - 1 && <Pagination.Ellipsis />}

                {/* Last Page */}
                {totalPages > 1 && (
                  <Pagination.Item
                    active={currentPage === totalPages}
                    onClick={() => setCurrentPage(totalPages)}
                  >
                    {totalPages}
                  </Pagination.Item>
                )}

                {/* Next & Last */}
                <Pagination.Next
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  disabled={currentPage === totalPages}
                />
                <Pagination.Last
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}
export default Products;