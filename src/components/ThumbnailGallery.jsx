import React from "react";
import { Button } from "./Button";

export const ThumbnailGallery = () => {
  return (
    <article className="container my-5 pt-5">
      <div className="row">
        <div className="col-12">
          <div className="row ">
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img
                className="my-2 w-100"
                src="/assets/Recurso 17.jpg"
                alt=""
              />
              <Button label={"Comprar ahora"} />
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img
                className="my-2 w-100"
                src="/assets/Recurso 18.jpg"
                alt=""
              />
              <Button label={"Comprar ahora"} />
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img
                className="my-2 w-100"
                src="/assets/Recurso 19.jpg"
                alt=""
              />
              <Button label={"Comprar ahora"} />
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="text">
            Los complementos de fibras naturales con acentos chocolate son
            perfectos para armonizar los colores del estampado.
          </p>
        </div>
      </div>
    </article>
  );
};
