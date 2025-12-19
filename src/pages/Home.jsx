import { Link } from "react-router-dom";
import "./Home.css";
import heroImage from "../assets/hero_main_model_1766131615950.png";
import hoodieImage from "../assets/product_hoodie_black_1766131634663.png";
import denimImage from "../assets/product_denim_black_1766131652734.png";
import coordsImage from "../assets/product_coords_beige_1766131675247.png";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Essential Hoodie",
      category: "Hoodies",
      price: 89.99,
      image: hoodieImage,
    },
    {
      id: 2,
      name: "Premium Denim",
      category: "Denim",
      price: 129.99,
      image: denimImage,
    },
    {
      id: 3,
      name: "Comfort Co-ords",
      category: "Co-ords",
      price: 149.99,
      image: coordsImage,
    },
    {
      id: 4,
      name: "Signature Tee",
      category: "T-Shirts",
      price: 49.99,
      image: hoodieImage, // Placeholder
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      text: "Omii redefines streetwear. The quality is unmatched, and I feel unstoppable every time I wear their pieces.",
      rating: 5,
    },
    {
      id: 2,
      name: "Marcus T.",
      text: "Finally, a brand that gets it. Minimalist, bold, and built to last. This is my new go-to.",
      rating: 5,
    },
    {
      id: 3,
      name: "Priya K.",
      text: "The perfect blend of comfort and style. Omii has become my everyday uniform.",
      rating: 5,
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image">
          <img
            src={heroImage}
            alt="Omii Collections Hero"
            className="img-cover"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title fade-in">
            Wear Confidence.
            <br />
            Live Omii.
          </h1>
          <p className="hero-subtitle fade-in">
            Contemporary streetwear for those who dare to stand out.
          </p>
          <div className="hero-actions fade-in">
            <Link to="/shop" className="btn btn-primary">
              Shop the Drop
            </Link>
            <Link to="/lookbook" className="btn btn-secondary">
              Explore Lookbook
            </Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <span></span>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section featured-products">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="mb-md">New Arrivals</h2>
            <p className="section-subtitle">
              Designed to stand out. Made for real life.
            </p>
          </div>

          <div className="products-grid grid grid-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-overlay">
                    <Link to={`/shop`} className="btn btn-primary btn-sm">
                      Quick View
                    </Link>
                  </div>
                </div>
                <div className="product-info">
                  <span className="product-category uppercase">
                    {product.category}
                  </span>
                  <h4 className="product-name">{product.name}</h4>
                  <p className="product-price">${product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-xl">
            <Link to="/shop" className="btn btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="section brand-values bg-soft-gray">
        <div className="container">
          <div className="values-grid grid grid-3">
            <div className="value-card text-center">
              <div className="value-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>Premium Quality</h3>
              <p>
                Crafted with precision using sustainable materials that last.
              </p>
            </div>
            <div className="value-card text-center">
              <div className="value-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>Timeless Design</h3>
              <p>Minimalist aesthetics that transcend fleeting trends.</p>
            </div>
            <div className="value-card text-center">
              <div className="value-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>Sustainable Future</h3>
              <p>
                Committed to ethical production and environmental
                responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-header text-center mb-xl">
            <h2 className="mb-md">Loved by Many</h2>
            <p className="section-subtitle">Real people. Real confidence.</p>
          </div>

          <div className="testimonials-grid grid grid-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">
                      ★
                    </span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section bg-black">
        <div className="container text-center">
          <h2 className="mb-md" style={{ color: "var(--color-white)" }}>
            Join the Movement
          </h2>
          <p
            className="section-subtitle mb-xl"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Be the first to know about new drops, exclusive offers, and style
            inspiration.
          </p>
          <Link to="/contact" className="btn btn-gold">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
