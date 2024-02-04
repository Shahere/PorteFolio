
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    StatusBar,
    Platform,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';
import style from '../styles/stylesMenu.js'

import Github from '../assets/svg/GitHub'
import Website from '../assets/svg/Website.js';
import CV from '../assets/svg/CV.js'
import Linkedin from '../assets/svg/Linkedin.js'

// #ffa86a
// comp #c1ff6a

const initialState = {

};

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() { }

    render() {

        function title1(desc) {
            return (
                <View style={{ width: '100%' }}>
                    <Text style={style.title1}>{desc}</Text>
                </View>
            );
        }

        function social() {
            return (
                <View style={style.social}>
                    <TouchableOpacity
                        onPress={() => { console.log('feo') }}
                        style={style.roundButton1}>
                        <View style={{ width: '100%', height: '100%' }}>
                            <Github />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { console.log('feo') }}
                        style={style.roundButton1}>
                        <View style={{ width: '100%', height: '100%' }}>
                            <Website />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { console.log('feo') }}
                        style={style.roundButton1}>
                        <View style={{ width: '100%', height: '100%' }}>
                            <CV />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { console.log('feo') }}
                        style={style.roundButton1}>
                        <View style={{ width: '100%', height: '100%' }}>
                            <Linkedin />
                        </View>
                    </TouchableOpacity>
                </View>
            );
        }

        function presentation() {
            return (
                <View style={style.presentation}>
                    <View style={style.introView}>
                        <Text style={style.introduceText}>Let me introduce myself</Text>
                        <Text style={style.aboutText}>About Me</Text>
                    </View>
                    <View style={style.contentView}>
                        <Text style={style.contentText}>Hello ! My name is Savinien ! I have a strong passion for developpement and system administration.</Text>
                    </View>
                </View>
            );
        }

        return (
            <ScrollView style={style.scrollView} contentContainerStyle={{}}>
                <View style={[style.centered, style.mainTitle]}>
                    <Text style={style.title1}>Hello, I'M A</Text>
                    <Text style={style.title1}>Developer</Text>
                </View>
                <Image
                    style={style.mainImage}
                    source={require('../assets/hand_computer.png')}
                    resizeMode='contain'
                />
                {social()}
                {presentation()}
            </ScrollView>
        );
    }
}