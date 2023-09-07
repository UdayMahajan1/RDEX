import React from 'react'
import RightGradient from './Circular Gradients/RightGradient';
import Vector from './Vector'

export default function Tokenomics() {

  return (
    <div className="position-relative top-margin-tokenomics">
      <RightGradient />
      <Vector sectionName='tokenomics' />
      <div id="tokenomics" className="container-fluid ms-lg-5 ms-md-4 text-white mb-5">
        <h1 className="display-3 fw-semibold heading-font fade-in title-padding section-heading-font">Tokenomics</h1>
        {/* <div className="container-fluid row justify-content-center mt-5 fade-in">
      </div> */}
        <div className="mx-auto tokenomics-width">
          <div id="chart" className="mx-xl-auto mt-lg-0 mt-3"></div>
        </div>
      </div>
    </div>
  )
}
