import React,{useEffect} from 'react';
import "../Styles/font.css";
import goal from "../Images/goals.jpg";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Sustainabledev = () => {
  AOS.init({
    duration: 1200,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
  <>
    <div class='bg-goal bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Sustainable Development Goals</h1>
    <p class='text-white text-xl'>Home/Sustainable Development Goals</p>
  </div>
</div>
<div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-5 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark sm:px-7.5">
 <div className='p-9'>
  <p class="text-justify">The United Nations, involving more than 190 Member States, has developed the 2030 Agenda for Sustainable Development in order to address these challenges in the form of 17 Sustainable Development Goals (SDGs) with 169 associated specific targets. Space science, technology and satellites have the potential to contribute to the Sustainable Development Goals. Critical technologies of the 21st century including information technology, modern communication, global positioning systems, satellite television, weather forecasting and remote sensing all rely on space science and technology.</p>
  
  <p  class="text-justify">The United Nations Office for Outer Space Affairs (UNOOSA) promotes international collaboration in the peaceful use and exploration of space, as well as the application of space science and technology for long-term economic and social development. Currently, 95 nations are members of the UNOOSA-monitored Committee on the Peaceful Uses of Outer Space (COPUOS)..</p>
  <img src={goal} alt="satellite" className="mx-auto" />
  <p class="text-justify">Contemporary research in space technologies can have a force-multiplier effect in other areas: technologies developed for space missions can be adopted and customized for applications on Earth. National investments in space research can contribute to disseminating scientific knowledge to the larger society, while creating new opportunities for innovation and infrastructure (ref: Wood and Stober, 2018).

Global synergy and collaboration in space technologies have provided multifarious opportunities to expand the boundaries of knowledge in several domains, creating new disciplines for research, and utilizing the new knowledge to create products that can address societal needs<span className='text-bold'>(Ref: UNCTAD Report: Exploring Space Technologies for Sustainable Development).</span> </p>
<p class="text-justify">Realization of the ambitious development goals requires the careful integration of space capabilities developed by nations with detailed local knowledge; and multi-stakeholder entities are uniquely positioned to forge global and multilateral public-private partnerships to effectively harness space for the Sustainable Development Goals.</p>
  </div>
  </div>
  </>
  )
}

export default Sustainabledev