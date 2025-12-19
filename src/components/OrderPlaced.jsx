import React from "react";
import "./OrderPlaced.css";

const OrderPlaced = ({ isOpen, onClose, orderNumber = null }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className={`order-overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      ></div>

      <div className={`order-sidebar ${isOpen ? "active" : ""}`}>
        <div className="order-header">
          <h2>Order Placed</h2>
          <button className="order-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="order-body">
          <div className="order-success">✅</div>
          <h3>Thank you — your order is placed!</h3>
          {orderNumber && <p className="order-id">Order #{orderNumber}</p>}
          <p className="order-note">We'll send a confirmation email shortly.</p>

          <div className="order-actions">
            <button className="btn btn-primary" onClick={onClose}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPlaced;
