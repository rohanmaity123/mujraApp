import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';

export default function BtRoundSvg () {
    return (
        <Svg height="85" width="72" >
            <Path
                d="M 0,30
                    Q 10,30 10,40 
                    A 10,10 0 1,0 60,40
                    Q 60,30 72,30
                    L 72,85
                    L 0,85
                    L 0,30"
                stroke="white" 
                fill="white" 
            />
            <Circle cx="35" cy="40" r="21" fill="white" stroke="#cacbcb"/>
        </Svg>
    );
}
