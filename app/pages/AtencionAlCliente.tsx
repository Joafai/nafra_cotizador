"use client";

export default function AtencionAlCliente() {
  return (
    <div>
      <div className="flex justify-center bg-white h-screen p-4">
        <div className="flex gap-2 mx-12 mt-36 justify-center items-center flex-col rounded-lg border-4 bg-white">
          <h4 className="flex p-1 text-gray-800 text-3xl">
            Servicio de atencion al cliente
          </h4>
          <text className="flex p-1 text-gray-800 text-xs">
            Ingresá los datos en el formulario, al finalizar el sistema te
            indicará tu número de solicitud y así podrás realizar el seguimiento
            de tu consulta.
          </text>
          <div className="flex flex-col gap-6 pt-4">
            <div className="flex justify-items-center">
              <div className={`flex gap-12 mx-12 px-32 rounded-lg bg-white`}>
                <div className="flex flex-col">
                  <input
                    placeholder="Nombre y apellido"
                    className="w-64 p-1 rounded-lg text-gray-700 border-2 border-gray-500"
                    style={{ textAlign: "center" }}
                  ></input>
                </div>
                <div className="flex flex-col">
                  <input
                    placeholder="Email"
                    className="w-64 p-1 rounded-lg text-gray-700 border-2 border-gray-500"
                    style={{ textAlign: "center" }}
                  ></input>
                </div>
                <div className="flex flex-col">
                  <input
                    placeholder="Telefono"
                    className="w-64 p-1 rounded-lg text-gray-700 border-2 border-gray-500"
                    style={{ textAlign: "center" }}
                  ></input>
                </div>
              </div>
            </div>
            <div className="flex justify-items-center">
              <div className={`flex gap-12 mx-12 px-32 rounded-lg bg-white`}>
                <div className="flex flex-col">
                  <select
                    className="w-64 p-1 rounded-lg text-gray-700 border-2 border-gray-500"
                    style={{ textAlign: "center" }}
                  >
                    <option disabled selected value="Marca">
                      Comercio
                    </option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    className="w-64 p-1 rounded-lg text-gray-700 border-2 border-gray-500"
                    style={{ textAlign: "center" }}
                  >
                    <option disabled selected value="Asunto">
                      Asunto
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-items-center">
              <div className={`flex gap-12 mx-12 px-32 rounded-lg bg-white`}>
                <div className="flex flex-col">
                  <select
                    className="w-64 p-1 rounded-lg text-gray-700 border-2 border-gray-500"
                    style={{ textAlign: "center" }}
                  >
                    <option disabled selected value="Aseguradora">
                      Aseguradora
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-items-center">
              <div className="flex w-full mx-12 px-32 rounded-lg bg-white">
                <textarea
                  placeholder="Mensaje"
                  className="w-full p-1 rounded-lg text-gray-700 border-2 border-gray-500"
                ></textarea>
              </div>
            </div>
            <div
              className={`flex gap-2 my-6 justify-center rounded-lg bg-white`}
            >
              <button className="flex float-end self-end bg-green-400 hover:bg-green-500 my-4 mr-12 p-1 px-20 text-gray-700 rounded-lg">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
