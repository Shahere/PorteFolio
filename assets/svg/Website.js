import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class Website extends React.Component {
    render() {

        return (
            <View style={{ width: '100%', height: '100%' }}>
                <Svg width="100%" height="100%" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none">
                    <Path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6" />
                    <Path d="M37.86,51.1A47,47,0,0,1,32,56.7" />
                    <Path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85" />
                    <Path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24" />
                    <Line x1="10.37" y1="19.9" x2="53.75" y2="19.9" />
                    <Line x1="32" y1="6.99" x2="32" y2="56.7" />
                    <Line x1="11.05" y1="45.48" x2="37.04" y2="45.48" />
                    <Line x1="7.14" y1="32.46" x2="56.86" y2="31.85" />
                    <Path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z" />
                </Svg>
            </View>
        );
    }
}