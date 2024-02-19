import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

export default style= (isMenuOpen) => StyleSheet.create({
    main: {
        position: "absolute",
        top: 0,
        left: 0,
        width: '100%',
        height: '10%',
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        elevation: 1,
        zIndex: 1
    },
    insideHeader: {
        height: "100%",
        width: "90%",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 1,
        zIndex: 1
    },
    round: {
        width: '15%',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#ffa86a',
        marginLeft: 10,
        marginRight: 10
    },
    svg: {
        height: '50%',
        width: '100%',
        aspectRatio: 1,
        display: 'flex',
        justifyContent: 'space-around'
    },
    mainText: {
        color: '#ffa86a',
        fontSize: 30,
        fontWeight: '800',
    },


    button: {
        elevation: 50,
        zIndex: 50,
        backgroundColor: 'transparent'
    },
    menubar: {
        width: '100%',
        height: '10%',
        backgroundColor: 'black'
    },
    
});