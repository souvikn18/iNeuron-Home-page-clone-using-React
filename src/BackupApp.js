import React, { useContext} from 'react';
import './App.css';
import Logo from './assets/ineuron-logo.png'
import Navbar from './Components/Navbar';
import Searchicon from './assets/search-icon.svg'
import Navbarlist from './Components/Navbarlist';
import C1 from './assets/carousel1.png';
import C2 from './assets/carousel2.png';
import C3 from './assets/carousel3.png';
import DefaultCarousel from './Components/Carousel';
import HeroSection from './Components/Hero';
import Achievers from './Components/Achievers';
import HallofFame from './Components/HallofFame';
import ProgramSection from './Components/ProgramSection';
import ProgramCard from './Components/ProgramCard';
import lp1 from './assets/lp1.jpg'
import lp2 from './assets/lp2.jpg'
import lp3 from './assets/lp3.jpg'
import ap1 from './assets/ap1.jpg'
import ap2 from './assets/ap2.jpg'
import ap3 from './assets/ap3.jpg'
import cp1 from './assets/cp1.jpg'
import cp2 from './assets/cp2.jpg'
import cp3 from './assets/cp3.jpg'
import on1 from './assets/on1.jpg'
import on2 from './assets/on2.jpg'
import on3 from './assets/on3.jpg'
import ts1 from './assets/ts1.jpg'
import ts2 from './assets/ts2.jpg'
import ts3 from './assets/ts3.jpg'
import Live from './Components/Live';
import Hackathon from './Components/Hacakthon';
import htc1 from './assets/htc1.png'
import htc2 from './assets/htc2.png'
import htc3 from './assets/htc3.png'
import htc4 from './assets/htc4.png'
import htc5 from './assets/htc5.png'
import htc6 from './assets/htc6.png'
import htc7 from './assets/htc7.png'
import company1 from './assets/c1.png'
import company2 from './assets/c2.png'
import company3 from './assets/c3.png'
import company4 from './assets/c4.png'
import company5 from './assets/c5.png'
import hc1 from './assets/nvidia.png'
import hc2 from './assets/github.png'
import hc3 from './assets/geekyants.png'
import hc4 from './assets/redis.png'
import hc5 from './assets/jetbrains.png'
import OurProducts from './Components/OurProducts';
import OurProductsCard from './Components/OurProductsCard';
import op1 from './assets/op1.svg'
import op2 from './assets/op2.svg'
import op3 from './assets/op3.svg'
import op4 from './assets/op4.svg'
import op5 from './assets/op5.svg'
import OurPartneredInstitute from './Components/OurPartneredInstitute';
import opi1 from './assets/opi1.svg'
import opi2 from './assets/opi2.svg'
import opi3 from './assets/opi3.svg'
import opi4 from './assets/opi4.svg'
import opi5 from './assets/opi5.svg'
import Footer from './Components/Footer';
import WhiteLogo from './assets/ineuron-logo-white.png'
import ISO from './assets/iso-9001-2015.svg'
import Chatbot from './Components/Chatbot';
import ThemeContext from './Context/Themecontext';
// import ThemeToggler from './Components/Themetoggler';
import AppTheme from './Apptheme';


function BackupApp() {
  
  const Theme = useContext(ThemeContext)[0];
    const CurrentTheme = AppTheme[Theme]

  return(
    <>
    
      <div
      style={{
        backgroundColor:`${CurrentTheme.backgroundColor}`,
        color:`${CurrentTheme.textColor}`

      }}
      >
        <Navbar Logo={Logo} Searchicon={Searchicon}/>
          
          <Navbarlist/>
          
          <DefaultCarousel C1={C1} C2={C2} C3={C3}/>
          
          <HeroSection/>
          
          <Achievers Heading={"Our Achiever’s Work with"} company1={company1} company2={company2} company3={company3} company4={company4} company5={company5}/>
          
          <HallofFame/>
          
          <ProgramSection ProgramName={"Live Program"} Tagline={"Get your program with live 'instructor led' learning."} Card1={<ProgramCard Image={lp1} CardName={"Job Guaranteed BigData Bootcamp 2.0"} Instructor={"Sudhanshu Kumar"} Price={"₹17700.00"} Status={<Live/>}/>} Card2={<ProgramCard Image={lp2} CardName={"Fullstack JavaScript Bootcamp 2.0"} Instructor={"Hitesh Choudhary"} Price={"₹17700.00"} Status={<Live/>}/>} Card3={<ProgramCard Image={lp3} CardName={"Be a DevOps Pro"} Instructor={"Hitesh Choudhary"} Price={"₹12980.00"} Status={<Live/>}/>}/>
          
          <ProgramSection ProgramName={"Affordable Programs"} Tagline={"Find your favourite courses in pocket-friendly ways."} Card1={<ProgramCard Image={ap1} CardName={"HTML and CSS for Web Development"} Instructor={"Hitesh Choudhary"} Price={"₹499.00"}/>} Card2={<ProgramCard Image={ap2} CardName={"JAVA Bootcamp for Beginners"} Instructor={"Hitesh Choudhary"} Price={"₹499.00"}/>} Card3={<ProgramCard Image={ap3} CardName={"C++ Bootcamp for Beginners"} Instructor={"Hitesh Choudhary"} Price={"₹499.00"}/>}/>

          <ProgramSection ProgramName={"Community Programs"} Tagline={"Open to all pro-live classes on Youtube for free"} Card1={<ProgramCard Image={cp1} CardName={"TypeScript crash course"} Instructor={"Hitesh Choudhary"} Price={"FREE"}/>} Card2={<ProgramCard Image={cp2} CardName={"Machine Learning Community class"} Instructor={"Krish Naik"} Price={"FREE"}/>} Card3={<ProgramCard Image={cp3} CardName={"Prisma Backend Development"} Instructor={"Hitesh Choudhary"} Price={"FREE"}/>}/>

          <ProgramSection ProgramName={"One Neuron"} Tagline={"New Neurons all day, every day."} Card1={<ProgramCard Image={on1} CardName={"Tech Neuron"} Instructor={"200+ courses, 500+ projects, raise your demand option, consistent services from iNeuron, work 1:1 with experts"} Price={"₹25000.00"}/>} Card2={<ProgramCard Image={on2} CardName={"Data Science Projects"} Instructor={"Data science Projects Neuron consists of high-quality projects curated by our premium mentors. These courses with projects will really help you to build a strong practical foundation in the field of artificial intelligence."} Price={"₹15000.00"}/>} Card3={<ProgramCard Image={on3} CardName={"Big Data Projects"} Instructor={"Big Data Projects Neuron consists of high-quality projects curated by our premium mentors. These courses with projects will really help you to build a strong practical foundation in the field of data engineering."} Price={"₹15000.00"}/>}/>

          <ProgramSection ProgramName={"Test Series"} Tagline={"Quiz-based courses to prepare you for interviews."} Card1={<ProgramCard Image={ts1} CardName={"Data Structure and Algorithm Interview Preparation"} Price={"₹3540.00"}/>} Card2={<ProgramCard Image={ts2} CardName={"Java Coding Interview Preparation"} Price={"₹3540.00"}/>} Card3={<ProgramCard Image={ts3} CardName={"JavaScript Coding interview Preparation"} Price={"₹3540.00"}/>}/>

          <Hackathon htc1={htc1} htc2={htc2} htc3={htc3} htc4={htc4} htc5={htc5} htc6={htc6} htc7={htc7}/>
          
          <Achievers Heading={"Hackathon Companies"} company1={hc1} company2={hc2} company3={hc3} company4={hc4} company5={hc5}/>

          <OurProducts Heading={"Our Products"} Product1={<OurProductsCard ProductImage={op1} ProductName={"Neuro Lab"} Description={"Supercharge your project development with our robust lab."}/>} Product2={<OurProductsCard ProductImage={op2} ProductName={"Job Portal"} Description={"Use exceptional templates for a stand-out resume minus the sign up process."}/>} Product3={<OurProductsCard ProductImage={op3} ProductName={"Internship Portal"} Description={"iNeuron's self-paced internship portal prioritises hands-on training with 570+ internship projects."}/>} Product4={<OurProductsCard ProductImage={op4} ProductName={"Become an Affiliate"} Description={"Explore affiliate marketing opportunities with iNeuron and attain financial frredom."}/>} Product5={<OurProductsCard ProductImage={op5} ProductName={"Hall of Fame"} Description={"Our student placements and 100K+ career transitions speak volumes about our courses."}/>}/>

          <OurPartneredInstitute Heading={"Our Partnered Institutions"} InstitutionIcon1={opi1} InstitutionIcon2={opi2} InstitutionIcon3={opi3} InstitutionIcon4={opi4} InstitutionIcon5={opi5}/>

          <Footer Logo={WhiteLogo} Address={"17th Floor Tower A, Brigade Signature Towers, Sannatammanahalli, Bengaluru, Karnataka 562129."} EmailId={"contact@ineuron.ai"} ISO={ISO}/>

          <Chatbot/>
      </div>
      
    
      
    </>
  )
}

export default BackupApp;