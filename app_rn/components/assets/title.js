import React from "react";
import { Text, StyleSheet } from "react-native";

const Title = (props) => {
    return (
        <Text style={styles.title}>{props.texte}</Text>
    )
}


const styles = StyleSheet.create({
    title: {
        fontWeight:'bold',
        fontSize:25,  
        color:'black',
        textAlign:'center',
        padding:10,
    },
  })
  
export default Title