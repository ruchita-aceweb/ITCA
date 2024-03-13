import React from 'react';
import "../Styles/font.css";
import imgsrc from "../Images/modi.jpg";
import imgsrc1 from "../Images/Membership.jpg";

const Temple = () => {
  return (
  <>
   <div class='bg-strategy bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
    <div class="text-center">
      <h1 class='text-white py-2 text-6xl'>Temple Engineering</h1>
      <p class='text-white text-xl'>Home/Temple Engineering</p>
    </div>
  </div>
  <div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-9 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark">
  <h1 className='text-3xl py-4 font-bold'>Temple Engineering</h1>
  <p className='text-justify'>Whispers in Heritage Decoding the Symbolic Temple Engineering</p>
  <p className='text-justify'>Ancient innovators defied gravity and time, crafting structures of beauty and engineering prowess. Temple engineering, a blend of art and science, holds forgotten knowledge within the sands of time. Modern technology now seeks to unlock these secrets, using algorithms to reveal insights into divine design.</p>
  <div>
    <p className='font-semibold text-lg mt-2'>Ancitent Wisdom For Modern Times Exploring the Relevance of Temples Today</p>
    </div>
    <div className='lg:flex justify-between'>
    <div  className='px-6 lg:w-1/2'>
   <h1 className='font-bold text-lg mt-2'> Precision and Symbolism:</h1>
   <p className='text-justify'>Uncover the mathematical harmony within temple layouts, revealing geometric patterns. Dive into the symbolism of architectural elements, using 3D modeling to visualize the intricate design.</p>
   <p className='text-justify'>Materials and Structural Perfection Analyze foundation Engineering guiding ancient structural choices. Employ modern computational tools, integrating mathematics, to preserve and restore the enduring resilience of temple constructions.</p>
   <h1 className='font-bold text-lg mt-2'> Astronomy and Design:</h1>
   <p className='text-justify'>Explore celestial alignments with scientific precision. Decode ancient calculations, merging modern mathematical and astronomical tools to unveil the cosmic connections within temple complexes.</p>
   <h1 className='font-bold text-lg mt-2'> Hydrological Systems</h1>
   <p className='text-justify'>Unravel the mathematical design of ancient water systems. Merge hydrological studies with mathematical modeling for a comprehensive understanding and preservation of these sacred hydraulic structures.</p>
   <p className='text-justify'>Innovative Tools and Craftsmanship Examine the mathematical principles behind ancient tools and craftsmanship. Integrate engineering algorithms into cutting-edge technologies, preserving and replicating intricate details with precision.</p>
   <p className='text-justify'>Modern Technologies and Interpretation Employ precision space technologies in surveying, including LiDAR and drones. Harness Al and machine learning for in-depth analysis, while using virtual and augmented reality to create immersive, historically rich experiences.</p>
   <p className='text-justify'>The project, initiated by the Indian Technology Congress Association, aims to shed light on the remarkable engineering prowess embedded in temples, showcasing the intersection of mathematics, science, and artistry that gave rise to these monumental structures. Focused on sensitizing the audience to the intricate amalgamation of ancient knowledge and contemporary insights, the project delves into the application of mathematical principles and scientific understanding in the construction of massive temples.</p>
   <p className='text-justify'>By unraveling the mysteries behind the engineering marvels of temples, the initiative seeks to highlight how ancient architects ingeniously employed mathematical precision and scientific principles to defy physical limitations. Moreover, the project explores the potential contributions of modern engineering to the preservation, restoration, and even reinterpretation of these historic structures.</p>
   <p className='text-justify'>The ITCA spearheads this endeavor with the intent to bridge the gap between historical engineering brilliance and modern technological advancements. Through a comprehensive exploration of the symbiotic relationship between ancient wisdom and contemporary innovation, the project aspires to inspire a deeper appreciation for the engineering marvels of temples and foster a dialogue on the relevance of this knowledge in the context of today's technological landscape.</p>
 
   </div>
   <div className='lg:w-1/2 '>
    <img className='p-4' src={imgsrc} alt='..'/>
    <img className='p-4' src={imgsrc1} alt='..'/>
   </div>
 </div>
  </div>
  
  </>
  )
}

export default Temple