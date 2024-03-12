"use client";

export default function DenunciaDeSiniestro() {
  return (
    <div>
      <div className="flex justify-center bg-white h-screen p-4">
        <div className="flex gap-2 mx-12 mt-36 justify-center items-center flex-col rounded-lg border-4 bg-white">
          <h4 className="flex p-1 text-gray-800 text-3xl">
            Denunciar un Siniestro
          </h4>

          <div className="flex flex-col gap-6 pt-4">
            <div className="flex justify-items-center">
              <div className={`flex gap-4 mx-12 px-32 rounded-lg bg-white`}>
                <div className="flex flex-col">
                  <input
                    placeholder="Nombre"
                    className="w-96 p-1 rounded-lg text-gray-700 border-2 border-gray-500"
                    style={{ textAlign: "center" }}
                  ></input>
                </div>
                <div className="flex flex-col">
                  <input
                    placeholder="Apellido"
                    className="w-96 p-1 rounded-lg text-gray-700 border-2 border-gray-500"
                    style={{ textAlign: "center" }}
                  ></input>
                </div>
                <div className="flex flex-col">
                  <input
                    placeholder="Documento"
                    className="w-96 p-1 rounded-lg text-gray-700 border-2 border-gray-500"
                    style={{ textAlign: "center" }}
                  ></input>
                </div>
              </div>
            </div>
            <div className="flex justify-items-center">
              <div className={`flex gap-12 mx-12 px-32 rounded-lg bg-white`}>
                <div className="flex flex-col">
                  <input
                    placeholder="Email"
                    className="w-64 p-1 rounded-lg text-gray-700 border-2 border-gray-500"
                    style={{ textAlign: "center" }}
                  ></input>
                </div>
                <div className="flex gap-12">
                  <div className="flex justify-items-center">
                    <input
                      type="radio"
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 border-2 border-solid"
                    />
                    <text className="text-[#184c94] mb-1">Tel</text>
                  </div>
                  <div className="flex justify-items-center">
                    <input
                      type="radio"
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 border-2 border-solid"
                    />
                    <text className="text-[#184c94] mb-1">Cel</text>
                  </div>
                </div>
                <div className="flex flex-col">
                  <input
                    placeholder="Telefono"
                    className="w-28 p-1 rounded-lg text-gray-700 border-2 border-gray-500"
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
                  <input
                    placeholder="Telefono"
                    className="w-64 p-1 rounded-lg text-gray-700 border-2 border-gray-500"
                    style={{ textAlign: "center" }}
                  ></input>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 pt-4">
              <div className="flex justify-items-center">
                <div className={`flex gap-12 mx-12 px-32 rounded-lg bg-white`}>
                  <div className="flex flex-col">
                    <input
                      placeholder="Nombre"
                      className="w-64 p-1 rounded-lg text-gray-700 border-2 border-gray-500"
                      style={{ textAlign: "center" }}
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <input
                      placeholder="Apellido"
                      className="w-64 p-1 rounded-lg text-gray-700 border-2 border-gray-500"
                      style={{ textAlign: "center" }}
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <input
                      placeholder="Documento"
                      className="w-64 p-1 rounded-lg text-gray-700 border-2 border-gray-500"
                      style={{ textAlign: "center" }}
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <input
                      placeholder="Documento"
                      className="w-64 p-1 rounded-lg text-gray-700 border-2 border-gray-500"
                      style={{ textAlign: "center" }}
                    ></input>
                  </div>
                </div>
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
