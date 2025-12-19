import { useState, useEffect } from "react";
import "./Cart.css";

const Cart = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

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

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = subtotal > 100 ? 0 : 10;
    return subtotal + shipping;
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${isAnimating && isOpen ? "active" : ""}`}
        onClick={handleClose}
      ></div>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isAnimating && isOpen ? "active" : ""}`}>
        <div className="cart-header">
          <h2 className="">Shopping Cart</h2>
          <button
            className="cart-close"
            onClick={handleClose}
            aria-label="Close cart"
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

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M9 2L7.17 6M15 2l1.83 4M3.34 7h17.32c.447 0 .67 0 .82.087a.5.5 0 01.207.207c.087.15.087.373.087.82v.886c0 .447 0 .67-.087.82a.5.5 0 01-.207.207c-.15.087-.373.087-.82.087H3.34c-.447 0-.67 0-.82-.087a.5.5 0 01-.207-.207C2.226 9.67 2.226 9.447 2.226 9V8.114c0-.447 0-.67.087-.82a.5.5 0 01.207-.207c.15-.087.373-.087.82-.087zM5 11l1.5 8h11L19 11M10 15h4" />
              </svg>
              <h3>Your cart is empty</h3>
              <p>Add some items to get started!</p>
              <button className="btn btn-primary" onClick={handleClose}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.cartId} className="cart-item">
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p className="cart-item-category">{item.category}</p>
                      <p className="cart-item-price">
                        ${item.price.toFixed(2)}
                      </p>

                      <div className="cart-item-actions">
                        <div className="quantity-controls">
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.cartId, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                          </button>
                          <span className="quantity">{item.quantity}</span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.cartId, item.quantity + 1)
                            }
                            aria-label="Increase quantity"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                          </button>
                        </div>

                        <button
                          className="remove-btn"
                          onClick={() => onRemoveItem(item.cartId)}
                          aria-label="Remove item"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-summary">
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Shipping</span>
                    <span>{calculateSubtotal() > 100 ? "FREE" : "$10.00"}</span>
                  </div>
                  {calculateSubtotal() > 100 && (
                    <div className="free-shipping-badge">
                      🎉 You've unlocked free shipping!
                    </div>
                  )}
                  {calculateSubtotal() <= 100 && calculateSubtotal() > 0 && (
                    <div className="shipping-notice">
                      Add ${(100 - calculateSubtotal()).toFixed(2)} more for
                      free shipping
                    </div>
                  )}
                  <div className="summary-row total">
                    <span>Total</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>

                <button
                  className="btn btn-primary checkout-btn"
                  style={{ width: "100%" }}
                  onClick={onCheckout}
                >
                  Proceed to Checkout
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={handleClose}
                  style={{ width: "100%" }}
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
