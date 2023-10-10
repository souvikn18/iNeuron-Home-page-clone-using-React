import React from 'react'
import ThemeToggler from './Themetoggler'

function Navbar({Logo, Searchicon}) {
    return(
        <>
        <div className='flex justify-center gap-[80px] pt-4 mb-4'>
            <div>
                <img className='h-[40px] w-[150px]' src={Logo} alt='logo'/>
            </div>
            <div className='flex border-[#233c7b] border-[1.5px] rounded-lg w-[50%]'>
                <img className='absolute h-[25px] w-[25px] mt-2 ml-2' src={Searchicon} alt='searchicon'/>
                <input className='w-[100%] h-[40px] pl-[50px]' id='placeholder' type='text' placeholder='What do you want to learn?'/>
            </div>
            <div className='flex gap-6'>
                <button className='font-medium '>Sign up</button>
                <button className='h-[40px] w-[110px] bg-[#233c7b] rounded-md text-white font-medium'>Sign in</button>
                <ThemeToggler/>
            </div>
        </div>
        </>
    )
}
export default Navbar