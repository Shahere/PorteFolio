
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
    Linking
} from 'react-native';
import style from '../styles/stylesMenu.js'

import Github from '../assets/svg/GitHub'
import Website from '../assets/svg/Website.js';
import CV from '../assets/svg/CV.js'
import Linkedin from '../assets/svg/Linkedin.js'

// #ffa86a
// comp #c1ff6a

const initialState = {
    github: "https://github.com/Shahere",
    website: "https://savinienbarbotaud.fr",
    linkedin: "https://www.linkedin.com/in/savinienbarbotaud/",
    CV: "https://savinienbarbotaud.fr/document/CV_Savinien_Barbotaud.pdf",
};

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() { }

    openurl(url) {
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    }

    render() {

        function title1(desc) {
            return (
                <View style={{ width: '100%' }}>
                    <Text style={style.title1}>{desc}</Text>
                </View>
            );
        }

        function social(ctx) {
            return (
                <View style={style.social}>
                    <TouchableOpacity
                        onPress={() => { ctx.openurl(ctx.state.github) }}
                        style={style.roundButton1}>
                        <View style={{ width: '100%', height: '100%' }}>
                            <Github />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { ctx.openurl(ctx.state.website) }}
                        style={style.roundButton1}>
                        <View style={{ width: '100%', height: '100%' }}>
                            <Website />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { ctx.openurl(ctx.state.CV) }}
                        style={style.roundButton1}>
                        <View style={{ width: '100%', height: '100%' }}>
                            <CV />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { ctx.openurl(ctx.state.linkedin) }}
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
                        <Text style={style.contentText}>Check my formation, projects and profesional experience to know more about me.</Text>
                    </View>
                </View>
            );
        }
        function introduce(ctx) {
            return (
                <View style={[style.centered, style.mainTitle]}>
                    <Text style={style.title1}>Hello, I'M A</Text>
                    <Text style={style.title1}>Developer</Text>
                </View>
            );
        }
        function image(ctx) {
            return (
                <Image
                    style={style.mainImage}
                    source={require('../assets/hand_computer.png')}
                    resizeMode='contain'
                />
            );
        }
        function pro(ctx) {
            return (
                <View style={style.presentation}>
                    <View style={style.introView}>
                        <Text style={style.aboutText}>Professionals skills</Text>
                    </View>
                    <View style={style.contentView}>
                        <Text style={style.contentText}>All my experiences in professional world !</Text>
                        <View style={style.centered}>
                            <Image
                                style={style.image70}
                                source={require('../assets/header_logo_apizee.png')}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={style.contentText}>My current work at Apizee consist to maintained and develop features for the Javascript library ApiRTC.</Text>
                        <Text style={style.contentText}>I'm proud to contributing to Apizee. I achieve some internals security features, translate ApiRTC to Flutter and React-Native</Text>
                        <Text style={style.contentText}>At Apizee, I have progressed in a lot of computer science area, Docker, Kubernetes, network and operating system management...</Text>


                        <View style={style.centered}>
                            <Image
                                style={style.image70}
                                source={require('../assets/dirisi.jpeg')}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={style.contentText}>For my 1st job in computer science, I was welcomed at the DIRISI's french army branch</Text>
                        <Text style={style.contentText}>My goal was to develop an Django (Python) web application, monitoring web traffic</Text>

                        <View style={style.centered}>
                            <Image
                                style={style.image70}
                                source={require('../assets/LCC.png')}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={style.contentText}>My first job was at the Loguivy nautical club as sailing instructor</Text>
                        <Text style={style.contentText}>My role was to teach sailing to the youngest</Text>
                    </View>
                </View>
            );
        }
        function works() {
            return (
                <View style={style.presentation}>
                    <View style={style.introView}>
                        <Text style={style.aboutText}>Contact me</Text>
                    </View>
                    <View style={[style.centered, { marginTop: 50, marginBottom: 50 }]}>
                        <TouchableOpacity
                            onPress={() => { Linking.openURL('tel:0637582689'); }}
                            style={style.largeButton}>
                            <View>
                                <Text style={style.callme}>Call me !</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
        /*function phoneCall() {
            return (
                
            );
        }*/
        return (
            <ScrollView style={style.scrollView} contentContainerStyle={{}}>
                {introduce(this)}
                {image(this)}
                {social(this)}
                {presentation()}
                {pro(this)}
                {works()}
            </ScrollView>
        );
    }
}