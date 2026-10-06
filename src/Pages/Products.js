import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux-toolkit/Slices/product-slice";
import {
  Container,
  Row,
  Col,
  Pagination,
  Spinner,
  Form,
} from "react-bootstrap";
import ProductCard from "../Components/ProductCard";
import "../Styles/products-page.css";

function Products() {
  const { items, total, loading, error } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("");

  const itemsPerPage = 12;

  useEffect(() => {
    const skip = (currentPage - 1) * itemsPerPage;

    let sortBy;
    let order;

    switch (sort) {
      case "price-asc":
        sortBy = "price";
        order = "asc";
        break;

      case "price-desc":
        sortBy = "price";
        order = "desc";
        break;

      case "rating-desc":
        sortBy = "rating";
        order = "desc";
        break;

      case "title-asc":
        sortBy = "title";
        order = "asc";
        break;

      case "title-desc":
        sortBy = "title";
        order = "desc";
        break;

      default:
        break;
    }

    dispatch(
      fetchProducts({
        limit: itemsPerPage,
        skip,
        sortBy,
        order,
      })
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage, sort, dispatch]);

  const handleSortChange = (e) => {
    setSort(e.target.value);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(total / itemsPerPage);

  const pageWindow = 1;

  const startPage = Math.max(currentPage - pageWindow, 2);

  const endPage = Math.min(
    currentPage + pageWindow,
    totalPages - 1
  );

  if (error) {
    return (
      <Container className="py-5 text-center">
        <h3>Something went wrong</h3>
        <p>{error}</p>
      </Container>
    );
  }

  return (
    <Container className="py-5 products-page">

      {/* Header / Sort */}
      <Row className="align-items-center mt-4">
        <Col className="d-flex justify-content-end">
          <Form.Select
            value={sort}
            onChange={handleSortChange}
            style={{width: "200px"}}
          >
            <option value="">Sort By</option>            
            <option value="title-asc">
              Name: A → Z
            </option>
            <option value="title-desc">
              Name: Z → A
            </option>
            <option value="price-asc">
              Price: Low → High
            </option>
            <option value="price-desc">
              Price: High → Low
            </option>
            <option value="rating-desc">
              Rating: High → Low
            </option>

          </Form.Select>
        </Col>
      </Row>

      {/* Products */}
      <Row className="py-4 g-4">
        {loading ? (
          <Col xs={12} className="text-center">
            <Spinner animation="border" />
          </Col>
        ) : (
          items.map((product) => (
            <Col
              lg={4}
              md={4}
              sm={6}
              key={product.id}
            >
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

              {/* First */}
              <Pagination.First
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
              />

              {/* Previous */}
              <Pagination.Prev
                onClick={() =>
                  setCurrentPage((prev) => prev - 1)
                }
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
                [...Array(endPage - startPage + 1)].map(
                  (_, index) => {
                    const page = startPage + index;

                    return (
                      <Pagination.Item
                        key={page}
                        active={page === currentPage}
                        onClick={() =>
                          setCurrentPage(page)
                        }
                      >
                        {page}
                      </Pagination.Item>
                    );
                  }
                )}

              {/* Right Ellipsis */}
              {endPage < totalPages - 1 && (
                <Pagination.Ellipsis />
              )}

              {/* Last Page */}
              {totalPages > 1 && (
                <Pagination.Item
                  active={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage(totalPages)
                  }
                >
                  {totalPages}
                </Pagination.Item>
              )}

              {/* Next */}
              <Pagination.Next
                onClick={() =>
                  setCurrentPage((prev) => prev + 1)
                }
                disabled={currentPage === totalPages}
              />

              {/* Last */}
              <Pagination.Last
                onClick={() =>
                  setCurrentPage(totalPages)
                }
                disabled={currentPage === totalPages}
              />

            </Pagination>
          </Col>
        </Row>
      )}

    </Container>
  );
}

export default Products;
