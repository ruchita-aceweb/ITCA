import React from 'react';
import "../Styles/font.css";
import imgmission from "../Images/member.jpg"

const Mission = () => {
  return (
    <>
    <div class='bg-aboutus bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
    <div class="text-center">
      <h1 class='text-white py-2 text-6xl'>Mission</h1>
      <p class='text-white text-xl'>Home/Mission</p>
    </div>
  </div>
  <div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-5 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark sm:px-7.5">
  <div className="flex flex-wrap justify-center px-10  leading-8">

<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full p-4 ">
<p class="text-justify">Through collaborative endeavors, we strive to empower the advancement of technology-centric initiatives, creating a dynamic societal landscape where every citizen embraces technology as a catalyst for positive change. In doing so, we aim to foster an ongoing journey of evolution towards collective well-being. </p>

    
    
  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full lg:pt-6 ">
    <img src={imgmission} alt="satellite" className="mx-auto" data-aos="fade-left"/>
  </div>
  </div>
  </div>
   </>
  )
}

export default Mission