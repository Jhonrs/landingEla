import React from "react";
import { Carrousel } from "./Carrousel";
import { OverlaysCard } from "./OverlaysCard";

export const ContainerGallery = () => {
  return (
    <article className="container my-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-4 d-flex flex-column-reverse">
          <OverlaysCard
            classStyle={"mt-4"}
            url={"./src/assets/Recurso 3.jpg"}
          />
          <OverlaysCard classStyle={""}
          url={"./src/assets/Recurso 4.jpg"} />
        </div>
        <Carrousel
          columNumber={7}
          id={2}
          url1={"./src/assets/SLIDE 01/Recurso 5.jpg"}
          url2={"./src/assets/SLIDE 01/Recurso 6.jpg"}
          url3={"./src/assets/SLIDE 01/Recurso 7.jpg"}
        />
      </div>
    </article>
  );
};
