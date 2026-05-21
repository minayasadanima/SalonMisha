import React from 'react';

function Services() {
  return (
    <div className="py-5" style={{ backgroundColor: '#121212', color: '#fff' }}>
      <div className="container text-center mb-5">
        <h1 className="display-4 fw-bold">OUR SERVICES</h1>
        <p className="text-muted">Premium care for Ladies and Gents</p>
      </div>

      <div className="container">
        <div className="row g-5">
          {/* Gents Column */}
          <div className="col-md-6 border-end border-secondary">
            <h2 className="mb-4">👦 GENTS</h2>
            <div className="d-flex justify-content-between border-bottom py-2">
              <span>Hair Cut & Beard Trim</span>
              <span style={{ color: '#cca43b' }}>Rs. 4,500</span>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <span>Beard Trims</span>
              <span style={{ color: '#cca43b' }}>Rs. 1,500</span>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <span>Kids Cut (Under 8)</span>
              <span style={{ color: '#cca43b' }}>Rs. 2,000</span>
            </div>
            <img src="/images/salon hair cut4.jpg" className="img-fluid mt-4 rounded" alt="Gents Service" />
          </div>

          {/* Ladies Column */}
          <div className="col-md-6">
            <h2 className="mb-4">👩 LADIES</h2>
            <div className="d-flex justify-content-between border-bottom py-2">
              <span>Hydra Facial</span>
              <span style={{ color: '#cca43b' }}>Rs. 23,500</span>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <span>Luxury 24K Gold Facial</span>
              <span style={{ color: '#cca43b' }}>Rs. 25,900</span>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <span>Full Body Massage</span>
              <span style={{ color: '#cca43b' }}>Rs. 16,000</span>
            </div>
            <img src="/images/bridel 2.jpg" className="img-fluid mt-4 rounded" alt="Ladies Service" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;