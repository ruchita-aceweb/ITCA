import React,{useEffect} from 'react';
import "../Styles/font.css";
import imgtip from "../Images/tip.png";
import 'aos/dist/aos.css';
import AOS from 'aos';


const Tip = () => {
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
     <h1 class='text-white py-2 lg:text-6xl text-3xl'>Technology Innovation and Productization</h1>
     <h1 class='text-white py-2 lg:text-6xl text-3xl'>(TIP)</h1>
     <p class='text-white  text-xl'>Home/Technology Innovation and Productization(TIP)</p>
   </div>
 </div>
 <div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-9 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark">
  <div className=''>
 <div className="flex flex-wrap justify-center   leading-8">

<div className="w-full lg:w-2/3 md:w-1/2 sm:w-full ">

    <p  class="text-justify">TIP is ITCA’s leading publication focused on encouraging interdisciplinary thinking by disseminating curated scientific and engineering knowledge to stimulate and inspire Indian Engineering and technology ecosystem. TIP carries invited articles from Eminent Scientists / Domain Experts.</p>
    <p  class="text-justify">During ITCA's annual flagship event, the Indian Technology Congress, we have the release of the special publication "TECHNOLOGY INNOVATION PRODUCTIZATION" (TIP) related to the theme of ITC</p>
    <p  class="text-justify">We invite you to download the previous editions of TIP and savour the flavour of the technical content covered in the publication.</p>
   
    
  </div>
  <div className="w-full lg:w-1/3 md:w-1/2 sm:w-full p-2  ">
    <img src={imgtip} alt="satellite" className="mx-auto"  data-aos="fade-left" />
  </div>
  </div>
  </div>
  </div>
  </>
  )
}

export default Tip