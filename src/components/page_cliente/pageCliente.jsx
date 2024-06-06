import { Plantilla } from "../../shared/plantilla";
import { TablaUsuario } from "./tablaCliente";
import { ModalCreateCliente } from "./modalCrearCliente";

export const PageCliente = () => {
  return (
    <>
      <Plantilla>
        <div className="content-wrapper">
          <section className="content-header my-4">
            <h1 className="text-center">Clientes</h1>
            <div className="d-flex justify-content-center">
              <ModalCreateCliente />
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
