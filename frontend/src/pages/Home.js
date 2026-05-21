import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ backgroundColor: '#121212', color: '#ffffff', minHeight: '100vh', paddingBottom: '50px' }}>
      
      {/* Top Hero Section */}
      <div className="container-fluid p-0 position-relative" style={{ height: '75vh', overflow: 'hidden', backgroundColor: '#000000' }}>
        <img 
          src="/images/salon hair cut1.jpg" 
          alt="Salon Misha Main Banner" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.4' }} 
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center w-100 px-3">
          <h1 className="display-1 fw-bold text-uppercase" style={{ letterSpacing: '5px', color: '#cca43b' }}>
            Salon Misha
          </h1>
          <p className="lead fs-3 mt-2 text-white text-uppercase" style={{ letterSpacing: '2px' }}>
            Colombo's Premium Ladies & Gents Barbershop
          </p>
          <p style={{ color: '#9ca3af' }}>Service beyond expectation. From haircuts to luxury treatments.</p>
          <Link to="/booking" className="btn btn-lg px-5 py-3 mt-4 text-uppercase fw-bold" style={{ backgroundColor: '#cca43b', color: '#000000', border: 'none' }}>
            Book Your Session
          </Link>
        </div>
      </div>

      {/* Intro Showcase Section with 3 Photos */}
      <div className="container py-5 mt-4">
        <h2 className="text-center mb-5 text-uppercase fw-bold" style={{ color: '#cca43b', letterSpacing: '2px' }}>
          Our Specialized Services
        </h2>
        
        <div className="row g-4 text-center">
          
          {/* Column 1 - Bridal */}
          <div className="col-md-4">
            <div style={{ backgroundColor: '#1a1a1a', padding: '15px', borderRadius: '10px', border: '1px solid #333' }}>
              <img src="/images/bridel.jpg" className="img-fluid rounded shadow" alt="Bridal Dressing" style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
              <h4 className="mt-3 fw-bold" style={{ color: '#cca43b' }}>Bridal Dressing</h4>
              <p style={{ color: '#9ca3af', fontSize: '14px' }}>Exclusive bridal styles for your special day.</p>
            </div>
          </div>

          {/* Column 2 - Gents */}
          <div className="col-md-4">
            <div style={{ backgroundColor: '#1a1a1a', padding: '15px', borderRadius: '10px', border: '1px solid #333' }}>
              <img src="/images/salon hair cut3.jpg" className="img-fluid rounded shadow" alt="Gents Grooming" style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
              <h4 className="mt-3 fw-bold" style={{ color: '#cca43b' }}>Gents Grooming</h4>
              <p style={{ color: '#9ca3af', fontSize: '14px' }}>Modern fades, classic cuts, and beard trims.</p>
            </div>
          </div>

          {/* Column 3 - Makeup */}
          <div className="col-md-4">
            <div style={{ backgroundColor: '#1a1a1a', padding: '15px', borderRadius: '10px', border: '1px solid #333' }}>
              <img src="/images/markup" className="img-fluid rounded shadow" alt="Professional Makeup" style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
              <h4 className="mt-3 fw-bold" style={{ color: '#cca43b' }}>Professional Makeup</h4>
              <p style={{ color: '#9ca3af', fontSize: '14px' }}>Flawless makeup by certified professionals.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;