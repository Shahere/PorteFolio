
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    StatusBar,
    Platform,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import styleHeaderr from '../styles/header.js'

const styleHeader = styleHeaderr(false)

import MenuIcon from '../assets/svg/MenuIcon';

import Hamburger from 'react-native-animated-hamburger';


const initialState = {

};

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() { }

    render() {

        return (
            <View style={styleHeader.main}>
                <View style={styleHeader.insideHeader}>
                    <View style={styleHeader.round} />
                    <Text style={styleHeader.mainText}>Savinien</Text>
                    <TouchableOpacity
                        style={styleHeader.button}
                        onPress={() => { this.props.openElement(true); }}>
                        <View style={[styleHeader.svg]}>
                            {/*<View style={[styleHeader.menubar, styleHeader.menuBar1]}></View>
                            <View style={[styleHeader.menubar, styleHeader.menuBar2]}></View>
                            <View style={[styleHeader.menubar, styleHeader.menuBar3]}></View>*/}
                            <Hamburger type="cross" active={false}>

                            </Hamburger>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}