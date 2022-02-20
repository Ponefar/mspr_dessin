import * as React from 'react';
import { Button, View, Text, StyleSheet, LogBox, Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Camera from '../Camera';
import ChoosePicture from '../ChoosePicture';
import ScreenFinal from '../ScreenFinal';

const Stack = createNativeStackNavigator();

const StackModeles = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="ChoosePicture" 
                component={ChoosePicture}           
                // component={ScreenFinal}           
                options={{
                    headerShown: false 
                }}
            />
            <Stack.Screen 
                name="Camera" 
                component={Camera}
                options={{
                    headerShown: true,
                    title:'Revenir aux modèles'
                }}
            />
            <Stack.Screen 
                name="ScreenFinal" 
                component={ScreenFinal}           
                options={{
                    headerShown: true ,
                    title:'Caméra'
                }}
            />
        </Stack.Navigator>
    )
}

export default StackModeles




