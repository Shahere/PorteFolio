
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
import style from '../styles/Sidebar'
import Cross from '../assets/svg/Cross';

const initialState = {

};

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() { }

    render() {

        function header() {
            return (
                <View style={style.main}>
                    <View style={style.insideHeader}>
                        <View style={style.round} />
                        <Text style={style.mainText}>Savinien</Text>
                        <TouchableOpacity
                            style={style.button}
                            onPress={() => { console.log("close") }}>
                            <View style={style.svg}>
                                <Cross />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }

        function content() {
            return (
                <View style={[style.main, {height: '100%'}]}>
                    <View style={[style.centered, {}]}>
                        <Text style={style.textBar}>fpekfpe</Text>
                        <View style={style.separation}></View>
                        <Text style={style.textBar}>fpekfpe</Text>
                        <View style={style.separation}></View>
                        <Text style={style.textBar}>fpekfpe</Text>
                        <View style={style.separation}></View>
                        <Text style={style.textBar}>fpekfpe</Text>
                    </View>
                </View>
            );
        }

        return (
            <View style={{ elevation: 100, zIndex: 100, width: '100%', height: '100%', backgroundColor: '#ffa86a' }}>
                {header()}
                {content()}
            </View>
        );
    }
}