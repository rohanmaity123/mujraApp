import React, { Component, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import BtRoundSvg from './btRoundSvg';
import { Icon } from 'native-base';
import * as RootNavigation from '@config/Navigation/RootNavigation';

const { height, width } = Dimensions.get('window');
const tabArr = [
    {
        name: 'home',
        icon: <Icon name="home" type="AntDesign" />,
        navigation: 'Home'
    },
    {
        name: 'details',
        icon: <Icon name="search1" type="AntDesign" />,
        navigation: 'ListDays'
    },
    {
        name: 'test',
        icon: <Icon name="user" type="AntDesign" />,
        navigation: 'Profile'
    },
    // {
    //     name: 'test',
    //     icon: <Icon name="mail" type="AntDesign" />,
    //     navigation: 'Home'
    // },
    // {
    //     name: 'test',
    //     icon: <Icon name="sharealt" type="AntDesign" />,
    //     navigation: 'Home'
    // }
]
const tabWidth = width / tabArr.length;

export default class ButtomTabNavigtor extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabIndex : 0
        }
    }

    componentDidMount = () => {
        if(RootNavigation.navigationRef.current != null){
            this.getRouteName();
        }
    }

    getRouteName = () => {
        const navigationState = RootNavigation.navigationRef.current.getRootState();
        const navigationIndex = navigationState.index;
        const routName = navigationState.routes[navigationIndex].name
        
        let tabIndex = tabArr.findIndex(val => val.navigation == routName);
        this.setState({
            tabIndex : tabIndex
        })

    }

    render(){
        return (
            <>
                <View style={{ position: 'absolute', bottom: 0, height: 85, width: width, flexDirection: 'row' }}>
                    {
                        tabArr.map((item, index) => {
                            return (
                                <View style={{ width: tabWidth, height: 85, flexDirection: 'row' }} key={index}>
                                    {
                                        this.state.tabIndex == index ?
                                            <>
                                                <View style={{ height: 55.2, width: (tabWidth - 72) / 2, alignSelf: 'flex-end', backgroundColor: '#fff' }}></View>
                                                <BtRoundSvg />
                                                <View style={{ height: 55.2, width: (tabWidth - 72) / 2, alignSelf: 'flex-end', backgroundColor: '#fff' }}></View>
                                            </>
                                            :
                                            <View style={{ backgroundColor: '#fff', height: 55.2, alignSelf: 'flex-end', width: tabWidth }}>

                                            </View>
                                    }
                                </View>
                            )
                        })
                    }
                </View>
                <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0 }}>
                    {
                        tabArr.map((item, index) => {
                            return (
                                <>
                                    {
                                        this.state.tabIndex == index ?
                                        <View
                                            style={{
                                                height: 75,
                                                width: tabWidth,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                paddingRight: 1.5,
                                                paddingTop: 6
                                            }}
                                        >
                                            {item.icon}
                                        </View>
                                        :
                                        <View
                                            style={{
                                                height: 85,
                                                width: tabWidth,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                paddingTop: 25
                                            }}
                                            onTouchEnd={() => {
                                                RootNavigation.navigate(item.navigation)
                                            }}
                                        >
                                            {item.icon}
                                        </View>
                                    }
                                </>
                            )
                        })
                    }
                </View>
            </>
        );
    }
}
