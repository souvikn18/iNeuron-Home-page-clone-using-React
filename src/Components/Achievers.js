import React from 'react'


function Achievers({Heading, company1, company2, company3, company4, company5}) {
    
    return(
        <>
        <section className='h-[350px]'>
                <div className='flex justify-center'>
                    <h2 className='text-[48px] font-semibold mt-[80px]'>{Heading}</h2>
                </div>
                <div className='flex justify-center gap-32 my-[90px]'>
                    <img className='h-[44.8px] w-[192px]' src={company1} alt='...'/>
                    <img className='h-[44.8px] w-[192px]' src={company2} alt='...'/>
                    <img className='h-[44.8px] w-[192px]' src={company3} alt='...'/>
                    <img className='h-[44.8px] w-[192px]' src={company4} alt='...'/>
                    <img className='h-[44.8px] w-[192px]' src={company5} alt='...'/>
                </div>
        </section>
        </>
    )
}
export default Achievers