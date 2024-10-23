import imglis from "../../../assets/img/ListarREV.webp";


export const Revista_Listar = ()=>{
    return(
        <>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={imglis}
            alt="Imagen de ejemplo"
            className="card-img-top"
            style={{ height: "180px", objectFit: "cover" }}
          />
          
          <div className="card-body">
            <h5 className="card-title">Listado de Revistas</h5>
            <p className="card-text">
            Aquí puedes hacer una lista de las revistas de nuestra página.
            </p>
            <a href="#" className="btn btn-primary">
              Clik para enlistar Revistas
            </a>
          </div>
        </div>
        </>
    )
}