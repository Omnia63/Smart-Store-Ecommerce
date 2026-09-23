import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../Redux-toolkit/Slices/categories-slice";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/categories-page.css";

function Categories () {
    const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());

    },[])

    const categoryIcons = {
  beauty: "fa-palette",
  fragrances: "fa-spray-can-sparkles",
  furniture: "fa-couch",
  groceries: "fa-cart-shopping",
  "home-decoration": "fa-house",
  "kitchen-accessories": "fa-kitchen-set",
  laptops: "fa-laptop",
  "mens-shirts": "fa-shirt",
  "mens-shoes": "fa-shoe-prints",
  "mens-watches": "fa-clock",
  "mobile-accessories": "fa-mobile-screen",
  motorcycle: "fa-motorcycle",
  "skin-care": "fa-pump-soap",
  smartphones: "fa-mobile-screen-button",
  "sports-accessories": "fa-football",
  sunglasses: "fa-glasses",
  tablets: "fa-tablet-screen-button",
  tops: "fa-shirt",
  vehicle: "fa-car",
  "womens-bags": "fa-bag-shopping",
  "womens-dresses": "fa-person-dress",
  "womens-jewellery": "fa-gem",
  "womens-shoes": "fa-shoe-prints",
  "womens-watches": "fa-clock",
};

    return (
        <>
<Container className="py-5">
    <Row className="py-5">
                {categories.map((category) => (
<Col  key={category} xs={6} md={4} lg={3} className="mb-3 p-3">
<Link to={`/categories/${category.slug}`}
  className="text-decoration-none"
  style={{ display: 'block' }} 
>

  <button
    className="category-btn"
  >
    <i
  className={`fa-solid ${
    categoryIcons[category.slug] || "fa-tag"
  } me-2`}
></i>
   {category.name}
  </button>
</Link>

</Col>       
))}       
    </Row>
</Container>
        </>
    )
}
export default Categories;