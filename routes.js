import React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from './screens/Home';

const Stack = createNativeStackNavigator();

const Routes = () => {
     return(
          <Stack.Navigator
               screenOptions={{
                    headerShown: false,
                    
               }}
               initialRouteName={'Home'}
               
               
          >
               <Stack.Screen
                    name='Home'
                    component={Home}
                    
                    options={{
                         Animation: 'slide_from_left'
                    }}
               />
          </Stack.Navigator>
     )
}



export default Routes;