import React from 'react'
import vector from '../img/Vector 36.svg'

export default function Vector({sectionName}) {

  const tokenomicsPadding = sectionName === 'tokenomics' ? 'ps-lg-5 ps-sm-4 ps-3' : '';

  return (
    <div className="d-flex justify-content-center align-items-center position-relative mb-sm-3 mb-4 mb-xl-5">
      <svg width="117" height="40" viewBox="0 0 117 40" fill='none' xmlns="http://www.w3.org/2000/svg" className='style-svg'>
        <path id="Vector 36" d="M23 2H2V38H116.5" stroke="#C304D7" strokeWidth="3" strokeLinejoin="round" />
      </svg>
      <p className={'position-absolute ms-lg-5 ms-sm-4 ms-3 fw-bold my-lg-4 my-3 vector-text ' + tokenomicsPadding } style={{ color: '#C304D7' }}>{sectionName}</p>
    </div>
  )
}
