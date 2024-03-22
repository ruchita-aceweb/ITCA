import React, { useState, useEffect } from "react";

import "../Styles/font.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Event = () => {
  const [isOpen, setIsOpen] = useState(false);
  const[isOpen1, setIsopen1]= useState(false);
  const[isOpen2, setIsopen2]= useState(false);
  const[isOpen3, setIsopen3]= useState(false);
 

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
   
  };
  const toggleAccordion1 = () =>{
    setIsopen1 (!isOpen1)
  }
  const toggleAccordion2 = () =>{
    setIsopen2 (!isOpen2)
  }
  const toggleAccordion3 = () =>{
    setIsopen3 (!isOpen3)
  }
 


AOS.init({
  duration: 1200,
});
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <>
    <div className='bg-aboutus bg-cover bg-center homebanners flex px-6 lg:px-28 items-center '  data-aos="fade-down">
      <div className="">
        <h1 className='text-white py-2 text-6xl'>Events</h1>
        <p className='text-white text-xl'>Conferences, seminars, meetings with experts, online courses, hackathons, </p>
        <p className='text-white text-xl'> international student exchange programmes,  summer schools abroad and</p>
         <p className='text-white text-xl'> in India and meetings with ITCA leadership are among myriad events that are offered to members.</p>
         <Link to='/eventinfo'>
 <button className="bg-skyblue py-2 px-4 rounded-lg text-white mt-4 ">Learn More</button>
 </Link>
      </div>
    </div>

    <div className="lg:flex justify-center gap-2 text-white mb-4 bg-skyblue" >
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-2xl cursor-pointer mt-2" onClick={toggleAccordion}>
      Congress
      </h1>
      {isOpen && (
         <div>
         <p className="mt-2" >
           "Indian Technology Congress (ITC) is a flagship event of the Indian Technology Congress Association (ITCA), a dedicated Association for Technologists "
         </p>
         <div className="flex   justify-center">
           <Link to="/congress" className="text-center">
           <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
             <p className="">Read more</p>
             <span className="ml-1"><FaArrowRightLong /></span>
           </div>
         </Link>
         </div>
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen1 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-2xl cursor-pointer mt-2" onClick={toggleAccordion1}>
      Webinars
      </h1>
      {isOpen1 && (
       <div>
       <p className="mt-2" >
         "ITCA offers webinars and live seminars to apprise students, faculty and technology aficionados on aspects of CubeSat technology to assist students and faculty, "
       </p>
       <div className="flex   justify-center">
         <Link to="/webinar" className="text-center">
         <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
           <p className="">Read more</p>
           <span className="ml-1"><FaArrowRightLong /></span>
         </div>
       </Link>
       </div>
       </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen2 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-2xl cursor-pointer mt-2" onClick={toggleAccordion2}>
      Masterclass
      </h1>
      {isOpen2 && (
        <p className="mt-2" >
          "Coming Soon"
        </p>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen3 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-2xl cursor-pointer mt-2" onClick={toggleAccordion3}>
      Past Events
      </h1>
      {isOpen3 && (
        <div>
        <p className="mt-2" >
          "ITC-2021, the 9th edition of Indian Technology Congress, was unique in that it facilitated exploring space technologies for sustainable development. "
        </p>
        <div className="flex   justify-center">
          <Link to="/pastevent" className="text-center">
          <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
            <p className="">Read more</p>
            <span className="ml-1"><FaArrowRightLong /></span>
          </div>
        </Link>
        </div>
        </div>
        
      )}
    </div>
  
  
  </div>


  


  </>
  )
}

export default Event