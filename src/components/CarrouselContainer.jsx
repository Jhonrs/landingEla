import React from "react";
import { Carrousel } from "./Carrousel";

export const CarrouselContainer = () => {
  return (
    <article className="container my-5 pt-5 position-relative">
      <div
        className="background background--carrouselContainer"
        aria-label="hidden"
      ></div>
      <div className="row align-items-center justify-content-center">
        <Carrousel
          columNumber={8}
          id={1}
          url1={"./src/assets/SLIDE 02/Recurso 14.jpg"}
          url2={"./src/assets/SLIDE 02/Recurso 15.jpg"}
          url3={"./src/assets/SLIDE 02/Recurso 16.jpg"}
        />
        <div className="col-8 text-center mt-3">
          <h2>Tonos de la tierra</h2>
          <p className="text px-4 pb-4">
            Un estampado tropical con colores tierra es ideal para abrazar la
            nueva temporada.
          </p>
        </div>
      </div>
    </article>
  );
};
