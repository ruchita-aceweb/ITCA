import React, {useEffect} from 'react';
import "../Styles/font.css";
import imgproceeding from "../Images/Proceedings.jpg";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Proceedings = () => {
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
     <h1 class='text-white py-2 text-6xl'>Proceedings</h1>
 
   </div>
 </div>
 <div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-9 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark">
  <div className=''>
 <h1 className='text-xl py-4 font-bold'>Compilation of abstracts of peer-reviewed technical papers presented during various editions of ITC.</h1>
 <img src={imgproceeding} alt="satellite" className="mx-auto flex justify-center" />
 <p  class="text-justify">The collection spans multiple years and includes abstracts of peer-reviewed papers on the themes of the Conferences across multiple disciplines.</p>
 </div>
 </div>
 </>
  )
}

export default Proceedings