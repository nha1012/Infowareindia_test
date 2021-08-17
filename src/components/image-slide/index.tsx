import React from 'react';
import { useState } from 'react';
import {SlideDatas} from './slide-data';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './style.css';

const ImageSlide = () => {	
	const [current, setCurrent] = useState(0);
  const length = SlideDatas.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SlideDatas) || SlideDatas.length <= 0) {
    return null;
  }

	return (
		<section className="slider">
			<ArrowBackIosIcon className="back-slide" onClick={prevSlide}/>
			<ArrowForwardIosIcon className="next-slide" onClick={nextSlide} />
			
			{SlideDatas.map((item, index) => {
				return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={item.image} alt='travel image' className='image' />
            )}
          </div>
        );
			})}
		</section>
	)
}

export default ImageSlide
