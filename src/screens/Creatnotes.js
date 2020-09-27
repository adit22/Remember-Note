import React,{useContext,useState} from 'react';
import { StyleSheet, Text, View, FlatList,Button,TouchableOpacity,TextInput } from 'react-native';
import {Notes} from '../context/Notes'
import { NavigationHelpersContext } from '@react-navigation/native';

const Createnotes=({navigation})=>{
const [title,settitle]=useState("")
const [content,setcontent]=useState("")
const {state,dispatch}=useContext(Notes)
    return (
        <View style={{flex:1,margin:10}}>

            <Text style={{fontSize:22}}>
                   Enter Title
            </Text>
              
                <TextInput style={style.input} 
                value={title}
                onChangeText={(text)=>settitle(text)}
                numberOfLines={2}
                multiline={true}
                />


<Text style={{fontSize:22}}>Enter Content</Text>        
    
             
                <TextInput style={style.input}
                value={content}
                onChangeText={(text)=>setcontent(text)}
                numberOfLines={10}
                multiline={true}
                />


                
    
<TouchableOpacity style={{backgroundColor:"blue",padding:10,margin:40,borderRadius:10}}  onPress={()=>{dispatch({type:"ADD",payload:{title,content}})
navigation.goBack()
}}>
    <Text style={{fontSize:22,color:"white",textAlign:"center"}}>Save</Text>
    </TouchableOpacity>
        </View>
    )
}
const style=StyleSheet.create({
    input:{
        fontSize:20,
        borderWidth:1,
        borderColor:"black",
        marginTop:20,
        elevation:4

    }
})
export default Createnotes