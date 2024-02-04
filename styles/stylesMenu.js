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
   },
   main: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
   },
   title1: {
      color: '#000',
      paddingBottom: 0,
      fontSize: 20,
      fontWeight: '600',
   },
   scrollView: {
      backgroundColor: 'transparent', 
      marginTop: '20%'
   },
   mainTitle: {
      marginTop: '5%'
   },
   mainImage: {
      width:'100%',
      
   },
   social: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
   },
   roundButton1: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: '#ffa86a',
      marginLeft: 10,
      marginRight:10
    },

});