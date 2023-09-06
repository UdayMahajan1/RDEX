import React from 'react'
// import arrow from '../../img/arrow.png'
import CarouselComp from '../CarouselComp';
import downArrow from '../../img/downArrow.png'
import rightArrow from '../../img/rightArrow.png'

export default function Quarter({ quarter }) {

  let style4 = {
    borderLeft: '1px solid #3ACCB4',
  }

  return (
    // <div className="row fade-in-upwards mb-5">
    //   <div className="col-1 position-relative">
    //     <img src={arrow} className="position-absolute start-0 top-0 img-adjust" alt=".." />
    //   </div>
    //   <div className="col-lg-5 col-11 ps-lg-0 ps-3">
    //     <h1 className="card-Title fw-semibold heading-font">{quarter.quarter}</h1>
    //     <div className="mt-4">
    // {
    //   quarter.tasks.map((task, index) => {
    //     return (
    //       <div key={index}>
    //         <p className="stats-description mb-0"><img src={task.img} className="me-3" alt="" />{task.task}</p>
    //       </div>
    //     )
    //   })
    // }
    //     </div>
    //   </div>
    // </div>
    <div className="col-lg-3 col-md-4 col-sm-6 col-10 fade-in-upwards">
      <p className='style1'>{quarter.quarter}</p>
      <div className="row px-xxl-5 px-xl-0 px-md-2 px-sm-3 px-2">
        <div className="col-2 px-xl-3 px-md-3 px-sm-3 px-3">
          <img src={downArrow} className='img-fluid' alt=".." />
        </div>
        <div className="col-md-10 col-10 text-start">
          <p className='style2'>Start Project Strategy</p>
          {
            quarter.tasks.map((task, index) => {
              return (
                <div key={index} style={style4} className="row text-start">
                  <div className="col-2 padding-roadmap-desc">
                    <img src={rightArrow} className='' alt=".." />
                  </div>
                  <div className="col-10">
                    <p className='style3'>{task.task}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
