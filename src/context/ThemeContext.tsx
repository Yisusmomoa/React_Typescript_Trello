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
            const storedTheme:Theme=(localStorage.getItem('theme')) as Theme || 'light'
            setTheme(storedTheme)
        }
    }, [])
    /*
    as Theme: En TypeScript, as se utiliza para realizar una "Type Assertion" o "aserción de tipo". 
    Indica al compilador que se espera que el valor retornado por localStorage.getItem('theme') sea del tipo Theme.
    Es similar a un casteo en otros lenguajes.

    || 'light': El operador de doble barra vertical || se denomina operador de coalescencia nula o nullish coalescing operator.
    En este contexto, se utiliza como una expresión condicional.
    Si el valor obtenido de localStorage.getItem('theme') es falsy (equivalente a null, undefined, 
        false, 0, '', o NaN), entonces se asigna el valor 'light' a storedTheme.
    Esto se conoce como "short-circuiting" o "cortocircuito".
    */
    const data={theme, setTheme}
    return (
        <ThemeContext.Provider value={data} >
            {children}
        </ThemeContext.Provider>
    )
}
