import { Link } from 'react-router-dom'
import logo from '../assets/react.svg'
import {  useContext, useEffect } from 'react'
import { HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from '../context/ThemeContext';
const Header = () => {
  const {theme, setTheme} = useContext(ThemeContext)
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    localStorage.setItem("theme", theme)
  };
  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])
  
  return (
    <header className='flex justify-evenly w-full p-3 h-full
      border-solid border-2 border-sky-500 '>
      <Link to={'/'}>
        <img src={logo} alt='Logo'/>
      </Link>
      <div className='flex justify-end w-2/3 gap-10 '>
        <div className='flex gap-2'>
          <Link to={'/signin'}> <h2 className='text-[22px] font-bold 
            text-slate-900 dark:text-slate-300'>Iniciar sesión</h2> </Link>
          <Link to={'/signup'}> <h2 className='text-[22px] font-bold 
            text-slate-900 dark:text-slate-300'>Registro</h2> </Link>
        </div>
        <div>
          {
            theme==='light' ? <HiMoon className='bg-slate-200 text-slate-800 
              text-[35px] rounded-full p-1 cursor-pointer' onClick={toggleTheme} />
            : <HiSun className='bg-slate-200 text-slate-800 
              text-[35px] rounded-full p-1 cursor-pointer' onClick={toggleTheme} />
          }
        </div>
      </div>
    </header>
  )
}

export default Header