import React from 'react';
import "../Styles/font.css";
import imgabut from "../Images/ment1.jpg";
import imgabut1 from "../Images/member.jpg"

const Agritech = () => {
  return (
 <>
  <div className='bg-aboutus bg-cover bg-center h-72 flex justify-center items-center ' data-aos="fade-down">
        <div className="text-center">
          <h1 className='text-white py-2 text-6xl'>Agri Tech</h1>
      
        </div>
      </div>
    <div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-9 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark">
    <h1 className='text-3xl py-4 font-bold'>Agri Tech</h1>
    <div className='lg:flex justify-center gap-8 text-white lg:px-8 lg:py-6 px-2 '>
        <div className='bg-events py-4 px-6 rounded-lg  mb-4 '>
            <h1 className='text-xl py-2 font-bold'>OUR VISION:</h1>
            <p>To Deliver Agricultural Technology Solutions of World Class Standards, Promote Agripreneurship & Remain Socially Responsive</p>
        </div>
        <div className='bg-events py-4 px-6 rounded-lg mb-4'>
            <h1 className='text-xl py-2 font-bold'>OUR MISSION: </h1>
            <p>To go beyond the ordinary, to deliver the perceived impossible, in the Quest for Innovation, Creativity &Sustainable Solutions.</p>
        </div>
        <div className='bg-events py-4 px-6 rounded-lg mb-4'>
            <h1 className='text-xl py-2 font-bold'>OUR VALUES: </h1>
            <p>Entrepreneurial, Excellence, Ethics, Trust, Innovation & Creativity, Team Work, Passion for Capacity Development &Continuous Learning.</p>
        </div>
    </div>
    <div>
    <h1 className='text-3xl py-2 font-bold'>About AAB</h1>
    <p className='text-justify'>AgriTech refers to the emerging opportunities for the Technology, products& services that supports Agricultural Domain to meet the needs of a projected 10 Billion global inhabitants by 2050. AgriTech Advisory Board brings together the distinguished expertise equally from the 'agricultural' domain as well as the 'technology' in all its dimensions. The challenges are the opportunities for these expert-resources to evolve appropriate technology across the given agricultural value chains. Enhancing Productivity, Efficiency & Proficiency as well as Profitability to every stakeholder across the agricultural value chain. Every dimension of technological innovations are explored to create sustainable enhancements & evolve business opportunities for every stakeholder across the agricultural value chain. Illustrative, though not exhaustive, features from the dynamic technology world are:</p>
    </div>
    <div className='lg:flex justify-between'>
    <div>
    <ul className='list-disc lg:px-9 px-4'>
        <li> Big data & Predictive Analytics </li>
        <li>Supply chain, Communication and Logistics - Smart Management adopting wide ranging ICT solutions</li>
        <li>IOT-'internet of things’, Precision Agriculture initiatives adopting the sensors </li>
        <li>Robotics and automation</li>
        <li> Biotechnology</li>
        <li>UAVs, their supporting software, hardware and sensing technology</li>
        <li>Smart technology adaptations towards managing natural resources - Energy, Water, Flora & Fauna, Soil & Air </li>
        <li>Skilling manpower</li>
        
    </ul>

    
   
    <h1 className='text-3xl py-2 font-bold'>Core Objectives And Business Philosophy:</h1>
    <ul className='list-disc lg:px-9 px-4'>
        <li>Mission Driven Strategies</li>
        <li>Delivers Agricultural Technology Solutions </li>
        <li>Social purpose business objectives, performing technical and commercial entrepreneurial activities, achieving sustainability  </li>
        <li>Acts Entrepreneurially & Professional Approach, with strong culture of innovation, creativity and openness </li>
        <li>	Partnering Alliance only with entrepreneurially oriented organisations </li>
        <li>Performs as financially independent organisation, plans & time bound execution</li>
        <li>Focus on activities creating social impact & generates profits</li>
        <li>Proactive mobilization of donations, grants and aids</li>
        <li>Founders & Investors benefit personally with monitory gains</li>
       
    </ul>
    </div>
    <div>
    <img className='p-4' src={imgabut1} alt='..'/>
        <img className='p-4' src={imgabut} alt='..'/>
      
    </div>
    </div>
    
    </div>
  

 </>
  )
}

export default Agritech
