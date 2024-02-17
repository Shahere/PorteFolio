import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';

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
const page = {
  Menu: "menu",
  CV: "cv",
  Project: "project",
  Contact: "contact"
}

// #ffa86a

export default function App() {

  const [isOpen, setisOpen] = useState(false);

  function content() {
    return (
      <View style={stylesMenu.main}>
        <Menu/>
      </View>
    );
  }

  function header() {
    return (<Header openElement={setisOpen}/>);
  }

  function sidebar() {
    if(!isOpen) return;
    return (
      <Sidebar closeElement={setisOpen}/>
    );
  }

  return (
    <View style={stylesMenu.main}>
      {header()}
      {content()}
      {/*navigationBar()*/}
      {sidebar()}
    </View>
  );

}