import {useContext} from 'react'
import todo from '../assets/todo.svg'
import waveLight2 from '../assets/waveLight.svg'
import waveDark2 from '../assets/waveDark.svg'
import { ThemeContext } from '../context/ThemeContext'

// pasar el correo a registrar a través de props a la pagina signup
const Home = () => {
  const {theme} = useContext(ThemeContext)
  return (
   <>
    <div>
      <img src={theme==='light'? waveLight2 : waveDark2} className='w-full ' />     
    </div>
    <div>
      {/* <img src={todo} width={'75px'}/> */}
    </div>
   </>
  )
}

export default Home