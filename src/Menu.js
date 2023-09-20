
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    StatusBar,
    Platform,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import style from '../styles/stylesMenu.js'
import navstyle from '../styles/navigationBar.js'

import Home from '../assets/svg/Home.js';

const initialState = {

};

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() { }

    render() {

        return (
            <View style={style.main}>
                <Text>Menu</Text>
            </View>
        );
    }
}