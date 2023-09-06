import React from 'react'
import {
  RoadmapQuartersLg,
  RoadmapQuartersMd,
  RoadmapQuartersSm,
  RoadmapQuartersXs
} from './Roadmap comps/roadmapTasks'
import Quarter from './Roadmap comps/Quarter'
import LeftGradient from './Circular Gradients/LeftGradient';
import Vector from './Vector'
import roadmapImg from '../img/roadmap.png'
import roadmapImg3 from '../img/roadmap3.png'
import roadmapImg2 from '../img/roadmap2.png'
import roadmapImg1 from '../img/roadmap1.png'
import CarouselComp from './CarouselComp';
// import downArrow from '../img/downArrow.png'
// import rightArrow from '../img/rightArrow.png'

export default function Roadmap() {

  return (
    <div id="roadmap" className="container-fluid mx-md-auto text-white mb-5 position-relative">
      <LeftGradient />
      <Vector sectionName='roadmap' />
      <h1 className="fw-semibold heading-font mb-5 fade-in title-padding section-heading-font">Roadmap</h1>
      <div className="container-fluid px-xl-2">
        <div className="position-relative">
          <img src={roadmapImg} className="img-fluid z-n1 w-100 d-none d-lg-block" alt=".." />
          <img src={roadmapImg3} className="img-fluid z-n1 w-100 d-none d-md-block d-lg-none" alt=".." />
          <img src={roadmapImg2} className="img-fluid z-n1 w-100 d-none d-sm-block d-md-none" alt=".." />
          <img src={roadmapImg1} className="img-fluid z-n1 w-100 d-sm-none d-block" alt=".." />
          <div className="row justify-content-center roadmap-quarters d-none d-lg-block">
            <CarouselComp>
              {
                RoadmapQuartersLg.map((page, index) => {
                  return (
                    <div key={page.page_id} className="row carousel-bottom-padding">
                      {
                        page.pages.map((quarter, index) => {
                          return (
                            <Quarter key={index} quarter={quarter} />
                          )
                        })
                      }
                    </div>
                  )
                })
              }
            </CarouselComp>
          </div>
          <div className="row justify-content-center roadmap-quarters d-none d-md-block d-lg-none">
            <CarouselComp>
              {
                RoadmapQuartersMd.map((page, index) => {
                  return (
                    <div key={page.page_id} className="row carousel-bottom-padding">
                      {
                        page.pages.map((quarter, index) => {
                          return (
                            <Quarter key={index} quarter={quarter} />
                          )
                        })
                      }
                    </div>
                  )
                })
              }
            </CarouselComp>
          </div>
          <div className="row justify-content-center roadmap-quarters d-none d-sm-block d-md-none">
            <CarouselComp>
              {
                RoadmapQuartersSm.map((page, index) => {
                  return (
                    <div key={page.page_id} className="row carousel-bottom-padding">
                      {
                        page.pages.map((quarter, index) => {
                          return (
                            <Quarter key={index} quarter={quarter} />
                          )
                        })
                      }
                    </div>
                  )
                })
              }
            </CarouselComp>
          </div>
          <div className="row justify-content-center roadmap-quarters d-block d-sm-none">
            <CarouselComp>
              {
                RoadmapQuartersXs.map((page, index) => {
                  return (
                    <div className="row justify-content-center carousel-bottom-padding">
                      <Quarter key={index} quarter={page} />
                    </div>
                  )
                })
              }
            </CarouselComp>
          </div>
        </div>
      </div>
    </div>
  )
}
