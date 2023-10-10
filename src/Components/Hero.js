import React from 'react'
import dc from '../assets/dc.svg'
import se from '../assets/se.svg'
import st from '../assets/st.svg'
import HeroCard from './HeroCard'
function HeroSection() {
    return(
        <>
            <div className='flex justify-center'>
                <h1 className='text-[48px] font-semibold mt-[50px]'>"Pure Hardwork, No Shortcuts!"</h1>
            </div>
            <hr className='w-[140px] mx-auto border-2 bg-orange-400 border-orange-400 mt-2'></hr>
            <div className='flex justify-center gap-[100px] my-[70px]'>
                <HeroCard Img={dc} Num={"300+"} Text={"Different Courses"}/>
                <HeroCard Img={se} Num={"4,00,000+"} Text={"Students Enrolled"}/>
                <HeroCard Img={st} Num={"10,000+"} Text={"Successful Transition"}/>
            </div>
        </>
    )
}
export default HeroSection