import React, {useState} from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkSide from '../hooks/useDarkSide';


const Switcher = () => {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true: false);

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked)
    }
  
  
    return (
    <div className='m-16 flex flex-xol items-center'>
        <DarkModeSwitch 
            checked = {darkSide}
            onChange= {toggleDarkMode}
            size = {42}
        />
    </div>
  )
}

export default Switcher