import React from 'react'
import pp1 from '../assets/hof1.jpeg'
import pp2 from '../assets/hof2.jpeg'
import pp3 from '../assets/hof3.jpeg'
import HallofFameCard from './HallofFameCard'

function HallofFame() {
    return(
        <>
            <section>
                <div className='flex justify-center'> 
                    <h2 className='text-[48px] text-[#233c7b] font-semibold mt-[60px]'>Hall of Fame</h2>
                </div>
                <div className='flex gap-[40px] justify-center my-[80px]'>
                    <HallofFameCard pp={pp1} name={"Rahul Kumar"} role={"Startup Genome, Data Scientist"} message={"Thank you very much, Krish Sir and Sudhanshu Sir, it was the month of Jan 21 when I started my journey with Machine Learning Master's Batch, and I was in the middle of the course when I cracked the Interview for Data Analyst Role (Now promoted to Data Scientist). With the accurate Learning path, proper assignments and 24*7 Skype Support, it was possible. Last year I also started using the One Neuron's Courses, with ample amount of Knowledge shared by different experts on various tech stacks. iNeuron was great and now with PW, they are making Data Science Learning easier, cheaper, better. Hats Off !! to the team."}/>
                    <HallofFameCard pp={pp2} name={"Rupak Banerjee"} role={"NTT Data, Senior Data Engineer"} message={"I joined Ineuron FSDS Nov'21 batch and One Neuron. I really want to thank Sudhanshu Sir and Team for teaching the skills very nicely which helped me to move into a Senior Data Engineer Role."}/>
                    <HallofFameCard pp={pp3} name={"Abhinav Dwivedi"} role={"Softsensor.ai, Data Scientist"} message={"I want to express my gratitude to Krish Naik, Sudhanshu Kumar and Sunny Savita for their instrumental role in my data science journey. Enrolling in the FSDS 2.0 batch and receiving mentorship from these individuals made me capable of entering the data science industry. The mentors' guidance, industry experience, and ability to simplify complex concepts equipped me with practical skills and confidence. The sense of community fostered during the program and the mentors' ongoing support contributed to my success as a data scientist within six months. I acknowledges the mentors' impact and commits to paying it forward in their future endeavors."}/>
                </div>
                <div className='flex justify-center mt-[100px]'>
                    <h3 className='text-[16px] text-[#3c4958] font-semibold'>View More</h3>
                </div>
            </section>
        </>
    )
}
export default HallofFame