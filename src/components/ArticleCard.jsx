import React from "react";
import { Button } from "./Button";

export const ArticleCard = () => {
  return (
    <article className="container my-5 pt-5">
      
      
        <div className="row g-0 background background--articleCard">
          <div className="col-md-5">
            <img className="w-100" src="./src/assets/Recurso 2.jpg" alt="" />
          </div>
          <div className="col-md-7 my-auto ">
            <div className="p-5">
              <p className=" h2">
                En esta nueva temporada, las <strong>ELA Girls</strong> exploran la Galería para
                llenarse de energía e inspiración con blusas y vestidos de
                estampados vibrantes y tropicales, junto a las siluetas
                románticas y coquetas que las hacen tan únicas.
              </p>
              <Button label={"Ver más"} />
            </div>
          </div>
        </div>
     
    </article>
  );
};
