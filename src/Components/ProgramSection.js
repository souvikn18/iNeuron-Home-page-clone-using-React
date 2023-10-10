import React from 'react'




function ProgramSection({ProgramName, Tagline, Card1, Card2, Card3}) {
    return(
        <>
            <section className='flex flex-col items-center'>
                <div>
                    <h2 className='text-[48px] font-semibold mt-[60px]'>{ProgramName}</h2>
                </div>
                <div>
                    <p className='text-[18px] text-[#3c4958] my-[12px] px-[8px]'>{Tagline}</p>
                </div>
                <div className='flex gap-[40px]'>
                    {Card1}
                    {Card2}
                    {Card3}
                </div>
                <div>
                    <h3 className='text-[16px] text-[#3c4958] font-semibold mt-[20px]'>View More</h3>
                </div>
            </section>
        </>
    )
}
export default ProgramSection