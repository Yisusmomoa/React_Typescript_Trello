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
    <header className='flex justify-evenly w-full h-4/5 p-3 items-center'>
      <Link to={'/'}>
        <img src={logo} alt='Logo' width={'50px'}/>
      </Link>
      <div className='flex justify-end w-2/3 gap-10 h-4/5 items-center '>
        <div className='flex h-full gap-14 items-center'>
          <Link to={'/signin'}> <h2 className='text-[26px] 
            text-slate-900 dark:text-slate-300 hover:font-semibold 
            transition-all ease-out duration-300'>Iniciar sesión</h2> </Link>
          <div>
            <Link to={'/signup'}> <h2 className='text-[26px] 
              text-slate-100 hover:font-semibold bg-[#4688FA] rounded-md py-1 px-2
              transition-all ease-out duration-300'>Registro</h2> </Link>
          </div>
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