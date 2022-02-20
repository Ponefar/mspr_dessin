import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsCompo from '../Faq'
import NewsLetterCompo from '../NewsLetter';

const Stack = createNativeStackNavigator();


const Us = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Us" 
                component={UsCompo}           
                options={{
                    headerShown: false 
                }}
            />
        </Stack.Navigator>
    )
}

const NewsLetter = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="NewsLetter" 
                component={NewsLetterCompo}           
                options={{
                    headerShown: false 
                }}
            />
        </Stack.Navigator>
    )
}
export { Us, NewsLetter}




