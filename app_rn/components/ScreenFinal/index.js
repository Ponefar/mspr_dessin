import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Platform, Share, Dimensions, ActivityIndicator  } from 'react-native';
import axios from 'axios';
import ViewShot from 'react-native-view-shot';
import Toast from 'react-native-toast-message';
import Partager from '../../img/partager.png';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const ScreenFinal = ({route}) => {

  const [colorOne, setColorOne] = useState('')
  const [colorTwo, setColorTwo] = useState('')
  const [colorThree, setColorThree] = useState('')
  const [colorFour, setColorFour] = useState('')
  const [colorFive, setColorFive] = useState('')
  const [loading, setLoading] = useState('')

  const photo = route.params.photo;
  const title = route.params.title // IMG 3D a scanner

  useEffect(() => {
    if(colorOne != '' && colorTwo != '' && colorThree != '' && colorFour != '' && colorFive != '') {setLoading('none')}
  })

    const GetColorPixel = async() => { 
      await axios({
        method: 'POST',
        url:'https://nodejsapigetpixelcolor.herokuapp.com/api/v1/extractcolors',
        data: {
          "base64image": await photo.base64,
          "clickdata": [
            {
              "x": title === 'Tyrex' ? 25 : (title === 'Monkey' ? 50 : 20),
              "y": title === 'Tyrex' ? 25 : (title === 'Monkey' ? 50 : 20),
            },
            {
              "x": title === 'Tyrex' ? 25 : (title === 'Monkey' ? 50 : 20),
              "y": title === 'Tyrex' ? 25 : (title === 'Monkey' ? 50 : 20),
            },
            {
              "x": title === 'Tyrex' ? 25 : (title === 'Monkey' ? 50 : 20),
              "y": title === 'Tyrex' ? 25 : (title === 'Monkey' ? 50 : 20),
            },
            {
              "x": title === 'Tyrex' ? 25 : (title === 'Monkey' ? 50 : 20),
              "y": title === 'Tyrex' ? 25 : (title === 'Monkey' ? 50 : 20),
            },
            {
              "x": title === 'Tyrex' ? 25 : (title === 'Monkey' ? 50 : 20),
              "y": title === 'Tyrex' ? 25 : (title === 'Monkey' ? 50 : 20),
            }
          ]
        }
      })
      .then((response) => {
        setColorOne(response.data[0][0] +','+response.data[0][1]+','+response.data[0][2]+','+response.data[0][3])
        setColorTwo(response.data[1][0] +','+response.data[1][1]+','+response.data[1][2]+','+response.data[1][3])
        setColorThree(response.data[2][0] +','+response.data[2][1]+','+response.data[2][2]+','+response.data[2][3])
        setColorFour(response.data[3][0] +','+response.data[3][1]+','+response.data[3][2]+','+response.data[3][3])
        setColorFive(response.data[4][0] +','+response.data[4][1]+','+response.data[4][2]+','+response.data[4][3])
      })
    }

    useEffect(() => {
      GetColorPixel()
    }, [])

    let viewShotRef = useRef()
    async function captureAndShareScreenshot() {
      const imageUri = await viewShotRef.current.capture()
      
        // if(Platform.OS === 'ios') {
          Share.share({url: imageUri})  
        // } else {
          
        //   } else {
        //     Toast.show({
        //       type: 'error',
        //       text1: 'Erreur : merci de rééssayez plus tard',
        //     });          
        //   }
        // })
        // .catch((err) => {
        //   Toast.show({
        //     type: 'error',
        //     text1: err + ' :  merci de rééssayez plus tard',
        //   });          
        // })
      // }
    }
  return (
    <>
      <View>
      <View style={[styles.loading, {display:loading}]}>
        <Text style={{color:'orangered', fontSize:25, marginBottom:20}}>Loading</Text>
        <ActivityIndicator size="large" color="black" />
      </View>
      <ViewShot
        ref={viewShotRef}
        options={{quality: 1}}
        style={{zIndex:1}} > 
              <View style={[styles.blockColor, styles.blockColorOne, {backgroundColor:'rgba('+colorOne+')'}]}><Text>Zone 1  </Text></View>
      <View style={[styles.blockColor, styles.blockColorTwo, {backgroundColor:'rgba('+colorTwo+')'}]}><Text>Zone 2  </Text></View>
      <View style={[styles.blockColor, styles.blockColorThree, {backgroundColor:'rgba('+colorThree+')'}]}><Text>Zone 3  </Text></View>
      <View style={[styles.blockColor, styles.blockColorFour, {backgroundColor:'rgba('+colorFour+')'}]}><Text>Zone 4  </Text></View>
      {title === 'Snake' ? <Text style={{display:'none'}}></Text> : <View style={[styles.blockColor, styles.blockColorFive, {backgroundColor:'rgba('+colorFive+')'}]}><Text>Zone 5  </Text></View>}

          <Image source={{ uri: photo.uri}} style={{width:100+'%',height:100+'%'}}/>   
          <TouchableOpacity
            style={styles.btn}
            onPress={captureAndShareScreenshot}
          >
            <Text style={styles.textBtn}><Image source={Partager} style={{width:70,height:70}} /></Text>
            {/* <Text style={{backgroundColor:'rgba('+colorFive+')'}}>AAAAAAAAAAAAAAAAA</Text> */}
          </TouchableOpacity>

      </ViewShot>
      <Toast />
      </View>

    </>
  );
}

const styles = StyleSheet.create({

  blockColor : {
    position:'absolute',
    left:0,
    width:50,
    height:50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    left:0,
    zIndex:2
  },
  blockColorOne: {
    top:0,
  },
  blockColorTwo: {
    top:50,
  },
  blockColorThree: {
    top:100,
  },
  blockColorFour: {
    top:150
  },
  blockColorFive: {
    top:200,
  },


  loading: {
    backgroundColor:'white',
    width:vw(100),
    height:vh(100),
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    opacity:1,
    top:-150,
    left:0,
    zIndex:3
  },

  none: {
    display:'none'
  },
  background: {
    width:100+'%',
    height:100+'%',
  },
  btn: {
    position:'absolute',
    top:87+'%',
    left:25,
  },

  textBtn: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor:'white',
    borderWidth: 1,
    borderRadius:20,
    borderColor: '#fff',
    overflow:'hidden',
  },
})
export default ScreenFinal