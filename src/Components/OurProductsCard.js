import React from 'react'
function OurProductsCard({ProductImage, ProductName, Description}) {
    return(
        <>
            <div className='flex flex-col items-center h-[320px] w-[320px] gap-2'>
                <img className='w-[320px] h-[160px]' src={ProductImage} alt='...'/>
                <h3 className='h-[32px] w-[236px] text-[24px] my-[5px] font-bold text-center'>{ProductName}</h3>
                <p className='w-[320px] h-[84px] overflow-hidden text-[18px] my-[12px] text-[#454545] text-center'>{Description}</p>
            </div>
        </>
    )
}
export default OurProductsCard