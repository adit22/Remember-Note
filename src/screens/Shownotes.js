import React,{useContext,useState} from 'react';
import { StyleSheet, Text, View, FlatList,Button,TouchableOpacity,TextInput } from 'react-native';
import { exp } from 'react-native-reanimated';
import {Notes} from '../context/Notes'
import {AntDesign} from '@expo/vector-icons'

const Shownotes=({route,navigation})=>{

    const {id}=route.params
    const {state}=useContext(Notes)
    const note = state.find((record)=>{
        return record.id === id
    })
    return (

        <View style={{margin:40}}>
<View style={{alignItems:"center"}}>

    <TouchableOpacity
            style={{
                marginLeft:5,
                backgroundColor:"blue",
                height:60,
                width:60,
                borderRadius:30,
                alignItems:"center",
                justifyContent:"center",
                marginBottom:20
            


            }}

            onPress={()=>navigation.navigate("Editnotes",{id:id})}
            >
                <AntDesign name="edit" size={30} color="white" />
            </TouchableOpacity>
</View>
    <Text style={{fontSize:32,textAlign:"center",borderWidth:1,marginHorizontal:10,elevation:2}}>{note.title}</Text>
            <Text style={{fontSize:24,textAlign:"center",marginTop:40}}>{note.content}</Text>
        </View>
    )
}
export default Shownotes