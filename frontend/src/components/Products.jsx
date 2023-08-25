import React from 'react'
import InfoProducts from './Product Cards/infoProducts'
import ProductCards from './Product Cards/ProductCards'
import FlexProducts from './Product Cards/FlexProducts'
import InfoFlexProducts from './Product Cards/infoFlexProducts'
import LeftGradient from './Circular Gradients/LeftGradient';
import RightGradient from './Circular Gradients/RightGradient';

export default function Products() {
  return (
    <div id="products" className="container text-light position-relative">
      <LeftGradient />
      <h1 className="display-3 ms-lg-5 fw-semibold heading-font mb-5 fade-in">Products</h1>
      <div className="row justify-content-evenly gap-5 mx-lg-2 topMarginForRow position-relative">
        {
          InfoProducts.map((card, index) => {
            return (
              <ProductCards key={index} id={index} img={card.img} title={card.title} desc={card.desc} />
            )
          })
        }
        <div className='position-absolute top-50 start-50 translate-middle'>
          <RightGradient />
        </div>
      </div>
      {
        InfoFlexProducts.map((card, index) => {
          return (
            <FlexProducts key={index} img={card.img} title={card.title} desc={card.desc} />
          )
        })
      }
    </div>
  )
}
