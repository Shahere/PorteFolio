
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
import MenuIcon from '../assets/svg/MenuIcon';

const initialState = {

};

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() { }

    render() {

        function header(ctx) {
            return (
              <View style={style.main} >
                <View style={style.insideHeader} >
                  <View style={style.round} />
                  <Text style={style.mainText} >Savinien</Text>
                  <TouchableOpacity
                    style={style.button}
                    onPress={() => { ctx.props.closeElement(false) }}>
                    <View style={[style.svg]}>
                      <View style={[style.menubar, {transform: [{rotateZ: '45deg'}]}]}></View>
                      <View style={[style.menubar, {transform: [{rotateZ: '-45deg'}]}]}></View>
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
                        <Text style={style.textBar}>Home</Text>
                        <View style={style.separation}></View>
                        <Text style={style.textBar}>Who am I ?</Text>
                        <View style={style.separation}></View>
                        <Text style={style.textBar}>Where I work ?</Text>
                        <View style={style.separation}></View>
                        <Text style={style.textBar}>Call me</Text>
                    </View>
                </View>
            );
        }

        return (
            <View style={{ elevation: 100, zIndex: 100, width: '100%', height: '100%', backgroundColor: '#ffa86a' }}>
                {content()}
                {header(this)}
            </View>
        );
    }
}