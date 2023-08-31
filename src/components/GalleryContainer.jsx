import React from 'react'

export const GalleryContainer = () => {
  return (
    <article className="container my-5 pt-5"> 
        <div className="row align-items-stretch justify-content-center">
           <div className="col-3">
            <img className="img-fluid h-100 object-cover" src="/assets/Recurso 8.jpg" alt="" />
           </div>
           <div className="col-6">
            
            <img className="img-fluid object-cover" src="/assets/Recurso 9.jpg" alt="" />
           </div>
           <div className="col-3">
            <img className="img-fluid h-100 object-cover" src="/assets/Recurso 10.jpg" alt="" />
           </div>
        </div>
    </article>
  )
}
