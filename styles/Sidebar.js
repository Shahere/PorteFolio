import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

export default style = StyleSheet.create({
    centered: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
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
        elevation: -1,
        zIndex: -1
    },
    round: {
        width: '15%',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#FFF',
        marginLeft: 10,
        marginRight: 10
    },
    button: {
        backgroundColor: 'transparent'
    },
    svg: {
        height: '50%',
        width: '100%',
        aspectRatio: 1, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainText: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: '800',
    },

    textBar: {
        fontSize: 45, 
        margin: 10, 
        color: '#FFF'
    },
    separation: {
        width: '60%', 
        height:'0.5%', 
        backgroundColor: '#FFF'
    },
    menubar: {
        width: '100%',
        height: '10%',
        backgroundColor: 'black', 
        position: 'absolute'
    },
});