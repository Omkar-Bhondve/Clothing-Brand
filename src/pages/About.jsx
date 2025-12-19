import "./About.css";
import sustainabilityImage from "../assets/about_sustainability_1766131713662.png";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="fade-in">Our Story</h1>
          <p className="hero-subtitle fade-in">
            Where confidence meets craftsmanship.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section brand-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2 className="mb-md">Designed to Stand Out</h2>
              <p className="mb-md">
                Omii Collections was born from a simple belief: clothing should
                empower, not just cover. We create pieces that blend minimalist
                design with bold personality, crafted for those who refuse to
                blend in.
              </p>
              <p className="mb-md">
                Every stitch, every fabric choice, every design decision is made
                with intention. We're not chasing trends—we're building a
                wardrobe that lasts, both in style and substance.
              </p>
              <p>
                From the streets to the studio, Omii is for the dreamers, the
                doers, and the ones who dare to be different.
              </p>
            </div>
            <div className="story-image">
              <img src={sustainabilityImage} alt="Omii Collections Story" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section core-values bg-soft-gray">
        <div className="container">
          <div className="section-header text-center mb-xl">
            <h2 className="mb-md">What We Stand For</h2>
            <p className="section-subtitle">
              Our values drive everything we create.
            </p>
          </div>

          <div className="values-grid grid grid-2">
            <div className="value-item">
              <div className="value-number">01</div>
              <h3>Authenticity</h3>
              <p>
                We create for real people living real lives. No pretense, no
                gimmicks— just honest design that speaks for itself.
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">02</div>
              <h3>Confidence</h3>
              <p>
                Our pieces are designed to make you feel unstoppable. When you
                wear Omii, you wear your power.
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">03</div>
              <h3>Sustainability</h3>
              <p>
                Quality over quantity. We use sustainable materials and ethical
                production methods because the planet matters.
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">04</div>
              <h3>Urban Expression</h3>
              <p>
                Born from the streets, refined for the world. We celebrate the
                energy and creativity of urban culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="section sustainability">
        <div className="container">
          <div className="sustainability-content">
            <div className="sustainability-text">
              <h2 className="mb-md">Crafted Responsibly</h2>
              <p className="mb-md">
                Sustainability isn't a buzzword for us—it's a commitment. We
                partner with ethical manufacturers, use organic and recycled
                materials, and ensure fair wages throughout our supply chain.
              </p>
              <p className="mb-md">
                Every Omii piece is designed to last. We believe in slow
                fashion: timeless designs that you'll wear for years, not
                seasons.
              </p>
              <ul className="sustainability-list">
                <li>100% organic cotton in all tees</li>
                <li>Recycled materials in outerwear</li>
                <li>Carbon-neutral shipping</li>
                <li>Fair trade certified production</li>
                <li>Zero-waste packaging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta bg-black">
        <div className="container text-center">
          <h2 className="mb-md" style={{ color: "var(--color-white)" }}>
            Join the Movement
          </h2>
          <p
            className="section-subtitle mb-xl"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Be part of a community that values style, substance, and
            sustainability.
          </p>
          <div className="cta-actions">
            <a href="/shop" className="btn btn-gold">
              Shop Now
            </a>
            <a href="/contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
