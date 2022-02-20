import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Button, TouchableOpacity }  from 'react-native'
import dinosaure from '../../img/dinosaureAvecFond.png';
import serpend from '../../img/serpendAvecFond.png';
import singe from '../../img/singeAvecFond.png';
import Title from "../assets/title";

const DATA = [
    {
        id: '1',
        title: 'Tyrex',
        img: dinosaure ,
    },
    {
        id: '2',
        title: 'Snake',
        img: serpend ,
        },
    {
        id: '3',
        title: 'Monkey',
        img: singe ,
      },
  ];
  
const Item = ({ title , img, navigation }) => (

    <TouchableOpacity onPress={() => navigation.navigate("Camera", {title:title})} >
        <View style={styles.item}>
            <Text style={styles.text}>{title}</Text>        
            <Image
                style={styles.image}
                source={img}
            />
        </View>
    </TouchableOpacity>
);

const ChoosePicture = ({navigation}) => {
    const RenderItem = ({ item }) => (
        <Item title={item.title} img={item.img} navigation={navigation} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <Title texte="Select your model" />
            <FlatList
                data={DATA}
                renderItem={RenderItem}
                keyExtractor={item => item.id}
                numColumns={1}
                style={styles.container}
            />
        </SafeAreaView>    
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      flex: 1,
      padding:10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      marginTop: 8,
      marginHorizontal: 6,
      shadowColor: "#000",
      shadowOffset: {
        width: 1,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
    image: {
      width: 100,
      height: 100
    },
    text: {
      color: 'black',
      fontWeight:'bold',
      fontSize:25,
      paddingBottom:10
    },
  })
  
export default ChoosePicture