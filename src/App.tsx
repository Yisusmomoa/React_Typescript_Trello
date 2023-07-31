import Header from "./components/Header"
import Main from "./components/Main"
import { useContext } from 'react'
import { ThemeContext } from "./context/ThemeContext"
function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`${theme}
      ${theme=='dark' ? 'bg-zinc-900':null} min-h-[100vh]`  }>
      <Header/>
      <Main/>
    </div>
  )
}

export default App
