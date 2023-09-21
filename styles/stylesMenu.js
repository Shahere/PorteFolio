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
   topView: {
      //position: 'absolute',
      top: 0,
      left: 0,
   },
   mainText: {
      color: '#001c84',
      padding: 10,
      fontSize: 40,
      fontWeight: '600',
      marginLeft: 0,
   },

   title1: {
      color: '#000',
      padding: 10,
      paddingBottom: 0,
      fontSize: 20,
      fontWeight: '600',
      marginLeft: 20,
   },

   photoContainer: {
      backgroundColor: '#EEE',
      width: '90%',
      height: '85%'
   },
   photo: {
      backgroundColor: '#CCC',
      width: '100%',
      height: '95%'
   },
   photoText: {
      textAlign: 'center',
      fontStyle: 'italic'
   },
});