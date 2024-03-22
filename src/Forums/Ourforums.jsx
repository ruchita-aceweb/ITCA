import React,{useState,useEffect} from "react";
import "../Styles/font.css";

import 'aos/dist/aos.css';
import AOS from 'aos';

import { Link } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";

const Ourforums = () => {
    const[isOpen18, setIsopen18]= useState(false);
    const[isOpen19, setIsopen19]= useState(false);
    const[isOpen20, setIsopen20]= useState(false);
    const[isOpen21, setIsopen21]= useState(false);
    const[isOpen22, setIsopen22]= useState(false);
    const toggleAccordion18 = () =>{
        setIsopen18 (!isOpen18)
      }
      const toggleAccordion19 = () =>{
        setIsopen19 (!isOpen19)
      }
      const toggleAccordion20 = () =>{
        setIsopen20 (!isOpen20)
      }
      const toggleAccordion21 = () =>{
        setIsopen21 (!isOpen21)
      }
      const toggleAccordion22 = () =>{
        setIsopen22 (!isOpen22)
      }
  return (
 <>
 <div class='bg-homeforums bg-cover bg-center homebanners  flex justify-center items-center' >
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Forums</h1>

  </div>
</div>

    <div className="lg:flex justify-center gap-2 bg-skyblue text-white " >
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen18 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion18}>
      <h1 className="text-xl cursor-pointer mt-2" >
    Space
      </h1>
      {isOpen18 && (
         <div>
         <p className="mt-2">
           "Coming Soon "
         </p>
         
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen19 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion19}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Agri Tech
      </h1>
      {isOpen19 && (
       <div>
       <p className="mt-2">
         "AgriTech refers to the emerging opportunities for the Technology, products& services that supports Agricultural."
       </p>
       <div className="flex   justify-center">
         <Link to="/educator" className="text-center">
         <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
           <p className="">Read more</p>
           <span className="ml-1"><FaArrowRightLong /></span>
         </div>
       </Link>
       </div>
       </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen20 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion20}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Industry 4.0
      </h1>
      {isOpen20 && (
         <div>
         <p className="mt-2">
           "Coming Soon "
         </p>
         
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen21 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion21}>
      <h1 className="text-xl cursor-pointer mt-2" >
      System
      </h1>
      {isOpen21 && (
         <div>
         <p className="mt-2">
           "Coming Soon "
         </p>
         
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen22 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion22}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Temple Engineering
      </h1>
      {isOpen22 && (
        <div>
        <p className="mt-2">
          "Whispers in Heritage Decoding the Symbolic Temple Engineering Ancient innovators defied gravity and time, crafting ."
        </p>
        <div className="flex   justify-center">
          <Link to="/advisor" className="text-center">
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

export default Ourforums