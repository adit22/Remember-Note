import React,{useContext} from 'react';
import { StyleSheet, Text, View, FlatList,Button,TouchableOpacity } from 'react-native';
import {Notes} from '../context/Notes'
import {AntDesign} from '@expo/vector-icons'
const Listnotes=({navigation})=>{
    const {state,dispatch}=useContext(Notes)
    return(
        <View style={{flex:1,alignItems:"center"}}>
            <TouchableOpacity
            style={{
                marginLeft:5,
                marginTop:10,
                backgroundColor:"blue",
                height:60,
                width:60,
                borderRadius:30,
                alignItems:"center",
                justifyContent:"center"


            }}

            onPress={()=>navigation.navigate("Createnotes")}
            >
                <AntDesign name="plus" size={30} color="white"/>
            </TouchableOpacity>
            {/* <Button title="add" onPress={()=>dispatch({type:"ADD"})}/> */}
<FlatList data={state}
keyExtractor={item=>item.title}
renderItem={({item})=>{
return(
<TouchableOpacity
onPress={()=>navigation.navigate("Shownotes",{id:item.id})}
>
<View style={{flexDirection:"row",justifyContent:"space-between",padding:10,elevation:4,marginBottom:5,backgroundColor:"white",marginVertical:20}}>
<Text>{item.title}</Text>
{/* <Text>{item.id}</Text> */}
<AntDesign name="delete" size={24} style={{marginLeft:100}}
onPress={()=>dispatch({type:"REMOVE",payload:item.id})}
/>
</View>
</TouchableOpacity>
)
}}
/>

   </View>     
    )
}

export default Listnotes