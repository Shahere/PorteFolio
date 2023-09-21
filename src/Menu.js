
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
} from 'react-native';
import style from '../styles/stylesMenu.js'

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
                <View>
                    <Text style={style.title1}>{desc}</Text>
                </View>
            );
        }

        function portrait() {
            return (
                <View style={style.centered}>
                    <View style={style.photoContainer}>
                        <View style={style.photo}>

                        </View>
                        <View style={style.centered}>
                            <Text style={style.photoText}>Photo datant de 2023</Text>
                        </View>
                    </View>
                </View>
            );
        }

        return (
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1}}>
                    <View style={style.topView}>
                        <Text style={style.mainText}>MENU</Text>
                    </View>
                    {title1("Portrait")}
                    {portrait()}
                    {title1("Desption")}
                    {portrait()}
                </ScrollView>
            </View>
        );
    }
}