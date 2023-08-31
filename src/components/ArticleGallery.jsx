import React from "react";
import { Button } from "./Button";

export const ArticleGallery = () => {
  return (
    <article className="container my-5 pt-5 position-relative">
      <div
        className="background background--articleGallery"
        aria-label="hidden"
      ></div>
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="text-center">
            <h2 className="h1">Alegría artesanal</h2>
            <p className="text">
              Complementa tus looks llenos de color y alegría con bolsos,
              accesorios y sandalias que se inspiran en esta emocionante
              historia.
            </p>
          </div>
        </div>
        <div className="col-lg-7">
            <div className="row row-cols-2  align-items-center justify-content-center">
              <div className="col">
                <img
                  className="w-100"
                  src="./src/assets/Recurso 11.jpg"
                  alt=""
                />
              </div>
              <div className="col">
                <img
                  className="my-2 w-100"
                  src="./src/assets/Recurso 12.jpg"
                  alt=""
                />
              </div>

              <div className="col ">
                <img
                  className="my-2 w-100"
                  src="./src/assets/Recurso 13.jpg"
                  alt=""
                />
              </div>
              <div className="col d-flex flex-column align-items-center justify-content-center">
                <p className="text my-2 pt-2">
                  Las texturas, fibras naturales y efecto cuero en tono crudo y
                  tierra son perfectos para exaltar las prendas más coloridas
                </p>
                <Button label={"Comprar ahora"} />
              </div>
            </div>
       
        </div>
      </div>
    </article>
  );
};
