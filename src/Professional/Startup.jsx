import React from 'react'
import "../Styles/font.css";
import start from "../Images/startup.jpg";
import 'aos/dist/aos.css';
import AOS from 'aos';


const Startup = () => {
  AOS.init({
    duration: 1200,
  });
  return (
   <>
   <div class='bg-aboutus bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
   <div class="text-center">
     <h1 class='text-white py-2 text-6xl'>Start Up Incubation</h1>
    
     <p class='text-white text-xl'>Home/Start Up Incubation</p>
   </div>
 </div>
 <div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-9 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark">
<p class="text-justify">ITCA has set up an incubation hub and facilitates start-up organizations and entrepreneurs to access financing options based on their requirements. Start-ups and entrepreneurs can work with ITCA's Fellows and Members to sharpen and refine their business ideas and enhance success rates.</p>
<p class="text-justify">ITCA has incubated start-ups over the last 3 years and help these start-ups to become competitive and successful enterprises.</p>
<p class="text-justify font-semibold">Details of the incubated and mentored organizations are given below:</p>
<div className='flex flex-wrap justify-center p-4'>
  <div className=' w-full lg:w-1/3 md:w-1/2 sm:w-full p-4 '>
    <h1 className='text-2xl'>TSC Technologies</h1>
    <p className='text-justify'>TSC Technologies is a space technologies start-up mentored and incubated by ITCA in India. It provides turnkey project support with respect to small satellites globally to meet the needs and requirements of its clients. Delivered through a single engagement, multi-source model, TSCTech Team works closely in liaison with its clients to provide premium service that significantly reduces costs.</p>
    <h1 className='text-2xl lg:py-4'>TMISAT, ISRAEL</h1>
    <p className='text-justify'>TMISAT is an Israeli New Space company founded by committed professionals and entrepreneurs interested in exploring business prospects in the space sector. TMISAT has the distinct advantage of being present in all aspects, including designing and developing small satellites for the ITCA's ambitious 75 Students’ Satellites Mission 2022.</p>
  </div>
  <div className='w-full lg:w-1/2 md:w-1/2 sm:w-full '>
    <img src={start} alt='satelliate'/>
  </div>
 
</div>
</div>
   </>
  )
}

export default Startup