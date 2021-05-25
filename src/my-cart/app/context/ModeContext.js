import { useState } from 'react';
import { createContext } from 'react';

export const ModeContext=createContext({});

export const ModeProvider=({children})=>{
    const [mode, setMode] = useState(true);
    return (
        <ModeContext.Provider value={{mode,setMode}} >
            {children}
        </ModeContext.Provider>
    )
}
