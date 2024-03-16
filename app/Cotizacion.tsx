"use client";

import InfoAutoService from "@/api/InfoAutoService";
import TarjetaSeguro from "./components/TarjetaSeguro";

// InfoAutoService.login()
//     .then(() => {
//             InfoAutoService.refresh_token()
//             .then((bearer) => {
//                     InfoAutoService.getBrands(bearer, "vol").then( (brandRes) => {
//                             console.log(brandRes);
//                             });
//                     });
//             });

// export const testtest = async () => {
//     const headers = new Headers();
//     headers.set('Authorization', 'Basic ' + btoa("matacarlos@nafra.com.ar:ZF7WOhUFsJCKOBKK"));
// 
//     const response = await fetch(`api/cars/auth/login`,
//                                  {
//         headers: headers,
//         method: "POST",
//     });
// 
//     console.log(response.text());
//     return {
//         props: {a : response.text()}
//     }
// }
//handler("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxMDUzNjQzNiwianRpIjoiMWQxYTA1MjctMjY0NC00MjY4LTljYjYtZTE3ZGMwNmNmZjk0IiwidHlwZSI6InJlZnJlc2giLCJpZGVudGl0eSI6Mzg5LCJuYmYiOjE3MTA1MzY0MzYsImNzcmYiOiI0OWY0YWJjZS1iNDBkLTQwYTgtYmU2Ni1kNWY0YjdjNGUwZjYiLCJleHAiOjE3MTA2MjI4MzYsInJvbGVzIjpbeyJpZCI6MTksIm5hbWUiOiJEZXNhcnJvbGxvIn0seyJpZCI6MTAsIm5hbWUiOiJFeHRyYXMifSx7ImlkIjo5LCJuYW1lIjoiTW9kZWxvcyJ9XX0.fgi630gZgISUkMu6OjLj2NA_k9HCqaR6xYdRvE8Csqg").then((data) => {console.clear(); console.log(data);});

//InfoAutoService.login()
//    .then(() => {
//            InfoAutoService.refresh_token().then(() => {
//                    InfoAutoService.getBrands().then((brands) => {
//                            console.log(brands);
//                            new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
//                                    InfoAutoService.getGroups(46, 2023,2023).then((groups) => {
//                                            console.clear();
//                                            console.log(groups);
//                                            new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
//                                                    InfoAutoService.getModels(46, 39, 2023,2023).then((models) => {
//                                                            console.clear();
//                                                            console.log(models);
//                                                            });
//                                                    });
//                                            });
//                                    });
//                            });
//                    });
//            });

export default function Cotizacion() {
  return (
    <div>
      <div className="flex justify-center bg-white h-screen p-4">
        <div
          className={`flex gap-2 mx-12 mt-36 p-4 justify-center flex-col rounded-lg border-2     bg-white`}
        >
          <h4 className="flex p-1 text-gray-800 text-3xl text-center">
            Coberturas para tu vehículo
          </h4>
          <h4 className="flex p-1 text-gray-800 text-2xl text-center">
            Responsabilidad civil
          </h4>
          <div className="flex flex-row gap-3 justify-center">
            <TarjetaSeguro></TarjetaSeguro>
            <TarjetaSeguro></TarjetaSeguro>
            <TarjetaSeguro></TarjetaSeguro>
            <TarjetaSeguro></TarjetaSeguro>
            <TarjetaSeguro></TarjetaSeguro>
          </div>
          <h4 className="flex p-1 text-gray-800 text-2xl text-center">
            Terceros completo
          </h4>
          <div className="flex flex-row gap-3 justify-center">
            <TarjetaSeguro></TarjetaSeguro>
            <TarjetaSeguro></TarjetaSeguro>
            <TarjetaSeguro></TarjetaSeguro>
            <TarjetaSeguro></TarjetaSeguro>
            <TarjetaSeguro></TarjetaSeguro>
          </div>
        </div>
      </div>
    </div>
  );
}
