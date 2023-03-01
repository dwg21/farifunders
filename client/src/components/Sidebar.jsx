import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Tooltip from "react-simple-tooltip"

import { logo, sun, FairFunder2, Home } from '../assets';
import { navlinks } from '../constants';
import Switcher from './Switcher';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div className={`w-[48px] h-[48px] rounded[10px] ${isActive && isActive === name & 'bg-[#2c2f32]'} flex justify-center items-center
  ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl} alt='fund_logo' className='w-1/2 h-1/2' />
    ) : (
      <img src={imgUrl} alt='fund_logo' className={`w-1/2 h-1/2 ${isActive !== name && 'brightness-0	dark:grayscale dark:brightness-100'}`} />
    )
    }
  </div>
)

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  return (

    <div className='flex justify-between items-center flex-col sticky
    top-5 h-[93vh] '>
      <Link to='/'>
      <img className='w-[52px] h-[52px]' src={FairFunder2} alt="" />
      </Link>

      <div className='flex-1 flex flex-col justify-between items-center bg-[#DEE4E7] dark:bg-[#1c1c24]
      rounded-[20px] w-[76px] py-4 mt-12'>
        <div className="flex flex-col justify-center items-center gap-3">

          {navlinks.map((link) => (

            <Tooltip content = {link.name}>
              <Icon
                  key={link.name}
                  {...link}
                  isActive={isActive}
                  handleClick={() => {
                    if (!link.disabled) {
                      setIsActive(link.name);
                      navigate(link.link);
                    }
                  }}
                />
              </Tooltip>

              
            

          ))}
        </div>

        {/* < Icon styles = 'bg-[#1c1c24] shadow-secondary' imgUrl={sun}/> */}
        <Switcher />

      </div>
    </div>
  )
}

export default Sidebar