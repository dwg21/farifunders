import React from 'react'

import { DogProject, SchoolProject, ElephantProject } from '../assets';


const CarouselCard = ({src, title, ul1, ul2}) => {
  return (
    <div className=' rounded-[15px] w-[300px] h-[390px] bg-[#3a3a43] dark:bg-[#DEE4E7] m-4 '>
        <div className='dark:bg-[#3a3a43] bg-slate-100 rounded-t-[15px]  '>
        <img className='w-full h-[158px] object-cover rounded-[15px]' src={src} alt = 'project image' />
        <h1 className=' text-xl dark:text-white text-black font-extrabold text-center font-epilogue font-large p-3'>{title}</h1>
    </div >
      <p className='text-center text-white dark:text-black p-1 py-3 font-semibold	'>With your help this project :</p>
      <ul className=' text-white dark:text-black list-disc px-8 '>
        <li>{ul1}</li>
        {ul2 && <li>{ul2}</li> }
      </ul>
  </div>
  )
}

export default CarouselCard