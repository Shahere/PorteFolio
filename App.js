import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  ScrollView,
  StatusBar
} from 'react-native';

import { useRef } from 'react';

import navstyle from './styles/navigationBar';

import HomeIcon from './assets/svg/Home';
import SheetIcon from './assets/svg/Sheet';
import ContactIcon from './assets/svg/Contact';
import ProjectIcon from './assets/svg/Project';
import MenuIcon from './assets/svg/MenuIcon.js';

import Menu from './src/Menu.js';
import CV from './src/CV.js';
import Project from './src/Project.js';
import Contact from './src/Contact.js';
import { useState } from 'react';
import stylesMenu from './styles/stylesMenu';
import Github from './assets/svg/GitHub.js';
import Sidebar from './src/Sidebar.js';
import Header from './src/Header.js';
import AnimatedBurger from './src/AnimatedBurger.js';

const page = {
  Menu: "menu",
  CV: "cv",
  Project: "project",
  Contact: "contact"
}

// #ffa86a

export default function App() {

  const [isOpen, setisOpen] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState('dark-content');

  const home = useRef(null);
  const ami = useRef(null);
  const work = useRef(null);
  const contact = useRef(null);
  const scrollViewRef = useRef(null)

  function content() {
    return (
      <View style={stylesMenu.main}>
        <Menu home={home} ami={ami} work={work} contact={contact} scrollViewRef={scrollViewRef}/>
      </View>
    );
  }

  function header() {
    return (
      <Header openElement={setisOpen} />
    );
  }

  function sidebar() {
    if (!isOpen) return;
    return (
      <Sidebar closeElement={setisOpen} home={home} ami={ami} work={work} contact={contact} scrollViewRef={scrollViewRef}/>
    );
  }

  return (
    <View style={stylesMenu.main}>
      <StatusBar
        animated={true}
        barStyle={statusBarStyle}
        hidden={false}
      />
      {header()}
      {content()}
      {sidebar()}
    </View>
  );

}