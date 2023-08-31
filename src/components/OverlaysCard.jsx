import React from "react";
import { Button } from "./Button";

export const OverlaysCard = ({ classStyle, url }) => {
  return (
    <div className={`card  ${classStyle}`}>
      <img
        src={`${url}`}
        className="card-img"
        alt="..."
      />
      <div className="card-img-overlay d-flex align-items-end justify-content-center">
        <Button label={"Comprar ahora"} />
      </div>
    </div>
  );
};
