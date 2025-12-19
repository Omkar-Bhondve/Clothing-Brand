import "./Lookbook.css";
import lookbookImage from "../assets/lookbook_urban_style_1766131694967.png";
import heroImage from "../assets/hero_main_model_1766131615950.png";
import hoodieImage from "../assets/product_hoodie_black_1766131634663.png";
import denimImage from "../assets/product_denim_black_1766131652734.png";
import coordsImage from "../assets/product_coords_beige_1766131675247.png";

const Lookbook = () => {
  const lookbookItems = [
    {
      id: 1,
      title: "Urban Essentials",
      season: "Winter 2024",
      image: heroImage,
      description: "Minimalist streetwear for the modern city dweller.",
    },
    {
      id: 2,
      title: "Street Elegance",
      season: "Fall 2024",
      image: lookbookImage,
      description: "Where comfort meets sophistication.",
    },
    {
      id: 3,
      title: "Bold Basics",
      season: "Winter 2024",
      image: hoodieImage,
      description: "Elevated essentials that make a statement.",
    },
    {
      id: 4,
      title: "Denim Days",
      season: "All Season",
      image: denimImage,
      description: "Timeless denim for every occasion.",
    },
    {
      id: 5,
      title: "Coordinated Style",
      season: "Spring 2024",
      image: coordsImage,
      description: "Effortless matching sets for easy style.",
    },
    {
      id: 6,
      title: "Monochrome Magic",
      season: "Winter 2024",
      image: heroImage,
      description: "The power of black and white.",
    },
  ];

  return (
    <div className="lookbook-page">
      {/* Hero Section */}
      <section className="lookbook-hero">
        <div className="container">
          <h1 className="fade-in">Lookbook</h1>
          <p className="hero-subtitle fade-in">
            Style inspiration for the bold and confident.
          </p>
        </div>
      </section>

      {/* Lookbook Grid */}
      <section className="section lookbook-content">
        <div className="container">
          <div className="lookbook-grid">
            {lookbookItems.map((item, index) => (
              <div
                key={item.id}
                className={`lookbook-item ${index % 5 === 0 ? "large" : ""}`}
              >
                <div className="lookbook-image">
                  <img src={item.image} alt={item.title} />
                  <div className="lookbook-overlay">
                    <div className="lookbook-info">
                      <span className="lookbook-season uppercase">
                        {item.season}
                      </span>
                      <h3 className="lookbook-title">{item.title}</h3>
                      <p className="lookbook-description">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Brand */}
      <section className="section behind-brand bg-soft-gray">
        <div className="container">
          <div className="behind-content">
            <div className="behind-text">
              <h2 className="mb-md">Behind the Brand</h2>
              <p className="mb-md">
                Every collection tells a story. From concept to creation, we
                pour passion into every piece. Our lookbooks aren't just
                photos—they're a glimpse into the Omii lifestyle.
              </p>
              <p className="mb-lg">
                We collaborate with emerging photographers, stylists, and models
                who share our vision of authentic, confident style. Together, we
                create imagery that inspires and empowers.
              </p>
              <a href="/about" className="btn btn-primary">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section lookbook-cta bg-black">
        <div className="container text-center">
          <h2 className="mb-md" style={{ color: "var(--color-white)" }}>
            Ready to Create Your Look?
          </h2>
          <p
            className="section-subtitle mb-xl"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Shop the pieces featured in our lookbook.
          </p>
          <a href="/shop" className="btn btn-gold">
            Shop the Collection
          </a>
        </div>
      </section>
    </div>
  );
};

export default Lookbook;
