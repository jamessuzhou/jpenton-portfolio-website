const Hero = () => {
  return (
    <section>
      <div className="hero d-flex justify-content-center align-items-center">
        <div className="hello-card square-box display-4">Hello!</div>

        <div className="whiteVeil"></div>

        <div className="card mb-3 greeting-card">
          <div className="row2 g-0">
            <div className="col-md-8">
              <h5 className="card-title">James</h5>
              <p className="card-text">
                Hello hello hello hello
              </p>
              <p className="text text-muted">Last updated 3 mins</p>
            </div>
            <div className="col-md-4">
              <img
                src="./images/robot.jpeg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
