import React, { Component } from 'react';

import {
   View,
   StyleSheet
} from 'react-native';


export default stylenav = StyleSheet.create({
    container: {
        backgroundColor: '#DDD',
        position: 'absolute',
        left: '7%',
        bottom: '2%',
        width: '86%',
        height: '9%',
        borderRadius: 35,
        elevation: 10,
        zIndex: 10,
        overflow :'visible',

        display: 'flex',
        flexDirection :'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    button: {
        elevation: 11,
        zIndex: 11,
    }, 
    svg: {
        height: '50%',
        aspectRatio: 1,
    }
});