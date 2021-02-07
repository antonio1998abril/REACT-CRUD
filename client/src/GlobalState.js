
import React, {createContext} from 'react'
import TutorialAPI from './components/api/TutorialAPI'
export const GlobalState=createContext()

export const Dataprovider=({children})=>{

    const state={
    tutorialAPI:TutorialAPI()
    }
    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}

