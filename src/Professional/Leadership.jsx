import React from 'react';
import imgtlead from "../Images/Membership.jpg"

const Leadership = () => {
  return (
    <>
    <div class='bg-dev bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
    <div class="text-center">
      <h1 class='text-white py-2 lg:text-6xl text-3xl'>Thought Leadership </h1>

    </div>
  </div>
  <div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-9 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark">
   <div className=''>
  <div className="flex flex-wrap justify-center   leading-8">
 
 <div className="w-full lg:w-2/3 md:w-1/2 sm:w-full ">
 
     <p  class="text-justify">Our members decipher industry trends and integrate the technological breakthroughs to develop mint-fresh innovations that form the basis of solutions for contemporary society and business needs. We focus on leveraging inspiring ideas and building resilient future-proof solutions through multidisciplinary collaboration</p>
     
   
    
     
   </div>
   <div className="w-full lg:w-1/3 md:w-1/2 sm:w-full p-2  ">
     <img src={imgtlead} alt="satellite" className="mx-auto"  data-aos="fade-left" />
   </div>
   </div>
   </div>
   </div>
   </>
  )
}

export default Leadership