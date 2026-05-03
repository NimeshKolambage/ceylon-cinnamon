import React, { useState } from 'react';

function BuyModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    quantity: '',
    priceOffer: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
    onClose();
    setFormData({
      name: '',
      email: '',
      country: '',
      quantity: '',
      priceOffer: '',
      message: ''
    });
  };

  return (
    <div className="modal-overlay reveal active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        
        <div className="modal-header">
          <h2 className="modal-title">Order Inquiry</h2>
          <p className="modal-subtitle">Experience the world's finest Ceylon Cinnamon.</p>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                id="name"
                type="text" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                id="email"
                type="email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="your@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input 
                id="country"
                type="text" 
                required 
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}
                placeholder="Target Country"
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity (kg)</label>
              <input 
                id="quantity"
                type="number" 
                min="1"
                required 
                value={formData.quantity}
                onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                placeholder="e.g. 5"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="price">Price Offer (per 1kg)</label>
            <div className="input-with-icon">
              <span className="currency-prefix">$</span>
              <input 
                id="price"
                type="number" 
                step="0.01"
                required 
                value={formData.priceOffer}
                onChange={(e) => setFormData({...formData, priceOffer: e.target.value})}
                placeholder="How much you'd like to pay?"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Special Instructions</label>
            <textarea 
              id="message"
              rows="3" 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Any specific requirements or questions?"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">SEND INQUIRY</button>
        </form>
      </div>
    </div>
  );
}

export default BuyModal;
