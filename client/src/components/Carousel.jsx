import React, {useState} from 'react';
import { DogProject, SchoolProject, ElephantProject } from '../assets';

import CarouselCard from './CarouselCard';


import { left, right, leftWhite, rightWhite } from '../assets';




const data = [
  {
    src: DogProject,
    title: 'Dog Project',
    ul1: 'Rehomed 15 Stray dogs in 2022 ',
    ul2: 'Provided Food for 40+ dogs.'
   },

   {
    src: SchoolProject,
    title: 'School Project',
    ul1: 'Prevented a vital local school from closing down. ',
    ul2: 'Provided important School materials for 50 children'
   },

   {
    src: ElephantProject ,
    title: 'Elephant Project',
    ul1: 'Helped the organization rescue over 10 endangered elephants ',
    ul2: 'Provided food and medicine for over 50 elephants'
   }

   ,

   {
    src: 'https://static.workaway.info/gfx/foto/6/2/3/7/9/623792425971/xl/623792425971_165833897504586.jpg',
    title: 'Non-profit women association ',
    ul1: 'Promoted the participation of women in local development projects ',
    ul2: 'Had over 100 participants in one year.'
   },

   {
    src: 'https://static.workaway.info/gfx/foto/7/4/2/7/1/742719861838/xl/742719861838_166561022607217.jpg',
    title: 'Youth Leaderahip',
    ul1: 'Developed youth entrepreneurship and leadership through art, music, culture, sports, and academia',
   },

   {
    src: 'https://static.workaway.info/gfx/foto/9/2/3/6/2/923626153183/xl/92846.jpg' ,
    title: 'Eco permaculture sanctuary',
    ul1: 'Stayed open throughout the pandemic',
    ul2: 'Revitalised a local eco-system'
   }


]








const Carousel = () => {
  
  const [cardIndexes, setcardIndexes] = useState([0, 1, 2 ]);



  // Shifts everything in the carousel up by one 
  const moveCarouselRight = () => {
    const updatedIndexes = cardIndexes.map(a => a+1);
    for(let i = 0; i<3 ; i++) {
      if (updatedIndexes[i] > 5) {
        updatedIndexes[i] = 0
      }
    setcardIndexes(updatedIndexes)
    console.log(cardIndexes)
  }}

  const moveCarouselLeft = () => {
    const updatedIndexes = cardIndexes.map(a => a-1);
    for(let i = 0; i<3 ; i++) {
      if (updatedIndexes[i] < 1 ) {
        updatedIndexes[i] = 5
      }
    setcardIndexes(updatedIndexes)
    console.log(cardIndexes)
    }}

  return (





    <div className='flex flex-wrap items-center justify-center'>
      <img src={leftWhite} alt="arrowLeft" className=" cursor-pointer brightness-0  dark:brightness-100 w-[40px] h-[40px] sm:h-[60px] sm:w-[60px] object-contain" onClick={moveCarouselLeft}/>
              <CarouselCard  
                src ={data[cardIndexes[0]].src}
                title = {data[cardIndexes[0]].title}
                ul1 = {data[cardIndexes[0]].ul1}
                ul2 = {data[cardIndexes[0]].ul2}
              />

              <div className = 'hidden xl:block '>
                <CarouselCard  
                src ={data[cardIndexes[1]].src}
                title = {data[cardIndexes[1]].title}
                ul1 = {data[cardIndexes[1]].ul1}
                ul2 = {data[cardIndexes[1]].ul2}
              />
              </div>


              <div className = 'hidden xl:block '>
                <CarouselCard  
                  src ={data[cardIndexes[2]].src}
                  title = {data[cardIndexes[2]].title}
                  ul1 = {data[cardIndexes[2]].ul1}
                  ul2 = {data[cardIndexes[2]].ul2}
                />
              </div>

    <img src={leftWhite} alt="arrowRight" className="cursor-pointer brightness-0  dark:brightness-100 w-[40px] h-[40px] sm:h-[60px] sm:w-[60px]  object-contain transform -scale-x-100 " onClick={moveCarouselRight} />

    </div>
  )
}

export default Carousel