import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import leftArrow from '../img/left.png'
import rightArrow from '../img/right.png'

export default function CarouselComp({ children }) {

  const arrowStyles = {
    position: 'absolute',
    zIndex: 6,
    top: 'calc(50% - 15px)',
    width: '3vw',
    height: '3vw',
    cursor: 'pointer',
  };


  return (
      <Carousel 
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <a type="button" 
              onClick={onClickHandler} 
              className='rounded-circle p-0'
              style={{ ...arrowStyles, left: 15, backgroundColor: 'inherit' }}
            >
              <img src={leftArrow} alt='-' />
            </a>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <a type="button" 
              onClick={onClickHandler} 
              className='rounded-circle p-0'
              style={{ ...arrowStyles, right: 15, backgroundColor: 'inherit' }}
            >
              <img src={rightArrow}  alt='+' />
            </a>
          )
        }
      >
        {children}
      </Carousel>
  )
}
