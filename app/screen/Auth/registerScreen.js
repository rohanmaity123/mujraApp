//import liraries
import { Button, Icon } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, StatusBar, ScrollView } from 'react-native';
import { FloatingTitleTextInputField } from '../../component/CommonComponent/FloatingTextInput';
import { COLORS } from '../../constants/color';
import Navigation from '../../service/Navigation';

// create a component
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
          emailId: '',
          password: '',
          mobile:'',
          wrong : false,
          deviceToken : '',
          Address:'',
          City:'',
          Pin:''
        };
    }
    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={{uri:'https://wallpaperaccess.com/full/1767833.jpg'}}
            >
            <ScrollView sho>
                <StatusBar barStyle="light-content" backgroundColor="#000" />
                <View style={{backgroundColor:'#000000ab'}}>
                <Image
                  resizeMode="cover"
                  style={{width: 80, height: 80,alignSelf:'center',borderRadius:50,marginTop:20}}
                  source={require('../../Accets/Logo.png')}
                />
                  <Text style={{...styles.fPass,color:'#fff'}} >
                    REGISTER TO AS ATHLETE
                </Text>
                <View style={{width:'83%',alignSelf:'center',paddingTop:20}}>
              {
                this.state.wrong ? 
                <Text style={styles.wrongDetails}>Enter Valid Email. {"\n"}Please Try again.</Text>
                :null
              }
              
              <View style={{}}>
                <FloatingTitleTextInputField
                  title = {<Text> Email </Text>}
                  value = {this.state.emailId}
                  updateMasterState = {(val) => this.setState({emailId : val})}
                  keyboardType = 'email-address'
                />

                <FloatingTitleTextInputField
                  title = {<Text> Mobile Number</Text>}
                  value = {this.state.mobile}
                  updateMasterState = {(val) => this.setState({mobile : val})}
                  keyboardType = 'email-address'
                />
                <FloatingTitleTextInputField
                  title = 'Password'
                  value = {this.state.password}
                  updateMasterState = {(val) => this.setState({password : val})}
                  secureTextEntry = {true}
                  style = {{
                    marginTop: 15
                  }}
                />
                                <FloatingTitleTextInputField
                  title = {<Text> City</Text>}
                  value = {this.state.City}
                  updateMasterState = {(val) => this.setState({City : val})}
                //   keyboardType = 'email-address'
                />
                                <FloatingTitleTextInputField
                  title = {<Text> Zip Code</Text>}
                  value = {this.state.Pin}
                  updateMasterState = {(val) => this.setState({Pin : val})}
                //   keyboardType = 'email-address'
                />
                    <Button 
                    style={{
                        backgroundColor:'#ffffff88',
                        borderRadius:10,
                        justifyContent:'center',
                        width:'40%',
                        alignSelf:'center',
                        marginTop:10
                    }}
                    // onPress = {()=>Navigation.navigate('Location')}
                  >
                    <Text style={styles.btnText}>SIGNUP</Text>
                  </Button>
                  <Text style={{...styles.fPass,color:'lightgrey'}} 
                  onPress = {()=>Navigation.navigate('Login')}
                >  Continue with</Text>
                <View style={{width:'30%',flexDirection:'row',justifyContent:'space-between',alignSelf:'center',marginTop:20}}>
                    <Icon name="facebook-with-circle" type="Entypo" style={{color:COLORS.linkableText,fontSize:40}} />
                    <Icon name="google" type="AntDesign" style={{color:COLORS.linkableText,fontSize:40}} />
                </View>
              </View>
                <Text style={{...styles.fPass,color:'#fff'}} >
                    Already Have an account ?
                </Text>
                <Text style={styles.fPass} 
                  onPress = {()=>Navigation.navigate('Login')}
                >  Login Here</Text>
                </View>
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
    fPass : {
        fontFamily: 'AveriaSerifLibre-Bold',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.08,
        color: COLORS.buttonColor,
        marginTop:10,
        textAlign:'center'
      },
      fPassBold : {
        color:'#1d36ad',
        fontFamily: 'AveriaSerifLibre-Bold'
      },
      btnText : {
        fontFamily: 'AveriaSerifLibre-Bold',
        fontSize: 16,
        letterSpacing: 0.08,
        textAlign: "center",
        color: "#fff"
      },
      wrongDetails : {
        fontFamily: 'AveriaSerifLibre-Bold',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.08,
        color: "#dd493c"
      }
});

//make this component available to the app
export default Registration;
