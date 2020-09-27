import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Listnotes from './src/screens/Listnotes'
import {Notesprovider} from './src/context/Notes'
import Createnotes from './src/screens/Creatnotes'
import Shownotes from './src/screens/Shownotes' 
import Editnotes from './src/screens/Editnotes'
const stack=createStackNavigator()
 function App() {


  return (
    <NavigationContainer>

      <stack.Navigator>
        <stack.Screen name="Listnotes" component={Listnotes}
        options={{
          headerTitleAlign:"center",
          title:"All Notes"
        }}
        />
        <stack.Screen name="Createnotes" component={Createnotes}
        options={{
          headerTitleAlign:"center",
          title:"Create Notes"
        }}
        />
        
        <stack.Screen name="Shownotes" component={Shownotes}
        options={{
          headerTitleAlign:"center",
          title:"Your Notes"
        }}
        />
        <stack.Screen name="Editnotes" component={Editnotes}
        options={{
          headerTitleAlign:"center",
          title:"Edit Your Notes"
        }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
export default ()=>{
  return(
    <Notesprovider >

      <App />
    </Notesprovider>
    
  )
}

