import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Camera } from 'expo-camera';
import Tyrex from '../../img/tyrex.png'
import Snake from '../../img/snake.png'
import Monkey from '../../img/monkey.png'

const CameraScreen = ({navigation, route}) => {
  let photoBackground = ""
    if(route !== undefined) {
        if (route.params.title === "Tyrex") {
            photoBackground = Tyrex
        }
        if (route.params.title === "Snake") {
            photoBackground = Snake
        }
        if (route.params.title === "Monkey") {
            photoBackground = Monkey
        }
    }else{
        photoBackground = Tyrex;
        //for the testing purposes.
    }
 const [hasPermission, setHasPermission] = useState(null);
 const [cameraRef, setCameraRef] = useState(null)
 const [type, setType] = useState(Camera.Constants.Type.back);
useEffect(() => {
 (async () => {
 const { status } = await Camera.requestCameraPermissionsAsync();
 setHasPermission(status === 'granted');
 })();
 }, []);
 
if (hasPermission === null) {
 return <View testID="InitView">
             <TouchableOpacity
                 testID="givePermissionTestBtn"
                 style={{
                     display:'none'
                 }}
                 onPress={() => {
                     setHasPermission('granted')
                 }}
             />
             <TouchableOpacity
                 testID="cancelPermissionTestBtn"
                 style={{
                     display:'none'
                 }}
                 onPress={() => {
                     setHasPermission(false)
                 }}
             />
        </View>;
 }
 if (hasPermission === false) {
 return <Text>No access to camera</Text>;
 }
 return (
 <View  testID="cameraView" style={{ flex: 1, justifyContent:'center' }}>
 <Text style={{textAlign:'center', padding:10,fontSize:12}}>Mettez votre calque dans la zone de l'apareil photo puis appuyez sur le bouton rouge en bas</Text>
 <TouchableOpacity
     testID="typeChangeBtn"
 style={{
 flex: 0,
 alignSelf: 'center',
 }}
 onPress={() => {
 setType(
 type === Camera.Constants.Type.back
 ? Camera.Constants.Type.front
 : Camera.Constants.Type.back
 );
 }}>
 </TouchableOpacity>
 <Camera  testID="cameraCom" style={{ flex: 1}} type={type} ref={ref => {
 setCameraRef(ref);
 }} autoFocus='on'>

<ImageBackground source={photoBackground} resizeMode="cover" 
  style={{
    zIndex:9999, 
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }} 
/>

 <TouchableOpacity
     testID="captureBtn"
     style={{
       width:100+'%',
       alignSelf: 'center',
       justifyContent:'center',
       backgroundColor:'white',
       borderTop:'2px solid black',
       flex: 0.10,
       alignItems: 'center',

      }}
     onPress={async() => {
         if(cameraRef){
          let photo = await cameraRef.takePictureAsync({base64:true, quality:0.1});
          navigation.navigate('ScreenFinal',{'photo':photo,'title':route.params.title});
         } else {
           alert('Error')
         }
    }}
 >

     <View style={{
 borderWidth: 2,
 borderColor: 'red',
 height: 33,
 width:33,
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center'}}
 >
 <View style={{
 borderWidth: 2,
 borderColor: 'red',
 height: 25,
 width:25,
 backgroundColor: 'red'}} >
 </View>
 </View>
 </TouchableOpacity>
</Camera>
</View>

 );
}
export default CameraScreen