import React,{useEffect} from 'react';
import "../Styles/font.css";
import imgtrain from "../Images/training.png";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Training = () => {
  AOS.init({
    duration: 1200,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   <>
   <div class='bg-dev bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
   <div class="text-center">
     <h1 class='text-white py-2 text-6xl'>Training</h1>
    
     <p class='text-white text-xl'>Home/Training</p>
   </div>
 </div>

 <div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-5 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark sm:px-7.5">
  <div className='p-10'>
 <div className="flex flex-wrap justify-center   leading-8">

<div className="w-full lg:w-1/3 md:w-1/2 sm:w-full px-4 ">

    <p  class="text-justify">ITCA has developed content for continuing education programs (for industry professionals intending to diversify into new areas) in areas of SpaceTech, and is also developing content focused on high school educational programs.</p>
    <p  class="text-justify">These resources are made available once the institution member / consortium member signs up for the courses.</p>
   
   
    
  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full  ">
  
  <img src={imgtrain} alt="satellite" className="mx-auto flex justify-center"   data-aos="fade-left"/>

  </div>
  </div>
  </div>
  </div>
 </>
  )
}

export default Training