import React from 'react'
import RightGradient from './Circular Gradients/RightGradient';

export default function Tokenomics() {

  return (
    <div className="position-relative">
      <RightGradient />
      <div id="tokenomics" className="container text-white top-margin-tokenomics mb-5">
        <h1 className="display-3 fw-semibold heading-font fade-in title-padding">Tokenomics</h1>
        {/* <div className="container-fluid row justify-content-center mt-5 fade-in">
      </div> */}
        <div id="chart" className="mx-md-auto mt-lg-5 mt-3 tokenomics-width"></div>
      </div>
    </div>
  )
}
