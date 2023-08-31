import React from "react";
import { Button } from "./Button";

export const GridElements = () => {
  return (
    <article className="container my-5 pt-5 position-relative">
      <div className="background background--gridElement" aria-label="hidden"></div>
      <div className="row ">
        <div className="col-lg-6 ">
          <img className="w-100" src="/assets/Recurso 20.jpg" alt="" />
          <div className="d-flex ">
            <h3 className="vertical-text">Look camel</h3>
            <div>
              <img className="w-100 mt-4" src="/assets/Recurso 24.jpg" alt="" />
              <img className="w-100 mt-4" src="/assets/Recurso 23.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-12">
              <img className="w-100" src="/assets/Recurso 22.jpg" alt="" />
            </div>
            <div className="col mt-5">
              <div className="px-4">
                <p className="text">
                  Crea tus total looks camel para verte sofisticada y atemporal.
                  Eleva tu look con accesorios artesanales.
                </p>
                <Button label={"Comprar Ahora"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

