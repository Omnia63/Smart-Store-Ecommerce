
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">
            <div className="hero-content">
              <h1 className="hero-title">
                Shop Smart,
                <br />
                <span className="hero-title-accent">Live Better</span>
              </h1>

              <p className="hero-description">
                Discover electronics, fashion, groceries and more — all in one place.
              </p>

              <div className="hero-buttons">
<Link to="/products" className="btn-hero">
  Browse Products
</Link>

<Link to="/categories" className="btn-hero">
  Explore Categories
</Link>
              </div>

            </div>
    </section>
  );
}

export default Hero;
