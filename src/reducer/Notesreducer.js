import React,{useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export const initialstate=[
    
]

export const reducer=(state,{type,payload})=>{
    switch(type){
        case "ADD":
            return [...state,{id:Math.random(),title:payload.title,content:payload.content}]
        case "REMOVE":
            return state.filter((note)=>payload!==note.id)
        case "UPDATE":
            return state.map(record=>{
                if(payload.id === record.id){
                    return payload
                }
                else{
                    return record
                }
                 
            })
            return state.filter((note)=>payload!==note.id)
        default:
            return state
    }
    
}