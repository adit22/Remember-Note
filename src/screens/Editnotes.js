import React,{useContext,useState} from 'react';
import { StyleSheet, Text, View, FlatList,Button,TouchableOpacity,TextInput } from 'react-native';
import {Notes} from '../context/Notes'
import { NavigationHelpersContext } from '@react-navigation/native';

const Editnotes=({navigation,route})=>{
    const {id}=route.params;

const {state,dispatch}=useContext(Notes)
const particularnote=state.find
((record)=>{
return record.id === id
})
const [title,settitle]=useState(particularnote.title)
const [content,setcontent]=useState(particularnote.content)
    return (
        <View style={{flex:1,margin:10}}>

            <Text style={{fontSize:22}}>
                   Edit Title
            </Text>
              
                <TextInput style={style.input} 
                value={title}
                onChangeText={(text)=>settitle(text)}
                numberOfLines={2}
                multiline={true}
                />


<Text style={{fontSize:22}}>Edit Content</Text>        
    
             
                <TextInput style={style.input}
                value={content}
                onChangeText={(text)=>setcontent(text)}
                numberOfLines={10}
                multiline={true}
                />


                
    
<TouchableOpacity style={{backgroundColor:"blue",padding:10,margin:40,borderRadius:10}}  onPress={()=>{dispatch({type:"UPDATE",payload:{id,title,content}})
navigation.navigate("Listnotes")
}}>
    <Text style={{fontSize:22,color:"white",textAlign:"center"}}>Update</Text>
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
export default Editnotes