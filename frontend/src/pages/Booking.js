import React, { useState } from 'react';

function Booking() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: 'Haircut'
  });

  const [message, setMessage] = useState('');

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/bookings/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('✨ Booking Successful! Thank you for choosing Salon Misha.');
        setFormData({ name: '', email: '', phone: '', date: '', time: '', service: 'Haircut' });
      } else {
        setMessage('❌ Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('❌ Cannot connect to the server.');
    }
  };

  return (
    <div style={{ backgroundColor: '#121212', color: '#ffffff', minHeight: '100vh', py: 5 }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card bg-dark border-secondary p-4 shadow-lg">
              <h2 className="text-center mb-4 text-uppercase fw-bold" style={{ color: '#cca43b' }}>
                Book Your Appointment
              </h2>
              <p className="text-center text-muted small mb-4">Select your preferred service and time slot</p>
              
              {message && <div className="alert alert-info text-center">{message}</div>}

              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-3">
                  <label className="form-label text-muted">Full Name</label>
                  <input type="text" className="form-control bg-secondary text-white border-0" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label text-muted">Email Address</label>
                  <input type="email" className="form-control bg-secondary text-white border-0" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label className="form-label text-muted">Phone Number</label>
                  <input type="text" className="form-control bg-secondary text-white border-0" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>

                {/* Service Selection */}
                <div className="mb-3">
                  <label className="form-label text-muted">Select Service</label>
                  <select className="form-select bg-secondary text-white border-0" name="service" value={formData.service} onChange={handleChange}>
                    <option value="Haircut">Haircut & Styling (👦/👩)</option>
                    <option value="Beard Trim">Beard Trim & Shave (👦)</option>
                    <option value="Facial">Luxury Facial Treatment (👩/👦)</option>
                    <option value="Massage">Full Body Massage (👩/👦)</option>
                    <option value="Bridal">Bridal Dressing (👩)</option>
                  </select>
                </div>

                {/* Date & Time */}
                <div className="row">
                  <div className="col-6 mb-3">
                    <label className="form-label text-muted">Date</label>
                    <input type="date" className="form-control bg-secondary text-white border-0" name="date" value={formData.date} onChange={handleChange} required />
                  </div>
                  <div className="col-6 mb-3">
                    <label className="form-label text-muted">Time Slot</label>
                    <input type="time" className="form-control bg-secondary text-white border-0" name="time" value={formData.time} onChange={handleChange} required />
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn w-100 fw-bold mt-3 text-uppercase" style={{ backgroundColor: '#cca43b', color: '#000000' }}>
                  Confirm Booking
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;