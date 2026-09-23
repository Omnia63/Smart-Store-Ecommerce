import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../Redux-toolkit/Slices/categories-slice";

function CategoriesSection() {
  const categories = useSelector((state) => state.categories);
  const selectedCategories = categories.slice(0, 5);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <>
      <section className="categories-section">
        <div className="grid-container">
          <div className="grid-item">
            <Link
              to={`/category/${selectedCategories[0]?.slug}`}
              className="cat-btn"
            >
              {selectedCategories[0]?.name}
            </Link>
          </div>

          <div className="grid-item">
            <Link
              to={`/category/${selectedCategories[0]?.slug}`}
              className="cat-btn"
            >
              {selectedCategories[1]?.name}
            </Link>
          </div>

          <div className="grid-item">
            <Link
              to={`/category/${selectedCategories[0]?.slug}`}
              className="cat-btn"
            >
              {selectedCategories[2]?.name}
            </Link>
          </div>

          {/* MIDDLE CENTER */}
          <div className="grid-item">
            <Link
              to={`/category/${selectedCategories[0]?.slug}`}
              className="cat-btn"
            >
              {selectedCategories[3]?.name}
            </Link>
          </div>

          {/* RIGHT TALL (spans 2 rows) */}
          <div className="grid-item">
            <Link
              to={`/category/${selectedCategories[0]?.slug}`}
              className="cat-btn"
            >
              {selectedCategories[4]?.name}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default CategoriesSection;
