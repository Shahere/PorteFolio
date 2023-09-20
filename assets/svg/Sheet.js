
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

export default class Sheet extends React.Component {
    render() {

        return (
            <View style={{ width: '100%', height: '100%' }}>
                <Svg width="100%" height="100%" viewBox="-4 0 34 34">
                    <G fill="none">
                        <G>
                            <Path d="M1 1.993c0-.55.45-.993.995-.993h17.01c.55 0 1.34.275 1.776.625l3.44 2.75c.43.345.78 1.065.78 1.622v26.006c0 .55-.447.997-1 .997H2c-.552 0-1-.452-1-.993V1.993z" stroke="#474747"/>
                            <G fill="#575757">
                                <Path d="M6 12h14v1H6z" />
                                <Path d="M6 15h14v1H6z" />
                                <Path d="M6 18h14v1H6z" />
                                <Path d="M6 21h6v1H6z" />
                            </G>
                            <Path fill="#474747" d="M18 2h1v6h-1z" />
                            <Path fill="#474747" d="M18 7h6v1h-6z" />
                        </G>
                    </G>
                </Svg>
            </View>
        );
    }
}