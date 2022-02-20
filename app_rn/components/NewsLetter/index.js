import React, {useState} from "react";
import { ActivityIndicator, Text, StyleSheet, View, TextInput, TouchableOpacity,Platform, Image, RefreshControl, SafeAreaView, ScrollView } from "react-native";
import Title from "../assets/title";
import axios from 'axios';
import Toast from 'react-native-toast-message'
import logoBoth from '../../img/logoBoth.png'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const NewsLetter = () => {

  const [loading, setLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const [errEmail, setErrEmail] = useState('')
  const [errName, setErrName] = useState('')

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(1000).then(() => {
      setRefreshing(false)
      setErrEmail('')
      setErrName('')
      setEmail('')
      setName('')
    })
  }, []);

  let url_api = 'https://jsonplaceholder.typicode.com/todos/1'
  const regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-])/;
  const addUser = async() => {
    setLoading(true);
    setErrEmail('')
    setErrName('')

    let err = 0
    if(email === '') {
      setErrEmail('Champ vide')
      err = 1

    } else if(!email.match(regex)){
      setErrEmail('Email non valide')
      err = 1
    }

    if(name === '') {
      setErrName('Champ vide')
      err = 1
    }

    if(err != 0) {
      Toast.show({
        type: 'error',
        text1: 'Erreur formulaire',
      });
      setLoading(false);

  } else {
      await axios({
        method: 'POST',
        url:'https://nodejssendingmail.herokuapp.com/',
        data: 'mail='+email+'&name='+name,
      })

      await axios({
        method: 'GET',
        url: url_api,
        // data:{param1:'PARAMETRE API ICI'}
      })
      .then(() => {
        setEmail('')
        setName('')
        Toast.show({
          type: 'success',
          text1: 'Vous êtes maintenant inscrit',
        });
      })
      .catch((err) => {
        Toast.show({
          type: 'error',
          text1: 'Erreur formulaire ' + err,
        });
      })
    }
    setLoading(false);
  }
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.global}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        <Title texte="Subscription" />
          <Text style={styles.text}>Email</Text>
          <TextInput
            testID="emailInput"
            style={styles.input}
            onChangeText={(e) => setEmail(e)}
            value={email}
            placeholder="email"
            keyboardType="default"
          />
          <Text style={[styles.btnMargin, styles.err]}>{errEmail}</Text>
          <Text style={styles.text}>FirstName</Text>
          <TextInput
            testID="firstnameInput"
            style={styles.input}
            onChangeText={(e) => setName(e)}
            value={name}
            placeholder="firstname"
            keyboardType="default"
          />   
          <Text style={[styles.btnMargin, styles.err, styles.btnMarginTwo]}>{errName}</Text>

          <TouchableOpacity
              testID="subscribeBtn"
              style={styles.btn}
              onPress={addUser}
          >
            <Text style={styles.textBtn}>Subscribe</Text>
          </TouchableOpacity>
          <Image source={logoBoth} style={styles.logoBoth} />          
          <Toast />
          {loading && (<View style={styles.loading}>
              <ActivityIndicator size="large" color="black" />
            </View>)
          }
        </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({

  loading: {
    backgroundColor:'gray',
    width:vw(100),
    height:vh(100),
    display:'flex',
    justifyContent:'center',
    position:'absolute',
    opacity:0.8,
    top:-150,
    left:-20,
    zIndex:999999
  },

  none: {
    display:'none'
  },

  container: {
    flex: 1,
  },
    global: {
    margin:20,
    flex:1,
    justifyContent:'flex-start',
  },
  input: {
    marginTop:8,
    marginBottom:3,
    width: 100+'%',
    borderRadius: 10,
    paddingLeft:15,
    paddingTop:10,
    paddingBottom:10,
    borderWidth:2,
    borderColor:'gray',
    fontSize:18,
  },

  btn: {
    backgroundColor:'green',
    padding:10,
    width:100+'%',
    borderRadius: 5,
    marginBottom:5
  },

  textBtn: {
    color:'white',
    fontSize:20,
    textAlign:'center',
  },
  
  text: {
    fontSize:20,
    marginTop:10
  },

  logoBoth: {
    marginTop:50,
    marginLeft:100
  },
  
  btnMargin: {
    marginBottom:5,
    ...Platform.select({
      ios: {
        marginBottom:5,
      }
    })
  },

  btnMarginTwo: {
        marginBottom:25,
    ...Platform.select({
      ios: {
        marginBottom:35,
      }
    })
  },
  
  btnMarginTop: {
    marginTop:3
  },

  err: {
    fontSize:15,
    color:'red',
    height:18,
    ...Platform.select({
      ios: {
        height:18
      }
    })
  },
})
  
export default NewsLetter