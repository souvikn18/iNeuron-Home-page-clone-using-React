import React from 'react'
function HeroCard({Img, Num, Text}) {
    return(
        <>
            <div className='flex flex-col items-center justify-around gap-2'>
                <img className='h-[172px] w-[160px]' src={Img} alt="..." />
                <h2 className='text-[36px] text-[#233c7b] font-bold'>{Num}</h2>
                <h2 className='text-[30px] text-[#454545] font-bold h-[36px] w-[360px] text-center'>{Text}</h2>
            </div>
        </>
    )
}
export default HeroCard