import React, { useState,useEffect } from 'react';
import "../Styles/font.css";
import inphoto1 from "../Images/pasrevent/Inphoto1.jpg";
import inphoto2 from "../Images/pasrevent/Inphoto2.jpg";
import inphoto3 from "../Images/pasrevent/Inphoto3.jpg";
import inphoto4 from "../Images/pasrevent/Inphoto4.jpg";
import inphoto5 from "../Images/pasrevent/Inphoto5.jpg";
import inphoto6 from "../Images/pasrevent/Inphoto6.jpg";
import inphoto7 from "../Images/pasrevent/Inphoto7.jpg";
import inphoto8 from "../Images/pasrevent/Inphoto8.jpg";
import inphoto9 from "../Images/pasrevent/Inphoto9.jpg";
import inphoto10 from "../Images/pasrevent/Inphoto10.jpg";
import inphoto11 from "../Images/pasrevent/Inphoto11.jpg";
import inphoto12 from "../Images/pasrevent/Inphoto12.jpg";
import inphoto13 from "../Images/seminar/14_11zon.jpg";
import inphoto14 from "../Images/seminar/15_11zon.jpg";
import inphoto15 from "../Images/seminar/16_11zon.jpg";
import inphoto16 from "../Images/seminar/17_11zon.jpg";
import inphoto17 from "../Images/seminar/18_11zon.jpg";
import inphoto18 from "../Images/seminar/19_11zon.jpg";
import inphoto19 from "../Images/seminar/20_11zon.jpg";
import inphoto20 from "../Images/seminar/21_11zon.jpg";
import inphoto21 from "../Images/seminar/22_11zon.jpg";
import inphoto22 from "../Images/seminar/23_11zon.jpg";
import inphoto23 from "../Images/seminar/24_11zon.jpg";
import inphoto24 from "../Images/seminar/25_11zon.jpg";
import 'aos/dist/aos.css';
import AOS from 'aos';

import { FaArrowDown } from "react-icons/fa";

const Pastevent = () => {
  AOS.init({
    duration: 1200,
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [togglein, setTogglein] = useState(false);
  const [togglesem, setTogglesem] = useState(false);

  // Function to handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div class='bg-event bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
        <div class="text-center">
          <h1 class='text-white py-2 text-6xl'>Past Events</h1>
      
        </div>
      </div>
      <div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-9 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark">
        <div>
          <h1 className='text-3xl font-bold py-4'>ITC-2021</h1>
          <p class="text-justify">ITC-2021, the 9th edition of Indian Technology Congress, was unique in that it facilitated exploring space technologies for sustainable development, sustainable design paradigms for student-built satellites and nanosatellites. Space Technology Gurus, Subject Matter Experts and 'Techpreneurs' shared their vision on contemporary technologies and how these are likely to influence our way of life. The special focus on this year’s congress was on “Satellites for Everyone and Space for Everyone and was organized in collaboration with Chandigarh University as an India – International Online event.</p>
          <p class="text-justify mb-4">ITC-2021 had over 25 Speakers and Thought Leaders sharing their expertise over two days with about 3000 Delegates joining the online video conference from the Industry, Academia, Research Organizations and Entrepreneurs. We also had more than 15000 student registrations across 75 nations participating on social media platforms. The 9th edition of ITC also had the global launch of the World-UNITYSat Programme celebrating the 75th year of India’s independence and its march to becoming a technological superpower, taking the ITC platform to the global arena.</p>
        </div>

        <div className='text-center text-white '>
          <button className={`p-2 rounded-lg relative ${togglein ? 'bg-black text-white' : 'bg-skyblue'}`} onClick={() => setTogglein(!togglein)} >
            Inaugural Photos - ITC 2018
            <div className="ml-2 inline-block"><FaArrowDown /></div>
          </button>
      {togglein && (
     <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6   lg:py-9 lg:px-40" data-aos="fade-up">
      <div >
        <img src={inphoto1} alt='event'  class="h-72 "  onClick={() => handleImageClick(inphoto1)} />
        </div>
        <div >
        <img src={inphoto2} alt='event'  class="h-72"   onClick={() => handleImageClick(inphoto2)} />
        </div>
        <div >
        <img src={inphoto3} alt='event'  class="h-72"   onClick={() => handleImageClick(inphoto3)}/>
        </div>
        <div >
        <img src={inphoto4} alt='event'  class="h-72"  onClick={() => handleImageClick(inphoto4)}/>
        </div>
        <div >
        <img src={inphoto5} alt='event'  class="h-72"  onClick={() => handleImageClick(inphoto5)}/>
        </div>
        <div >
        <img src={inphoto6} alt='event'  class="h-72"  onClick={() => handleImageClick(inphoto6)}/>
        </div>
        <div >
        <img src={inphoto7} alt='event'  class="h-72"  onClick={() => handleImageClick(inphoto7)}/>
        </div>
        <div >
        <img src={inphoto8} alt='event'  class="h-72"  onClick={() => handleImageClick(inphoto8)}/>
        </div>
        <div >
        <img src={inphoto9} alt='event'  class="h-72"  onClick={() => handleImageClick(inphoto9 )}/>
        </div>
        <div >
        <img src={inphoto10} alt='event'  class="h-72"  onClick={() => handleImageClick(inphoto10)}/>
        </div>
        <div >
        <img src={inphoto11} alt='event'  class="h-72"  onClick={() => handleImageClick(inphoto11)}/>
        </div>
        <div >
        <img src={inphoto12} alt='event'  class="h-72 w-full"  onClick={() => handleImageClick(inphoto12)}/>
        </div>
        
       </div>
          )}
</div>

<div className='text-center text-white mt-2'>
<button className={`p-2 rounded-lg relative ${togglesem ? 'bg-black text-white' : 'bg-skyblue'}`} onClick={() => setTogglesem(!togglesem)}>
  International Seminar on Student's Satellites
  <div className="ml-2 inline-block"><FaArrowDown /></div>
</button>

{togglesem && (
     <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6   lg:py-9 lg:px-40" data-aos="fade-up">
      <div >
        <img src={inphoto13} alt='event'  class="h-72"  onClick={() => handleImageClick(inphoto13)}/>
        </div>
        <div >
        <img src={inphoto14} alt='event'  class="h-72"  onClick={() => handleImageClick(inphoto14)}/>
        </div>
        <div >
        <img src={inphoto15} alt='event'  class="h-72"  onClick={() => handleImageClick(inphoto15)}/>
        </div>
        <div >
        <img src={inphoto16} alt='event'  class="h-72"  onClick={() => handleImageClick(inphoto16)}/>
        </div>
        <div >
        <img src={inphoto17} alt='event'  class="h-72"  onClick={() => handleImageClick(inphoto17)}/>
        </div>
        <div >
        <img src={inphoto18} alt='event'  class="h-72"  onClick={() => handleImageClick(inphoto18)}/>
        </div>
        <div >
        <img src={inphoto19} alt='event'  class="h-72" onClick={() => handleImageClick(inphoto19)}/>
        </div>
        <div >
        <img src={inphoto20} alt='event'  class="h-72" onClick={() => handleImageClick(inphoto20)}/>
        </div>
        <div >
        <img src={inphoto21} alt='event'  class="h-72"  onClick={() => handleImageClick(inphoto21)}/>
        </div>
        <div >
        <img src={inphoto22} alt='event'  class="h-72"  onClick={() => handleImageClick(inphoto22)}/>
        </div>
        <div >
        <img src={inphoto23} alt='event'  class="h-72"  onClick={() => handleImageClick(inphoto23)}/>
        </div>
        <div >
        <img src={inphoto24} alt='event'  class="h-72"  onClick={() => handleImageClick(inphoto24)}/>
        </div>
        
       </div>
          )}

      </div>
</div>
{selectedImage && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={() => setSelectedImage(null)}>
      <div className="absolute inset-0 flex justify-center items-center">
        <img src={selectedImage} alt="Selected Image" className="max-w-full max-h-full" />
      </div>
    </div>
      )}
  </>
  )
}

export default Pastevent