import React from 'react';
import "../Styles/font.css";
import imgvision from "../Images/History2.jpg"

const Vision = () => {
  return (
    <>
    <div class='bg-aboutus bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
    <div class="text-center">
      <h1 class='text-white py-2 text-6xl'>Vision</h1>
      <p class='text-white text-xl'>Home/Vision</p>
    </div>
  </div>
  <div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-5 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark sm:px-7.5">
  <div className="flex flex-wrap justify-center px-10  leading-8">

<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full p-4 ">
<p class="text-justify">Empowering citizens with a technology-centric ethos, catalyzing profound societal and national advancement. </p>

    
    
  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full lg:pt-6 ">
    <img src={imgvision} alt="satellite" className="mx-auto" data-aos="fade-left"/>
  </div>
  </div>
  </div>
   </>
  )
}

export default Vision