import React,{useState,useEffect} from "react";
import "../Styles/font.css";

import 'aos/dist/aos.css';
import AOS from 'aos';

import { Link } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";

const Ourpublication = () => {
    const[isOpen23, setIsopen23]= useState(false);
    const[isOpen24, setIsopen24]= useState(false);
    const[isOpen25, setIsopen25]= useState(false);
    const[isOpen26, setIsopen26]= useState(false);
    const toggleAccordion23 = () =>{
        setIsopen23 (!isOpen23)
      }
      const toggleAccordion24 = () =>{
        setIsopen24 (!isOpen24)
      }
      const toggleAccordion25 = () =>{
        setIsopen25 (!isOpen25)
      }
      const toggleAccordion26 = () =>{
        setIsopen26 (!isOpen26)
      }
  return (
   <>
    <div class='bg-homepublication bg-cover bg-center homebanners  flex justify-center items-center' >
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Publication</h1>

  </div>
</div>

    <div className="lg:flex justify-center gap-2 bg-skyblue text-white " >
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen23 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion23}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Tips
      </h1>
      {isOpen23 && (
         <div>
         <p className="mt-2">
           "Coming Soon "
         </p>
         
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0  mb-2 ${isOpen24 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion24}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Update
      </h1>
      {isOpen24 && (
         <div>
         <p className="mt-2">
           "Coming Soon "
         </p>
         
         </div>
      )}
    </div>
    
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen25 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion25}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Report
      </h1>
      {isOpen25 && (
         <div>
         <p className="mt-2">
           "Coming Soon "
         </p>
         
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen26 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion26}>
      <h1 className="text-xl cursor-pointer mt-2" >
      News
      </h1>
      {isOpen26 && (
         <div>
         <p className="mt-2">
           "Coming Soon "
         </p>
         
         </div>
      )}
    </div>
    
  
  
  
  </div>
   </>
  )
}

export default Ourpublication