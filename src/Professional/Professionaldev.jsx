import React, { useState, useEffect } from "react";


import "../Styles/font.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
const Professionaldev = () => {
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
<div class='bg-dev bg-cover bg-center homebanners flex justify-center items-center' data-aos="fade-down">
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Professional Development</h1>
    <p class='text-white text-xl'>Home/Professional Development</p>
  </div>
</div>

<div className="lg:flex justify-center gap-2 text-white bg-skyblue" >
    <div className={` w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen ? 'h-56' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion}>
      Incubation
      </h1>
      {isOpen && (
         <div>
         <p className="mt-2" >
           "ITCA has set up an incubation hub and facilitates start-up organizations and entrepreneurs to access financing options based on their. "
         </p>
           <Link to="/incubation" className="text-center">
           <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
             <p className="">Read more</p>
             <span className="ml-1"><FaArrowRightLong /></span>
           </div>
         </Link>
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen1 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion1}>
      Educator
      </h1>
      {isOpen1 && (
       <div>
       <p className="mt-2" >
         "Mentoring Initiative is a member benefit for ITCA members seeking career guidance or advice from experienced professionals . "
       </p>
         <Link to="/educator" className="text-center">
         <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
           <p className="">Read more</p>
           <span className="ml-1"><FaArrowRightLong /></span>
         </div>
       </Link>
       </div>
      )}
    </div>
   
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen2 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion2}>
      Advisor
      </h1>
      {isOpen2 && (
        <div>
        <p className="mt-2" >
          "ITCA has constituted an Advisory Board of globally renowned space scientists to guide the ambitious 75 Students’ Satellites initiative."
        </p>
          <Link to="/advisor" className="text-center">
          <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
            <p className="">Read more</p>
            <span className="ml-1"><FaArrowRightLong /></span>
          </div>
        </Link>
        </div>
        
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen3 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion3}>
      Thought Leadership
      </h1>
      {isOpen3 && (
        <div>
        <p className="mt-2" >
          "Our members decipher industry trends and integrate the technological breakthroughs to develop mint-fresh innovations. "
        </p>
          <Link to="/leadership" className="text-center">
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

export default Professionaldev