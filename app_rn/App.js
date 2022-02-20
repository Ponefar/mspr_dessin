import * as React from 'react';
import { Button, View, Text, StyleSheet, LogBox, Image, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import imgUs from './img/Faq.png';
import imgPhoto from './img/Photo.png';
import imgNewsLetter from './img/newsLetter.png';
import logo from './img/logo.png';
import StackModeles from './components/Navigation/stackModeles';
import { Us, NewsLetter} from './components/Navigation/tabsModeles';
LogBox.ignoreLogs(['Remote debugger']);

const Bottom = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
    
      <Bottom.Navigator
        screenOptions={() => ({ 
            tabBarActiveTintColor: 'orangered',
            tabBarInactiveTintColor: 'black',
            tabBarStyle:{backgroundColor:'white'},
            
        })}
      >
        <Bottom.Screen
          name="UsApp" 
          component={Us} 
          // component={StackModeles} 
          options={{
            headerLeft: () => (
              <Image 
                style={styles.imgLogo}
                source={logo} />
              ),
            headerShown: true,
            title: 'FAQ',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={imgUs}
                />
              );
            },
          }}/>
        <Bottom.Screen 
          name="ChoosePictureApp" 
          component={StackModeles} 
          options={{
            headerLeft: () => (
              <Image 
                style={styles.imgLogo}
                source={logo} />
              ),
            headerShown: true,
            title: 'DRAW',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={imgPhoto}
                />
              );
            },
          }}/>   
          <Bottom.Screen
          name="NewsLetterApp" 
          component={NewsLetter} 
          options={{
            headerLeft: () => (
              <Image 
                style={styles.imgLogo}
                source={logo} />
              ),
            headerShown: true,
            title: 'NEWSLETTER',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={imgNewsLetter}
                />
              );
            },
          }}/> 
      </Bottom.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  imgLogo: {
    ...Platform.select ({
      ios: {
        width:60, maxHeight:100+'%',
        marginLeft:5
      },
      android: {
        width:80, maxHeight:100+'%'
      },

    })
  }
})

export default App;