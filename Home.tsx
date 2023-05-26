import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flexDirection:'column',
      alignItems: 'center',
      padding:20
    },
    textContainer: {
        textAlign : 'center',
        paddingTop: 10
    },
    tinyLogo: {
      width: 100,
      height: 100,
      borderRadius: 100/2
    },
    title: {
     
    },
    subtitle: {
        paddingTop: 5,

    },
    content:{
        fontWeight: '300'
    }
  });

const Home = (props:any) => {
    return(
        <View style={styles.container}>
            <Image  style={styles.tinyLogo}             
                source={require('./images/profile-pic.png')}
            />
            <Text style={styles.title}>Welcome to profile of {props.username}</Text>
            <View style={styles.container}>
                <Text style={styles.content}>{introtext}</Text>
            </View>
        </View>
    );
}

const introtext = "Programming enthusiast, working with for dynamic languages like C#,Python,Java,JavaScript,Angular,React,Node.Js,SQL";

export default Home;
