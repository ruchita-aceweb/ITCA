import React,{useEffect} from 'react';
import "../Styles/font.css";
import event from "../Images/new10.png";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Eventinfo = () => {
    AOS.init({
        duration: 1200,
      });
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
       <div class='bg-event bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Events</h1>
   
  </div>
  </div>
  <div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-9 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark">
<p class="text-justify">Conferences, seminars, meetings with experts, online courses, hackathons, international student exchange programmes, summer schools abroad and in India and meetings with ITCA leadership are among myriad events that are offered to members.</p>
<p class="text-justify">These events are organized to facilitate enhancement of the engineering profession by active learning, networking, contributing, and collaborating with peers and engineering practitioners.</p>
<p class="text-justify">The emphasis of all ITCA events is on highlighting and encouraging interdisciplinary engineering and associated specialties to develop new products, solutions, and services for societal requirements.</p>
<div className='flex flex-wrap justify-center p-4'>
  <div className=' w-full lg:w-1/3 md:w-1/2 sm:w-full p-4 '>
    <h1 className='text-2xl'>ITC</h1>
    <p className='text-justify'>The Indian Technology Congress (ITC) is ITCA's yearly premier event. This conference, with participation by recognized and renowned speakers from India and abroad is structured on a contemporary theme. It facilitates deep dives into exploring cutting-edge technologies with emphasis on sustainable development.</p>
  </div>
  <div className='w-full lg:w-1/3 md:w-1/2 sm:w-full '>
    <img src={event} alt='satelliate'/>
  </div>
  <div className=' w-full lg:w-1/3 md:w-1/2 sm:w-full p-4'>
    <h1 className='text-2xl'>ITC-2022</h1>
    <p className='text-justify'>ITC-2022 is tentatively scheduled for September 2022, and will be organized in collaboration with Chandigarh University, and is on the theme 'Pathways for Intelligent, Digitised and Sustainable Execution of Mega Projects'.</p>
  </div>
</div>
</div>
    </>
  )
}

export default Eventinfo