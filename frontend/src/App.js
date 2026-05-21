import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

// 🏠 1. HOME COMPONENT
function Home() {
  return (
    <div style={{ backgroundColor: "#121212", color: "#ffffff", minHeight: "100vh", fontFamily: "'Poppins', sans-serif" }}>
      
      {/* CSS HOVER STYLES INSERTED DIRECTLY VIA STYLE TAG */}
      <style>{`
        .hover-zoom { transition: transform 0.4s ease; }
        .hover-zoom:hover { transform: scale(1.06); }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ background: "#000000", color: "white", padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #cca43b" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "28px" }}>✂️</span>
          <h2 style={{ color: "#cca43b", margin: 0, fontWeight: "bold", letterSpacing: "1px" }}>Salon Misha</h2>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ color: "white", marginRight: "25px", textDecoration: "none", fontWeight: "500" }}>Home</Link>
          <Link to="/services" style={{ color: "white", marginRight: "25px", textDecoration: "none", fontWeight: "500" }}>Services & Pricing</Link>
          <a href="#about" style={{ color: "white", marginRight: "25px", textDecoration: "none", fontWeight: "500" }}>About Us</a>
          <a href="#contact" style={{ color: "white", marginRight: "25px", textDecoration: "none", fontWeight: "500" }}>Contact Us</a>
          
          <Link to="/booking" style={{ textDecoration: "none" }}>
            <span style={{ border: "2px solid #cca43b", padding: "10px 20px", borderRadius: "5px", color: "#cca43b", fontWeight: "bold", backgroundColor: "rgba(204, 164, 59, 0.1)" }}>
              Appointment 📅
            </span>
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div style={{ textAlign: "center", padding: "100px 20px", background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/gens hair cut.jpg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <h1 style={{ fontSize: "50px", color: "#cca43b", fontWeight: "bold", textTransform: "uppercase", margin: 0 }}>
          Salon Misha
        </h1>
        <p style={{ fontSize: "20px", marginTop: "10px", color: "#fff", fontWeight: "300", letterSpacing: "2px" }}>
          THE ULTIMATE HAIR & BEAUTY DESTINATION
        </p>
      </div>

      {/* BOOKING INFO */}
      <div style={{ padding: "40px 20px", background: "#1a1a1a", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "25px", border: "1px dashed #cca43b", borderRadius: "10px", backgroundColor: "#121212" }}>
          <h2 style={{ color: "#cca43b", marginBottom: "10px" }}>📅 Quick & Easy Online Booking</h2>
          <p style={{ fontSize: "15px", color: "#d1d5db", margin: "0 0 15px 0" }}>
            Schedule your premium haircut, luxury facial, or bridal transformation directly through our online appointment system. Select your preferred date, time, and service instantly.
          </p>
          <Link to="/booking">
            <button style={{ padding: "10px 30px", fontSize: "15px", border: "none", background: "#cca43b", color: "#000000", cursor: "pointer", borderRadius: "25px", fontWeight: "bold" }}>
              Book Your Appointment Now
            </button>
          </Link>
        </div>
      </div>

      {/* 🗂️ SERVICE CATEGORIES ROW */}
      <div style={{ padding: "60px 20px", background: "#121212", textAlign: "center" }}>
        <h2 style={{ color: "#cca43b", marginBottom: "30px", textTransform: "uppercase", letterSpacing: "1.5px" }}>Our Specialized Services</h2>
        
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap", maxWidth: "1200px", margin: "0 auto" }}>
          {["Haircut", "Shaving", "Facials", "Makeup", "Styling", "Scrubs", "Massages"].map((service, idx) => (
            <div key={idx} style={{ background: "#1a1a1a", border: "1px solid #333", padding: "20px 25px", borderRadius: "8px", minWidth: "130px", textAlign: "center", boxShadow: "0 4px 6px rgba(0,0,0,0.3)" }}>
              <div style={{ fontSize: "24px", marginBottom: "8px" }}>
                {service === "Haircut" ? "✂️" : service === "Shaving" ? "🪒" : service === "Facials" ? "👤" : service === "Makeup" ? "💄" : service === "Styling" ? "✨" : service === "Scrubs" ? "🧴" : "💆‍♂️"}
              </div>
              <span style={{ fontWeight: "600", fontSize: "14px", color: "#fff", letterSpacing: "0.5px" }}>{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 📸 PHOTOS DISPLAY AREA (LADIES & GENTS SEPARATE GRID) */}
      <div style={{ padding: "40px 20px", background: "#1a1a1a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          {/* 👩 LADIES PHOTOS SECTION - UPDATED IMAGE NAMES */}
          <div style={{ marginBottom: "60px" }}>
            <h2 style={{ color: "#cca43b", borderBottom: "2px solid #cca43b", paddingBottom: "10px", textTransform: "uppercase" }}>👩 Ladies Showcase</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px", marginTop: "25px" }}>
              {[
                "/images/ledis hair cut.jpg.jpeg",
                "/images/ledis hair cut.jpg (2).jpeg",
                "/images/ledis hair cut.jpg (3).jpeg",
                "/images/ledis hair cut.jpg (4).jpeg",
                "/images/ledis markup.jpg.jpeg",
                "/images/bridal.jpg.jpeg",
                "/images/bridal.jpg (2).jpeg",
                "/images/bridal.jpg (3).jpeg",
                "/images/bridal.jpg (4).jpeg",
                "/images/bridal.jpg (5).jpeg"
              ].map((img, i) => (
                <div key={i} style={{ height: "250px", borderRadius: "8px", overflow: "hidden", border: "1px solid #444" }}>
                  <img className="hover-zoom" src={img} alt="Ladies Work" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>

          {/* 👨 GENTS PHOTOS SECTION - UPDATED IMAGE NAMES */}
          <div>
            <h2 style={{ color: "#cca43b", borderBottom: "2px solid #cca43b", paddingBottom: "10px", textTransform: "uppercase" }}>👨 Gents Showcase</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px", marginTop: "25px" }}>
              {[
                "/images/gens hair cut.jpg.jpg",
                "/images/gens hair cut.jpg1.jpg",
                "/images/gens facial.jpg.png",
                "/images/gents shaving.jpg.png",
                "/images/groom dresses.jpg.jpg",
                "/images/gens hair cut.jpg.jpg" // Groom dresses png image not shown in input screenshot, reused another gents image
              ].map((img, i) => (
                <div key={i} style={{ height: "250px", borderRadius: "8px", overflow: "hidden", border: "1px solid #444" }}>
                  <img className="hover-zoom" src={img} alt="Gents Work" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 📜 ABOUT US SECTION - UPDATED IMAGE NAMES */}
      <div id="about" style={{ padding: "80px 20px", background: "#121212", borderBottom: "1px solid #222" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "50px", flexWrap: "wrap", maxWidth: "1100px", margin: "0 auto" }}>
          <img src="/images/cetificate.jpg.jpeg" alt="Certification" style={{ width: "300px", height: "400px", objectFit: "cover", borderRadius: "10px", border: "2px solid #cca43b" }} />
          <div style={{ textAlign: "left", maxWidth: "550px" }}>
            <h2 style={{ color: "#cca43b", textTransform: "uppercase", margin: "0 0 10px 0" }}>About Us</h2>
            <h3 style={{ color: "#fff", fontWeight: "400", margin: "0 0 20px 0" }}>Proudly Serving Since 2015 - 2026 💖</h3>
            <p style={{ fontSize: "16px", lineHeight: "28px", color: "#d1d5db" }}>
              With over a decade of industry-leading excellence from <b>2015 to 2026</b>, Salon Misha has been a premier hub for modern hair and beauty transformations. Our top professionals hold certified <b>NVQ Level 1, Level 2, Level 3, and Level 4</b> qualifications in Hairdressing and Beauty Culture, ensuring global-standard treatment care for every client.
            </p>
          </div>
        </div>
      </div>

      {/* 💬 WHAT CLIENTS SAY SECTION */}
      <div style={{ padding: "80px 20px", background: "#1a1a1a", textAlign: "center" }}>
        <h2 style={{ color: "#cca43b", marginBottom: "40px", textTransform: "uppercase" }}>What Our Clients Say 💬</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "25px", flexWrap: "wrap", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ width: "300px", padding: "20px", background: "#121212", borderRadius: "8px", border: "1px solid #333", textAlign: "left" }}>
            <p style={{ color: "#d1d5db", fontStyle: "italic", fontSize: "14px" }}>"Absolutely loved my bridal look! Misha did a fantastic job, and the makeup lasted perfectly throughout the entire photoshoot."</p>
            <h4 style={{ color: "#cca43b", margin: "10px 0 0 0" }}>- Sanduni Perera</h4>
          </div>
          <div style={{ width: "300px", padding: "20px", background: "#121212", borderRadius: "8px", border: "1px solid #333", textAlign: "left" }}>
            <p style={{ color: "#d1d5db", fontStyle: "italic", fontSize: "14px" }}>"The best place in town for gents fading and beard styling. Highly professional staff and very hygienic environment."</p>
            <h4 style={{ color: "#cca43b", margin: "10px 0 0 0" }}>- Roshan Silva</h4>
          </div>
          <div style={{ width: "300px", padding: "20px", background: "#121212", borderRadius: "8px", border: "1px solid #333", textAlign: "left" }}>
            <p style={{ color: "#d1d5db", fontStyle: "italic", fontSize: "14px" }}>"Been coming here since 2018. Their hair color transformation treatments are absolute top-notch class. Highly recommended!"</p>
            <h4 style={{ color: "#cca43b", margin: "10px 0 0 0" }}>- Priyanthi Fernando</h4>
          </div>
        </div>
      </div>

      {/* 📞 CONTACT US SECTION */}
      <div id="contact" style={{ padding: "60px 20px", background: "#121212", textAlign: "center", borderTop: "1px solid #333" }}>
        <h2 style={{ color: "#cca43b", textTransform: "uppercase", marginBottom: "30px" }}>Contact Us 📞</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", color: "#d1d5db", fontSize: "16px" }}>
          <p>📍 <b>Address:</b> No 45, Galle Road, Colombo 06, Sri Lanka</p>
          <p>📞 <b>Phone:</b> 011 234 5678 / 077 123 4567</p>
          <p>⏰ <b>Work Time:</b> Everyday 9.00 AM - 9.00 PM</p>
        </div>
      </div>

      <footer style={{ background: "#000000", color: "#6b7280", textAlign: "center", padding: "20px", borderTop: "1px solid #cca43b" }}>
        <p style={{ margin: 0, fontSize: "14px" }}>© 2026 Salon Misha. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

// 💱 2. SERVICES & FULL PRICING COMPONENT
function Services() {
  return (
    <div style={{ minHeight: "100vh", background: "#121212", color: "#fff", padding: "40px 20px", fontFamily: "'Poppins', sans-serif" }}>
      
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ color: "#cca43b", textTransform: "uppercase", fontWeight: "bold" }}>✂️ Comprehensive Services Menu</h1>
        <p style={{ color: "#a1a1aa" }}>Premium head-to-toe salon treatments for Ladies and Gents.</p>
        <Link to="/"><button style={{ marginTop: "15px", padding: "8px 20px", background: "transparent", color: "#cca43b", border: "1px solid #cca43b", borderRadius: "5px", cursor: "pointer" }}>Go Back Home</button></Link>
      </div>

      <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>
        
        {/* 👩 LADIES FULL SERVICES PRICE LIST */}
        <div style={{ background: "#1a1a1a", padding: "30px", borderRadius: "12px", border: "1px solid #333" }}>
          <h2 style={{ color: "#cca43b", borderBottom: "2px solid #444", paddingBottom: "10px", marginTop: 0 }}>👩 Ladies Hair, Makeup & Beauty Treatments</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr style={{ borderBottom: "1px solid #222" }}><td style={{ padding: "12px 0" }}>Normal Trim & Haircut</td><td style={{ textAlign: "right", color: "#cca43b", fontWeight: "bold" }}>LKR 2,500/=</td></tr>
              <tr style={{ borderBottom: "1px solid #222" }}><td style={{ padding: "12px 0" }}>Layer / Step / Bob Style Haircut</td><td style={{ textAlign: "right", color: "#cca43b", fontWeight: "bold" }}>LKR 3,500/=</td></tr>
              <tr style={{ borderBottom: "1px solid #222" }}><td style={{ padding: "12px 0" }}>Hair Straightening / Rebonding (Short to Long)</td><td style={{ textAlign: "right", color: "#cca43b", fontWeight: "bold" }}>LKR 12,000/= - 25,000/=</td></tr>
              <tr style={{ borderBottom: "1px solid #222" }}><td style={{ padding: "12px 0" }}>Keratin Treatment / Hair Botox</td><td style={{ textAlign: "right", color: "#cca43b", fontWeight: "bold" }}>LKR 15,000/= Up</td></tr>
              <tr style={{ borderBottom: "1px solid #222" }}><td style={{ padding: "12px 0" }}>Full Hair Coloring & Highlights (Ombre/Balayage)</td><td style={{ textAlign: "right", color: "#cca43b", fontWeight: "bold" }}>LKR 8,000/= Up</td></tr>
              <tr style={{ borderBottom: "1px solid #222" }}><td style={{ padding: "12px 0" }}>Herbal Facial / Basic Clean-up</td><td style={{ textAlign: "right", color: "#cca43b", fontWeight: "bold" }}>LKR 3,500/=</td></tr>
              <tr style={{ borderBottom: "1px solid #222" }}><td style={{ padding: "12px 0" }}>Gold / Diamond Luxury Facial & Face Scrub</td><td style={{ textAlign: "right", color: "#cca43b", fontWeight: "bold" }}>LKR 6,500/=</td></tr>
              <tr style={{ borderBottom: "1px solid #222" }}><td style={{ padding: "12px 0" }}>Full Body Scrub & Whitening Therapy</td><td style={{ textAlign: "right", color: "#cca43b", fontWeight: "bold" }}>LKR 9,000/=</td></tr>
              <tr style={{ borderBottom: "1px solid #222" }}><td style={{ padding: "12px 0" }}>Relaxing Full Body Massage & Head Massage</td><td style={{ textAlign: "right", color: "#cca43b", fontWeight: "bold" }}>LKR 7,500/=</td></tr>
              <tr style={{ borderBottom: "1px solid #222" }}><td style={{ padding: "12px 0" }}>Eyebrow Threading / Full Face Waxing</td><td style={{ textAlign: "right", color: "#cca43b", fontWeight: "bold" }}>LKR 500/= - LKR 2,000/=</td></tr>
              <tr style={{ borderBottom: "1px solid #222" }}><td style={{ padding: "12px 0" }}>Normal Day Makeup & Hair Styling</td><td style={{ textAlign: "right", color: "#cca43b", fontWeight: "bold" }}>LKR 10,000/=</td></tr>
              <tr><td style={{ padding: "12px 0" }}>Exclusive Premium Bridal Dressing Packages (Kandyan/Western)</td><td style={{ textAlign: "right", color: "#cca43b", fontWeight: "bold" }}>LKR 75,000/= Up</td></tr>
            </tbody>
          </table>
        </div>

        {/* 👨 GENTS FULL SERVICES PRICE LIST */}
        <div style={{ background: "#1a1a1a", padding: "30px", borderRadius: "12px", border: "1px solid #333" }}>
          <h2 style={{ color: "#cca43b", borderBottom: "2px solid #444", paddingBottom: "10px", marginTop: 0 }}>👨 Gents Grooming, Hair & Therapy Menus</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr style={{ borderBottom: "1px solid #222" }}><td style={{ padding: "12px 0" }}>Classic Haircut & Blow Dry Style</td><td style={{ textAlign: "right", color: "#cca43b", fontWeight: "bold" }}>LKR 1,200/=</td></tr>
              <tr style={{ borderBottom: "1px solid #222" }}><td style={{ padding: "12px 0" }}>Trending Skin Fade / Taper Fade / Undercut</td><td style={{ textAlign: "right", color: "#cca43b", fontWeight: "bold" }}>LKR 1,800/=</td></tr>
              <tr style={{ borderBottom: "1px solid #222" }}><td style={{ padding: "12px 0" }}>Beard Shaving & Hot Towel Razor Line Shaping</td><td style={{ textAlign: "right", color: "#cca43b", fontWeight: "bold" }}>LKR 800/=</td></tr>
              <tr style={{ borderBottom: "1px solid #222" }}><td style={{ padding: "12px 0" }}>Gents Hair Relaxing / Perming</td><td style={{ textAlign: "right", color: "#cca43b", fontWeight: "bold" }}>LKR 5,000/= Up</td></tr>
              <tr style={{ borderBottom: "1px solid #222" }}><td style={{ padding: "12px 0" }}>Grey Hair Coloring / Fashion Highlights</td><td style={{ textAlign: "right", color: "#cca43b", fontWeight: "bold" }}>LKR 2,500/= Up</td></tr>
              <tr style={{ borderBottom: "1px solid #222" }}><td style={{ padding: "12px 0" }}>Deep Cleansing Facial Treatment</td><td style={{ textAlign: "right", color: "#cca43b", fontWeight: "bold" }}>LKR 3,500/=</td></tr>
              <tr style={{ borderBottom: "1px solid #222" }}><td style={{ padding: "12px 0" }}>De-tan Charcoal Scrub & Blackhead Removal</td><td style={{ textAlign: "right", color: "#cca43b", fontWeight: "bold" }}>LKR 3,000/=</td></tr>
              <tr style={{ borderBottom: "1px solid #222" }}><td style={{ padding: "12px 0" }}>Stress-Relief Head & Shoulder Massage</td><td style={{ textAlign: "right", color: "#cca43b", fontWeight: "bold" }}>LKR 2,500/=</td></tr>
              <tr><td style={{ padding: "12px 0" }}>Complete Luxury Groom Transformation Package</td><td style={{ textAlign: "right", color: "#cca43b", fontWeight: "bold" }}>LKR 30,000/= Up</td></tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

// 📅 3. BOOKING COMPONENT
function Booking() {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", date: "", time: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Appointment Booked Successfully!");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#121212", color: "#fff", padding: "60px 20px", fontFamily: "'Poppins', sans-serif" }}>
      <h1 style={{ marginBottom: "40px", color: "#cca43b", textTransform: "uppercase", fontWeight: "bold", textAlign: "center" }}>📅 Book Your Appointment</h1>
      
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto", background: "#1a1a1a", padding: "40px", borderRadius: "15px", border: "1px solid #333" }}>
        <label style={{ display: "block", marginBottom: "8px", color: "#cca43b" }}>Full Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: "100%", padding: "12px", marginBottom: "20px", borderRadius: "8px", border: "1px solid #444", background: "#222", color: "#fff" }} />
        
        <label style={{ display: "block", marginBottom: "8px", color: "#cca43b" }}>Phone Number</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={{ width: "100%", padding: "12px", marginBottom: "20px", borderRadius: "8px", border: "1px solid #444", background: "#222", color: "#fff" }} />
        
        <label style={{ display: "block", marginBottom: "8px", color: "#cca43b" }}>Select Service</label>
        <select name="service" value={formData.service} onChange={handleChange} required style={{ width: "100%", padding: "12px", marginBottom: "20px", borderRadius: "8px", border: "1px solid #444", background: "#222", color: "#fff" }}>
          <option value="">-- Choose a Service --</option>
          <option>Haircut & Styling</option>
          <option>Shaving & Beard Grooming</option>
          <option>Facial & Cleanup Treatments</option>
          <option>Special Styling & Scrub</option>
        </select>
        
        <input type="date" name="date" value={formData.date} onChange={handleChange} required style={{ width: "100%", padding: "12px", marginBottom: "20px", borderRadius: "8px", border: "1px solid #444", background: "#222", color: "#fff" }} />
        <input type="time" name="time" value={formData.time} onChange={handleChange} required style={{ width: "100%", padding: "12px", marginBottom: "25px", borderRadius: "8px", border: "1px solid #444", background: "#222", color: "#fff" }} />
        <button type="submit" style={{ width: "100%", padding: "15px", background: "#cca43b", color: "#000", border: "none", borderRadius: "8px", fontSize: "18px", fontWeight: "bold", cursor: "pointer" }}>Confirm Booking</button>
      </form>
      <div style={{ textAlign: "center", marginTop: "30px" }}><Link to="/"><button style={{ padding: "10px 25px", borderRadius: "20px", border: "1px solid #555", background: "transparent", color: "#9ca3af", cursor: "pointer" }}>← Back To Home</button></Link></div>
    </div>
  );
}

// 🔀 4. ROUTING DRIVER
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
}

export default App;