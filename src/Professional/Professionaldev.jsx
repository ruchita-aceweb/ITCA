import React,{useEffect} from 'react';
import "../Styles/font.css";

import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from "react-router-dom";
const Professionaldev = () => {
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
    <h1 class='text-white py-2 text-6xl'>Professional Development</h1>
    <p class='text-white text-xl'>Home/Professional Development</p>
  </div>
</div>

<div class=" lg:flex justify-between gap-4 text-white text-xl mb-6" data-aos="fade-up">
      <div class="w-full lg:w-1/4 p-4 bg-about text-center lg:rounded-bl-lg lg:rounded-br-lg lg:m-0 mb-2"> <Link to='/incubation'><h1 className=" text-2xl">Incubation </h1></Link></div>
      <div class="w-full lg:w-1/4 p-4 bg-about text-center lg:rounded-bl-lg lg:rounded-br-lg lg:m-0 mb-2"> <Link to='/educator'><h1 className=" text-2xl">Educator </h1></Link></div>
      <div class="w-full  lg:w-1/4 p-4 bg-about text-center lg:rounded-bl-lg lg:rounded-br-lg lg:m-0 mb-2">  <Link to='/advisor'> <h1 className=" text-2xl">Advisor</h1></Link></div>
      <div class="w-full  lg:w-1/4 p-4 bg-about text-center lg:rounded-bl-lg lg:rounded-br-lg lg:m-0 mb-2">  <Link to='/leadership'> <h1 className=" text-2xl">Thought Leadership </h1></Link></div>
      </div>



 </>
  )
}

export default Professionaldev