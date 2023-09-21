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

export default class HomeIcon extends React.Component {
    render() {

        return (
            <View style={{ width: '100%', height: '100%' }}>
                <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M20 8L14 2.74C13.45 2.24805 12.7379 1.97607 12 1.97607C11.262 1.97607 10.55 2.24805 9.99997 2.74L3.99997 8C3.68234 8.28407 3.42887 8.63256 3.25644 9.02224C3.08402 9.41193 2.99659 9.83388 2.99997 10.26V19C2.99997 19.7956 3.31604 20.5587 3.87865 21.1213C4.44126 21.6839 5.20432 22 5.99997 22H18C18.7956 22 19.5587 21.6839 20.1213 21.1213C20.6839 20.5587 21 19.7956 21 19V10.25C21.0019 9.82556 20.9138 9.40554 20.7414 9.01768C20.5691 8.62982 20.3163 8.28296 20 8V8ZM14 20H9.99997V15C9.99997 14.7348 10.1053 14.4804 10.2929 14.2929C10.4804 14.1054 10.7348 14 11 14H13C13.2652 14 13.5195 14.1054 13.7071 14.2929C13.8946 14.4804 14 14.7348 14 15V20ZM19 19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5195 19.8946 18.2652 20 18 20H16V15C16 14.2044 15.6839 13.4413 15.1213 12.8787C14.5587 12.3161 13.7956 12 13 12H11C10.2043 12 9.44126 12.3161 8.87865 12.8787C8.31604 13.4413 7.99997 14.2044 7.99997 15V20H5.99997C5.73476 20 5.4804 19.8946 5.29287 19.7071C5.10533 19.5196 4.99997 19.2652 4.99997 19V10.25C5.00015 10.108 5.03057 9.9677 5.08919 9.83838C5.14781 9.70906 5.2333 9.59371 5.33997 9.5L11.34 4.25C11.5225 4.08968 11.7571 4.00127 12 4.00127C12.2429 4.00127 12.4775 4.08968 12.66 4.25L18.66 9.5C18.7666 9.59371 18.8521 9.70906 18.9108 9.83838C18.9694 9.9677 18.9998 10.108 19 10.25V19Z" fill="black" />
                </Svg>
            </View>
        );
    }
}