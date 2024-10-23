import imgcre from "../../../assets/img/agregar.jpg";

export const Revista_Registrar = ()=>{
    return(
        <>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={imgcre}
            alt="Imagen de ejemplo"
            className="card-img-top"
            style={{ height: "180px", objectFit: "cover" }}
          />
          
          <div className="card-body">
            <h5 className="card-title">Registro De Revistas</h5>
            <p className="card-text">
            Deposita aquí la nueva revista para poder agregarla a nuestro repositorio
            </p>
            <a href="#" className="btn btn-primary">
              Clik Para Crear Revista
            </a>
          </div>
        </div>
        </>
    )
}