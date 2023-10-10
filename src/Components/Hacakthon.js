'use client';

import { Carousel } from 'flowbite-react';
import React from 'react'


function Hackathon({htc1,htc2,htc3,htc4,htc5,htc6,htc7}) {
    return(
        <>
            <div className='flex justify-center'>
                <h2 className='text-[48px]  font-semibold mt-[60px]'>Hackathon's We Conducted</h2>
            </div>
            <div className='flex justify-center my-[80px]'>
            <Carousel className='h-[798px] w-[1280px]'>
                <img
                    alt="..."
                    src={htc1}
                />
                <img
                    alt="..."
                    src={htc2}
                />
                <img
                    alt="..."
                    src={htc3}
                />
                <img
                    alt="..."
                    src={htc4}
                />
                <img
                    alt="..."
                    src={htc5}
                />
                <img
                    alt="..."
                    src={htc6}
                />
                <img
                    alt="..."
                    src={htc7}
                />
            </Carousel>
            </div>
        </>
    )
}
export default Hackathon