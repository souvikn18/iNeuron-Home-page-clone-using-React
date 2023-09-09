import React from 'react'
import Chaticon from '../assets/chatbot.svg'
function Chatbot() {
    return(
        <>
            <div className='fixed bottom-5 right-5'>
                <img className='w-[150px] h-[99px]' src={Chaticon} alt='...'/>
            </div>
        </>
    )
}
export default Chatbot