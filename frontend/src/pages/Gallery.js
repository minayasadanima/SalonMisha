function Gallery() {

  return (

    <div className="container mt-5">

      <h1 className="text-center mb-5">
        Salon Gallery
      </h1>

      <div className="row">

        <div className="col-md-4 mb-4">

          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
            className="img-fluid rounded shadow"
            alt="Salon"
          />

        </div>

        <div className="col-md-4 mb-4">

          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035"
            className="img-fluid rounded shadow"
            alt="Salon"
          />

        </div>

        <div className="col-md-4 mb-4">

          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e"
            className="img-fluid rounded shadow"
            alt="Salon"
          />

        </div>

      </div>

    </div>

  );
}

export default Gallery;