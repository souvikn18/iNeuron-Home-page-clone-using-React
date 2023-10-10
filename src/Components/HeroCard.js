import React from 'react'
function HeroCard({Img, Num, Text}) {
    return(
        <>
            <div className='flex flex-col items-center justify-around gap-2'>
                <img className='h-[172px] w-[160px]' src={Img} alt="..." />
                <h2 className='text-[36px]  font-bold'>{Num}</h2>
                <h2 className='text-[30px]  font-bold h-[36px] w-[360px] text-center'>{Text}</h2>
            </div>
        </>
    )
}
export default HeroCard