//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, StatusBar,Dimensions } from 'react-native';
import Navigation from '../../service/Navigation';

const { width, height } = Dimensions.get('window')
// create a component
class StartPage extends Component {
    render() {
        return (
        <ImageBackground
            style={styles.container}
            source={{uri:'https://wallpaperaccess.com/full/1767833.jpg'}}
        >
        <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar barStyle="light-content" backgroundColor="#000" />
            <View style={{
                height:height,
                width:width,
                backgroundColor:'#000000ab',
                justifyContent: 'center',
                alignItems: 'center',
        }}>
            <Image
                  resizeMode="cover"
                  style={{width: 300, height: 180,}}
                  source={require('../../Accets/Logo.png')}
                />
                <Text style={styles.text} >
                   DRAFTYS
                </Text>
                <Text style={styles.textTwo}
                    onPress={()=>Navigation.navigate('Category')}
                >
                   GET INSPIRED
                </Text>
            </View>
        </ScrollView>
        </ImageBackground>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text:{
        color:'#fff',
        fontSize:40,
        fontFamily: 'AveriaSerifLibre-Italic',
        
    },
    textTwo:{
        color:'#fff',
        fontSize:20,
        fontFamily: 'AveriaSerifLibre-Italic',
        paddingTop:100
    }
});

//make this component available to the app
export default StartPage;
