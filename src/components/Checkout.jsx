import { useState, useEffect } from "react";
import "./Checkout.css";

const Checkout = ({ isOpen, onClose, cartItems, total }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  });

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", formData);
    alert("Order placed successfully! (Demo)");
    handleClose();
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`checkout-overlay ${isAnimating && isOpen ? "active" : ""}`}
        onClick={handleClose}
      ></div>

      {/* Checkout Sidebar */}
      <div
        className={`checkout-sidebar ${isAnimating && isOpen ? "active" : ""}`}
      >
        <div className="checkout-header">
          <h2>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ color: "var(--color-gold)" }}
            >
              <path d="M12 1v22M17 5H9.5a4 4 0 0 0 0 8h5m-5 8h8a4 4 0 0 0 4-4v-3.5" />
            </svg>
            Checkout
          </h2>
          <button
            className="checkout-close"
            onClick={handleClose}
            aria-label="Close checkout"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="checkout-body">
          <form onSubmit={handleSubmit} className="checkout-form">
            {/* Shipping Info */}
            <fieldset className="form-section">
              <legend>Shipping Information</legend>
              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Street Address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <div className="form-row">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State/Province"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <input
                type="text"
                name="zipCode"
                placeholder="Zip/Postal Code"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
              />
            </fieldset>

            {/* Payment Info */}
            <fieldset className="form-section">
              <legend>Payment Information</legend>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
              />
              <div className="form-row">
                <input
                  type="text"
                  name="cardExpiry"
                  placeholder="MM/YY"
                  value={formData.cardExpiry}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="cardCVC"
                  placeholder="CVC"
                  value={formData.cardCVC}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </fieldset>

            {/* Order Summary */}
            <div className="order-summary">
              <div className="summary-row">
                <span>Items ({cartItems.length})</span>
                <span>
                  $
                  {cartItems
                    .reduce((sum, item) => sum + item.price * item.quantity, 0)
                    .toFixed(2)}
                </span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>
                  {cartItems.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                  ) > 100
                    ? "FREE"
                    : "$10.00"}
                </span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="checkout-actions">
              <button type="submit" className="btn-place-order">
                Place Order
              </button>
              <button type="button" className="btn-back" onClick={handleClose}>
                Back to Cart
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
