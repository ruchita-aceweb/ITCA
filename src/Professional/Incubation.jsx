import React from 'react';
import "../Styles/font.css";
import imginc from "../Images/Membership.jpg"

const Incubation = () => {
  return (
    <>
    <div class='bg-aboutus bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
    <div class="text-center">
      <h1 class='text-white py-2 text-6xl'>Incubation</h1>

    </div>
  </div>
  <div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-5 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark sm:px-7.5">
  <div className="flex flex-wrap justify-center px-10  leading-8">

<div className="w-full lg:w-1/3 md:w-1/2 sm:w-full p-4 ">
<p class="text-justify">ITCA has set up an incubation hub and facilitates start-up organizations and entrepreneurs to access financing options based on their requirements. Start-ups and entrepreneurs can work with ITCA's Fellows and Members to sharpen and refine their business ideas and enhance success rates. </p>
<p class="text-justify">ITCA has incubated start-ups over the last 3 years and help these start-ups to become competitive and successful enterprises.
</p>


    
  </div>
  <div className="w-full lg:w-1/3 md:w-1/2 sm:w-full lg:pt-6 ">
    <img src={imginc} alt="satellite" className="mx-auto" data-aos="fade-left"/>
  </div>
  <div className="w-full lg:w-1/3 md:w-1/2 sm:w-full lg:pt-6 px-4 ">
  <p className='text-justify font-semibold'>Details of the incubated and mentored organizations are given below:</p>
  <h1 className='font-bold'>TMISAT, ISRAEL</h1>
<p className='text-justify'>TMISAT is an Israeli New Space company founded by committed professionals and entrepreneurs interested in exploring business prospects in the space sector. TMISAT has the distinct advantage of being present in all aspects, including designing and developing small satellites for the ITCA's ambitious 75 Students’ Satellites Mission 2022.</p>
    
  </div>
  </div>
  </div>
   </>
  )
}

export default Incubation