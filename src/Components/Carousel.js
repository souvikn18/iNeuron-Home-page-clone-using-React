'use client';

import { Carousel } from 'flowbite-react';
import React from 'react'


function DefaultCarousel({C1,C2,C3}) {
  return (
    <Carousel className='h-[75vh]'>
      <img
        alt="..."
        src={C1}
      />
      <img
        alt="..."
        src={C2}
      />
      <img
        alt="..."
        src={C3}
      />
    </Carousel>
  )
}

export default DefaultCarousel;
