import {RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './router.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <RouterProvider  router={router}/>
  </ThemeProvider>
)
