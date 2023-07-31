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
    <header className='flex justify-around w-full p-3
      border-solid border-2 border-sky-500 '>
      <img src={logo} alt='Logo'/>
      <div className='flex'>
        <Link to={'/signin'}><h2>Iniciar sesión</h2></Link>
        <Link to={'/signup'}><h2>Registro</h2></Link>
      </div>
      <div>
        {
          theme==='light' ? <HiMoon className='bg-slate-200 text-slate-800 
            text-[35px] rounded-full p-1 cursor-pointer' onClick={toggleTheme} />
          : <HiSun className='bg-slate-200 text-slate-800 
            text-[35px] rounded-full p-1 cursor-pointer' onClick={toggleTheme} />
        }
        
       
      </div>
    </header>
  )
}

export default Header