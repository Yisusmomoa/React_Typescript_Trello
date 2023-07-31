import {createContext, useState, useEffect} from 'react'
import { Theme } from '../types'
export const ThemeContext=createContext<{theme:Theme;
    setTheme:React.Dispatch<React.SetStateAction<Theme>> }> ({
        theme:'light',
        setTheme:()=>{}
    })

type ThemeContextProviderProps={
    children:React.ReactNode
}

export const ThemeProvider:React.FC<ThemeContextProviderProps>=({children})=>{
    const [theme, setTheme] = useState<Theme>((localStorage.getItem('theme'))as Theme || 'light')
    useEffect(() => {
        if(localStorage.getItem('theme')){
            const storedTheme=(localStorage.getItem('theme')) as Theme
            setTheme(storedTheme)
        }
    }, [])
    
    const data={theme, setTheme}
    return (
        <ThemeContext.Provider value={data} >
            {children}
        </ThemeContext.Provider>
    )
}
