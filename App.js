import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import navstyle from './styles/navigationBar';

import Home from './assets/svg/Home';
import Sheet from './assets/svg/Sheet';

import Menu from './src/Menu.js';
import CV from './src/CV.js';
import Project from './src/Project.js';
import Contact from './src/Contact.js';
import { useState } from 'react';

const page = {
	Menu: "menu",
	CV: "cv",
	Project: "project",
	Contact: "contact"
}

export default function App() {

  const [actualPage, setActualPage] = useState(page.Menu);

  function changePage(wantedPage) {
    setActualPage(wantedPage);
  }

  function navigationBar() {
    return (
      <View style={navstyle.container}>
        <TouchableOpacity style={navstyle.button} onPress={() => {changePage(page.Menu)}}>
          <View style={navstyle.svg}>
            <Home />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={navstyle.button} onPress={() => {changePage(page.CV)}}>
          <View style={navstyle.svg}>
            <Sheet />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={navstyle.button} onPress={() => {changePage(page.Project)}}>
          <View style={navstyle.svg}>
            <Home />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={navstyle.button} onPress={() => {changePage(page.Contact)}}>
          <View style={navstyle.svg}>
            <Home />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function showContent() {
    switch (actualPage) {
      case "menu":
        return(
          <Menu />
        );
        break;
      case "cv":
        return (
          <CV />
        );
        break;
      case "project":
        return (
          <Project />
        );
        break;
      case "contact":
        return (
          <Contact />
        );
        break;
      default:

        break;
    }
  }

  return (
    <SafeAreaView>
      <View style={{ width: '100%', height: '100%', }}>
        {showContent()}
        {navigationBar()}
      </View>
    </SafeAreaView>
  );

}