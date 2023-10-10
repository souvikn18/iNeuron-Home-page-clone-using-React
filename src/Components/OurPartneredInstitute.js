import React from 'react'
function OurPartneredInstitute({Heading, InstitutionIcon1,InstitutionIcon2,InstitutionIcon3,InstitutionIcon4,InstitutionIcon5}) {
    return(
        <>
            <div className='flex justify-center my-[25px] pb-[60px]'>
                <h2 className='text-[48px] font-semibold mt-[60px]'>{Heading}</h2>
            </div>
            <div className='flex justify-center gap-[50px] mx-auto my-[20px] pb-[200px]'>
                <img className='h-[160px] w-[160px]' src={InstitutionIcon1} alt='...'/>
                <img className='h-[160px] w-[160px]' src={InstitutionIcon2} alt='...'/>
                <img className='h-[160px] w-[160px]' src={InstitutionIcon3} alt='...'/>
                <img className='h-[160px] w-[160px]' src={InstitutionIcon4} alt='...'/>
                <img className='h-[160px] w-[160px]' src={InstitutionIcon5} alt='...'/>
            </div>
        </>
    )
}
export default OurPartneredInstitute