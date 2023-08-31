import React from 'react'
import RightGradient from './Circular Gradients/RightGradient';
import Vector from './Vector'

export default function Tokenomics() {

  return (
    <div className="position-relative">
      <RightGradient />
      <Vector sectionName='tokenomics' />
      <div id="tokenomics" className="container-fluid ms-lg-5 ms-md-4 text-white top-margin-tokenomics mb-5">
        <h1 className="display-3 fw-semibold heading-font fade-in title-padding section-heading-font">Tokenomics</h1>
        {/* <div className="container-fluid row justify-content-center mt-5 fade-in">
      </div> */}
        <div className="mx-auto tokenomics-width">
          <div id="chart" className="mx-md-auto mt-lg-5 mt-3"></div>
        </div>
      </div>
    </div>
  )
}
