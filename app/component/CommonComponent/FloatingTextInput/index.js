import React, { Component } from 'react';
import { View, Animated, StyleSheet, TextInput, Text, Pressable } from 'react-native';
import { string, func, object, number, bool } from 'prop-types';
import { Icon,DatePicker } from 'native-base';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

export class FloatingTitleTextInputField extends Component {
  static propTypes = {
    value: string,
    updateMasterState: func,
    keyboardType: string,
    titleActiveSize: number, // to control size of title when field is active
    titleInActiveSize: number, // to control size of title when field is inactive
    titleActiveColor: string, // to control color of title when field is active
    titleInactiveColor: string, // to control color of title when field is active
    textInputStyles: object,
    otherTextInputProps: object,
    secureTextEntry : bool,
    style : object,
    type : string,
    blurResponse : bool,
    dateMode : string,
    maximumDate : object
  }

  
  static defaultProps = {
    keyboardType: 'default',
    titleActiveSize: 11.5,
    titleInActiveSize: 15,
    titleActiveColor: '#95969f',
    titleInactiveColor: '#95969f',
    textInputStyles: {}, 
    otherTextInputAttributes: {},
    secureTextEntry: false,
    style : {},
    type : 'TextInput',
    blurResponse : false,
    dateMode : 'date',
    maximumDate : new Date()
  }

  constructor(props) {
    super(props);
    const { value } = this.props;
    this.position = new Animated.Value(value ? 1 : 0);
    this.state = {
      isFieldActive: false,
      isVisible : false,
      dateVisiable : false,
      updated : false
    }
    // this._handleFocus();
  }

  componentDidMount = () => {
    
  }

  componentDidUpdate = () => {
    // console.log("value",this.props.value)
    if(this.props.value != '' && !this.state.updated){
      this._handleFocus();
      this.setState({
        updated : true
      })
    }
  }

  _handleFocus = () => {
    this.setState({ dateVisiable: true });
    if(this.props.blurResponse){
      this.props.onFocus();
    }
    if (!this.state.isFieldActive) {
      this.setState({ isFieldActive: true });
      Animated.timing(this.position, {
        toValue: 1,
        duration: 150,
        useNativeDriver:false
      }).start();
    }
  }

  _handleBlur = () => {
    if(this.props.blurResponse){
      this.props.onBlur();
    }
    if (this.state.isFieldActive && !this.props.value) {
      this.setState({ isFieldActive: false });
      Animated.timing(this.position, {
        toValue: 0,
        duration: 150,
        useNativeDriver:false
      }).start();
    }
  }

  onChange = (selectedDate) => {
    this.setState({ dateVisiable: false });
    const { updateMasterState } = this.props; 
    updateMasterState(selectedDate);
  }

  _onChangeText = (updatedValue) => {
    const { updateMasterState } = this.props; 
    updateMasterState(updatedValue);
  }

  _returnAnimatedTitleStyles = () => {
    const { isFieldActive } = this.state;
    const {
      titleActiveColor, titleInactiveColor, titleActiveSize, titleInActiveSize
    } = this.props;
  
    return {
      top: this.position.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 0],
      }),
      fontSize: isFieldActive ? titleActiveSize : titleInActiveSize,
      color: isFieldActive ? titleActiveColor : titleInactiveColor,
    }
  }

  render() {
    return (
      <View style = {[Styles.container,this.props.style]}>
        <Animated.Text
          style = {[Styles.titleStyles, this._returnAnimatedTitleStyles()]}
        >
          {this.props.title}
        </Animated.Text>

        <TextInput
          value = {this.props.value}
          style = {[Styles.textInput, this.props.textInputStyles]}
          underlineColorAndroid = 'transparent'
          onFocus = {this._handleFocus}
          onBlur = {this._handleBlur}
          onChangeText = {this.props.type == 'TextInput' ? this._onChangeText : null}
          keyboardType = {this.props.keyboardType}
          secureTextEntry = {this.props.secureTextEntry ? !this.state.isVisible : false}
          editable = {this.props.type == 'Date' ? false : true}
          // maxLength = {10}
          {...this.props.otherTextInputProps}
        />

        {/* {
          this.props.type == 'Date' && this.state.dateVisiable ?  */}
          <DateTimePickerModal
            isVisible = {this.props.type == 'Date' && this.state.dateVisiable}
            value={new Date(year -13, month, day)}
            minimumDate={new Date('1945', '08', '15')}
            maximumDate={this.props.maximumDate}
            mode={this.props.dateMode}
            display="default"
            onConfirm = {this.onChange}
            onCancel = {() => {this.setState({ dateVisiable: false })}}
          /> 
        {/* } */}
        

        {
            this.props.secureTextEntry ? 
            <View style={{position:'absolute',right:0,height:'100%',justifyContent:'center'}}>
                {
                    this.state.isVisible ? 
                    <Icon
                        name='ios-eye-off'
                        style={{color:'#95969f'}}
                        onPress={()=>this.setState({isVisible: false})}
                    /> 
                    :
                    <Icon
                        name='ios-eye'
                        style={{color:'#95969f'}}
                        onPress={()=>this.setState({isVisible: true})}
                    />
                }
                
            </View> : null
        }

        {
          this.props.type == 'Date' ? 
          <Pressable 
            style={{position:'absolute',right:0,height:'100%',justifyContent:'center'}}
            onPress = {() => this._handleFocus()}
          >
            <Icon
              name='md-calendar'
              style={{color:'#95969f'}}
            /> 
          </Pressable> : null
        }
        
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomColor:'#fff',
    borderBottomWidth: 0.5,
    height: 50,
    marginVertical: 4,
  },
  textInput: {
    fontSize: 15,
    marginTop: 5,
    fontFamily: 'AveriaSerifLibre-Light',
    color: '#fff',
  },
  titleStyles: {
    position: 'absolute',
    fontFamily: 'AveriaSerifLibre-Light',
    left: 1,
  }
})