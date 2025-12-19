import { useState } from "react";
import "./Shop.css";
import hoodieImage from "../assets/product_hoodie_black_1766131634663.png";
import denimImage from "../assets/product_denim_black_1766131652734.png";
import coordsImage from "../assets/product_coords_beige_1766131675247.png";
import whiteTshirtImage from "../assets/product_white_tshirt_1766136378485.png";
import blackHoodiePremium from "../assets/black_hoodie_premium_1766139238718.png";
import beigeTshirt from "../assets/beige_tshirt_1766139254742.png";
import grayHoodie from "../assets/gray_hoodie_1766139272431.png";
import blueDenim from "../assets/blue_denim_jeans_1766139296170.png";
import whiteSneakers from "../assets/white_sneakers_1766139315910.png";
import blackCap from "../assets/black_cap_1766139332900.png";
import navySweatpants from "../assets/navy_sweatpants_1766139355294.png";

const Shop = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const products = [
    // T-Shirts
    {
      id: 1,
      name: "Signature White Tee",
      category: "tshirts",
      price: 49.99,
      image: whiteTshirtImage,
      description: "Premium cotton t-shirt with perfect fit.",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 2,
      name: "Essential Black Tee",
      category: "tshirts",
      price: 49.99,
      image: hoodieImage,
      description: "Timeless black tee for everyday wear.",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 3,
      name: "Oversized Graphic Tee",
      category: "tshirts",
      price: 59.99,
      image: whiteTshirtImage,
      description: "Bold graphics meet comfort.",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 4,
      name: "Vintage Wash Tee",
      category: "tshirts",
      price: 54.99,
      image: hoodieImage,
      description: "Soft vintage-washed cotton.",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 5,
      name: "Pocket Detail Tee",
      category: "tshirts",
      price: 52.99,
      image: whiteTshirtImage,
      description: "Classic tee with chest pocket.",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 6,
      name: "Beige Essential Tee",
      category: "tshirts",
      price: 49.99,
      image: beigeTshirt,
      description: "Versatile beige tee for any occasion.",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 7,
      name: "Striped Crew Tee",
      category: "tshirts",
      price: 54.99,
      image: whiteTshirtImage,
      description: "Classic striped pattern tee.",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 8,
      name: "V-Neck Premium Tee",
      category: "tshirts",
      price: 52.99,
      image: beigeTshirt,
      description: "Elegant v-neck design.",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },

    // Hoodies
    {
      id: 9,
      name: "Essential Black Hoodie",
      category: "hoodies",
      price: 89.99,
      image: hoodieImage,
      description: "Premium oversized hoodie in soft cotton blend.",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 10,
      name: "Premium Black Hoodie",
      category: "hoodies",
      price: 99.99,
      image: blackHoodiePremium,
      description: "Luxury black hoodie with premium finish.",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 11,
      name: "Gray Minimalist Hoodie",
      category: "hoodies",
      price: 94.99,
      image: grayHoodie,
      description: "Modern gray hoodie with clean design.",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 12,
      name: "Heavyweight Hoodie",
      category: "hoodies",
      price: 99.99,
      image: hoodieImage,
      description: "Extra thick fleece for maximum warmth.",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 13,
      name: "Zip-Up Hoodie",
      category: "hoodies",
      price: 94.99,
      image: blackHoodiePremium,
      description: "Versatile zip-up design.",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 14,
      name: "Cropped Hoodie",
      category: "hoodies",
      price: 84.99,
      image: grayHoodie,
      description: "Modern cropped silhouette.",
      sizes: ["XS", "S", "M", "L"],
    },
    {
      id: 15,
      name: "Embroidered Logo Hoodie",
      category: "hoodies",
      price: 109.99,
      image: hoodieImage,
      description: "Premium hoodie with embroidered branding.",
      sizes: ["S", "M", "L", "XL"],
    },

    // Denim
    {
      id: 16,
      name: "Classic Black Denim",
      category: "denim",
      price: 129.99,
      image: denimImage,
      description: "Timeless black denim with modern fit.",
      sizes: ["28", "30", "32", "34", "36"],
    },
    {
      id: 17,
      name: "Blue Denim Jeans",
      category: "denim",
      price: 134.99,
      image: blueDenim,
      description: "Classic blue denim with perfect fit.",
      sizes: ["28", "30", "32", "34", "36", "38"],
    },
    {
      id: 18,
      name: "Relaxed Fit Denim",
      category: "denim",
      price: 139.99,
      image: denimImage,
      description: "Comfortable relaxed fit for everyday wear.",
      sizes: ["28", "30", "32", "34", "36", "38"],
    },
    {
      id: 19,
      name: "Slim Fit Denim",
      category: "denim",
      price: 134.99,
      image: blueDenim,
      description: "Sleek slim fit with stretch.",
      sizes: ["28", "30", "32", "34", "36"],
    },
    {
      id: 20,
      name: "Distressed Denim",
      category: "denim",
      price: 149.99,
      image: denimImage,
      description: "Vintage-inspired distressed details.",
      sizes: ["30", "32", "34", "36"],
    },
    {
      id: 21,
      name: "Wide Leg Denim",
      category: "denim",
      price: 144.99,
      image: blueDenim,
      description: "Trendy wide leg silhouette.",
      sizes: ["28", "30", "32", "34", "36"],
    },
    {
      id: 22,
      name: "Raw Denim",
      category: "denim",
      price: 159.99,
      image: denimImage,
      description: "Premium raw denim for denim enthusiasts.",
      sizes: ["30", "32", "34", "36"],
    },

    // Co-ords
    {
      id: 23,
      name: "Comfort Co-ord Set",
      category: "coords",
      price: 149.99,
      image: coordsImage,
      description: "Matching set for effortless style.",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 24,
      name: "Lounge Co-ord",
      category: "coords",
      price: 139.99,
      image: coordsImage,
      description: "Ultimate comfort meets style.",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 25,
      name: "Navy Sweatpants Set",
      category: "coords",
      price: 154.99,
      image: navySweatpants,
      description: "Premium navy sweatpants and hoodie set.",
      sizes: ["S", "M", "L", "XL"],
    },
    
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "tshirts", name: "T-Shirts" },
    { id: "hoodies", name: "Hoodies" },
    { id: "denim", name: "Denim" },
    { id: "coords", name: "Co-ords" },
    { id: "jackets", name: "Jackets" },
    { id: "footwear", name: "Footwear" },
    { id: "accessories", name: "Accessories" },
  ];

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "all" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  const handleAddToCart = (product) => {
    onAddToCart(product);
  };

  return (
    <div className="shop-page">
      {/* Hero Banner */}
      <section className="shop-hero">
        <div className="container">
          <h1 className="fade-in">Shop the Collection</h1>
          <p className="fade-in">Curated pieces for the modern wardrobe.</p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="section shop-content">
        <div className="container">
          <div className="shop-layout sticky-sidebar">
            {/* Sidebar Filters */}
            <aside className="shop-sidebar fade-in ">
              <div className="filter-section">
                <h3 className="filter-title">Categories</h3>
                <div className="filter-options">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`filter-btn ${
                        selectedCategory === category.id ? "active" : ""
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h3 className="filter-title">Sort By</h3>
                <select
                  className="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A-Z</option>
                </select>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="shop-main">
              <div className="shop-header">
                <p className="results-count">
                  {sortedProducts.length}{" "}
                  {sortedProducts.length === 1 ? "Product" : "Products"}
                </p>
              </div>

              <div className="shop-grid grid grid-3">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="product-card card">
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                      <div className="product-overlay">
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className="product-info">
                      <span className="product-category uppercase">
                        {product.category}
                      </span>
                      <h4 className="product-name">{product.name}</h4>
                      <p className="product-description">
                        {product.description}
                      </p>
                      <div className="product-footer">
                        <p className="product-price">${product.price}</p>
                        <div className="product-sizes">
                          {product.sizes.slice(0, 3).map((size) => (
                            <span key={size} className="size-badge">
                              {size}
                            </span>
                          ))}
                          {product.sizes.length > 3 && (
                            <span className="size-badge">
                              +{product.sizes.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {sortedProducts.length === 0 && (
                <div className="no-products">
                  <p>No products found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
