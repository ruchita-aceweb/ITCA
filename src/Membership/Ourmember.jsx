import React, { useState, useEffect } from "react";

import "../Styles/font.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

import { Link } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";

const Ourmember = () => {
    const[isOpen16, setIsopen16]= useState(false);
    const[isOpen17, setIsopen17]= useState(false);
    const toggleAccordion16 = () =>{
        setIsopen16 (!isOpen16)
      }
      const toggleAccordion17 = () =>{
        setIsopen17 (!isOpen17)
      }
  return (
   <>
     <div class='bg-homemember bg-cover bg-center homebanners  flex justify-center items-center' >
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Membership</h1>

  </div>
</div>

    <div className="lg:flex justify-evenly  bg-skyblue text-white " >
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen16 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion16}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Individual Membership
      </h1>
      {isOpen16 && (
         <div>
         <p className="mt-2">
           "Technology's pervasive presence across our globe underscores its vast diversity, embodied by our esteemed Fellows who represent a rich spectrum within. "
         </p>
         <div className="flex   justify-center">
           <Link to="/individual" className="text-center">
           <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
             <p className="">Read more</p>
             <span className="ml-1"><FaArrowRightLong /></span>
           </div>
         </Link>
         </div>
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen17 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion17}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Institutional Memberships
      </h1>
      {isOpen17 && (
       <div>
       <p className="mt-2">
         "The Institutional Members category welcomes associations, public, and private institutions engaged in fields aligned with the objectives of the ITCA."
       </p>
       <div className="flex   justify-center">
         <Link to="/institutional" className="text-center">
         <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
           <p className="">Read more</p>
           <span className="ml-1"><FaArrowRightLong /></span>
         </div>
       </Link>
       </div>
       </div>
      )}
    </div>
   
    
  
  
  </div></>
  )
}

export default Ourmember