import React from 'react'
import arrow from '../../img/arrow.png'

export default function Quarter({ quarter }) {
  return (
    <div className="row fade-in-upwards mb-5">
      <div className="col-1 position-relative">
        <img src={arrow} className="position-absolute start-0 top-0 img-adjust" alt=".." />
      </div>
      <div className="col-lg-5 col-11 ps-lg-0 ps-3">
        <h1 className="display-5 fw-semibold">{quarter.quarter}</h1>
        <div className="mt-4">
          {
            quarter.tasks.map((task, index) => {
              return (
                <div key={index}>
                  <p className="fs-5 stats-description mb-0"><img src={task.img} className="me-3" alt="" />{task.task}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
