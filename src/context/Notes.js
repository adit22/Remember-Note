import React,{createContext,useReducer} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {reducer as Notesreducer,initialstate} from '../reducer/Notesreducer'

export const Notes = createContext()


export const Notesprovider=({children})=>{
    
    const [state,dispatch]= useReducer(Notesreducer,initialstate)
    return(
        <Notes.Provider value={{state:state,dispatch:dispatch}}>

        {children}
        </Notes.Provider>
    )
}