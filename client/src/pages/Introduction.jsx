import React from 'react';
import { LogoBanner } from '../assets';
import { Carousel } from '../components';


const Introduction = () => {
  return (
    <div className="dark:bg-[#1c1c24] bg-[#DEE4E7] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
        <h1 className='text-[#4acd8d] font-extrabold text-4xl mb-2'>Welcome to Fair Funders</h1>
        <h2 className='dark:text-white text-black font-bold mb-2 text-2xl'>Who are we?</h2>
        <p className='mb-2 dark:text-white text-black'>We were created to promote wealth equality throughout the world, and update the fundraising world to the 21st centruy.
        </p>
        <div className='w-[350px] p-2 m-2'>
          <img src={LogoBanner} className =' object-cover  'alt="Logo Banner" />
        </div>

        <p className='dark:text-white text-black mb-2'>Using thirdWeb and crytpocurrency technology, you can fund grassroot initiatives whilst insuring 100% of your money
                      makes it directly to the people who need it. Unlike traditional NGOs and fundrasing technolgies  </p>

        
        <p className='dark:text-white text-black mb-4'>Unlike traditional NGOs and fundraising technologies using cryptocurrency insures limited
 transfer currency and conversion fees. Further, no money is absorbed for unnecessary corporation wages and poor organization but instead you can 
 be happy that all of your donation will reach exactly who you want it to.   </p>
    
 <h2 className='dark:text-white text-black font-bold text-2xl'>Succesful Projects</h2>

 <div className='p-3'>
  <Carousel />
 </div>






 


    
    
    </div>

  

  )
}

export default Introduction