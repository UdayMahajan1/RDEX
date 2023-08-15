import React from 'react'
import InfoProducts from './Product Cards/infoProducts'
import ProductCards from './Product Cards/ProductCards'
import FlexProducts from './Product Cards/FlexProducts'
import InfoFlexProducts from './Product Cards/infoFlexProducts'

export default function Products() {
  return (
    <div id="products" className="container-fluid text-light">
    <h1 className="display-3 text-center fw-semibold mb-5 fade-in">Products</h1>
    <div className="row mx-auto justify-content-center gap-5 topMarginForRow">
      {
        InfoProducts.map((card, index)=>{
          return(
            <ProductCards key={index} id={index} img={card.img} title={card.title} desc={card.desc} />
          )
        })
      }
    </div>
      {
        InfoFlexProducts.map((card, index)=>{
          return(
            <FlexProducts key={index} img={card.img} title={card.title} desc={card.desc} />
          )
        })
      }
  </div>
  )
}
