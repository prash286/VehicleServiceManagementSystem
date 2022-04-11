import React from "react";
import "./CSS/Home.css";
// import""from "../assets/images/backImageVSMS.jpg";

const HomePage = () => {
  return (
    <>
      <header>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./images/back1.jpg"
                className="d-block w-100"
                style={{ height: "500px" }}
                alt=".."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./images/back2.jpg"
                className="d-block w-100"
                style={{ height: "500px" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./images/back3.png"
                className="d-block w-100"
                style={{ height: "500px" }}
                alt="back"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>

      <section className="main_heading my-2 pt-2">
        <div className="text-center">
          <h2 className="display-6">
            <strong>Our Services</strong>
          </h2>
          <hr className="w-25 mx-auto" />
        </div>

        <div className="container">
          <div className="row gy-4 my-3">
            <div className="col-md-4 col-10 col-xxl-4 mx-auto">
              <div className="card">
                <img
                  src="./images/detailed.png"
                  alt="detail"
                  className="card-img-top"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Following Services will be provide:"
                />
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        <b>Detailing Service</b>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <h5>
                          <u>Following Service will be provide: </u>
                        </h5>
                        <ul>
                          <li>
                            <b>Complete Paint Protection</b>
                          </li>

                          <li>
                            <b>3 Layers of Coating</b>
                          </li>
                          <li>
                            <b>Ultra Shine Polishing</b>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-10 col-xxl-4 mx-auto">
              <div className="card">
                <img
                  src="./images/Battries.png"
                  alt="detail"
                  className="card-img-top"
                />
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <b>Batteries</b>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <h5>
                          <u>Following Service will be provide: </u>
                        </h5>
                        <ul>
                          <li>
                            <b>Battery replacement</b>
                          </li>
                          <li>
                            <b>Battery charging</b>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-10 col-xxl-4 mx-auto">
              <div className="card">
                <img
                  src="./images/carSpa.png"
                  alt="detail"
                  className="card-img-top"
                />
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <b>Denting & Painting</b>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <h5>
                          <u>Following Service will be provide: </u>
                        </h5>
                        <ul>
                          <li>
                            <b>Grade A Primer</b>
                          </li>
                          <li>
                            <b>4 Layers of Painting</b>
                          </li>
                          <li>
                            <b>Panel Rubbing Polishing</b>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-10 col-xxl-4 mx-auto">
              <div className="card">
                <img
                  src="./images/denting.jfif"
                  alt="detail"
                  className="card-img-top"
                />
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <b>Car Spa & Cleanig</b>
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <h5>
                          <u>Following Service will be provide: </u>
                        </h5>
                        <ul>
                          <li>
                            <b>Car Wash</b>
                          </li>
                          <li>
                            <b>Dashboard Polishing</b>
                          </li>
                          <li>
                            <b>Interior Vaccum Cleaning</b>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-10 col-xxl-4 mx-auto">
              <div className="card">
                <img
                  src="./images/PeriodicService.jfif"
                  alt="detail"
                  className="card-img-top"
                />
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <b>Periodic Service</b>
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <h5>
                          <u>Following Service will be provide: </u>
                        </h5>
                        <ul>
                          <li>
                            <b>Engine Oil Reaplacement</b>
                          </li>
                          <li>
                            <b>Oil Filter Replacement</b>
                          </li>
                          <li>
                            <b>Air Filter Cleaning</b>
                          </li>
                          <li>
                            <b>Car Wash</b>
                          </li>
                          <li>
                            <b>Interior Vaccuming</b>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-10 col-xxl-4 mx-auto">
              <div className="card">
                <img
                  src="./images/wheel.png"
                  alt="detail"
                  className="card-img-top"
                />
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSix">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <b>Tyres & Wheel Care</b>
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <h5>
                          <u>Following Service will be provide: </u>
                        </h5>
                        <ul>
                          <li>
                            <b>Tyre Replacement</b>
                          </li>
                          <li>
                            <b>Tyre Inspection For Thread</b>
                          </li>
                          <li>
                            <b>Alignment & Balancing of Wheel</b>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
