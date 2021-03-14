//import liraries
import { Button } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, StatusBar,Dimensions } from 'react-native';
import { COLORS } from '../../constants/color';
import Navigation from '../../service/Navigation';

const { width, height } = Dimensions.get('window')
// create a component
class Category extends Component {
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
        }}>
            <View style={{marginVertical:60}}>
            <Image
                  resizeMode="cover"
                  style={{width: 120, height: 80,}}
                  source={require('../../Accets/Logo.png')}
                />
                                <Text style={{
                                    fontFamily: 'AveriaSerifLibre-Italic',
                                    color:'#fff',
                                    letterSpacing:0.8,
                                    marginLeft:25
                                }} >
                   DRAFTYS
                </Text>
            </View>
                <Text style={styles.text} >
                   CHOOSE YOU CATEGORY
                </Text>
                <Button 
                    style={styles.button}
                    onPress={()=>Navigation.navigate('HomeScreen')}
                  >
                    <Text style={styles.btnText}>ATHLETE</Text>
                  </Button>
                  <Button 
                    style={styles.button}
                    onPress={()=>Navigation.navigate('HomeScreen')}
                  >
                    <Text style={styles.btnText}>COACH</Text>
                  </Button>
                  <Button 
                    style={styles.button}
                    onPress={()=>Navigation.navigate('HomeScreen')}
                  >
                    <Text style={styles.btnText}>SPECTATOR</Text>
                  </Button>
                  <Text style={{...styles.fPass,color:'#fff',marginTop:25}} >
                    Already Have an account ?
                </Text>
                <Text style={styles.fPass} 
                  onPress = {()=>Navigation.navigate('Login')}
                >  Login Here</Text>
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
        fontSize:15,
        marginVertical:20,
        textAlign:'center',
        fontFamily: 'AveriaSerifLibre-Bold',
        
    },
    fPass : {
        fontFamily: 'AveriaSerifLibre-Bold',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.08,
        color: COLORS.buttonColor,
        marginTop:10,
        textAlign:'center'
      },
    button:{
        backgroundColor:'#ffffff88',
        borderRadius:5,
        justifyContent:'center',
        width:'60%',
        alignSelf:'center',
        marginTop:20
    },
    btnText : {
        fontFamily: 'AveriaSerifLibre-Bold',
        fontSize: 16,
        letterSpacing: 0.08,
        textAlign: "center",
        color: "#fff"
      },
});

//make this component available to the app
export default Category;
