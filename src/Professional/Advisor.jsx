import React from 'react';
import "../Styles/font.css";
import imgadv from "../Images/Membership.jpg"


const Advisor = () => {
  return (
    <>
    <div class='bg-dev bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
    <div class="text-center">
      <h1 class='text-white py-2 lg:text-6xl text-3xl'>Advisor</h1>
 
      
    </div>
  </div>
 <div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-5 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark sm:px-7.5">
    <h1>ITCA has constituted an Advisory Board of globally renowned space scientists to guide the ambitious 75 Students’ Satellites initiative. This board comprises of:</h1>
<div className="flex flex-wrap justify-center    leading-8 lg:px-16 py-4">
<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full  ">
  <div className='mb-4'>
 <ul className='list-disc'>
    <li>	Padmashri Prof. R. M. Vasagam, Former Project Director, "APPLE" India's First Geo-Stationary Communication Satellite, Former VC, Anna University and Dr. MGR University, Former EC Member, VTU, Karnataka</li>
    <li>Padmashri Dr. Y. S. Rajan, Vikram Sarabhai Distinguished Professor, ISRO HQ, Former VC, PTU, Punjab</li>
    <li>	Padma Bhushan Dr. B. N. Suresh, Former Director, VSSC, Former Director, Indian Institute of Space Science and Technology and Vikram Sarabhai Distinguished Professor, ISRO HQ</li>
    <li>Padmashri. Dr. Mylswamy Annadurai, Project Director, Chandrayaan 1 & 2 and Programme Director, Mangalyaan, Former Director, ISRO Satellite Centre (ISAC)/URSC, Bangalore</li>
    <li>	Padmashri Dr. Dattaguru, Former Professor & HoD, Aerospace Department, Indian Institute of Science</li>
    <li>Dr. G.N. V. Prasad, Former Deputy Director, ISRO Satellite Centre (ISAC), URSC, Bangalore</li>
    <li>Mr. V. Mahadevan, MPAD, Scientist, ISRO Satellite Centre, URSC, Bangalore</li>
    <li>	Mr. B N Jagannatha Rao, Scientist, ISRO Satellite Centre, URSC, Bangalore</li>
 </ul>
 <h1>The Advisory Board provides technical leadership and oversight to institution student-built satellite programmes.</h1>
</div>

  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full  " data-aos="fade-left">
  <h1 className='text-3xl font-bold text-center mb-4 '>Get Support from our Team</h1>
  <div class="max-w-md mx-auto bg-back text-black rounded-lg overflow-hidden md:max-w-lg ">
  <div class="md:flex">
    <div class="w-full px-4 py-6">
      <div class="mb-6">
        
        <input type="text" id="name" name="name" placeholder=" your Name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
      </div>
      <div class="mb-6">
     
        <input type="email" id="email" name="email" placeholder=" your Email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
      </div>
      <div class="mb-6">
     
        <input type="number" id="number" name="number" placeholder=" your Number" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
      </div>
      <div class="mb-6">
     
        <input type="subject" id="subject" name="subject" placeholder="Subject" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
      </div>
      <div class="mb-6">
        
        <textarea id="message" name="message" rows="4" placeholder="Enter your message" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"></textarea>
      </div>
      <div class="text-center">
        <button type="submit" class="py-2 px-4 bg-back1 text-white font-semibold rounded-md hover:bg-white hover:text-black focus:outline-none focus:bg-indigo-600">Send Message</button>
      </div>
    </div>
  </div>
</div>

  </div>

</div>
</div> 
   </>
  )
}

export default Advisor