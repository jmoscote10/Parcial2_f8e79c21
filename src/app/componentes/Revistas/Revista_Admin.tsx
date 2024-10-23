import imgadm from "../../../assets/img/adminIMG.webp";

export const Revista_Admin = () => {
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={imgadm}
            alt="Imagen de ejemplo"
            className="card-img-top"
            style={{ height: "180px", objectFit: "cover" }}
          />
          
          <div className="card-body">
            <h5 className="card-title">ADMIN</h5>
            <p className="card-text">
            Aquí puedes realizar todo tipo de revisiones,
            correcciones, ver y saber sobre nuestras revistas.
            </p>
            <a href="#" className="btn btn-primary">
              Clik Para Administrar Revistas
            </a>
          </div>
        </div>
      </>
    );
  };
  