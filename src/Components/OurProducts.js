import React from 'react'
function OurProducts({Heading, Product1, Product2, Product3, Product4, Product5}) {
    return(
        <>
            <div className='flex justify-center'>
                <h2 className='text-[48px] text-[#233c7b] font-semibold mt-[60px] my-[5px] pb-[64px]'>{Heading}</h2>
            </div>
            <div className='flex flex-col gap-[40px]'>
                <div className='flex justify-center gap-[80px]'>
                    {Product1}
                    {Product2}
                    {Product3}
                </div>
                <div className='flex justify-center gap-[80px]'>
                    {Product4}
                    {Product5}
                </div>
            </div>
            
        </>
    )
}
export default OurProducts