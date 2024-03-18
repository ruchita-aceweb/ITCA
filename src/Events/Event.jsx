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
    <div className='bg-aboutus bg-cover bg-center h-72 flex lg:px-28 items-center ' data-aos="fade-down">
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

    <div className="lg:flex justify-center gap-4 text-white mb-4" data-aos="fade-up">
    <div className={`w-full lg:w-1/4 p-4 bg-events text-center  lg:m-0 mb-2 lg:rounded-bl-lg lg:rounded-br-lg ${isOpen ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-2xl cursor-pointer mt-2" onClick={toggleAccordion}>
      Congress
      </h1>
      {isOpen && (
         <div>
         <p className="mt-2" data-aos="fade-down">
           "Indian Technology Congress (ITC) is a flagship event of the Indian Technology Congress Association (ITCA), a dedicated Association for Technologists focused on facilitating collaboration between Professionals from the industry"
         </p>
           <Link to="/congress" className="text-center">
           <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
             <p className="">Read more</p>
             <span className="ml-1"><FaArrowRightLong /></span>
           </div>
         </Link>
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-events text-center  lg:m-0 mb-2 lg:rounded-bl-lg lg:rounded-br-lg ${isOpen1 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-2xl cursor-pointer mt-2" onClick={toggleAccordion1}>
      Webinars
      </h1>
      {isOpen1 && (
       <div>
       <p className="mt-2" data-aos="fade-down">
         "ITCA offers webinars and live seminars to apprise students, faculty and technology aficionados on aspects of CubeSat technology to assist students and faculty/teachers in universities, "
       </p>
         <Link to="/webinar" className="text-center">
         <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
           <p className="">Read more</p>
           <span className="ml-1"><FaArrowRightLong /></span>
         </div>
       </Link>
       </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-events text-center  lg:m-0 mb-2 lg:rounded-bl-lg lg:rounded-br-lg ${isOpen2 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-2xl cursor-pointer mt-2" onClick={toggleAccordion2}>
      Masterclass
      </h1>
      {isOpen2 && (
        <p className="mt-2" data-aos="fade-down">
          "Coming Soon"
        </p>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-events text-center  lg:m-0 mb-2 lg:rounded-bl-lg lg:rounded-br-lg ${isOpen3 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-2xl cursor-pointer mt-2" onClick={toggleAccordion3}>
      Past Events
      </h1>
      {isOpen3 && (
        <div>
        <p className="mt-2" data-aos="fade-down">
          "ITC-2021, the 9th edition of Indian Technology Congress, was unique in that it facilitated exploring space technologies for sustainable development, sustainable design paradigms for student-built satellites and nanosatellites. Space Technology Gurus, Subject Matter Experts and 'Techpreneurs' shared their vision on contemporary technologies and how these are likely to influence our way of life. "
        </p>
          <Link to="/pastevent" className="text-center">
          <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
            <p className="">Read more</p>
            <span className="ml-1"><FaArrowRightLong /></span>
          </div>
        </Link>
        </div>
        
      )}
    </div>
  
  
  </div>


  


  </>
  )
}

export default Event