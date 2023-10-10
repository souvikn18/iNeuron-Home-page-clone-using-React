import React from 'react'
function ProgramCard({Image, CardName, Instructor, Price, Status}) {
    return(
        <>
            <section className='h-[416px] w-[384px]'>
                <div className='flex flex-col gap-[20px] shadow-xl rounded-lg mx-auto py-[20px]'>
                    <div>
                        <img className='h-[189px] w-[336px] mx-auto mt-2' src={Image} alt='...'/>
                    </div>
                    <div>
                        <h2 className='mx-auto w-[336px] h-[56px] text-[20px] font-bold'>{CardName}</h2>
                    </div>
                    <div>
                        <p className='mx-auto w-[336px] h-[30px] overflow-hidden text-[16px] text-[#02050b] font-semibold'>{Instructor}</p>
                    </div>
                    <div className='mx-auto w-[336px] flex gap-[200px]'>
                        <p className='text-[18px] text-[#02050b] font-bold'>{Price}</p>
                        <p>{Status}</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ProgramCard