
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
import styleHeaderr from '../styles/header'

const styleHeader = styleHeaderr(true)

import Cross from '../assets/svg/Cross';
import MenuIcon from '../assets/svg/MenuIcon';
import Header from './Header';

const initialState = {

};

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.home = this.props.home;
    this.ami = this.props.ami;
    this.work = this.props.work;
    this.contact = this.props.contact;
    this.scrollViewRef = this.props.scrollViewRef;
  }

  componentDidMount() { }

  scrollToTarget = (ref) => {
    this.props.closeElement(false) 
    if (ref.current && this.scrollViewRef.current) {
      ref.current.measureLayout(
        this.scrollViewRef.current,
        (x, y) => {
          this.scrollViewRef.current.scrollTo({ y, animated: true });
        },
        () => {
          console.error('Measure layout error');
        }
      );
    }
  };

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
                <View style={[style.menubar, { transform: [{ rotateZ: '45deg' }] }]}></View>
                <View style={[style.menubar, { transform: [{ rotateZ: '-45deg' }] }]}></View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

    function content(ctx) {
      return (
        <View style={[style.main, { height: '100%' }]}>
          <View style={[style.centered, {}]}>
            <Text onPress={() => {ctx.scrollToTarget(ctx.home)}} style={style.textBar}>Home</Text>
            <View style={style.separation}></View>
            <Text onPress={() => {ctx.scrollToTarget(ctx.ami)}} style={style.textBar}>Who am I ?</Text>
            <View style={style.separation}></View>
            <Text onPress={() => {ctx.scrollToTarget(ctx.work)}} style={style.textBar}>Where I work ?</Text>
            <View style={style.separation}></View>
            <Text onPress={() => {ctx.scrollToTarget(ctx.contact)}} style={style.textBar}>Call me</Text>
          </View>
        </View>
      );
    }

    return (
      <View style={{ elevation: 100, zIndex: 100, width: '100%', height: '100%', backgroundColor: '#ffa86a' }}>
        {content(this)}
        {/*header(this)*/}
        <Header openElement={this.props.openElement}/>
      </View>
    );
  }
}