import React,{useState} from "react";
import "../Styles/font.css";
import Latestnewsdata from "../Dataadded/LatestNewsdata";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Latestnews = () => {
  AOS.init({
    duration: 1200,
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div class="bg-aboutus bg-cover bg-center h-72 flex justify-center items-center" data-aos="fade-down">
        <div class="text-center">
          <h1 class="text-white py-2 text-6xl">Latest News</h1>
          <p class="text-white text-xl">Home/Latest News</p>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:py-9  lg:px-40  px-4 py-6" data-aos="fade-up" >
        {Latestnewsdata.map((value,index)=>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 " key={index}>
          <div>
            <img class="rounded-t-lg h-72 w-full" src={value.newsimage} alt="" onClick={() => handleImageClick(value.newsimage)}  />
          </div>
          <div class="p-5">
            <h5 class="mb-2 text-xl  tracking-tight  dark:text-white">
         {value.desc}
            </h5>
          </div>
        </div>
        )}
      </div>
      {selectedImage && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={() => setSelectedImage(null)}>
      <div className="absolute inset-0 flex justify-center items-center">
        <img src={selectedImage} alt="Selected Image" className="max-w-full max-h-full" />
      </div>
    </div>
      )}
    </>
  );
};

export default Latestnews;
