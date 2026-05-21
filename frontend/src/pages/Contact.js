function Contact() {
  return (

    <div className="container mt-5">

      <h1>Contact Us</h1>

      <form className="mt-4">

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Your Name"
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
        />

        <textarea
          className="form-control mb-3"
          rows="5"
          placeholder="Message"
        ></textarea>

        <button className="btn btn-dark">
          Send Message
        </button>

      </form>

    </div>

  );
}

export default Contact;