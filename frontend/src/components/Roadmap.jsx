import React from 'react'
import RoadmapQuarters from './Roadmap comps/roadmapTasks'
import Quarter from './Roadmap comps/Quarter'
import LeftGradient from './Circular Gradients/LeftGradient';
import Vector from './Vector'

export default function Roadmap() {
  return (
    <div id="roadmap" className="container-fluid mx-md-auto text-white mb-5 position-relative">
      <LeftGradient />
      <Vector sectionName='roadmap' />
      <h1 className="fw-semibold heading-font mb-5 fade-in title-padding section-heading-font">Roadmap</h1>
      <div className="container-fluid px-lg-5 pt-3 ">
        <div className='row justify-content-center'>
          {
            RoadmapQuarters.map((quarter, index) => {
              return (
                <Quarter key={index} quarter={quarter} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
