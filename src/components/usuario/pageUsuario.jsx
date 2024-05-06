import { Plantilla } from "../../shared/plantilla";
import { TablaUsuario } from "./tablaUsuario";

export const PageUsuario = () => {
  return (
    <>
      <Plantilla>
        <div className="content-wrapper">
          <section className="content-header my-4">
            <h1 className="text-center">Clientes</h1>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary">Añadir</button>
            </div>
          </section>

          <section
            className="content"
            style={{ width: "90%", margin: "0 auto" }}
          >
            <div className="card">
              <div className="card-header"></div>

              <div className="card-body">
                <TablaUsuario />
              </div>
            </div>
          </section>
        </div>
      </Plantilla>
    </>
  );
};
