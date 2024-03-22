import React,{useEffect} from 'react';
import "../Styles/font.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Contact = () => {
  AOS.init({
    duration: 1200,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   <>
     <div class='bg-contact bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-up">
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Future Directions</h1>

  </div>
</div>

<h1 className='text-4xl text-center p-6'>Coming Soon </h1>

   </>
  )
}

export default Contact