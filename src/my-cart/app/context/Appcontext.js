import { createContext } from 'react';
import { initialState } from './../../data';
import { reducer } from './../reducer/AppReducer';
import { useReducer } from 'react';
export const AppContext=createContext({});

export const AppProvider=({children})=>{
    const [stateApp, dispatchApp] = useReducer(reducer, initialState)
    return (
        <AppContext.Provider value={{state:stateApp,dispatch:dispatchApp}} >
            {children}
        </AppContext.Provider>
    )
}
