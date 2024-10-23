import carrusel from "../../../assets/img/carrusel.jpg";
import poo from "../../../assets/img/pagina2.jpg";
import dis from "../../../assets/img/Dis.png";

export const Inicio = () => {
  return (
    <>
      <br />
      <br />
      <div className="bd-example m-0 border-0">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                width="800"
                height="400"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: First slide"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777"></rect>
                <text x="50%" y="50%" fill="#555" dy=".3em">
                  Página 1
                </text>
              </svg>
              {/* Imagen que quieres agregar */}
              <img
                src={carrusel}
                alt="Imagen de POO"
                className="position-absolute top-50 start-50 translate-middle"
                style={{ width: "686px", height: "386px" }}
              />
            </div>
            <div className="carousel-item">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                width="800"
                height="400"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Second slide"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#666"></rect>
                <text x="50%" y="50%" fill="#444" dy=".3em">
                  Página 2
                </text>
              </svg>
              <img
                src={poo}
                alt="Imagen de POO"
                className="position-absolute top-50 start-50 translate-middle"
                style={{ width: "686px", height: "386px" }}
              />
            </div>
            <div className="carousel-item">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                width="800"
                height="400"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Third slide"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#555"></rect>
                <text x="50%" y="50%" fill="#333" dy=".3em">
                  Página 3
                </text>
              </svg>
              <img
                src={dis}
                alt="Imagen de POO"
                className="position-absolute top-50 start-50 translate-middle"
                style={{ width: "686px", height: "386px" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
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
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
