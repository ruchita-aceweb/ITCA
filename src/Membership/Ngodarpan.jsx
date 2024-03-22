import React,{useEffect} from 'react';
import "../Styles/font.css"
import imgngo from "../Images/nitiayoga.jpg";
import 'aos/dist/aos.css';
import AOS from 'aos';


const Ngodarpan = () => {

  AOS.init({
    duration: 1200,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   <>
    <div class='bg-aboutus bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
    <div class="text-center">
      <h1 class='text-white py-2 text-6xl'>Ngo Darpan</h1>
  
    </div>
  </div>
  <div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-5 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark sm:px-7.5">
  <div className="flex flex-wrap justify-center px-10  leading-8">

<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full p-4 ">
<p class="text-justify">ITCA has completed the registration on NITI-Aayog maintained platform for voluntary organizations to bring about greater partnership between government & voluntary sector and foster better transparency, efficiency, and accountability.</p>
    <p class="text-justify">ITCA is a society registered in Karnataka. <span className='font-bold'>NITI Aayog Unique ID: KA/2021/0272994.</span></p>
    
    
  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full lg:pt-6 ">
    <img src={imgngo} alt="satellite" className="mx-auto" data-aos="fade-left"/>
  </div>
  </div>
  </div>
   </>
  
  )
}

export default Ngodarpan